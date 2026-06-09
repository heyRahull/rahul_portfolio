import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const LectureSidebar = ({ sections, activeLectureId, onSelectLecture }) => {
  const [openSectionId, setOpenSectionId] = useState(sections[0]?.sectionId || "");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dynamically calculate the course title based on the IDs present inside the dataset
  const firstItemId = sections[0]?.items[0]?.id || "";
  
  let courseDisplayName = "System Design Course";
  if (firstItemId.startsWith("rsd-")) {
    courseDisplayName = "React System Design";
  } else if (firstItemId.startsWith("node-") || firstItemId.includes("nodesdata")) {
    courseDisplayName = "Node.js Core Architecture";
  }

  return (
    <div className={`lecture-sidebar ${isSidebarOpen ? "open" : ""}`}>
      {/* Dynamic Header Badge */}
      <div className="lecture-sidebar-course-title">
        {courseDisplayName}
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
                      <span>{item.title}</span>
                      <small>{item.summary}</small>
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