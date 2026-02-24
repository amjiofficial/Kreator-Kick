"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll(".feat-card")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    const success = document.getElementById(id + "-success");
    form.style.display = "none";
    if (success) success.style.display = "block";
  };

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          Kreator<span>Kick</span>
        </div>
        <div className="nav-pill">Coming Soon</div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>
        <div className="hero-orb orb3"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">For Content Creators</p>

          <h1 className="hero-title">
            Create More.
            <span className="line2">Hustle Less.</span>
          </h1>

          <p className="hero-sub">
            KreatorKick removes the{" "}
            <strong>heavy lifting of publishing</strong> so you can focus on
            what you actually love — creating. Then we connect you to the
            marketers who need exactly what you make.
          </p>

          <div className="hero-form-wrap">
            <form
              className="hero-form"
              onSubmit={(e) => handleSubmit(e, "hero")}
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
              />
              <button type="submit">Join Waitlist →</button>
            </form>

            <p className="hero-note">
              Free early access · No credit card required
            </p>

            <p className="success-msg" id="hero-success">
              🎉 You&apos;re in! We&apos;ll reach out soon.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stat">
          <div className="stat-num">10x</div>
          <div className="stat-label">Faster publishing</div>
        </div>
        <div className="stat">
          <div className="stat-num">0</div>
          <div className="stat-label">Technical skills needed</div>
        </div>
        <div className="stat">
          <div className="stat-num">∞</div>
          <div className="stat-label">Marketer connections</div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="features">
        <p className="features-label">Built for real creators</p>

        <div className="features-grid">
          <div className="feat-card">
            <div className="feat-icon">⚡</div>
            <h3 className="feat-title">
              Publish in minutes, not hours
            </h3>
            <p className="feat-text">
              From idea to live content without the technical headaches.
              KreatorKick handles scheduling, formatting, and
              cross-platform posting.
            </p>
          </div>

          <div className="feat-card">
            <div className="feat-icon">🤝</div>
            <h3 className="feat-title">
              Connect with the right marketers
            </h3>
            <p className="feat-text">
              Stop cold outreach. Marketers come to you.
            </p>
          </div>

          <div className="feat-card">
            <div className="feat-icon">📊</div>
            <h3 className="feat-title">
              Know what&apos;s actually working
            </h3>
            <p className="feat-text">
              Unified analytics across every platform in one dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
                  <section className="faq">
                    <p className="faq-label">Got questions?</p>

                    <div className="faq-item">
                      <p className="faq-q">What exactly does KreatorKick do?</p>
                      <p className="faq-a">
                        KreatorKick is a creator platform that handles the publishing workflow (scheduling, formatting, distribution) and connects you with marketers and brands based on your actual audience.
                      </p>
                    </div>

                    <div className="faq-item">
                      <p className="faq-q">How is this different from Buffer or Hootsuite?</p>
                      <p className="faq-a">
                        Those tools are scheduling tools. KreatorKick is a creator growth platform. Scheduling is just the start &mdash; we also handle the brand connection side that no other tool tackles, turning your audience into real monetization opportunities.
                      </p>
                    </div>

                    <div className="faq-item">
                      <p className="faq-q">What platforms does KreatorKick support?</p>
                      <p className="faq-a">
                        We&apos;re launching with Instagram, TikTok, YouTube, and LinkedIn. Twitter/X and Facebook follow shortly after. You asked &mdash; we built it.
                      </p>
                    </div>

                    <div className="faq-item">
                      <p className="faq-q">Do I need a big audience to join?</p>
                      <p className="faq-a">
                        Not at all. We believe in the micro-creator economy. Marketers increasingly want niche, engaged audiences over mass followings. A 5,000-subscriber channel with the right audience is genuinely valuable here.
                      </p>
                    </div>

                    <div className="faq-item">
                      <p className="faq-q">When does KreatorKick launch and how do I get in early?</p>
                      <p className="faq-a">
                        We&apos;re opening early access in waves. Join the waitlist above and you&apos;ll be first. Early members get free access to premium features for the first 3 months after launch.
                      </p>
                    </div>
                  </section>

      {/* BOTTOM CTA */}
      <section className="bottom-cta">
        <div className="cta-orb"></div>

        <div className="bottom-cta-content">
          <h2 className="bottom-cta-title">
            Your content deserves
            <br />
            <span>a real platform.</span>
          </h2>

          <p className="bottom-cta-sub">
            Join thousands of creators on the waitlist.
          </p>

          <form
            className="bottom-form"
            onSubmit={(e) => handleSubmit(e, "bottom")}
          >
            <input type="email" placeholder="your@email.com" required />
            <button type="submit">Get Early Access</button>
          </form>

          <p className="success-msg" id="bottom-success">
            🎉 You&apos;re in! We&apos;ll reach out soon.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          Kreator<span>Kick</span>
        </div>

        <ul className="footer-links">
          <li><a href="#">TikTok</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <p className="footer-copy">
          © 2026 KreatorKick. All rights reserved.
        </p>
      </footer>
    </>
  );
}