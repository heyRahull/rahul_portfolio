import React from 'react';
import PageIntro from "../PageIntro";
import projectImage from "../../images/project-image.svg";
import NoteCard from "./NoteCard";
import notesData from "./notesData";

const NotesPage = () => {
  return (
    <div>
      <PageIntro
        image={projectImage}
        name="notesPage"
        heading="Technical Documentation & Notes"
        description="A private directory of my technical research, architecture diagrams, and handwritten notes converted to PDF for quick reference."
      />
      
      <div className="container container-center">
        <div style={styles.grid}>
        {notesData.map((note, index) => (
          <NoteCard key={index} {...note} />
        ))}
      </div>
      </div>
      
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '2rem',
    marginBottom : '2rem',
    width: '100%',
    maxWidth: '1000px'
  }
};

export default NotesPage;