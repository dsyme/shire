import React from 'react';

const ContentViewer = ({ content }) => {
  return (
    <div style={{ fontFamily: 'Lato, sans-serif', color: '#333' }}>
      {content.type === 'photo' && <img src={content.url} alt={content.title} />}
      {content.type === 'video' && <video src={content.url} controls />}
      {content.type === 'text' && <p>{content.text}</p>}
      <div>
        <button
          style={{ padding: '5px 10px', margin: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
        >
          Like
        </button>
        <button
          style={{ padding: '5px 10px', margin: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
        >
          Comment
        </button>
        <button
          style={{ padding: '5px 10px', margin: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default ContentViewer;
