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
    <div>
      <h2>Content Editor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={handleSaveDraft}>
            Save Draft
          </button>
          <button type="button" onClick={handleSchedulePost}>
            Schedule Post
          </button>
          <button type="button" onClick={handlePreview}>
            {preview ? 'Hide Preview' : 'Show Preview'}
          </button>
        </div>
        <div>
          <button type="submit">Submit</button>
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
