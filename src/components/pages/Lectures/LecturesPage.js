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
import reactsystemdesignnotesdata from "../../../data/reactSystemDesignNotesData";
import reactInterviewExpData from "../../../data/reactInterviewExpData";
import backendChaiAurCodeData from "../../../data/backendChaiAurCodeData";

const courseDataRegistry = {
  frontendSystemDesignData: frontendSystemDesignData,
  reactsystemdesignnotesdata: reactsystemdesignnotesdata,
  reactInterviewExpData: reactInterviewExpData,
  backendChaiAurCodeData: backendChaiAurCodeData,
  // nodesdata: nodesdata,
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

const parseYAMLFrontmatter = (content) => {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  
  const frontmatter = match[1];
  const lines = frontmatter.split('\n');
  const data = {};
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    
    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();
    value = value.replace(/^["']|["']$/g, '');
    
    if (key) data[key] = value;
  });
  
  return data;
};

const extractSummary = (content) => {
  const cleaned = cleanMarkdown(content);
  const lines = cleaned.split('\n').filter(line => line.trim());
  // Get first 2 lines and join them
  const summaryLines = lines.slice(0, 2).join(' ');
  // Trim to max 150 chars and add "..."
  const summary = summaryLines.substring(0, 55);
  return summary.length < summaryLines.length ? summary + '...' : summary;
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
  const [lectureTitle, setLectureTitle] = useState("");
  const [itemTitles, setItemTitles] = useState({});
  const [itemSummaries, setItemSummaries] = useState({});
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
        .then((markdown) => {
          // Extract title from YAML frontmatter
          const frontmatter = parseYAMLFrontmatter(markdown);
          setLectureTitle(frontmatter.title || "Untitled");
          
          // Clean and set content
          setExternalContent(cleanMarkdown(markdown));
        })
        .catch((err) => {
          console.error("GitHub Fetch Error:", err);
          setLectureTitle("Error Loading Title");
          setExternalContent(
            "### Error\nCould not load content for this lecture.",
          );
        });
    }
  }, [lectureId]); // Re-run whenever the lectureId in the URL changes

  // Fetch titles and summaries for all items in the sidebar
  useEffect(() => {
    if (allItems.length === 0) return;

    const fetchAllTitlesAndSummaries = async () => {
      const titles = {};
      const summaries = {};
      
      // Fetch all titles and summaries in parallel using Promise.all
      const promises = allItems.map(async (item) => {
        try {
          const markdown = await fetchPostFromGitHub(item.id);
          const frontmatter = parseYAMLFrontmatter(markdown);
          titles[item.id] = frontmatter.title || "Untitled";
          summaries[item.id] = extractSummary(markdown);
        } catch (err) {
          console.error(`Failed to fetch data for ${item.id}:`, err);
          titles[item.id] = item.title || "Untitled";
          summaries[item.id] = item.summary || "No summary available";
        }
      });
      
      await Promise.all(promises);
      setItemTitles(titles);
      setItemSummaries(summaries);
    };

    fetchAllTitlesAndSummaries();
  }, [allItems]);

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
          itemTitles={itemTitles}
          itemSummaries={itemSummaries}
          courseId={courseId}
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
            <h2>{lectureTitle || "Loading..."}</h2>
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
