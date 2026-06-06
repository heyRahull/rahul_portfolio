import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import lectureNotesData from "./lectureNotesData";

const LectureDetailPage = () => {
  const { id } = useParams();
  const lecture = lectureNotesData.find((item) => item.id === parseInt(id));

  if (!lecture) {
    return (
      <div className="container container-center" style={{ paddingTop: "5rem", textAlign: "center" }}>
        <h2>Lecture not found</h2>
        <Link to="/lectures" className="link link-primary">
          Back to Lectures
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <div className="container container-center" style={{ padding: "2rem" }}>
          <Link to="/lectures" style={styles.backButton}>
            <ArrowLeft size={20} style={{ marginRight: "0.5rem" }} />
            Back to Lectures
          </Link>
          
          <h1 style={styles.title}>{lecture.lectureName}</h1>
          <p style={styles.instructor}>👨‍🏫 Instructor: {lecture.instructor}</p>
          
          <div style={styles.metaInfo}>
            <span style={styles.categoryBadge}>{lecture.category}</span>
            <span style={styles.dateBadge}>{lecture.uploadDate}</span>
          </div>

          <p style={styles.description}>{lecture.description}</p>
        </div>
      </section>

      {/* Content */}
      <section style={styles.content}>
        <div className="container container-center">
          <h2 style={styles.contentTitle}>📚 Detailed Content</h2>
          
          <div style={styles.topicsGrid}>
            {lecture.detailedContent.map((topic, index) => (
              <article key={index} style={styles.topicCard}>
                <div style={styles.topicHeader}>
                  <span style={styles.topicNumber}>{index + 1}</span>
                  <h3 style={styles.topicTitle}>{topic.title}</h3>
                </div>
                <p style={styles.topicContent}>{topic.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section style={styles.footer}>
        <div className="container container-center">
          <Link to="/lectures" className="link link-primary">
            ← Back to All Lectures
          </Link>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    paddingTop: "5rem",
    minHeight: "100vh",
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#f9fafb",
    paddingBottom: "3rem",
    borderBottom: "2px solid #e5e7eb"
  },
  backButton: {
    display: "inline-flex",
    alignItems: "center",
    color: "#6c63ff",
    textDecoration: "none",
    fontWeight: "600",
    marginBottom: "1.5rem",
    fontSize: "0.9rem",
    transition: "color 0.3s ease"
  },
  title: {
    margin: "1rem 0 0.5rem 0",
    color: "#1e2327",
    fontSize: "2.5rem",
    fontWeight: "700",
    lineHeight: "1.2"
  },
  instructor: {
    margin: "0.5rem 0 1rem 0",
    color: "#6b7280",
    fontSize: "1.1rem"
  },
  metaInfo: {
    display: "flex",
    gap: "1rem",
    margin: "1.5rem 0",
    alignItems: "center",
    flexWrap: "wrap"
  },
  categoryBadge: {
    background: "#6c63ff",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    fontSize: "0.85rem",
    fontWeight: "600"
  },
  dateBadge: {
    background: "#e5e7eb",
    color: "#1e2327",
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    fontSize: "0.85rem",
    fontWeight: "600"
  },
  description: {
    margin: "1.5rem 0 0 0",
    color: "#6b7280",
    fontSize: "1.05rem",
    lineHeight: "1.7"
  },
  content: {
    padding: "3rem 0"
  },
  contentTitle: {
    margin: "0 0 2rem 0",
    color: "#1e2327",
    fontSize: "2rem",
    fontWeight: "700",
    textAlign: "center"
  },
  topicsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginBottom: "3rem"
  },
  topicCard: {
    backgroundColor: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "0.75rem",
    padding: "1.5rem",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
  },
  topicHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    marginBottom: "1rem"
  },
  topicNumber: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.5rem",
    height: "2.5rem",
    backgroundColor: "#6c63ff",
    color: "white",
    borderRadius: "0.5rem",
    fontWeight: "700",
    fontSize: "1.1rem",
    flexShrink: 0
  },
  topicTitle: {
    margin: "0",
    color: "#1e2327",
    fontSize: "1.1rem",
    fontWeight: "700"
  },
  topicContent: {
    margin: "0",
    color: "#6b7280",
    fontSize: "0.95rem",
    lineHeight: "1.6"
  },
  footer: {
    backgroundColor: "#f9fafb",
    padding: "2rem 0",
    borderTop: "2px solid #e5e7eb",
    textAlign: "center"
  }
};

export default LectureDetailPage;
