import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ExternalLink } from "lucide-react";
import LectureSidebar from "./LectureSidebar";
import lectureNotesData from "./lectureNotesData";

const stripMatchingHeading = (text, title) => {
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
  const { lectureId } = useParams();

  const allItems = useMemo(
    () => lectureNotesData.flatMap((section) => section.items.map((item) => ({ ...item, sectionTitle: section.sectionTitle }))),
    []
  );

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
    navigate(`/lectures/${id}`);
  };

  return (
    <>
      <section className="lecture-page-section lecture-page-top-space">
        <div className="lecture-page-grid">
          <LectureSidebar
            sections={lectureNotesData}
            activeLectureId={selectedLectureId}
            onSelectLecture={handleSelectLecture}
          />

          <main className="lecture-main-panel">
            <div className="lecture-main-header">
              <p className="lecture-category">{selectedLecture.sectionTitle}</p>
              <h2>{selectedLecture.title}</h2>
              <p className="lecture-summary">{selectedLecture.summary}</p>
            </div>

            <div className="lecture-content-section">
              {selectedLecture.content.map((topic, index) => (
                <article className="lecture-topic-card" key={topic.title + index}>
                  <div className="lecture-topic-heading">
                    <span>{index + 1}</span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                      <div>
                        <h3>{topic.title}</h3>
                        <p>{topic.subTitle}</p>
                      </div>
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
                  <div className="lecture-topic-description">
                    {topic.mediumUrl ? (
                      <div style={{ marginTop: "1rem" }}>
                        <div style={{
                          padding: "1.5rem",
                          backgroundColor: "#f7f7f7",
                          borderLeft: "4px solid #000",
                          borderRadius: "6px",
                          marginBottom: "1rem"
                        }}>
                          <p style={{ margin: "0 0 1rem 0", color: "#666", fontSize: "0.95rem" }}>
                            {topic.description}
                          </p>
                          <a
                            href={topic.mediumUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              color: "#000",
                              textDecoration: "none",
                              fontWeight: "600",
                              padding: "0.75rem 1.5rem",
                              border: "2px solid #000",
                              borderRadius: "6px",
                              transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#000";
                              e.target.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "transparent";
                              e.target.style.color = "#000";
                            }}
                          >
                            View Full Article on Medium
                            <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>
                    ) : (
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{ code: CodeBlock }}
                      >
                        {stripMatchingHeading(topic.description, topic.title)}
                      </ReactMarkdown>
                    )}
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
