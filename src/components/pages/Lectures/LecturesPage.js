import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronRight } from "lucide-react";
import LectureSidebar from "./LectureSidebar";
import { fetchPostFromGitHub } from "../../../utils/githubFetcher";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import frontendSystemDesignData from "../../../data/lectureNotesData";

// Keep these imports exactly as you had them originally
let reactsystemdesignnotesdata = [];
try {
  reactsystemdesignnotesdata = require("../../../data/reactSystemDesignNotesData").default;
} catch (e) {
  reactsystemdesignnotesdata = [];
}
let nodesdata = [];
try {
  nodesdata = require("./nodesdata").default;
} catch (e) {
  nodesdata = [];
}

const courseDataRegistry = {
  frontendSystemDesignData: frontendSystemDesignData,
  reactsystemdesignnotesdata: reactsystemdesignnotesdata,
  nodesdata: nodesdata,
};

const cleanMarkdown = (content) => {
  // Remove YAML frontmatter only if it's properly delimited with newlines
  // This prevents removing horizontal dividers (---) that appear in the content
  let cleaned = content.replace(/^---\n[\s\S]*?\n---\n/, "").trim();
  cleaned = cleaned
    .replace(/!\[\]\(https:\/\/cdn\.hashnode\.com\/[\s\S]*?\)/g, "")
    .trim();
  return cleaned;
};

const LecturesPage = () => {
  const navigate = useNavigate();
  const { courseId, lectureId } = useParams();

  const currentCourseData = useMemo(
    () => courseDataRegistry[courseId] || frontendSystemDesignData,
    [courseId],
  );
  const allItems = useMemo(
    () =>
      currentCourseData.flatMap((section) =>
        (section.items || []).map((item) => ({
          ...item,
          sectionTitle: section.sectionTitle,
        })),
      ),
    [currentCourseData],
  );

  const [selectedLectureId, setSelectedLectureId] = useState(
    allItems[0]?.id || "",
  );
  const [externalContent, setExternalContent] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    // Initialize from localStorage, default to false (sidebar open)
    const saved = localStorage.getItem("lecturesSidebarCollapsed");
    return saved ? JSON.parse(saved) : false;
  });

  const selectedLecture = useMemo(
    () => allItems.find((item) => item.id === selectedLectureId) || allItems[0],
    [selectedLectureId, allItems],
  );

  useEffect(() => {
    if (lectureId) setSelectedLectureId(lectureId);
  }, [lectureId]);

  useEffect(() => {
    // Persist sidebar collapsed state to localStorage
    localStorage.setItem("lecturesSidebarCollapsed", JSON.stringify(isSidebarCollapsed));
  }, [isSidebarCollapsed]);

  useEffect(() => {
    if (lectureId) {
      setExternalContent("Loading content...");
      fetchPostFromGitHub(lectureId) // Pass the ID from URL directly
        .then((markdown) => setExternalContent(cleanMarkdown(markdown)))
        .catch((err) => {
          console.error("GitHub Fetch Error:", err);
          setExternalContent(
            "### Error\nCould not load content for this lecture.",
          );
        });
    }
  }, [lectureId]); // Re-run whenever the lectureId in the URL changes

  const handleSelectLecture = (id) => {
    setSelectedLectureId(id);
    navigate(`/lectures/${courseId || "frontendSystemDesignData"}/${id}`);
  };

  return (
    <section className="lecture-page-section lecture-page-top-space">
      <div className={`lecture-page-grid ${isSidebarCollapsed ? "sidebar-collapsed" : ""}`}>
        <LectureSidebar
          sections={currentCourseData}
          activeLectureId={selectedLectureId}
          onSelectLecture={handleSelectLecture}
          isSidebarCollapsed={isSidebarCollapsed}
          onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        <main className="lecture-main-panel">
          {/* Sidebar toggle button - visible only on desktop when sidebar is collapsed */}
          {isSidebarCollapsed && (
            <button
              className="lecture-sidebar-open-btn"
              onClick={() => setIsSidebarCollapsed(false)}
              type="button"
              title="Open sidebar"
            >
              <ChevronRight size={20} />
            </button>
          )}
          <div className="lecture-main-header">
            <p className="lecture-category">{selectedLecture?.sectionTitle}</p>
            <h2>{selectedLecture?.title}</h2>
          </div>
          <div className="lecture-content-section">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {externalContent || "Loading content..."}
            </ReactMarkdown>
          </div>
        </main>
      </div>
    </section>
  );
};

export default LecturesPage;
