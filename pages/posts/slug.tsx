import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface SlugPageProps {}

export default function SlugPage(props: SlugPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>Slug page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}

export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    props: {},
  };
}
