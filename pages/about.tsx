import { useRouter } from 'next/dist/client/router';
import React, { useState, useEffect } from 'react';
// import Header from '@/components/common/header';
import dynamic from 'next/dynamic';
import { MainLayout } from '@/components/layout';

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

  return <div>About page</div>;
}

AboutPage.Layout = MainLayout;

// export async function getStaticProps() {
//   console.log('Get static props');

//   return {
//     props: {},
//   };
// }

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
