import React, { useState } from 'react';

const ContentEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [draft, setDraft] = useState(false);
  const [schedule, setSchedule] = useState('');
  const [preview, setPreview] = useState(false);

  const handleSaveDraft = () => {
    setDraft(true);
    // Save draft logic here
  };

  const handleSchedulePost = () => {
    // Schedule post logic here
  };

  const handlePreview = () => {
    setPreview(!preview);
  };

  const handleSubmit = () => {
    // Submit content logic here
  };

  return (
    <div style={{ fontFamily: 'Lato, sans-serif', color: '#333' }}>
      <h2>Content Editor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', transition: 'border-color 0.3s' }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#999'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#ccc'}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', transition: 'border-color 0.3s' }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#999'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#ccc'}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleSaveDraft}
            style={{ padding: '5px 10px', margin: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
          >
            Save Draft
          </button>
          <button
            type="button"
            onClick={handleSchedulePost}
            style={{ padding: '5px 10px', margin: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
          >
            Schedule Post
          </button>
          <button
            type="button"
            onClick={handlePreview}
            style={{ padding: '5px 10px', margin: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
          >
            {preview ? 'Hide Preview' : 'Show Preview'}
          </button>
        </div>
        <div>
          <button
            type="submit"
            style={{ padding: '5px 10px', margin: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#333', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
          >
            Submit
          </button>
        </div>
      </form>
      {preview && (
        <div>
          <h3>Preview</h3>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default ContentEditor;
