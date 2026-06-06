import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const LectureSidebar = ({ sections, activeLectureId, onSelectLecture }) => {
  const [openSectionId, setOpenSectionId] = useState(sections[0]?.sectionId || "");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`lecture-sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="lecture-sidebar-course-title">
       System Design Course
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
                        setIsSidebarOpen(false);
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
