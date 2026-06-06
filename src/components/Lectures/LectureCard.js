import React from "react";
import { Link } from "react-router-dom";

const LectureCard = ({ id, lectureName, instructor, category, uploadDate, description }) => {
  return (
    <Link to={`/lectures/${id}`} style={{ textDecoration: "none" }}>
      <article className="showcase-list container container-center" style={styles.card}>
        <h2 style={styles.lectureName}>{lectureName}</h2>
        <p style={styles.instructor}>👨‍🏫 {instructor}</p>
        
        <div style={styles.meta}>
          <span style={styles.category}>{category}</span>
          <span style={styles.date}>{uploadDate}</span>
        </div>

        <p style={styles.description}>{description}</p>

        <div style={styles.footer}>
          <span style={styles.readMore}>View Full Lecture →</span>
        </div>
      </article>
    </Link>
  );
};

const styles = {
  card: {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)"
    }
  },
  lectureName: {
    margin: "0 0 0.5rem 0",
    color: "#1e2327",
    fontSize: "1.5rem",
    fontWeight: "700"
  },
  instructor: {
    margin: "0.25rem 0 1rem 0",
    color: "#6b7280",
    fontSize: "0.95rem"
  },
  meta: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
    alignItems: "center",
    flexWrap: "wrap"
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
  description: {
    color: "#6b7280",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    margin: "1rem 0"
  },
  footer: {
    marginTop: "1.5rem",
    paddingTop: "1rem",
    borderTop: "1px solid #e5e7eb"
  },
  readMore: {
    color: "#6c63ff",
    fontWeight: "600",
    fontSize: "0.9rem"
  }
};

export default LectureCard;
