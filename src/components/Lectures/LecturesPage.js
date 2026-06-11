import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ExternalLink } from "lucide-react";
import LectureSidebar from "./LectureSidebar";
import { fetchPostFromGitHub } from "../../utils/githubFetcher";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import frontendSystemDesignData from "./lectureNotesData";

// Keep these imports exactly as you had them originally
let reactsystemdesignnotesdata = [];
try {
  reactsystemdesignnotesdata = require("./reactsystemdesignnotesdata").default;
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
  let cleaned = content.replace(/^---[\s\S]*?---/, "").trim();
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

  const selectedLecture = useMemo(
    () => allItems.find((item) => item.id === selectedLectureId) || allItems[0],
    [selectedLectureId, allItems],
  );

  useEffect(() => {
    if (lectureId) setSelectedLectureId(lectureId);
  }, [lectureId]);

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
      <div className="lecture-page-grid">
        <LectureSidebar
          sections={currentCourseData}
          activeLectureId={selectedLectureId}
          onSelectLecture={handleSelectLecture}
        />
        <main className="lecture-main-panel">
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
