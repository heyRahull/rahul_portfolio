const lectureNotesData = [
  {
    sectionId: "security",
    sectionTitle: "01 - Security",
    items: [
      {
        id: "security-overview",
        title: "Security Fundamentals",
        summary: "Threat modeling, secure design, and web security best practices.",
        instructor: "Namaste System Design",
        uploadDate: "June 2026",
        sectionTitle: "01 - Security",
        content: [
          {
            title: "Threat Modeling",
            subTitle: "Identifying attack surfaces",
            description: "Define assets, trust boundaries, and threat actors to build secure system designs from the start."
          },
          {
            title: "Application Security",
            subTitle: "XSS, CSRF, SSRF, and injection mitigation",
            description: "Learn how to defend web applications using input validation, secure headers, and proper session handling."
          },
          {
            title: "Data Protection",
            subTitle: "Encryption, tokens, and secure storage",
            description: "Explore encryption at rest, encryption in transit, secure API keys, and credential management."
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
