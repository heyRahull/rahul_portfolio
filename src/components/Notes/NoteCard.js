import React from 'react';
import { FileText, ExternalLink, Download } from 'lucide-react';

const NoteCard = ({ title, category, path, uploadDate }) => {
  return (
    <div style={styles.fileCard}>
      <div style={styles.iconWrapper}>
        <FileText size={40} color="#ff4d4d" /> 
      </div>
      <div style={styles.fileInfo}>
        <h4 style={styles.fileTitle}>{title}</h4>
        <span style={styles.tag}>{category}</span>
        <p style={styles.date}>Added: {uploadDate}</p>
      </div>
      <div style={styles.actions}>
        <a href={path} target="_blank" rel="noreferrer" style={styles.actionLink}>
          <ExternalLink size={18} /> View
        </a>
      </div>
    </div>
  );
};

const styles = {
  fileCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    transition: 'transform 0.2s',
    cursor: 'default'
  },
  iconWrapper: { marginBottom: '1rem' },
  fileTitle: { margin: '0 0 0.5rem 0', fontSize: '1rem' },
  tag: { fontSize: '0.7rem', background: '#f0f0f0', padding: '2px 8px', borderRadius: '10px' },
  date: { fontSize: '0.75rem', color: '#888', marginTop: '8px' },
  actions: { marginTop: '1rem', borderTop: '1px solid #eee', width: '100%', paddingTop: '1rem' },
  actionLink: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }
};

export default NoteCard;