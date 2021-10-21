import { useRouter } from 'next/dist/client/router';
import React, { useState, useEffect } from 'react';
// import Header from '@/components/common/header';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/common/header'), { ssr: false });

interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [post, setPost] = useState({});

  const router = useRouter();

  console.log('Query:', router.query);
  const postsId = Number(router.query?.postsId);

  useEffect(() => {
    if (!postsId) return;

    (async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postsId}`);
      const data = await response.json();

      setPost(data);
    })();
  }, [postsId]);

  const handleNextClick = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          postsId: postsId + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div>
      About page
      <Header />
      <h1>{post && JSON.stringify(post)}</h1>
      <button onClick={handleNextClick}>next click</button>
    </div>
  );
}

export async function getStaticProps() {
  console.log('Get static props');

  return {
    props: {},
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
