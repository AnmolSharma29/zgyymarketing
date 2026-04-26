import './Banner.css'

function Banner() {
  return (
    <section id="home" className="banner">
      <div className="banner__bg-shape"></div>
      <div className="banner__bg-shape banner__bg-shape--two"></div>

      <div className="container banner__inner">
        <div className="banner__content">
          <div className="banner__tag">
            <span className="banner__tag-dot"></span>
            DIGITAL MARKETING AGENCY
          </div>

          <h1 className="banner__heading">
            We Make<br />
            Brands<br />
            <span className="banner__heading-accent">Unmissable.</span>
          </h1>

          <p className="banner__subheading">
            From SEO that ranks, to AI that creates, to content that converts — we handle the strategy, the creativity, and the execution. So your brand finally gets the attention it deserves.
          </p>

          <div className="banner__cta">
            <a href="#contact" className="banner__btn banner__btn--primary">
              Start Growing →
            </a>
            <a href="#services" className="banner__btn banner__btn--secondary">
              Our Services
            </a>
          </div>

          <div className="banner__stats">
            <div className="banner__stat">
              <span className="banner__stat-num">200+</span>
              <span className="banner__stat-label">Brands Scaled</span>
            </div>
            <div className="banner__stat">
              <span className="banner__stat-num">5x</span>
              <span className="banner__stat-label">Avg. ROI</span>
            </div>
            <div className="banner__stat">
              <span className="banner__stat-num">24/7</span>
              <span className="banner__stat-label">Support</span>
            </div>
          </div>
        </div>

        <div className="banner__visual">
          <div className="banner__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80"
              alt="Marketing strategy session"
              className="banner__image"
            />
            <div className="banner__floating-card banner__floating-card--top">
              <div className="banner__floating-icon">📈</div>
              <div>
                <div className="banner__floating-title">Growth</div>
                <div className="banner__floating-meta">+312% this quarter</div>
              </div>
            </div>
            <div className="banner__floating-card banner__floating-card--bottom">
              <div className="banner__floating-icon">⚡</div>
              <div>
                <div className="banner__floating-title">AI-Powered</div>
                <div className="banner__floating-meta">Content in seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="banner__marquee">
        <div className="banner__marquee-track">
          {[...Array(2)].map((_, i) => (
            <div className="banner__marquee-content" key={i}>
              <span>SEO</span>
              <span className="banner__marquee-dot">●</span>
              <span>WEB DESIGN</span>
              <span className="banner__marquee-dot">●</span>
              <span>AI IMAGES</span>
              <span className="banner__marquee-dot">●</span>
              <span>AI VIDEOS</span>
              <span className="banner__marquee-dot">●</span>
              <span>INSTAGRAM POSTS</span>
              <span className="banner__marquee-dot">●</span>
              <span>REELS</span>
              <span className="banner__marquee-dot">●</span>
              <span>BRANDING</span>
              <span className="banner__marquee-dot">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Banner
