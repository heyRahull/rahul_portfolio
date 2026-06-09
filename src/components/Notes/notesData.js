const notesData = [
  {
    title: "ReactJs System Design Notes",
    category: "Advanced React",
    excerpt: "Deep dive into production-grade React architecture. Learn feature-based structures, service abstraction layers, compound components, monorepos, and state topology optimization rules perfect for frontend interviews.",
    uploadDate: "June 2026",
    // 1. By declaring courseId, NoteCard automatically uses React Router to open your interactive sidebar notes workspace
    courseId: "reactsystemdesignnotesdata", 
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*uzXjZ8QikBXCCVG1thAnjg.jpeg", // Replace with any preferred image asset reference
    path: "" 
  },
  {
    title: "Node.js Core Architecture",
    category: "Backend Engine",
    excerpt: "Mastering the Node.js event loop, thread pool management, streams, buffers, and asynchronous V8 engine runtimes. Built specifically to handle scalable system design workflows.",
    uploadDate: "March 2026",
    courseId: "nodesdata", // Ready for when you create your nodesdata.js syllabus file!
    image: "https://cdn.hashnode.com/uploads/covers/6069d6891ed1783ab063459f/bf136a13-7810-4a96-94be-e911be76efc0.png",
    path: ""
  },
  {
    title: "System Design Basics (HLD/LLD)",
    category: "Architecture",
    excerpt: "A comprehensive reference manual covering horizontal scaling, load balancers, caching layers, sharding topologies, and foundational high-level architectural blocks.",
    uploadDate: "Feb 2026",
    courseId: "", // Leaving this empty prompts NoteCard to seamlessly switch to a View PDF file target!
    image: require("../../images/project-image.svg"), // Utilizing your local default design asset
    path: "/notes/system_design.pdf" // Path to your static public file asset
  }
];

export default notesData;