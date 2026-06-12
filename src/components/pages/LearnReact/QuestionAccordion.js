import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

const QuestionAccordion = ({ title, description, code }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation(); // Prevents the accordion from closing when clicking copy
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.accordionItem}>
      {/* Accordion Header - Clickable to toggle */}
      <div style={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span style={styles.questionTitle}>{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {/* Accordion Content - Only visible when isOpen is true */}
      {isOpen && (
        <div style={styles.content}>
          <p style={styles.desc}>{description}</p>
          
          <div style={styles.codeContainer}>
            <button onClick={handleCopy} style={styles.copyBtn}>
              {copied ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
              <span style={{ marginLeft: '5px' }}>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
            
            <SyntaxHighlighter 
              language="javascript" 
              style={vscDarkPlus}
              customStyle={{ borderRadius: '8px', margin: 0, padding: '1.5rem' }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  accordionItem: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    marginBottom: '12px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    fontFamily: 'inherit'
  },
  header: {
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#f9f9f9',
    fontWeight: '600',
    color: '#333'
  },
  questionTitle: {
    fontSize: '1.1rem'
  },
  content: {
    padding: '20px',
    borderTop: '1px solid #eee',
    backgroundColor: '#fff'
  },
  desc: {
    marginBottom: '15px',
    color: '#555',
    lineHeight: '1.5'
  },
  codeContainer: {
    position: 'relative'
  },
  copyBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 5,
    display: 'flex',
    alignItems: 'center',
    background: '#444',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px'
  }
};

export default QuestionAccordion;