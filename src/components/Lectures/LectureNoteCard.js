import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const LectureNoteCard = ({ 
  lectureName, 
  instructor, 
  category, 
  uploadDate, 
  notes 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="showcase-list container container-center">
      <div 
        style={styles.lectureHeader}
        onClick={toggleExpand}
      >
        <div style={styles.lectureInfo}>
          <h2 style={styles.lectureName}>{lectureName}</h2>
          <p style={styles.instructor}>👨‍🏫 {instructor}</p>
          <div style={styles.meta}>
            <span style={styles.category}>{category}</span>
            <span style={styles.date}>{uploadDate}</span>
          </div>
        </div>
        <div style={styles.chevron(isExpanded)}>
          <ChevronDown size={24} />
        </div>
      </div>

      {isExpanded && (
        <div style={styles.notesContainer}>
          <hr style={styles.divider} />
          <div style={styles.notesGrid}>
            {notes.map((note, index) => (
              <div key={index} style={styles.noteItem}>
                <h4 style={styles.noteTitle}>{note.title}</h4>
                <p style={styles.noteContent}>{note.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

const styles = {
  lectureHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: "2rem",
    transition: "background-color 0.3s ease",
    borderRadius: "0.5rem"
  },
  lectureInfo: {
    flex: 1
  },
  lectureName: {
    margin: "0 0 0.5rem 0",
    color: "#1e2327",
    fontSize: "1.5rem",
    fontWeight: "700"
  },
  instructor: {
    margin: "0.25rem 0",
    color: "#6b7280",
    fontSize: "0.95rem"
  },
  meta: {
    display: "flex",
    gap: "1rem",
    marginTop: "0.75rem",
    alignItems: "center"
  },
  category: {
    background: "#6c63ff",
    color: "white",
    padding: "0.35rem 0.75rem",
    borderRadius: "1rem",
    fontSize: "0.75rem",
    fontWeight: "600"
  },
  date: {
    color: "#9ca3af",
    fontSize: "0.85rem"
  },
  chevron: (isExpanded) => ({
    display: "flex",
    alignItems: "center",
    transition: "transform 0.3s ease",
    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
    color: "#6c63ff"
  }),
  notesContainer: {
    backgroundColor: "#f9fafb",
    padding: "0 2rem 2rem 2rem"
  },
  divider: {
    margin: "0 0 1.5rem 0",
    border: "none",
    borderTop: "1px solid #e5e7eb"
  },
  notesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem"
  },
  noteItem: {
    backgroundColor: "white",
    padding: "1.25rem",
    borderRadius: "0.5rem",
    border: "1px solid #e5e7eb",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    ":hover": {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transform: "translateY(-2px)"
    }
  },
  noteTitle: {
    margin: "0 0 0.5rem 0",
    color: "#1e2327",
    fontSize: "1rem",
    fontWeight: "700"
  },
  noteContent: {
    margin: "0",
    color: "#6b7280",
    fontSize: "0.9rem",
    lineHeight: "1.5"
  }
};

export default LectureNoteCard;
