import React from 'react';

const ContentViewer = ({ content }) => {
  return (
    <div>
      {content.type === 'photo' && <img src={content.url} alt={content.title} />}
      {content.type === 'video' && <video src={content.url} controls />}
      {content.type === 'text' && <p>{content.text}</p>}
      <div>
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default ContentViewer;
