const lectureNotesData = [
  {
    sectionId: "security",
    sectionTitle: "01 - Security",
    items: [
      {
        id: "security-web-apps",
        title: "Web Application Security",
        summary: "XSS, CSRF, CORS, and browser security patterns.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "Cross-site Scripting (XSS)",
            subTitle: "Injection attack into user-facing pages",
            description: "Learn how XSS works, the difference between reflected and stored attacks, and how Content Security Policy (CSP) and input sanitization help protect applications."
          },
          {
            title: "Cross-site Request Forgery (CSRF)",
            subTitle: "Unauthorized actions using user credentials",
            description: "Understand CSRF vectors, same-site cookie policies, anti-CSRF tokens, and secure form-handling patterns for modern web apps."
          },
          {
            title: "Secure Headers & CORS",
            subTitle: "Browser-driven safety controls",
            description: "Explore security headers like CSP, X-Frame-Options, and the role of CORS in controlling cross-origin access and reducing browser-based attack surfaces."
          }
        ]
      },
      {
        id: "security-server-side",
        title: "Server-side Security",
        summary: "SSRF, input validation and secure protocol handling.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "Server-side Request Forgery (SSRF)",
            subTitle: "Protecting internal infrastructure",
            description: "Identify SSRF risks, validate outbound requests, and implement safe URL handling to prevent attackers from abusing server-side HTTP clients."
          },
          {
            title: "Input Validation & Sanitization",
            subTitle: "Defending against injection and malformed input",
            description: "Learn validation models, allow-list filtering, and secure parsing strategies for both web and API inputs."
          },
          {
            title: "Authentication & Compliance",
            subTitle: "Secure identity and regulatory controls",
            description: "Review secure password handling, session management, and basic compliance concepts for security-sensitive applications."
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
        id: "networking-fast-path",
        title: "Networking Fundamentals",
        summary: "Protocols, load balancing, and traffic design.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "02 - Networking",
        content: [
          {
            title: "HTTP & HTTPS",
            subTitle: "Secure transport for web services",
            description: "Understand how HTTPS works, TLS certificates, and why encrypted transport is essential for modern applications."
          },
          {
            title: "Load Balancing",
            subTitle: "Distributing traffic at scale",
            description: "Learn how load balancers work, sticky sessions, and strategies for scaling inbound requests across service clusters."
          },
          {
            title: "Network Architecture",
            subTitle: "Designing resilient infrastructure",
            description: "Review VPCs, firewalls, subnet segmentation, and boundary protection for cloud-based application design."
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
        id: "testing-strategy",
        title: "Testing Strategy",
        summary: "Unit, integration, and contract testing.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "03 - Testing",
        content: [
          {
            title: "Unit Testing",
            subTitle: "Validating individual components",
            description: "Write reliable unit tests for business logic and component behavior to catch regressions early."
          },
          {
            title: "Integration Testing",
            subTitle: "Ensuring modules work together",
            description: "Check API contracts, UI flows, and backend integration paths as parts of an end-to-end verification strategy."
          },
          {
            title: "Test Automation",
            subTitle: "Buy confidence with repeatable test suites",
            description: "Build automated pipelines that run test suites on every commit and prevent broken releases from reaching production."
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
        id: "communication-patterns",
        title: "Service Communication",
        summary: "APIs, messaging, and event-driven design.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "04 - Communication",
        content: [
          {
            title: "Synchronous APIs",
            subTitle: "REST and gRPC patterns",
            description: "Choose the right synchronous communication style and understand when direct request-response is the best fit."
          },
          {
            title: "Asynchronous Messaging",
            subTitle: "Message queues and event buses",
            description: "Explore publish-subscribe models, message durability, and when to prefer async messaging for decoupled systems."
          },
          {
            title: "Service Contracts",
            subTitle: "Defining stable interfaces",
            description: "Keep APIs maintainable with versioning, strict contracts, and clear consumer-provider expectations."
          }
        ]
      }
    ]
  }
];

export default lectureNotesData;
