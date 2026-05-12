import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
const KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm Apoorva Verma's concierge ✨ — ask me about services, pricing or how to book." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg: Msg = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    let acc = "";
    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
        body: JSON.stringify({ messages: next }),
      });
      if (!resp.ok || !resp.body) {
        const err = await resp.json().catch(() => ({ error: "Request failed" }));
        setMessages((m) => [...m, { role: "assistant", content: err.error || "Sorry, something went wrong." }]);
        setLoading(false);
        return;
      }
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let done = false;
      setMessages((m) => [...m, { role: "assistant", content: "" }]);

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const j = line.slice(6).trim();
          if (j === "[DONE]") { done = true; break; }
          try {
            const p = JSON.parse(j);
            const c = p.choices?.[0]?.delta?.content;
            if (c) {
              acc += c;
              setMessages((m) => m.map((msg, i) => i === m.length - 1 ? { ...msg, content: acc } : msg));
            }
          } catch { buf = line + "\n" + buf; break; }
        }
      }
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Connection issue — try WhatsApp at +91 93192 49292." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI chat"
        className="fixed bottom-24 right-6 z-50 glass-btn-gold h-14 w-14 rounded-full flex items-center justify-center shadow-2xl"
      >
        {open ? <X size={22}/> : <MessageSquare size={22}/>}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-44 right-6 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] glass-strong rounded-3xl flex flex-col overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-primary/20 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full glass-btn-gold flex items-center justify-center"><Sparkles size={16}/></div>
              <div>
                <div className="text-sm font-display">Apoorva Verma's Concierge</div>
                <div className="text-[10px] tracking-widest uppercase text-primary">AI-powered · Online</div>
              </div>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "glass-btn-gold" : "glass"}`}>
                    <div className="prose prose-sm prose-invert max-w-none [&>*]:my-1">
                      <ReactMarkdown>{m.content || (loading && i === messages.length - 1 ? "…" : "")}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-primary/20 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about services, pricing…"
                className="flex-1 bg-transparent border border-primary/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary"
              />
              <button onClick={send} disabled={loading} aria-label="Send" className="glass-btn-gold h-10 w-10 rounded-full flex items-center justify-center disabled:opacity-50">
                <Send size={16}/>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
