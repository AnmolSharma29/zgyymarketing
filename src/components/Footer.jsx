import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer__top">
          <h2 className="footer__big-text">
            Let's Make Your Brand <span className="footer__big-text-accent">Unmissable.</span>
          </h2>
        </div>

        <div className="footer__main">
          {/* Logo side */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              {/* <div className="footer__logo-mark">Z</div> */}
              <img src="https://github.com/AnmolSharma29/zgyymarketing/blob/main/src/assets/Zgyy-Marketing.jpg" alt="" className="footer_logo"/>
              <span className="footer__logo-text">ZGYY MARKETING<span className="footer__logo-accent">.</span></span>
            </a>
            <p className="footer__tagline">
              Full-service digital marketing built for the modern era. We turn invisible brands into unmissable ones.
            </p>
            <div className="footer__services-tags">
              <span>SEO</span>
              <span>Web Design</span>
              <span>AI Content</span>
              <span>Reels</span>
            </div>
          </div>

          {/* Contact side */}
          <div className="footer__contact">
            <h4 className="footer__heading">Get In Touch</h4>

            <div className="footer__contact-list">
              <a href="mailto:hello@zgyymarketing.com" className="footer__contact-item">
                <div className="footer__contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className="footer__contact-label">Email Us</span>
                  <span className="footer__contact-value">contact@zgyymarketing.com</span>
                </div>
              </a>

              <a href="tel:+919650584479" className="footer__contact-item">
                <div className="footer__contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="footer__contact-label">Call Us</span>
                  <span className="footer__contact-value">+91 96505 84479</span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/zgyymarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-item footer__contact-item--instagram"
              >
                <div className="footer__contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <span className="footer__contact-label">Follow Us</span>
                  <span className="footer__contact-value">@zgyymarketing</span>
                </div>
              </a>
            </div>

            <a
              href="https://www.instagram.com/zgyymarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__instagram-cta"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Follow on Instagram
              <span className="footer__instagram-arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Zgyy Marketing. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
