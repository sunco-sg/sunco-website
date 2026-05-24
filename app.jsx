/* Sunsets Collective — main React app */
const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FFBD59",
  "ink": "#F6E9CF",
  "bg": "#1c1c1c",
  "grain": 0.18,
  "displayFont": "Italiana",
  "showHeroPhoto": true
} /*EDITMODE-END*/;

// ---------- Brand wordmark ----------
function Wordmark({ size = 56, tagline = false }) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      <span className="wordmark" style={{ fontSize: size }}>
        sun.c<span className="o-orange">o</span>
      </span>
      {tagline &&
      <span className="tagline" style={{ fontSize: 9, color: 'var(--ink-dim)', marginTop: 8 }}>
          Sunsets Collective
        </span>
      }
    </div>);

}

// ---------- Nav ----------
function Nav({ goTo }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a className="nav-brand" href="#top" onClick={(e) => {e.preventDefault();goTo('top');}}>
        sun.c<span style={{ color: 'var(--orange)' }}>o</span>
      </a>
      <div className="nav-links">
        <a className="nav-link" href="#about" onClick={(e) => {e.preventDefault();goTo('about');}}>About</a>
        <a className="nav-link" href="#offerings" onClick={(e) => {e.preventDefault();goTo('offerings');}}>Offerings</a>
        <a className="nav-link" href="#pricing" onClick={(e) => {e.preventDefault();goTo('pricing');}}>Pricing</a>
        <button className="nav-cta" onClick={() => goTo('contact')}>Book the Band →</button>
      </div>
    </nav>);

}

// ---------- Hero ----------
function Hero({ goTo, showPhoto }) {
  return (
    <section className="hero hero-v2" data-screen-label="01 Hero" id="top">
      {showPhoto &&
      <div className="hero-bg-img-wrap" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.55 }}>
          <img src="assets/MatthewRachelAD-1463.jpg" alt="" className="hero-bg-img" />
        </div>
      }

      {/* Featured-in liquid-glass badge */}
      <div className="featured-badge-wrap">
        <div className="featured-badge">
          <div className="featured-badge-inner">
            <span className="featured-badge-dot">✦</span>
            <span className="featured-badge-label">The event band</span>
            <span className="featured-badge-name">people talk about</span>
          </div>
        </div>
      </div>

      {/* Central hero content with corner accents */}
      <div className="hero-content hero-content-v2">
        <span className="corner corner-tl"></span>
        <span className="corner corner-tr"></span>
        <span className="corner corner-bl"></span>
        <span className="corner corner-br"></span>

        {/* Massive brand mark — sun.co */}
        <div className="brand-stage">
          <div className="brand-meta brand-meta-l">
            <span>Sunsets</span>
            <span>Collective</span>
          </div>
          <div className="brand-mark">
            <span className="bm-letter">s</span>
            <span className="bm-letter">u</span>
            <span className="bm-letter">n</span>
            <span className="bm-dot">.</span>
            <span className="bm-letter">c</span>
            <span className="bm-letter bm-o">o</span>
          </div>
          <div className="brand-meta brand-meta-r" style={{ justifyContent: "center" }}>
            <span style={{ textAlign: "left" }}>   LIVE · 5-PIECE</span>
            <span>   EST. 2025 · SG</span>
          </div>
        </div>

        <div className="brand-divider">
          <span className="bd-line"></span>
          <span className="bd-star" style={{ color: "rgb(217, 164, 65)" }}>✦</span>
          <span className="bd-line"></span>
        </div>

        <h1 className="hero-title-v2">
          <span className="ht-line ht-light" style={{ fontSize: "30px", textAlign: "justify" }}>Make Your Night</span>
          <span className="ht-line ht-italic">unforgettable</span>
        </h1>

        <p className="hero-sub-v2">
          A five-piece of veteran musicians — pop, rock and R&B, tailored setlists, concert-grade sound, and the rare chance to have 
          <em style={{ fontSize: "22px" }}> your own song 
          </em>  written.
        </p>

        <div className="hero-cta-row-v2">
          <button className="cta-big cta-big-primary" onClick={() => goTo('contact')}>
            <span className="cta-big-label">Enquire Now</span>
            <span className="cta-big-arrow">→</span>
          </button>
          <a
            className="cta-big cta-big-whatsapp"
            href="https://wa.me/6590236453"
            target="_blank"
            rel="noopener noreferrer">
            
            <svg className="cta-wa-icon" viewBox="0 0 32 32" aria-hidden="true">
              <path
                fill="currentColor"
                d="M16.003 3C9.374 3 4 8.373 4 15c0 2.122.555 4.117 1.527 5.846L4 27l6.34-1.66A11.945 11.945 0 0 0 16.003 27C22.633 27 28 21.628 28 15S22.633 3 16.003 3zm5.93 16.43c-.252.71-1.464 1.362-2.04 1.447-.522.078-1.18.11-1.9-.119-.438-.139-1.002-.326-1.722-.638-3.028-1.31-5.005-4.366-5.156-4.569-.151-.203-1.226-1.632-1.226-3.111s.776-2.203 1.05-2.502c.275-.3.599-.376.798-.376.2 0 .399.002.572.011.184.009.43-.07.673.514.252.604.857 2.082.932 2.234.075.151.125.328.025.527-.1.2-.15.327-.299.503-.15.176-.317.394-.453.529-.151.151-.309.315-.133.617.176.302.785 1.298 1.685 2.1 1.158 1.034 2.135 1.354 2.437 1.505.302.151.479.126.656-.076.176-.202.755-.881.957-1.184.2-.302.402-.252.677-.151.275.1 1.749.826 2.05.976.302.151.504.227.578.353.075.126.075.732-.176 1.44z" />
              
            </svg>
            <span className="cta-big-label">WhatsApp Us</span>
            <span className="cta-wa-num">+65 9023 6453</span>
          </a>
        </div>
        <div className="hero-cta-sub">
          <button className="cta-link" onClick={() => goTo('offerings')}>
            <span>What We Do</span>
            <span className="cta-link-arrow">→</span>
          </button>
        </div>
      </div>

      <div className="hero-meta">
        <div className="hero-meta-left">
          <span><strong>EST. 2025</strong></span>
          <span>5-piece · Producer-led</span>
        </div>
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 0 }}>
          <div style={{ writingMode: 'vertical-rl', fontSize: 10, letterSpacing: '0.32em', color: 'var(--ink-faint)', textTransform: 'uppercase' }}>
            ↓ Scroll
          </div>
        </div>
        <div className="hero-meta-right">
          <span><strong>SG · 01°22'N</strong></span>
          <span>Pop · Rock · R&amp;B · DJ</span>
        </div>
      </div>
    </section>);
}

// ---------- Marquee ----------
function Marquee() {
  const items = [
  { text: 'Weddings', star: true },
  { text: 'Corporate', star: true },
  { text: 'Brand Activations', star: true },
  { text: 'Afterparties', star: true },
  { text: 'Private Events', star: true },
  { text: 'Custom Songs', star: true }];

  const Row = () =>
  <span className="marquee-item">
      {items.map((it, i) =>
    <React.Fragment key={i}>
          <span className="star">✦</span>
          <em>{it.text}</em>
        </React.Fragment>
    )}
    </span>;

  return (
    <div className="marquee">
      <div className="marquee-track">
        <Row /><Row />
      </div>
    </div>);

}

// ---------- About ----------
function About() {
  return (
    <section id="about" data-screen-label="02 About">
      <div className="wrap">
        <div className="section-label">02 — About Us</div>
        <div className="about-grid">
          <div>
            <h2 className="about-title reveal">
              Five musicians. <em>
Ten</em> years on stage.<br />One band.
            </h2>
            <div className="about-body reveal">
              <p>
                <strong>Sunsets Collective</strong> started in 2025, but the players didn't.
                Each member is a veteran of the Singapore live circuit — a decade-plus across rooms big
                and small, from intimate hotel ballrooms to outdoor festivals.
              </p>
              <p>
                We are <strong>producer-led</strong>, which means every set is arranged, not
                assembled — built around the room, the moment, and the people standing in it. Coupled
                with a sound rig that can fill any space you put us in.
              </p>
              <p>
                Music is the point. Everything else is logistics — and we'll handle that too.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-num">5<em>.</em></div>
                  <div className="stat-label">Piece Band</div>
                </div>
                <div className="stat">
                  <div className="stat-num"><em style={{ color: "rgb(246, 233, 207)" }}>20</em></div>
                  <div className="stat-label">Years In Live Sound</div>
                </div>
                <div className="stat">
                  <div className="stat-num">10<em></em></div>
                  <div className="stat-label">YEARS OF STAGE EXPERIENCE</div>
                </div>
                <div className="stat">
                  <div className="stat-num" style={{ color: "rgb(255, 189, 89)", fontSize: "60px" }}>∞</div>
                  <div className="stat-label">Setlists Tailored</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-photos reveal">
            <div className="about-photo tall">
              <img src="assets/MatthewRachelAD-1170.jpg" alt="Vocalist mid-set, smiling at the keys" />
              <span className="about-photo-cap">Live · Ballroom Set</span>
            </div>
            <div className="about-photo short">
              <img src="assets/MatthewRachelAD-1198.jpg" alt="The band on stage, full lineup" />
              <span className="about-photo-cap">The 5-Piece</span>
            </div>
            <div className="about-photo short">
              <img src="assets/MatthewRachelAfterParty-155.jpg" alt="DJ set at the afterparty" />
              <span className="about-photo-cap">Afterparty · DJ Set</span>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

// ---------- Offerings ----------
function Offerings() {
  const offers = [
  {
    n: '01',
    title: 'Pop, Rock & R&B',
    body: 'A 5-piece built for range. Tailored setlists, customised to the vibe — first dance to the dance floor.'
  },
  {
    n: '02',
    title: 'DJ for the After',
    body: 'When the band steps off, the DJ steps on. Seamless transition, one continuous evening.'
  },
  {
    n: '03',
    title: 'Custom Songs',
    body: 'A song written for your event. Best for weddings — but who said a corporate launch can\'t have its own anthem?'
  },
  {
    n: '04',
    title: 'Quality Sound',
    body: 'Twenty years of live-sound experience. Fuss-free coordination. We fill the room, talk to your venue and planner, and handle the wires.'
  }];

  return (
    <section id="offerings" className="offerings" data-screen-label="03 Offerings">
      <div className="wrap">
        <div className="section-label">03 — What We Do · TL;DR</div>
        <h2 className="offer-pitch reveal">
          Your most <em style={{ color: "rgb(246, 233, 207)" }}>dynamic sounding</em> 5-piece band, bringing the right mood and energy at every turn.
          Tailored to <em>your</em> night, from glasses full, till empty.
        </h2>
        <div className="offer-grid">
          {offers.map((o, i) =>
          <div key={i} className="offer-card reveal">
              <div className="offer-num">{o.n} / 04</div>
              <h3 className="offer-title">{o.title}</h3>
              <p className="offer-body">{o.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ---------- Pricing ----------
function Pricing({ goTo }) {
  const tiers = [
  {
    name: 'Just the Band',
    tag: 'The Core',
    amount: '1,500',
    from: true,
    list: ['5-piece live band', 'Tailored setlist', 'Bring your own sound', 'Planner liaison']
  },
  {
    name: <>Band <em>+</em> Sound</>,
    tag: 'Plug & Play',
    amount: '2,900',
    from: true,
    featured: false,
    list: ['5-piece live band', 'Tailored setlist', 'In-house sound rig', 'Tech runs the room', 'Planner liaison']
  },
  {
    name: <>Band <em>+</em> Sound <em>+</em> Custom Song</>,
    tag: 'The Signature',
    amount: '3,300',
    from: true,
    featured: true,
    list: ['Everything in Plug & Play', 'One song written for your event', 'Arranged & performed live', 'Lyrics shaped with you', 'A night they can\'t copy']
  }];

  const addons = [
  { name: <>DJ <em>Afterparty</em> Set</>, sub: 'Seamless handover when the band steps off' },
  { name: <>Studio <em>Recording</em> of Custom Song</>, sub: 'Mixed, mastered, yours to keep' },
  { name: <>Emcee <em>Services</em></>, sub: 'A voice for the night — runs the run-of-show' }];


  return (
    <section id="pricing" data-screen-label="04 Pricing">
      <div className="wrap">
        <div className="section-label">04 — PRICING</div>
        <div className="pricing-head reveal">
          <h2 className="pricing-title">
            Transparent <em>pricing.</em>
            <br />Honest <em>conversations.</em>
          </h2>
          <p className="pricing-disclaimer">
            We've all been on the other side of this — chasing quotes, wondering what's really included.
            So here's a public floor. Customisation is the norm; reach out for a proper quote.
          </p>
        </div>

        <div className="price-grid reveal">
          {tiers.map((t, i) =>
          <div key={i} className={`price-card ${t.featured ? 'featured' : ''}`}>
              <div className="price-tag">
                <span>{t.tag}</span>
                {t.featured && <span className="pop">★ Popular</span>}
              </div>
              <h3 className="price-name">{t.name}</h3>
              <div className="price-amount">
                {t.from && <span className="from-label">from</span>}
                <span className="cur">SGD</span>{t.amount}
              </div>
              <ul className="price-list">
                {t.list.map((li, j) => <li key={j}>{li}</li>)}
              </ul>
              <button className="btn btn-ghost" onClick={() => goTo('contact')} style={{ alignSelf: 'flex-start' }}>
                Enquire <span className="arrow">→</span>
              </button>
            </div>
          )}
        </div>

        <div className="addons reveal">
          {addons.map((a, i) =>
          <div key={i} className="addon">
              <div>
                <div className="addon-name">{a.name}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-faint)', marginTop: 4 }}>{a.sub}</div>
              </div>
              <div className="addon-price">On request</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ---------- Questionnaire / Contact ----------
const Q_STEPS = [
{
  key: 'vibe',
  label: 'Step 01 of 02',
  prompt: <>What kind of <em>event</em>?</>,
  options: ['Wedding', 'Corporate', 'Private / Birthday', 'Brand Activation', 'Something else'],
  multi: false
},
{
  key: 'details',
  label: 'Step 02 of 02',
  prompt: <>Where can we <em>reach you</em>?</>,
  sub: 'We\'ll reply within 24 hours.',
  form: true
}];


function Questionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const total = Q_STEPS.length;
  const current = Q_STEPS[step];

  const select = (key, val, multi) => {
    setAnswers((a) => {
      if (!multi) return { ...a, [key]: val };
      const arr = a[key] || [];
      if (arr.includes(val)) return { ...a, [key]: arr.filter((v) => v !== val) };
      return { ...a, [key]: [...arr, val] };
    });
  };

  const isSelected = (key, val) => {
    const v = answers[key];
    if (Array.isArray(v)) return v.includes(val);
    return v === val;
  };

  const canProceed = () => {
    if (current.form) {
      return answers.name && answers.email && answers.date;
    }
    const v = answers[current.key];
    if (Array.isArray(v)) return v.length > 0;
    return !!v;
  };

  const next = () => {
    if (step < total - 1) setStep(step + 1);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      const res = await fetch(form.action, {
        method: form.method || 'POST',
        headers: { Accept: 'application/json' },
        body: fd
      });
      if (!res.ok) {
        let msg = 'Something went wrong. Please try again or WhatsApp us directly.';
        try {
          const data = await res.json();
          if (data?.errors?.length) msg = data.errors.map((er) => er.message).join(' · ');
        } catch (_) {}
        throw new Error(msg);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  const back = () => step > 0 && setStep(step - 1);

  if (submitted) {
    return (
      <div className="questionnaire">
        <div className="q-header">
          <span>Booking Enquiry</span>
          <span>Received</span>
        </div>
        <div className="q-stage q-success">
          <div className="q-success-icon">✦</div>
          <h3 className="q-success-title">Thanks, <em>{answers.name?.split(' ')[0] || 'friend'}</em>.</h3>
          <p className="q-success-body">
            We've got your details and we're already thinking about the vibe.
            Expect a real human reply within 24 hours — usually sooner.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28 }}>
            <button className="btn btn-ghost" onClick={() => {setSubmitted(false);setStep(0);setAnswers({});}}>
              Start over
            </button>
            <a href="mailto:hello@sunsets.co" className="btn btn-primary">
              Email Us Directly →
            </a>
          </div>
        </div>
      </div>);

  }

  return (
    <form
      className="questionnaire"
      action="https://formspree.io/f/xlgvljbe"
      method="POST"
      onSubmit={onFormSubmit}>
      
      {/* Hidden meta fields carried across steps */}
      <input type="hidden" name="event_type" value={answers.vibe || ''} />
      <input
        type="hidden"
        name="_subject"
        value={`New enquiry — ${answers.vibe || 'Event'}${answers.name ? ' · ' + answers.name : ''}`} />
      
      <div className="q-header">
        <span>Booking Enquiry · Step {step + 1} of {total}</span>
        <div className="q-step-dots">
          {Q_STEPS.map((_, i) =>
          <span key={i} className={`q-dot ${i === step ? 'active' : i < step ? 'done' : ''}`}></span>
          )}
        </div>
      </div>

      <div className="q-stage">
        <div className="q-num">{current.label}</div>
        <h3 className="q-prompt">{current.prompt}</h3>
        {current.sub && <div className="q-multi-hint">{current.sub}</div>}

        {current.form ?
        <div className="form-grid">
            <div className="field">
              <label className="field-label">Your Name</label>
              <input
              name="name"
              value={answers.name || ''}
              onChange={(e) => setAnswers((a) => ({ ...a, name: e.target.value }))}
              placeholder="Alex Tan" />
            
            </div>
            <div className="field">
              <label className="field-label">Email</label>
              <input
              name="email"
              value={answers.email || ''}
              onChange={(e) => setAnswers((a) => ({ ...a, email: e.target.value }))}
              placeholder="alex@example.com"
              type="email"
              required />
            
            </div>
            <div className="field">
              <label className="field-label">Event Date</label>
              <input
              name="event_date"
              value={answers.date || ''}
              onChange={(e) => setAnswers((a) => ({ ...a, date: e.target.value }))}
              placeholder="DD / MM / YYYY" />
            
            </div>
            <div className="field">
              <label className="field-label">WhatsApp / Phone</label>
              <input
              name="phone"
              value={answers.phone || ''}
              onChange={(e) => setAnswers((a) => ({ ...a, phone: e.target.value }))}
              placeholder="+65 9023 6453" />
            
            </div>
            <div className="field full">
              <label className="field-label">Anything else we should know?</label>
              <textarea
              name="message"
              value={answers.notes || ''}
              onChange={(e) => setAnswers((a) => ({ ...a, notes: e.target.value }))}
              placeholder="A song that has to be played. A first dance. Or just say hi." />
            
            </div>
          </div> :

        <div className="q-options">
            {current.options.map((opt) =>
          <button
            type="button"
            key={opt}
            className={`q-option ${isSelected(current.key, opt) ? 'selected' : ''}`}
            onClick={() => select(current.key, opt, current.multi)}>
            
                <span className="check"></span>
                <span>{opt}</span>
              </button>
          )}
          </div>
        }
      </div>

      <div className="q-nav">
        <button type="button" className="q-back" onClick={back} disabled={step === 0 || submitting}>← Back</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {error && <span className="q-error">{error}</span>}
          <button
            type={step === total - 1 ? 'submit' : 'button'}
            className="q-next"
            onClick={step === total - 1 ? undefined : next}
            disabled={!canProceed() || submitting}>
            
            {submitting ?
            'Sending…' :
            step === total - 1 ?
            'Send Enquiry' :
            'Continue'}
            {!submitting && <span className="arrow">→</span>}
          </button>
        </div>
      </div>
    </form>);

}

function Contact() {
  return (
    <section id="contact" className="contact" data-screen-label="05 Contact">
      <div className="wrap">
        <div className="section-label">05 — Get in Touch</div>
        <div className="contact-head reveal">
          <h2 className="contact-title">
            Tell us about <em>your night.</em>
          </h2>
          <p className="contact-sub">
            Two quick steps. A real reply from a real person, within 24 hours.
          </p>
        </div>
        <div className="reveal">
          <Questionnaire />
        </div>
      </div>
    </section>);

}

// ---------- Footer ----------
function Footer({ goTo }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-brand-mark">
              sun.c<span style={{ color: 'var(--orange)' }}>o</span>
            </div>
            <div className="footer-brand-tag">Sunsets Collective · Live Band · Singapore</div>
          </div>
          <div className="footer-col">
            <h4>Site</h4>
            <ul>
              <li><a href="#about" onClick={(e) => {e.preventDefault();goTo('about');}}>About</a></li>
              <li><a href="#offerings" onClick={(e) => {e.preventDefault();goTo('offerings');}}>Offerings</a></li>
              <li><a href="#pricing" onClick={(e) => {e.preventDefault();goTo('pricing');}}>Pricing</a></li>
              <li><a href="#contact" onClick={(e) => {e.preventDefault();goTo('contact');}}>Get in Touch</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Elsewhere</h4>
            <ul>
              <li><a href="#">Instagram · @sunsets.collective</a></li>
              <li><a href="#">sunsets.collective@gmail.com</a></li>
              <li><a href="#">+65 9023 6453 / 9091 1286</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sunsets Collective</span>
          <span>Made in Singapore · ✦ ✦ ✦</span>
        </div>
      </div>
    </footer>);

}

// ---------- Ambient background video (always on, hue shifts per section) ----------
function AmbientVideo() {
  const videoRef = React.useRef(null);
  const overlayRef = React.useRef(null);
  const elRef = React.useRef(null);

  React.useEffect(() => {
    const STOPS = [
    { id: 'top',
      gA: { x: 50, y: 60, c: '255,189,89', a: 0.22, r: 55 },
      gB: { x: 20, y: 20, c: '255,140,66', a: 0.10, r: 60 },
      bg: 'rgba(28,28,28,0.50)',
      gray: 15, bri: 0.55, sat: 1.20, sep: 0.00 },
    { id: 'about',
      gA: { x: 30, y: 30, c: '217,110,51', a: 0.16, r: 60 },
      gB: { x: 80, y: 80, c: '180,80,40', a: 0.10, r: 65 },
      bg: 'rgba(22,22,22,0.74)',
      gray: 40, bri: 0.45, sat: 1.05, sep: 0.00 },
    { id: 'offerings',
      gA: { x: 70, y: 30, c: '255,189,89', a: 0.14, r: 60 },
      gB: { x: 30, y: 80, c: '220,140,60', a: 0.10, r: 65 },
      bg: 'rgba(20,18,14,0.80)',
      gray: 50, bri: 0.42, sat: 1.00, sep: 0.10 },
    { id: 'pricing',
      gA: { x: 50, y: 20, c: '242,170,80', a: 0.18, r: 60 },
      gB: { x: 50, y: 90, c: '180,90,40', a: 0.10, r: 65 },
      bg: 'rgba(24,22,18,0.76)',
      gray: 35, bri: 0.50, sat: 1.15, sep: 0.08 },
    { id: 'contact',
      gA: { x: 50, y: 50, c: '255,189,89', a: 0.12, r: 55 },
      gB: { x: 50, y: 50, c: '255,189,89', a: 0.00, r: 55 },
      bg: 'rgba(18,18,18,0.84)',
      gray: 60, bri: 0.38, sat: 0.90, sep: 0.00 }];


    const lerp = (a, b, t) => a + (b - a) * t;
    const lerpStops = (A, B, t) => ({
      gA: { x: lerp(A.gA.x, B.gA.x, t), y: lerp(A.gA.y, B.gA.y, t), c: t < 0.5 ? A.gA.c : B.gA.c,
        a: lerp(A.gA.a, B.gA.a, t), r: lerp(A.gA.r, B.gA.r, t) },
      gB: { x: lerp(A.gB.x, B.gB.x, t), y: lerp(A.gB.y, B.gB.y, t), c: t < 0.5 ? A.gB.c : B.gB.c,
        a: lerp(A.gB.a, B.gB.a, t), r: lerp(A.gB.r, B.gB.r, t) },
      bgA: lerp(parseFloat(A.bg.match(/[\d.]+\)$/)[0]), parseFloat(B.bg.match(/[\d.]+\)$/)[0]), t),
      bgRGB: t < 0.5 ? A.bg.match(/rgba\((\d+,\d+,\d+)/)[1] : B.bg.match(/rgba\((\d+,\d+,\d+)/)[1],
      gray: lerp(A.gray, B.gray, t), bri: lerp(A.bri, B.bri, t),
      sat: lerp(A.sat, B.sat, t), sep: lerp(A.sep, B.sep, t)
    });

    const apply = () => {
      const overlay = overlayRef.current;
      const el = elRef.current;
      if (!overlay || !el) return;
      const sections = STOPS.map((s) => document.getElementById(s.id)).filter(Boolean);
      if (sections.length < 2) return;
      const focus = window.scrollY + window.innerHeight * 0.45;
      let i = 0;
      for (let k = 0; k < sections.length - 1; k++) {
        if (focus >= sections[k].offsetTop) i = k;
      }
      const A = sections[i];
      const B = sections[Math.min(i + 1, sections.length - 1)];
      const span = Math.max(1, B.offsetTop - A.offsetTop);
      const t = Math.max(0, Math.min(1, (focus - A.offsetTop) / span));
      const SA = STOPS[i],SB = STOPS[Math.min(i + 1, STOPS.length - 1)];
      const s = lerpStops(SA, SB, t);
      overlay.style.background =
      `radial-gradient(ellipse at ${s.gA.x}% ${s.gA.y}%, rgba(${s.gA.c},${s.gA.a.toFixed(3)}), transparent ${s.gA.r}%),` +
      `radial-gradient(ellipse at ${s.gB.x}% ${s.gB.y}%, rgba(${s.gB.c},${s.gB.a.toFixed(3)}), transparent ${s.gB.r}%),` +
      `linear-gradient(180deg, rgba(${s.bgRGB},${(s.bgA * 0.92).toFixed(3)}) 0%, rgba(${s.bgRGB},${s.bgA.toFixed(3)}) 50%, rgba(${s.bgRGB},${(s.bgA * 1.08).toFixed(3)}) 100%)`;
      el.style.filter =
      `grayscale(${s.gray.toFixed(1)}%) contrast(1.06) brightness(${s.bri.toFixed(3)}) saturate(${s.sat.toFixed(3)}) sepia(${s.sep.toFixed(3)})`;
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {raf = 0;apply();});
    };
    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', apply);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', apply);
    };
  }, []);

  return (
    <div className="ambient-video">
      <video
        ref={(node) => {videoRef.current = node;elRef.current = node;}}
        className="ambient-video-el"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4">
      </video>
      <div ref={overlayRef} className="ambient-video-overlay"></div>
      <div className="ambient-video-vignette"></div>
      <div className="ambient-video-grain"></div>
    </div>);

}

// ---------- App ----------
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--orange', t.accent);
    root.style.setProperty('--ink', t.ink);
    root.style.setProperty('--bg', t.bg);
    root.style.setProperty('--bg-2', t.bg);
    root.style.setProperty('--serif', `"${t.displayFont}", "Cormorant Garamond", serif`);
    const grain = document.querySelector('.grain');
    if (grain) grain.style.opacity = t.grain;
  }, [t]);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="grain"></div>
      <div className="vignette"></div>
      <AmbientVideo />
      <Nav goTo={goTo} />
      <Hero goTo={goTo} showPhoto={t.showHeroPhoto} />
      <Marquee />
      <About />
      <Offerings />
      <Pricing goTo={goTo} />
      <Contact />
      <Footer goTo={goTo} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Brand">
          <TweakColor
            label="Accent (the 'O')"
            value={t.accent}
            onChange={(v) => setTweak('accent', v)}
            options={['#FFBD59', '#FF8C42', '#E94F37', '#D9A441', '#F2C94C']} />
          
          <TweakColor
            label="Ink"
            value={t.ink}
            onChange={(v) => setTweak('ink', v)}
            options={['#F6E9CF', '#F4F1E8', '#E8DCC4', '#FFFFFF']} />
          
          <TweakColor
            label="Background"
            value={t.bg}
            onChange={(v) => setTweak('bg', v)}
            options={['#1c1c1c', '#222222', '#0f0f0f', '#1a1812', '#231f1a']} />
          
        </TweakSection>
        <TweakSection title="Type">
          <TweakSelect
            label="Display Serif"
            value={t.displayFont}
            onChange={(v) => setTweak('displayFont', v)}
            options={['Italiana', 'Fraunces', 'Cormorant Garamond', 'Playfair Display', 'DM Serif Display']} />
          
        </TweakSection>
        <TweakSection title="Atmosphere">
          <TweakSlider
            label="Film Grain"
            value={t.grain}
            min={0}
            max={0.5}
            step={0.01}
            onChange={(v) => setTweak('grain', v)} />
          
          <TweakToggle
            label="Hero Background Photo"
            value={t.showHeroPhoto}
            onChange={(v) => setTweak('showHeroPhoto', v)} />
          
        </TweakSection>
      </TweaksPanel>
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);