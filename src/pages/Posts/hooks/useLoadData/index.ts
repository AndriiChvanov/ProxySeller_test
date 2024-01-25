export interface PostsProps {
  id: number
  title: string
  userId: number
  body: string
}

export default function useLoadData() {
  async function loadPostsWithUserId(id: string): Promise<PostsProps[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    return res.json()
  }

  return { loadPostsWithUserId }
}
