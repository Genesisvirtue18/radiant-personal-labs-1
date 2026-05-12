export type FAQ = { q: string; a: string };
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorBio: string;
  body: { heading: string; content: string }[];
  faqs: FAQ[];
};

export const posts: BlogPost[] = [
  {
    slug: "personal-branding-for-founders",
    title: "Personal Branding for Founders: Why Investors Buy You Before They Buy Your Pitch",
    excerpt: "A field-tested framework for founders who want their image to do half the heavy lifting before they speak.",
    category: "Personal Branding",
    readTime: "9 min",
    date: "2026-04-22",
    author: "Apoorva Verma",
    authorBio: "Certified image consultant and personal branding strategist with 8+ years working with founders, executives and on-camera professionals across India.",
    body: [
      {
        heading: "The pitch deck people actually read",
        content:
          "Every founder I have worked with arrived believing the deck was the deck. The 14 slides, the TAM math, the problem-solution-traction arc. After eight years of sitting in green rooms, fundraising offsites and editorial photoshoots, I can tell you with absolute certainty: investors read your face, your fit, and your physical presence long before slide three. That is not vanity — that is biology. The brain forms a trust judgement in roughly 100 milliseconds, and unless your visual presence is congruent with the story you are about to tell, the rest is uphill. Personal branding for founders is not about looking expensive. It is about looking inevitable. The kind of person about whom investors think, three minutes in, of course they are building this.",
      },
      {
        heading: "What founder branding actually is (and isn't)",
        content:
          "Founder branding is not a logo on a hoodie. It is the deliberate design of how you show up across rooms — investor pitches, customer calls, podcasts, hiring conversations, conference stages — so that every touchpoint reinforces the same compact story. A founder brand has three layers. The narrative layer (the story you tell about why you, why now). The visual layer (wardrobe, grooming, posture, on-camera presence). The behavioural layer (how you handle disagreement, how you enter a room, how you end a meeting). When all three rhyme, you become memorable. When they contradict, you become forgettable — or worse, untrustworthy. Most founders over-invest in the first layer and ignore the other two. That is the gap I close.",
      },
      {
        heading: "The five-question audit I run with every founder",
        content:
          "Before I touch a wardrobe, I run a five-question audit. One: what is the single sentence you want a stranger to remember after meeting you? Two: which three adjectives must your physical presence communicate (calm, sharp, warm, etc.)? Three: who are the three people in your industry whose presence you respect, and why? Four: where do you currently feel under-dressed, and where do you feel over-performed? Five: if your investors saw your Instagram tomorrow without context, what would they assume about your judgement? The answers reveal the gap between intended brand and received brand. The work then becomes closing that gap with surgical edits — not a wardrobe overhaul.",
      },
      {
        heading: "Wardrobe as positioning",
        content:
          "Once the audit is done, we treat wardrobe as positioning, not fashion. A consumer founder pitching Series A in 2026 should not look identical to a deep-tech founder pitching the same round. Tactically, this means choosing a uniform — three or four interchangeable looks engineered around your colour palette, body geometry and the rooms you actually walk into. Founders who adopt a uniform report two things within thirty days: faster mornings, and noticeably warmer responses in pitch meetings. The neuroscience is simple. When the visual variable is removed, your audience has more cognitive bandwidth for your idea.",
      },
      {
        heading: "On-camera presence is now non-negotiable",
        content:
          "Half of every founder's brand is now built on camera — Zoom, podcasts, LinkedIn videos, YouTube interviews. And yet most founders treat lighting, framing and on-camera grooming as an afterthought. Three changes pay for themselves within a quarter: a daylight-balanced key light to your left or right, a camera lifted to eye level, and a grooming routine optimised for the image the lens flattens (matte skin, defined brows, neutral undershirt to ground the frame). I cover the full setup in my <a href='/services'>personal branding service</a>.",
      },
      {
        heading: "The compounding return on image",
        content:
          "Founders ask me whether this work is worth it pre-product-market-fit. My answer has not changed: the founders who invest in their image early raise faster, hire better and get warmer introductions. Image is the only asset on your cap table that compounds without dilution. Build it intentionally and it pays you for the next decade. Ignore it and you will keep losing rooms you cannot see yourself losing. If you are ready to begin, <a href='/contact'>book a discovery call</a> or read my piece on <a href='/blog/executive-presence-guide'>executive presence</a> next.",
      },
    ],
    faqs: [
      { q: "How long does it take to build a founder personal brand?", a: "The visual and wardrobe foundation takes 4–6 weeks. The narrative and on-camera layers take another 8–12 weeks of practice. A complete founder brand reaches maturity in roughly one quarter of consistent work." },
      { q: "Do I need to be raising to invest in personal branding?", a: "No. Founders who build their brand pre-raise tend to raise faster and on better terms. Branding work also pays off in hiring, partnerships and PR — all of which happen before, during and after fundraising." },
      { q: "Will I have to change my personality?", a: "Never. The work is to amplify what is already yours. We remove what dilutes you and sharpen what is uniquely you. Clients consistently say they feel more themselves after the engagement, not less." },
      { q: "How is this different from working with a stylist?", a: "A stylist gives you clothes. I give you a positioning system. Wardrobe is one of six layers we work on together, alongside narrative, on-camera presence, room behaviour, content cadence and reputation maintenance." },
      { q: "What does a typical engagement look like?", a: "Discovery call, brand audit, two strategy sessions, wardrobe edit and shopping ritual, on-camera coaching, and a 30-day follow-up review. Most founders finish in 8–10 weeks." },
    ],
  },
  {
    slug: "executive-presence-guide",
    title: "Executive Presence: The 7 Quiet Signals That Make People Promote You",
    excerpt: "Executive presence isn't loud. It's a precise pattern of small signals — and every one of them is teachable.",
    category: "Corporate",
    readTime: "8 min",
    date: "2026-03-14",
    author: "Apoorva Verma",
    authorBio: "Apoorva trains leadership teams across India on executive presence, business etiquette and image management. She has delivered programmes at 40+ organisations.",
    body: [
      {
        heading: "What executive presence actually is",
        content:
          "Executive presence is the most over-used phrase in corporate India and the least defined. After running over 200 hours of leadership programmes, I have arrived at a working definition: executive presence is the consistent ability to make the room feel safer, sharper and more decisive because you are in it. Notice what is missing — charisma, height, accent, ethnicity, gender. Presence is not a personality trait you are born with. It is a pattern of seven quiet signals you can learn, in any body, in any voice. Once you see the pattern, you cannot unsee it. Every leader you respect uses some configuration of the same seven moves.",
      },
      {
        heading: "Signal 1: The pause",
        content:
          "The single most under-rated executive habit is the deliberate pause before answering. Two beats. That is all. The pause communicates three things at once: I heard you, I am thinking, and I am not anxious about silence. Junior professionals fill silence to prove competence. Senior leaders use silence to demonstrate it. Practice this in low-stakes meetings first, then escalate. Within a quarter, you will notice colleagues addressing you differently — slower, more carefully, more respectfully.",
      },
      {
        heading: "Signal 2: Anchored posture",
        content:
          "Anchored posture is not military stiffness. It is the quiet confidence of a body that is not negotiating its right to be in the room. Feet planted, shoulders down, weight even, hands visible and still. Most professionals leak presence through their hands — fidgeting, clasping, pocketing. The fix is to give your hands a job: a pen, the edge of the table, a deliberate gesture. The body teaches the brain to feel calm, and the room reads calm as authority.",
      },
      {
        heading: "Signal 3: Wardrobe that ends the wardrobe conversation",
        content:
          "If anyone in the room is thinking about your outfit, you have lost the room. Executive wardrobe is engineered to disappear into authority. That means colour palettes that match your skin temperature, silhouettes that match your body geometry, and fabrics that hold their shape from 9am to 9pm. I cover this in detail in my <a href='/services'>image consulting service</a>. The shortcut: pick three core colours, two cuts, one accent, and rotate.",
      },
      {
        heading: "Signal 4: Voice with a floor",
        content:
          "A voice with a floor lands at the end of every sentence rather than rising into a question. Up-talk signals deference. A grounded sentence-end signals decision. Record yourself for one week of meetings and count the rises. The number will surprise you. The fix is breath — sentences land when you have enough air to finish them. Slow down, breathe deeper, let the sentence drop.",
      },
      {
        heading: "Signal 5: Generous eye contact",
        content:
          "Generous, not aggressive. Hold eye contact for the length of a single thought, then release. This signals that you are present and engaged without dominating. In group meetings, sweep the room every few sentences so every participant feels addressed. Leaders who do this are remembered as warm and authoritative — a combination most professionals never achieve.",
      },
      {
        heading: "Signal 6: Clean exits",
        content:
          "Clean exits — from sentences, from meetings, from conversations — are an executive superpower. End your sentences. End your meetings on time. End disagreements with a clear next step. Ambiguity is the enemy of presence. Every clean exit deposits credibility. Every messy exit withdraws it.",
      },
      {
        heading: "Signal 7: Generosity with credit",
        content:
          "The final signal is the most counterintuitive. Leaders with the strongest presence give credit publicly and absorb blame privately. This is not strategy — it is gravity. People orbit leaders who make them look good. If you adopt only one of these seven signals, adopt this one. It compounds faster than any of the others. To go deeper, read my piece on <a href='/blog/personal-branding-for-founders'>founder personal branding</a> or <a href='/contact'>book a corporate workshop</a> for your team.",
      },
    ],
    faqs: [
      { q: "Is executive presence different for women?", a: "The seven signals are universal, but women in Indian workplaces often face higher costs for breaking them and lower rewards for performing them. The work is the same — the calibration is sharper. We address this directly in 1:1 coaching." },
      { q: "Can introverts have executive presence?", a: "Many of the most present leaders I have worked with are introverts. Presence is not extroversion. The pause, the anchored posture, and the clean exits are introvert-native moves." },
      { q: "How quickly can I see results?", a: "Most clients report colleagues responding differently within 2–3 weeks of practising signals 1, 2 and 4. Full integration takes about 90 days." },
      { q: "Do you offer executive presence training for teams?", a: "Yes. I deliver half-day, full-day and multi-week corporate programmes. See the <a href='/services'>services page</a> for formats and pricing." },
      { q: "Is this just about communication skills?", a: "Communication is one input. Image, posture, behaviour, room dynamics, and even meeting design are equally important. Executive presence is a system, not a skill." },
    ],
  },
  {
    slug: "color-analysis-guide-2026",
    title: "Color Analysis Demystified: How to Find the 12 Colours That Make You Look Powerful",
    excerpt: "A practical guide to discovering your seasonal palette — and why the wrong colours quietly age you a decade.",
    category: "Image Consulting",
    readTime: "10 min",
    date: "2026-02-08",
    author: "Apoorva Verma",
    authorBio: "Apoorva is a certified colour analyst working in the 12-season system. She has personally analysed over 500 clients across skin tones common in India.",
    body: [
      {
        heading: "Why colour is the cheapest upgrade you will ever make",
        content:
          "Of every tool in image consulting, colour analysis delivers the highest return for the lowest cost. There is no shopping required — only smarter shopping going forward. The right colour next to your face brightens your eyes, smooths your skin, sharpens your jawline and adds a quiet glow that no skincare product can replicate. The wrong colour does the opposite. It pulls shadows under your eyes, dulls your skin, and quietly ages you by five to ten years. Most adults dress in colours their mothers chose for them as teenagers. Once you see your true palette, you will never go back.",
      },
      {
        heading: "The science: undertone, value, chroma",
        content:
          "Modern colour analysis sits on three axes. Undertone (warm, neutral, cool) — whether your skin reads golden or blue. Value (light, medium, deep) — how dark your overall colouring is. Chroma (soft, bright) — whether your features look better next to muted or vivid colours. The combination of these three axes places you into one of twelve seasonal palettes. Indian skin tones span all twelve seasons, despite the persistent myth that we are all 'autumns'. I have personally analysed bright winters, soft summers, true springs and deep autumns across the same family.",
      },
      {
        heading: "Quick at-home tests (and why they often mislead)",
        content:
          "The vein test, the gold-vs-silver test, the white-paper test — these are useful starting points but unreliable in artificial lighting and on hybrid undertones. A trained colour analyst uses calibrated drapes in north-facing daylight, observes your face from a fixed distance, and tests pairs of fabrics until your skin produces the most even, glowing result. The difference between an at-home guess and a professional analysis is the difference between a hunch and a diagnosis. If you want the diagnosis, my <a href='/services'>image consulting package</a> includes a full 12-season analysis.",
      },
      {
        heading: "Your power 12",
        content:
          "Within your seasonal palette, twelve specific shades will become your power colours. Three neutrals, three accents, three statements, and three near-skin tones. Build your wardrobe around these twelve and your closet will start working as a system. Outfits will assemble themselves. Travel capsules will pack in 20 minutes. Your photographs will look consistent. Most importantly, every meeting will start with you looking five percent more rested than you did last week — and over a year, that is a significant compounding advantage.",
      },
      {
        heading: "Common mistakes in Indian wardrobes",
        content:
          "The most common mistake I see in Indian wardrobes is over-relying on black for power dressing. Pure black is technically only flattering on bright winters and a handful of deep winters. For everyone else, deep navy, espresso, charcoal or aubergine create the same authority without the ageing shadow black throws under the chin. The second mistake is loving a colour and forcing it into your wardrobe even when it is in someone else's palette. Loving a colour is not the same as wearing it well. The third mistake is shopping during evening lighting at malls — the lighting destroys your ability to evaluate undertone.",
      },
      {
        heading: "How to use this immediately",
        content:
          "Walk to a north-facing window today. Hold a pure white sheet of paper next to your face, then a pure cream one. Note which makes your skin look smoother and more even. That single observation tells you whether you lean cool or warm. From there, audit your most-photographed outfits and notice which made you look glowing versus tired. Patterns will emerge. For a complete palette and shopping ritual, <a href='/contact'>book a colour analysis</a> or read my <a href='/blog/executive-presence-guide'>executive presence guide</a> next.",
      },
    ],
    faqs: [
      { q: "How long does a professional colour analysis take?", a: "A full 12-season analysis takes 90 minutes in person or 2 hours over a calibrated video session. You leave with a printed palette card, fabric swatches and a personalised shopping guide." },
      { q: "Will my season change with age?", a: "Your underlying season rarely changes — undertone is genetic. Value and chroma can shift slightly as hair greys or skin tone evolves. A re-analysis every 7–10 years is enough for most people." },
      { q: "Do I have to throw away clothes that aren't in my palette?", a: "No. We re-style them with scarves, layering and accessories that bring your palette to your face. Only a small fraction of your wardrobe will be retired during the audit." },
      { q: "Can men benefit from colour analysis?", a: "Absolutely. Men's wardrobes are smaller, which means choosing the wrong neutrals has an even bigger impact. Many of my male clients see the sharpest results from this single intervention." },
      { q: "Is virtual colour analysis accurate?", a: "Yes, when done with proper calibration — daylight, neutral background, calibrated screen, and a trained eye. I deliver virtual analyses to clients across the world with the same accuracy as in-person sessions." },
    ],
  },
];
