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
                    <p className="faq-q">What is Kreator Kick and who is it for?</p>
                    <p className="faq-a">
                      Kreator Kick is a platform designed for content creators &mdash; YouTubers, TikTokers, podcasters, and bloggers &mdash; to focus on creating content while it handles publishing, scheduling, and connecting you to marketers.
                    </p>
                  </div>

                  <div className="faq-item">
                    <p className="faq-q">How is this different from Buffer, Hootsuite, or Later?</p>
                    <p className="faq-a">
                      Unlike traditional scheduling tools, Kreator Kick not only automates publishing but also connects creators directly with brands for potential deals.
                    </p>
                  </div>

                  <div className="faq-item">
                    <p className="faq-q">How does the marketer connection actually work? Will I really get brand deals?</p>
                    <p className="faq-a">
                      Our platform matches you with marketers actively looking for creators in your niche. The system surfaces relevant opportunities so brand deals come to you.
                    </p>
                  </div>

                  <div className="faq-item">
                    <p className="faq-q">What platforms does Kreator Kick support?</p>
                    <p className="faq-a">
                      You can publish to YouTube, TikTok, Instagram, blogs, and podcasts &mdash; all from one dashboard.
                    </p>
                  </div>

                  <div className="faq-item">
                    <p className="faq-q">When does it launch and how do I get early access?</p>
                    <p className="faq-a">
                      Sign up via the email form on our coming soon page to get early access before the public launch.
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