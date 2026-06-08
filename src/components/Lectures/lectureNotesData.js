const lectureNotesData = [
  {
    sectionId: "security",
    sectionTitle: "01 - Security",
    items: [
      {
        id: "01-01-web-security-introduction-fundamentals",
        title: "1.1 Web Security ? Introduction & Fundamentals",
        summary: "Foundational frontend security principles, myths, and real-world examples.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "Web Security ? Introduction & Fundamentals",
            subTitle: "Core principles for frontend security",
            description: "# Web Security ? Introduction & Fundamentals\n\n### 1. The Core Philosophy: Balancing UX & Security\n\n- **Critical Component:** Security is a non-negotiable aspect of software engineering, imperative for junior, senior, and lead developers alike.\n- **The UX Challenge:** Implementing robust security mechanisms must not degrade the User Experience (UX). High-level engineering requires creating a frictionless yet highly secure user journey.\n\n### 2. The Frontend Security Myth\n\n- **The Misconception:** A common industry myth among frontend engineers is that \"Security is solely a backend responsibility.\"\n- **The Reality:** The vast majority of cyber attacks originate or are initiated directly via the client-side (frontend). Because backend APIs implicitly trust the incoming requests from authenticated client applications, any compromise on the frontend can severely jeopardize the entire ecosystem.\n- **The Zero-Trust Model:** Never implicitly trust any user, even if they are authenticated, active session holders, or premium paid customers. Every client interaction should be treated with a defensive, security-first lens.\n\n### 3. Key Pillars of the Frontend Security Roadmap\nTo design architecture that safeguards client-side components, a frontend engineer must master the following core concepts:\n\n- **Network Security (HTTPS):** Ensuring all data in transit is encrypted over secure cryptographic protocols to mitigate network sniffing and man-in-the-middle (MITM) attacks.\n- **Input & Output Sanitization:** Strictly validating and escaping user inputs before parsing them into the document object model (DOM). Modern UI frameworks (like React) inherently handle text escaping, but vulnerabilities arise when raw execution entry points (e.g., `dangerouslySetInnerHTML`) are leveraged carelessly.\n- **Authentication vs. Authorization:** Distinctly managing who the user is (Authentication) and what exact permissions or resource scopes they hold (Authorization).\n- **Dependency Vetting:** Scrutinizing all third-party packages to ensure they do not introduce vulnerabilities or malicious payloads.\n\n### 4. Real-World Examples\n\n**Case Study: E-commerce Password Reset**\nA common oversight occurs when developers store sensitive user data (like reset tokens) in plain-text localStorage. An XSS vector then exfiltrates this token to an attacker, granting full account takeover capability.\n\n**Lesson:** Always hash, encrypt, and store sensitive tokens securely on the backend, never on the client-side in an unencrypted state."
          }
        ]
      },
      {
        id: "01-02-security-overview",
        title: "1.2 Security Overview",
        summary: "Lecture on the security section introduction.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.2 Security Overview",
            subTitle: "Section introduction",
            description: "### 1. Core Client-Side Vulnerabilities & Attacks\n\n- **XSS (Cross-Site Scripting):** A severe vulnerability where malicious scripts are injected into trusted websites via untrusted user inputs or manipulated URL query parameters. These scripts execute within the victim's browser session, leading to data exfiltration.\n- **CSRF (Cross-Site Request Forgery):** An attack vector that forces an authenticated user to execute unwanted actions on a web application in which they are currently logged in, bypassing state-changing request security.\n- **SSRF (Server-Side Request Forgery):** Though primarily a backend threat, frontend architectures can accidentally trigger SSRF by exposing internal endpoints or failing to validate URLs passing through client-side components to backend relays.\n\n### 2. Access Governance & Network Communication\n\n- **Authentication & Authorization Failures:** Vulnerabilities arising from broken access controls. Without strict frontend role-guards and backend synchronization, unauthorized users can escalate privileges, gaining administrative access to restricted panels or routes.\n- **HTTPS over HTTP:** Standardizing absolute encryption in transit. Utilizing secure cryptographic protocols prevents data sniffing, session hijacking, and man-in-the-middle attacks across networks.\n- **Security Headers:** Leveraging explicit HTTP response headers (e.g., Content Security Policy, X-Frame-Options) to enforce runtime rules, restrict domain execution boundaries, and block bad-intention behaviors.\n- **CORS (Cross-Origin Resource Sharing):** A browser-level security mechanism that restricts web applications from making requests to a domain different from the one that served the application, protecting private API endpoints from unauthorized cross-domain scripting.\n\n### 3. Component & Local Storage Safety\n\n- **Iframe Misuse & Clickjacking:** Attacks where a malicious site embeds your genuine application inside an invisible or disguised layer, tricking users into clicking buttons or links they cannot see.\n- **Local Storage Exposure:** Storing sensitive information (like API keys, auth tokens, or PII) in browser local storage exposes data to XSS attacks and potential theft.\n- **Session Management:** Properly implementing session timeouts, token rotation, and secure cookie flags (HttpOnly, Secure, SameSite).\n\n### 4. Compliance & Regulatory Standards\n\n- **GDPR Compliance:** European data protection regulation requiring explicit consent, data minimization, and right to erasure.\n- **HIPAA (Healthcare):** Protections for protected health information with strict encryption and access control requirements.\n- **PCI DSS (Payment Card Industry):** Standards for organizations handling credit card data."
          }
        ]
      },
      {
        id: "01-03-cross-site-scripting-xss",
        title: "1.3 Cross-site Scripting (XSS)",
        summary: "Examines XSS attack methods, real-world risks, and concrete defenses for web apps.",
        instructor: "System Design",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "Architectural Definition of XSS",
            subTitle: "Critical client-side vulnerability with injection methods",
            mediumUrl: "https://medium.com/@thehumblecoder/web-security-101-a-deep-dive-into-cross-site-scripting-xss-the-5-deadliest-attack-vectors-c1b711120e66"
          }
        ]
      },
      {
        id: "01-04-iframe-protection",
        title: "1.4 iFrame Protection",
        summary: "Preventing iFrame-based attacks.",
        instructor: "System Design",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.4 iFrame Protection",
            subTitle: "iFrame security",
            mediumUrl: "https://medium.com/@thehumblecoder/web-security-101-mastering-iframe-protection-defenses-55bdf968f63a"
          }
        ]
      },
      {
        id: "01-05-security-headers",
        title: "1.5 Security Headers",
        summary: "Using HTTP security headers.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.5 Security Headers",
            subTitle: "Headers and policies",
            description: "Content placeholder for 1.5 security headers."
          }
        ]
      },
      {
        id: "01-06-client-side-security",
        title: "1.6 Client-side Security",
        summary: "Frontend and browser security patterns.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.6 Client-side Security",
            subTitle: "Browser-side defenses",
            description: "Content placeholder for 1.6 client-side security."
          }
        ]
      },
      {
        id: "01-07-secure-communication-https",
        title: "1.7 Secure Communication (HTTPS)",
        summary: "Understanding HTTPS and encryption.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.7 Secure Communication (HTTPS)",
            subTitle: "Encryption fundamentals",
            description: "Content placeholder for 1.7 secure communication."
          }
        ]
      },
      {
        id: "01-08-dependency-security",
        title: "1.8 Dependency Security",
        summary: "Securing npm packages and dependencies.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.8 Dependency Security",
            subTitle: "Supply chain protection",
            description: "Content placeholder for 1.8 dependency security."
          }
        ]
      },
      {
        id: "01-09-compliance-regulation",
        title: "1.9 Compliance & Regulation",
        summary: "Security compliance basics.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.9 Compliance & Regulation",
            subTitle: "Policy and standards",
            description: "Content placeholder for 1.9 compliance and regulation."
          }
        ]
      },
      {
        id: "01-10-input-validation-and-sanitization",
        title: "1.10 Input Validation and Sanitization",
        summary: "Validating and sanitizing user input.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.10 Input Validation and Sanitization",
            subTitle: "Secure input handling",
            description: "Content placeholder for 1.10 input validation and sanitization."
          }
        ]
      },
      {
        id: "01-11-ssrf",
        title: "1.11 Server-side Request Forgery (SSRF)",
        summary: "Preventing SSRF attacks.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.11 Server-side Request Forgery (SSRF)",
            subTitle: "SSRF defense",
            description: "Content placeholder for 1.11 SSRF."
          }
        ]
      },
      {
        id: "01-12-server-side-javascript-injection",
        title: "1.12 Server-side JavaScript Injection",
        summary: "Protecting backend code execution.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.12 Server-side JavaScript Injection",
            subTitle: "Backend injection protection",
            description: "Content placeholder for 1.12 server-side JavaScript injection."
          }
        ]
      },
      {
        id: "01-13-feature-policy-permissions-policy",
        title: "1.13 Feature Policy / Permissions-Policy",
        summary: "Browser feature restrictions.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.13 Feature Policy / Permissions-Policy",
            subTitle: "Browser feature control",
            description: "Content placeholder for 1.13 feature policy and permissions-policy."
          }
        ]
      },
      {
        id: "01-14-subresource-integrity-sri",
        title: "1.14 Subresource Integrity (SRI)",
        summary: "Ensuring third-party script integrity.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.14 Subresource Integrity (SRI)",
            subTitle: "Third-party script verification",
            description: "Content placeholder for 1.14 subresource integrity."
          }
        ]
      }
    ]
  },
  {
    sectionId: "networking",
    sectionTitle: "02 - Networking",
    items: [
      {
        id: "02-01-networking-fundamentals",
        title: "2.1 Networking Fundamentals",
        summary: "Core networking concepts and protocols.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "02 - Networking",
        content: [{ title: "Networking Fundamentals", subTitle: "Network concepts", description: "Content placeholder for networking fundamentals." }]
      }
    ]
  },
  {
    sectionId: "testing",
    sectionTitle: "03 - Testing",
    items: [
      {
        id: "03-01-testing-fundamentals",
        title: "3.1 Testing Fundamentals",
        summary: "Introduction to testing strategies.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "03 - Testing",
        content: [{ title: "Testing Fundamentals", subTitle: "Testing strategies", description: "Content placeholder for testing fundamentals." }]
      }
    ]
  },
  {
    sectionId: "communication",
    sectionTitle: "04 - Communication",
    items: [
      {
        id: "04-01-communication-fundamentals",
        title: "4.1 Communication Fundamentals",
        summary: "Effective communication skills.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "04 - Communication",
        content: [{ title: "Communication Fundamentals", subTitle: "Communication skills", description: "Content placeholder for communication fundamentals." }]
      }
    ]
  },
  {
    sectionId: "database-caching",
    sectionTitle: "05 - Database and Caching",
    items: [
      {
        id: "05-01-database-caching-fundamentals",
        title: "5.1 Database and Caching Fundamentals",
        summary: "Database design and caching strategies.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "05 - Database and Caching",
        content: [{ title: "Database and Caching Fundamentals", subTitle: "Database and cache concepts", description: "Content placeholder for database and caching fundamentals." }]
      }
    ]
  },
  {
    sectionId: "logging-monitoring",
    sectionTitle: "06 - Logging and Monitoring",
    items: [
      {
        id: "06-01-logging-monitoring-fundamentals",
        title: "6.1 Logging and Monitoring Fundamentals",
        summary: "Logging and monitoring best practices.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "06 - Logging and Monitoring",
        content: [{ title: "Logging and Monitoring Fundamentals", subTitle: "Observability concepts", description: "Content placeholder for logging and monitoring fundamentals." }]
      }
    ]
  },
  {
    sectionId: "performance",
    sectionTitle: "07 - Performance",
    items: [
      {
        id: "07-01-performance-fundamentals",
        title: "7.1 Performance Fundamentals",
        summary: "Performance optimization techniques.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "07 - Performance",
        content: [{ title: "Performance Fundamentals", subTitle: "Performance optimization", description: "Content placeholder for performance fundamentals." }]
      }
    ]
  },
  {
    sectionId: "accessibility",
    sectionTitle: "08 - Accessibility",
    items: [
      {
        id: "08-01-accessibility-fundamentals",
        title: "8.1 Accessibility Fundamentals",
        summary: "Building accessible web applications.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "08 - Accessibility",
        content: [{ title: "Accessibility Fundamentals", subTitle: "Web accessibility principles", description: "Content placeholder for accessibility fundamentals." }]
      }
    ]
  },
  {
    sectionId: "low-level-design",
    sectionTitle: "09 - Low level design",
    items: [
      {
        id: "09-01-low-level-design-fundamentals",
        title: "9.1 Low Level Design Fundamentals",
        summary: "Object-oriented design patterns and principles.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "09 - Low level design",
        content: [{ title: "Low Level Design Fundamentals", subTitle: "OOP and design patterns", description: "Content placeholder for low level design fundamentals." }]
      }
    ]
  },
  {
    sectionId: "high-level-design",
    sectionTitle: "10 - High Level Design",
    items: [
      {
        id: "10-01-high-level-design-fundamentals",
        title: "10.1 High Level Design Fundamentals",
        summary: "System architecture and scalability.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "10 - High Level Design",
        content: [{ title: "High Level Design Fundamentals", subTitle: "System architecture", description: "Content placeholder for high level design fundamentals." }]
      }
    ]
  },
  {
    sectionId: "bonus-masterclass",
    sectionTitle: "11 - Bonus Masterclass",
    items: [
      {
        id: "11-01-bonus-masterclass",
        title: "11.1 Bonus Masterclass",
        summary: "Advanced topics and expert insights.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "11 - Bonus Masterclass",
        content: [{ title: "Bonus Masterclass", subTitle: "Advanced topics", description: "Content placeholder for bonus masterclass." }]
      }
    ]
  },
  {
    sectionId: "bonus-interview-questions",
    sectionTitle: "12 - Bonus Interview Questions",
    items: [
      {
        id: "12-01-bonus-interview-questions",
        title: "12.1 Bonus Interview Questions",
        summary: "Common interview questions and answers.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "12 - Bonus Interview Questions",
        content: [{ title: "Bonus Interview Questions", subTitle: "Interview prep", description: "Content placeholder for bonus interview questions." }]
      }
    ]
  }
];

export default lectureNotesData;
