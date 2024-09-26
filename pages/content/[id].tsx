import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { fetchContentById } from '../../lib/content';

const ContentPage = ({ content }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <h1>{content.title}</h1>
      </header>
      <main>
        {content.type === 'photo' && <img src={content.url} alt={content.title} />}
        {content.type === 'video' && <video src={content.url} controls />}
        {content.type === 'text' && <p>{content.text}</p>}
        <div>
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const content = await fetchContentById(id);

  return {
    props: {
      content,
    },
  };
};

export default ContentPage;
