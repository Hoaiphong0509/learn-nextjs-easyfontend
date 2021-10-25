import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import * as React from 'react'

interface Post {
  id: string
  title: string
}

export interface PostDetailPageProps {
  post: any
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const router = useRouter()

  if (router.isFallback)
    return <div style={{ fontSize: '30px', textAlign: 'center' }}>Loading....</div>

  if (!post) return null

  return (
    <div>
      <h1>Post detail page</h1>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await res.json()

//   return {
//     paths: data.map((post: any) => ({ params: { postsId: post.id.toString() } })),
//     fallback: 'blocking',
//   }
// }

// export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
//   context: GetStaticPropsContext
// ) => {
//   console.log('GET Static props ', context.params?.postsId)
//   const postsId = context.params?.postsId

//   if (!postsId) return { notFound: true }

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postsId}`)
//   const data = await res.json()

//   // console.log(data);

//   return {
//     props: {
//       post: data,
//     },
//     revalidate: 5,
//   }
// }
