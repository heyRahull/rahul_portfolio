import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = (props) => {
  // If the note has a courseId, it's an interactive web syllabus.
  // Otherwise, it falls back to a traditional target link (like a static PDF file asset).
  const isInteractiveCourse = !!props.courseId;
  const destinationPath = isInteractiveCourse 
    ? `/lectures/${props.courseId}` 
    : props.path;

  return (
    <div className="col-md-4 card_individual">
      <div className="card mb-4 shadow-sm">
        {/* Course Header Thumbnail Image */}
        <img src={props.image} width="100%" height="225" alt={props.title} />
        
        <div className="card-body card-color">
          {/* Tag & Title block */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-secondary style-tag" style={{ fontSize: '0.75rem' }}>
              {props.category}
            </span>
            {/* <small className="text-muted" style={{ fontSize: '0.8rem' }}>
              {props.uploadDate}
            </small> */}
          </div>
          
          <h4 className="card-title" style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1e2327' }}>
            {props.title}
          </h4>
          
          <p className="card-text excerpt" style={{ minHeight: '72px' }}>
            {props.excerpt}
          </p>
          
          <div className="d-flex justify-content-between align-items-center mt-3">
            {isInteractiveCourse ? (
              /* Use React Router Link component for internal application navigation */
              <Link 
                className="card-btn card-primary text-center w-100" 
                to={destinationPath}
                style={{ textDecoration: 'none' }}
              >
                Open Notes
              </Link>
            ) : (
              /* Standard anchor link fallback for standard static public assets (PDFs) */
              <a 
                className="card-btn card-primary text-center w-100" 
                href={destinationPath}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                View PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;