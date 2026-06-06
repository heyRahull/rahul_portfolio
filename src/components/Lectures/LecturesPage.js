import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
                    <div>
                      <h3>{topic.title}</h3>
                      <p>{topic.subTitle}</p>
                    </div>
                  </div>
                  <div className="lecture-topic-description">
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
