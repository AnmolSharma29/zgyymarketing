import './WhatWeDo.css'

const services = [
  {
    num: '01',
    title: 'SEO',
    tagline: 'Get found on Google.',
    description: 'Strategic keyword research, on-page optimization, and quality backlinks that push you to Page 1 — and keep you there.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&auto=format&fit=crop&q=80',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Website Design',
    tagline: 'Sites that sell.',
    description: 'Modern, fast, mobile-friendly websites built to turn visitors into customers. Beautiful design, conversion-focused structure.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=80',
    icon: '💻',
  },
  {
    num: '03',
    title: 'AI Image Creation',
    tagline: 'Studio-quality, instantly.',
    description: 'Generate stunning product shots, brand visuals, and lifestyle imagery in minutes — no photoshoot, no studio fees.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80',
    icon: '🎨',
  },
  {
    num: '04',
    title: 'AI Video Production',
    tagline: 'Cinematic, in seconds.',
    description: 'AI-powered videos for ads, explainers, and reels. Hollywood quality without the Hollywood budget or timeline.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80',
    icon: '🎬',
  },
  {
    num: '05',
    title: 'Instagram Posts',
    tagline: 'Scroll-stopping content.',
    description: 'Eye-catching, on-brand posts crafted to engage your audience, build authority, and grow your following organically.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop&q=80',
    icon: '📸',
  },
  {
    num: '06',
    title: 'Reels Creation',
    tagline: 'Reach. Engage. Convert.',
    description: 'High-performing reels with the right hooks, trends, and pacing — designed to maximize reach and drive real growth.',
    image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=600&auto=format&fit=crop&q=80',
    icon: '🎥',
  },
]

function WhatWeDo() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <div className="services__label">
            <span className="services__label-num">02</span>
            <span className="services__label-text">WHAT WE DO</span>
          </div>
          <h2 className="services__heading">
            Everything Your Brand <br />
            Needs To <span className="services__heading-accent">Win.</span>
          </h2>
          <p className="services__subheading">
            Six powerful services. One unstoppable agency. Pick what you need, or let us handle it all.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.num}>
              <div className="service-card__image-wrap">
                <img src={service.image} alt={service.title} className="service-card__image" />
                <div className="service-card__overlay">
                  <span className="service-card__icon">{service.icon}</span>
                </div>
              </div>
              <div className="service-card__body">
                <span className="service-card__num">{service.num}</span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__tagline">{service.tagline}</p>
                <p className="service-card__desc">{service.description}</p>
                <a href="#contact" className="service-card__link">
                  <span>Learn more</span>
                  <span className="service-card__arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="services__cta-banner">
          <div className="services__cta-content">
            <h3 className="services__cta-title">Ready to grow?</h3>
            <p className="services__cta-text">
              Let's talk about what your brand needs — and how we can deliver it.
            </p>
          </div>
          <a href="#contact" className="services__cta-btn">
            Get In Touch →
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
