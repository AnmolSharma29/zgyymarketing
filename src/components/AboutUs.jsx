import './AboutUs.css'

function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__image-grid">
            <div className="about__image about__image--main">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&auto=format&fit=crop&q=80"
                alt="Marketing team collaborating"
              />
            </div>
            <div className="about__image about__image--small">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&auto=format&fit=crop&q=80"
                alt="Creative content"
              />
            </div>
            <div className="about__badge">
              <div className="about__badge-num">8+</div>
              <div className="about__badge-text">YEARS OF<br />EXPERIENCE</div>
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__label">
            <span className="about__label-num">01</span>
            <span className="about__label-text">ABOUT US</span>
          </div>

          <h2 className="about__heading">
            We turn invisible brands into <span className="about__heading-accent">unmissable</span> ones.
          </h2>

          <div className="about__paragraphs">
            <p>
              We're a full-service digital marketing agency built for the modern era. From SEO that ranks you on Google's first page to websites that actually convert, AI-generated images and videos that elevate your brand, and Instagram content designed to grow and engage — we handle it all.
            </p>
            <p>
              No cookie-cutter packages. No vanity metrics. Just real strategy, real creativity, and real results — more traffic, more leads, more sales. Whether you're scaling up or starting fresh, we make your marketing work as hard as you do.
            </p>
          </div>

          <div className="about__features">
            <div className="about__feature">
              <div className="about__feature-icon">✓</div>
              <span>Strategy-first approach</span>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">✓</div>
              <span>AI-powered creativity</span>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">✓</div>
              <span>Measurable results</span>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">✓</div>
              <span>Transparent pricing</span>
            </div>
          </div>

          <a href="#contact" className="about__cta">
            Let's build something worth watching →
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
