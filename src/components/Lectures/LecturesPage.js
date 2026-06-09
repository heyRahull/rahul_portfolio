import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ExternalLink } from "lucide-react";
import LectureSidebar from "./LectureSidebar";
import { fetchHashnodePost } from '../../utils/hashnodeFetcher';
import parse from 'html-react-parser';

// 1. Core Default Data File
import frontendSystemDesignData from "./lectureNotesData"; 

// 2. SAFE OPTIONAL IMPORTS
let reactsystemdesignnotesdata = [];
try { reactsystemdesignnotesdata = require("./reactsystemdesignnotesdata").default; } catch (e) { reactsystemdesignnotesdata = []; }
let nodesdata = [];
try { nodesdata = require("./nodesdata").default; } catch (e) { nodesdata = []; }

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

const CodeBlock = ({ inline, className, children }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (inline) return <code className="inline-code">{children}</code>;

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <button className="code-copy-btn" onClick={handleCopy}>
          {copied ? "✓" : "📋"}
        </button>
      </div>
      <pre className={className}><code>{children}</code></pre>
    </div>
  );
};

const LecturesPage = () => {
  const navigate = useNavigate();
  const { courseId, lectureId } = useParams();

  // Dynamic Course Swapper
  const currentCourseData = useMemo(() => {
    return courseDataRegistry[courseId] || frontendSystemDesignData;
  }, [courseId]);

  const allItems = useMemo(() => {
    return currentCourseData.flatMap((section) => 
      (section.items || []).map((item) => ({ ...item, sectionTitle: section.sectionTitle }))
    );
  }, [currentCourseData]);

  const defaultLectureId = allItems[0]?.id || "";
  const [selectedLectureId, setSelectedLectureId] = useState(defaultLectureId);
  
  // --- HASHNODE CONTENT LOGIC ---
  const [externalContent, setExternalContent] = useState("");

  const selectedLecture = useMemo(() => 
    allItems.find((item) => item.id === selectedLectureId) || allItems[0], 
  [selectedLectureId, allItems]);

  useEffect(() => {
    setExternalContent(""); // Clear old content
    if (selectedLecture?.hashnodeSlug) {
      fetchHashnodePost(selectedLecture.hashnodeSlug).then(post => {
        if (post) setExternalContent(post.content.markdown);
      });
    }
  }, [selectedLecture]);

  useEffect(() => {
    if (lectureId && allItems.some((item) => item.id === lectureId)) {
      setSelectedLectureId(lectureId);
    } else {
      setSelectedLectureId(defaultLectureId);
    }
  }, [lectureId, allItems, defaultLectureId]);

  const handleSelectLecture = (id) => {
    setSelectedLectureId(id);
    navigate(`/lectures/${courseId || "frontendSystemDesignData"}/${id}`);
  };
console.log("Current selectedLecture object:", selectedLecture);
  return (
    <section className="lecture-page-section lecture-page-top-space">
      <div className="lecture-page-grid">
        <LectureSidebar
          sections={currentCourseData}
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
            {selectedLecture.content?.map((topic, index) => (
              <article className="lecture-topic-card" key={topic.title + index}>
                <div className="lecture-topic-heading">
                  <span>{index + 1}</span>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <h3>{topic.title}</h3>
                    {topic.mediumUrl && (
                      <a 
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
                      href={topic.mediumUrl} target="_blank" rel="noopener noreferrer" className="read-on-medium-btn">
                        Read on Medium <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="lecture-content-section" style={{ marginTop: "1.5rem", maxWidth: "100%" }}>
                  {externalContent ? (
                    <div className="rss-content-wrapper">
                      {parse(externalContent)}
                    </div>
                  ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: CodeBlock }}>
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
  );
};

export default LecturesPage;

