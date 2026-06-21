import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const LectureSidebar = ({ 
  sections, 
  activeLectureId, 
  onSelectLecture,
  isSidebarCollapsed,
  onToggleSidebar,
  itemTitles = {},
  itemSummaries = {},
  courseId = ""
}) => {
  const [openSectionId, setOpenSectionId] = useState(sections[0]?.sectionId || "");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dynamically calculate the course title based on courseId or section data
  let courseDisplayName = "System Design Course";
  
  if (courseId === "reactsystemdesignnotesdata") {
    courseDisplayName = "React System Design";
  } else if (courseId === "reactInterviewExpData") {
    courseDisplayName = "React Interview Experience";
  } else if (courseId === "nodesdata") {
    courseDisplayName = "Node.js Core Architecture";
  }else if (courseId === "backendChaiAurCodeData") {
    courseDisplayName = "Backend Course";
  }

  return (
    <div className={`lecture-sidebar ${isSidebarOpen ? "open" : ""}`}>
      {/* Dynamic Header Badge with Collapse Button */}
      <div className="lecture-sidebar-course-title">
        <span>{courseDisplayName}</span>
        {/* Desktop collapse button - only visible on desktop */}
        <button
          className="lecture-sidebar-collapse-btn"
          onClick={onToggleSidebar}
          type="button"
          title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          style={{ display: window.innerWidth < 992 ? "none" : "flex" }}
        >
          {isSidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="lecture-sidebar-top">
        <div className="lecture-sidebar-header">Course sections</div>
        <button
          className="lecture-sidebar-toggle"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          type="button"
        >
          {isSidebarOpen ? "Hide sections" : "Show sections"}
        </button>
      </div>

      <div className="lecture-sidebar-body">
        {sections.map((section) => {
          const isOpen = openSectionId === section.sectionId;
          return (
            <div className="lecture-accordion" key={section.sectionId}>
              <button
                className="lecture-accordion-header"
                onClick={() => setOpenSectionId(isOpen ? "" : section.sectionId)}
                type="button"
              >
                <span className="lecture-accordion-title">{section.sectionTitle}</span>
                <ChevronDown size={18} className={isOpen ? "rotate" : ""} />
              </button>

              {isOpen && (
                <div className="lecture-accordion-body">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      className={`lecture-accordion-item ${item.id === activeLectureId ? "active" : ""}`}
                      onClick={() => {
                        onSelectLecture(item.id);
                        setIsSidebarOpen(false); // Close mobile drawer overlay on select
                      }}
                      type="button"
                    >
                      <span>{itemTitles[item.id] || item.title || "Loading..."}</span>
                      <small>{itemSummaries[item.id] || item.summary || "Loading..."}</small>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LectureSidebar;