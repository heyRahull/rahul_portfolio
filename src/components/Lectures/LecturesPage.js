import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ExternalLink } from "lucide-react";
import LectureSidebar from "./LectureSidebar";

// 1. Core Default Data File
import frontendSystemDesignData from "./lectureNotesData"; 

// 2. SAFE OPTIONAL IMPORTS FOR DYNAMIC COURSE SWITCHING
let reactsystemdesignnotesdata = [];
try {
  reactsystemdesignnotesdata = require("./reactsystemdesignnotesdata").default || require("./reactsystemdesignnotesdata");
} catch (e) {
  reactsystemdesignnotesdata = []; 
}

let nodesdata = [];
try {
  nodesdata = require("./nodesdata").default || require("./nodesdata");
} catch (e) {
  nodesdata = []; 
}

const courseDataRegistry = {
  frontendSystemDesignData: frontendSystemDesignData,
  reactsystemdesignnotesdata: reactsystemdesignnotesdata,
  nodesdata: nodesdata
};

const stripMatchingHeading = (text, title) => {
  if (!text || !title) return "";
  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const headingRegex = new RegExp(`^#{1,2}\\s*${escapedTitle}\\s*(?:\\n|$)`, "i");
  return text.replace(headingRegex, "").trim();
};

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    const code = String(children).replace(/\n$/, "");
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (inline) {
    return <code className="inline-code">{children}</code>;
  }

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <button 
          className="code-copy-btn" 
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? "✓" : "📋"}
        </button>
      </div>
      <pre className={className}>
        <code>{children}</code>
      </pre>
    </div>
  );
};

const LecturesPage = () => {
  const navigate = useNavigate();
  const { courseId, lectureId } = useParams();

  // Dynamic Course Swapper matching the active router context parameter
  const currentCourseData = useMemo(() => {
    const selectedData = courseDataRegistry[courseId];
    if (!selectedData || selectedData.length === 0) {
      return frontendSystemDesignData;
    }
    return selectedData;
  }, [courseId]);

  const allItems = useMemo(() => {
    if (!currentCourseData || !Array.isArray(currentCourseData)) return [];
    return currentCourseData.flatMap((section) => 
      (section.items || []).map((item) => ({ 
        ...item, 
        sectionTitle: section.sectionTitle 
      }))
    );
  }, [currentCourseData]);

  const defaultLectureId = allItems[0]?.id || "";
  const [selectedLectureId, setSelectedLectureId] = useState(defaultLectureId);

  useEffect(() => {
    if (lectureId && allItems.some((item) => item.id === lectureId)) {
      setSelectedLectureId(lectureId);
      return;
    }
    setSelectedLectureId(defaultLectureId);
  }, [lectureId, allItems, defaultLectureId]);

  const selectedLecture = allItems.find((item) => item.id === selectedLectureId) || allItems[0];

  const handleSelectLecture = (id) => {
    setSelectedLectureId(id);
    const targetCourse = courseId || "frontendSystemDesignData";
    navigate(`/lectures/${targetCourse}/${id}`);
  };

  return (
    <>
      <section className="lecture-page-section lecture-page-top-space">
        <div className="lecture-page-grid">
          <LectureSidebar
            sections={currentCourseData}
            activeLectureId={selectedLectureId}
            onSelectLecture={handleSelectLecture}
          />

          <main className="lecture-main-panel">
            {/* EXACT MATCH: Headers, layout metadata rows and tags */}
            <div className="lecture-main-header">
              <p className="lecture-category">{selectedLecture.sectionTitle}</p>
              <h2>{selectedLecture.title}</h2>
              <p className="lecture-summary">{selectedLecture.summary}</p>
            </div>

            {/* EXACT MATCH: Core cards and structured content arrays */}
            <div className="lecture-content-section">
              {selectedLecture.content?.map((topic, index) => (
                <article className="lecture-topic-card" key={topic.title + index}>
                  <div className="lecture-topic-heading">
                    <span>{index + 1}</span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                      <div>
                        <h3>{topic.title}</h3>
                        <p>{topic.subTitle}</p>
                      </div>
                      
                      {/* EXACT MATCH: Inline styles, layout spacing and button placement */}
                      {topic.mediumUrl && (
                        <a
                          href={topic.mediumUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem 1rem",
                            backgroundColor: "#000",
                            color: "#fff",
                            textDecoration: "none",
                            borderRadius: "6px",
                            fontSize: "0.9rem",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                            transition: "opacity 0.3s ease"
                          }}
                          onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                          onMouseLeave={(e) => e.target.style.opacity = "1"}
                          title="Read full article on Medium"
                        >
                          Read on Medium
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* INTEGRATED: Nested Markdown content wrapper positioned correctly below header row */}
                  <div className="markdown-content" style={{ marginTop: "1.5rem" }}>
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{ code: CodeBlock }}
                    >
                      {stripMatchingHeading(topic.description, topic.title)}
                    </ReactMarkdown>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default LecturesPage;