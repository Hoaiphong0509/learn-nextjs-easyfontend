import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/dist/client/link';
import * as React from 'react';

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  console.log('Posts:', posts);

  return (
    <div>
      <h1>List</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // console.log('Static props');

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  // console.log(data);

  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};
