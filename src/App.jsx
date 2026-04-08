export default function App() {
  const logoSrc = "/logo.png";

  const services = [
    "Kitchen demolition",
    "Bathroom demolition",
    "Basement gut-outs",
    "Flooring removal",
    "Drywall and wall removal",
    "Junk and debris removal",
  ];

  const steps = [
    {
      title: "Tell us about your project",
      text: "Send us a quick message with your address, the type of demolition you need, and photos if available.",
    },
    {
      title: "Get your quote",
      text: "We review the details and get back to you with a clear quote and next steps.",
    },
    {
      title: "We get it done",
      text: "We show up ready to work, protect the space, complete the demolition, and remove debris.",
    },
  ];

  const faqs = [
    {
      q: "What type of work do you do?",
      a: "We focus on residential interior demolition and junk removal for kitchens, bathrooms, basements, flooring, drywall, and renovation prep.",
    },
    {
      q: "Do you offer free quotes?",
      a: "Yes. Reach out with your project details and we will review everything with you before booking.",
    },
    {
      q: "Do you remove debris?",
      a: "Yes. We can remove junk and demolition debris so your space is clean and ready for the next phase.",
    },
  ];

  const styles = {
    page: {
      background: "#0b0b0b",
      color: "#fff",
      minHeight: "100vh",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    },
    header: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(11,11,11,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    },
    headerInner: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      flexWrap: "wrap",
    },
  logo: {
  height: "180px",
  width: "auto",
  objectFit: "contain",
},
    nav: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      alignItems: "center",
    },
    navLink: {
      color: "rgba(255,255,255,0.8)",
      textDecoration: "none",
      fontSize: "14px",
    },
    callBtn: {
      background: "#f4c542",
      color: "#111",
      textDecoration: "none",
      padding: "12px 18px",
      borderRadius: "14px",
      fontWeight: 700,
      display: "inline-block",
    },
    hero: {
      padding: "70px 0 50px",
      background:
        "radial-gradient(circle at top right, rgba(244,197,66,0.16), transparent 30%), radial-gradient(circle at bottom left, rgba(255,255,255,0.06), transparent 25%)",
    },
    heroGrid: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "36px",
      alignItems: "center",
    },
    badge: {
      display: "inline-block",
      fontSize: "14px",
      color: "#f4d67a",
      border: "1px solid rgba(244,197,66,0.28)",
      background: "rgba(244,197,66,0.08)",
      borderRadius: "999px",
      padding: "8px 14px",
      marginBottom: "18px",
    },
    heroLogo: {
      height: "140px",
      width: "auto",
      objectFit: "contain",
      marginBottom: "20px",
    },
    h1: {
      fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
      lineHeight: 1.05,
      margin: "0 0 20px",
      fontWeight: 900,
      maxWidth: "680px",
    },
    heroText: {
      fontSize: "18px",
      lineHeight: 1.8,
      color: "rgba(255,255,255,0.75)",
      maxWidth: "650px",
      marginBottom: "28px",
    },
    buttonRow: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap",
      marginBottom: "30px",
    },
    primaryBtn: {
      background: "#f4c542",
      color: "#111",
      textDecoration: "none",
      padding: "14px 22px",
      borderRadius: "16px",
      fontWeight: 700,
      display: "inline-block",
    },
    secondaryBtn: {
      border: "1px solid rgba(255,255,255,0.15)",
      color: "#fff",
      textDecoration: "none",
      padding: "14px 22px",
      borderRadius: "16px",
      fontWeight: 700,
      display: "inline-block",
      background: "transparent",
    },
    statGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: "14px",
      maxWidth: "520px",
    },
    statCard: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "18px",
      padding: "18px",
    },
    statValue: {
      color: "#f4c542",
      fontSize: "28px",
      fontWeight: 800,
      marginBottom: "6px",
    },
    statLabel: {
      color: "rgba(255,255,255,0.7)",
      fontSize: "14px",
    },
    rightGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "16px",
    },
    card: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "28px",
      padding: "24px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    },
    yellowCard: {
      background: "linear-gradient(180deg, #f4c542 0%, #eabf3d 100%)",
      color: "#111",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "28px",
      padding: "24px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    },
    section: {
      padding: "80px 0",
    },
    sectionMuted: {
      padding: "80px 0",
      background: "rgba(255,255,255,0.03)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    },
    sectionTitle: {
      fontSize: "14px",
      textTransform: "uppercase",
      letterSpacing: "0.25em",
      color: "#f4d67a",
      marginBottom: "10px",
    },
    sectionHeading: {
      fontSize: "clamp(2rem, 4vw, 2.8rem)",
      margin: "0 0 14px",
      fontWeight: 800,
    },
    sectionText: {
      color: "rgba(255,255,255,0.72)",
      lineHeight: 1.7,
      maxWidth: "700px",
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "18px",
      marginTop: "34px",
    },
    serviceCard: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "24px",
      padding: "24px",
    },
    yellowBar: {
      width: "56px",
      height: "8px",
      borderRadius: "999px",
      background: "#f4c542",
      marginBottom: "14px",
    },
    formWrap: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "24px",
      alignItems: "start",
    },
    formCard: {
      background: "#171717",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "30px",
      padding: "28px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.10)",
      background: "rgba(255,255,255,0.05)",
      color: "white",
      outline: "none",
      fontSize: "15px",
      marginBottom: "14px",
    },
    footerBox: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "24px",
      alignItems: "center",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "32px",
      padding: "30px",
    },
    center: {
      textAlign: "center",
    },
    smallMuted: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.45)",
      marginTop: "12px",
      lineHeight: 1.6,
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <img src={logoSrc} alt="Bourdierd Demolition logo" style={styles.logo} />

          <nav style={styles.nav}>
            <a href="#services" style={styles.navLink}>Services</a>
            <a href="#process" style={styles.navLink}>Process</a>
            <a href="#quote" style={styles.navLink}>Quote</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </nav>

          <a href="tel:4373525001" style={styles.callBtn}>Call 437-352-5001</a>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroGrid}>
          <div>
            <div style={styles.badge}>Residential Interior Demolition & Junk Removal</div>
            <img src={logoSrc} alt="Bourdierd Demolition logo" style={styles.heroLogo} />

            <h1 style={styles.h1}>Clean demolition. Fast quotes. Easy communication.</h1>

            <p style={styles.heroText}>
              Bourdierd Demolition helps homeowners prepare their spaces for renovation with reliable interior demolition and debris removal. Simple process, clear communication, and service you can count on.
            </p>

            <div style={styles.buttonRow}>
              <a href="#quote" style={styles.primaryBtn}>Request a Quote</a>
              <a href="tel:4373525001" style={styles.secondaryBtn}>Call Now</a>
            </div>

            <div style={styles.statGrid}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>Fast</div>
                <div style={styles.statLabel}>Quote response</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>Clean</div>
                <div style={styles.statLabel}>Work approach</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>Clear</div>
                <div style={styles.statLabel}>Communication</div>
              </div>
            </div>
          </div>

          <div style={styles.rightGrid}>
            <div style={styles.card}>
              <div style={{ ...styles.sectionTitle, marginBottom: "16px" }}>Popular Jobs</div>
              <div style={{ display: "grid", gap: "12px" }}>
                {services.slice(0, 3).map((service) => (
                  <div key={service} style={{ background: "rgba(0,0,0,0.3)", padding: "14px", borderRadius: "16px", color: "rgba(255,255,255,0.88)" }}>
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.yellowCard}>
              <div style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.25em", opacity: 0.7 }}>
                Need a quote?
              </div>
              <div style={{ fontSize: "34px", fontWeight: 900, lineHeight: 1.1, marginTop: "12px" }}>
                Text or call us today
              </div>
              <div style={{ marginTop: "14px", lineHeight: 1.7, opacity: 0.85 }}>
                The easier you make it for clients to contact you, the more leads you capture.
              </div>
              <a href="tel:4373525001" style={{ ...styles.primaryBtn, background: "#111", color: "white", marginTop: "20px" }}>
                437-352-5001
              </a>
            </div>

            <div style={{ ...styles.card, gridColumn: "1 / -1" }}>
              <div style={styles.sectionTitle}>Why homeowners choose us</div>
              <div style={styles.grid3}>
                <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "18px", padding: "18px" }}>
                  <div style={{ fontWeight: 700, marginBottom: "8px" }}>Respect for your home</div>
                  <div style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.6 }}>
                    We focus on interior work with care, cleanliness, and attention to detail.
                  </div>
                </div>
                <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "18px", padding: "18px" }}>
                  <div style={{ fontWeight: 700, marginBottom: "8px" }}>Straightforward service</div>
                  <div style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.6 }}>
                    Clear communication from first message to final clean-up.
                  </div>
                </div>
                <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "18px", padding: "18px" }}>
                  <div style={{ fontWeight: 700, marginBottom: "8px" }}>Ready for renovation</div>
                  <div style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.6 }}>
                    We help leave your space prepped for the next phase of the project.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionTitle}>Services</div>
          <h2 style={styles.sectionHeading}>Residential interior demolition services</h2>
          <p style={styles.sectionText}>
            Built for homeowners who want a simple, professional way to get their space ready for renovation.
          </p>

          <div style={styles.grid3}>
            {services.map((service) => (
              <div key={service} style={styles.serviceCard}>
                <div style={styles.yellowBar} />
                <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "10px" }}>{service}</div>
                <div style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>
                  Clean, efficient service with a focus on protecting the surrounding area and removing unwanted material.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" style={styles.sectionMuted}>
        <div style={styles.container}>
          <div style={styles.sectionTitle}>Process</div>
          <h2 style={styles.sectionHeading}>Easy from first contact to final clean-up</h2>

          <div style={styles.grid3}>
            {steps.map((step, index) => (
              <div key={step.title} style={{ ...styles.serviceCard, background: "#171717" }}>
                <div style={{
                  height: "48px",
                  width: "48px",
                  borderRadius: "16px",
                  background: "#f4c542",
                  color: "#111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  marginBottom: "16px"
                }}>
                  {index + 1}
                </div>
                <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "10px" }}>{step.title}</div>
                <div style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.formWrap}>
            <div>
              <div style={styles.sectionTitle}>Request a Quote</div>
              <h2 style={styles.sectionHeading}>Make it easy for people to reach you</h2>
              <p style={styles.sectionText}>
                This section is designed to help customers quickly ask for a quote. Once your site is published, this form can be connected to your email or quote tool.
              </p>

              <div style={{ ...styles.card, marginTop: "28px" }}>
                <div style={{ fontSize: "22px", fontWeight: 700, marginBottom: "18px" }}>Direct contact</div>
                <div style={{ display: "grid", gap: "12px" }}>
                  <a href="tel:4373525001" style={{ ...styles.navLink, background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "16px", color: "white", textDecoration: "none" }}>
                    Call: 437-352-5001
                  </a>
                  <a href="sms:4373525001" style={{ ...styles.navLink, background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "16px", color: "white", textDecoration: "none" }}>
                    Text us for a fast response
                  </a>
                  <div style={{ background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "16px", color: "rgba(255,255,255,0.8)" }}>
                    Add your email and service area here when ready.
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.formCard}>
              <div style={{ fontSize: "30px", fontWeight: 800, marginBottom: "18px" }}>Quote Request Form</div>
              <input style={styles.input} placeholder="Full name" />
              <input style={styles.input} placeholder="Phone number" />
              <input style={styles.input} placeholder="Email address" />
              <input style={styles.input} placeholder="Project address" />
              <select style={styles.input} defaultValue="">
                <option value="" disabled>Type of project</option>
                <option>Kitchen demolition</option>
                <option>Bathroom demolition</option>
                <option>Basement demolition</option>
                <option>Flooring removal</option>
                <option>Drywall / wall removal</option>
                <option>Junk removal</option>
              </select>
              <textarea
                rows="5"
                style={{ ...styles.input, resize: "vertical" }}
                placeholder="Tell us about your project, timeline, and anything important we should know."
              />
              <button style={{ ...styles.primaryBtn, border: "none", cursor: "pointer", width: "100%" }}>
                Send Quote Request
              </button>
              <div style={styles.smallMuted}>
                Demo version: the button is ready for a real form integration.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.sectionMuted}>
        <div style={styles.container}>
          <div style={styles.sectionTitle}>FAQ</div>
          <h2 style={styles.sectionHeading}>Common questions</h2>

          <div style={styles.grid3}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ ...styles.serviceCard, background: "#171717" }}>
                <div style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>{faq.q}</div>
                <div style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.footerBox}>
            <div>
              <div style={styles.sectionTitle}>Contact</div>
              <h2 style={styles.sectionHeading}>Ready to start your project?</h2>
              <p style={styles.sectionText}>
                Contact Bourdierd Demolition today for residential interior demolition and junk removal services.
              </p>
            </div>

            <div style={{ display: "grid", gap: "14px" }}>
              <a href="tel:4373525001" style={{ ...styles.primaryBtn, textAlign: "center" }}>
                Call 437-352-5001
              </a>
              <a href="#quote" style={{ ...styles.secondaryBtn, textAlign: "center" }}>
                Request a Quote
              </a>
            </div>
          </div>

          <div style={{ ...styles.center, marginTop: "26px", color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
            © 2026 Bourdierd Demolition. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}