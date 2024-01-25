import React, { useEffect, useState } from "react"
import useLoadData, { PostsProps } from "@/pages/Posts/hooks/useLoadData"
import { useNavigate, useParams } from "react-router-dom"
import { routes } from "@/routes"
import Layout from "@/components/Layout"
import Post from "@/pages/Posts/Post"

export default function Posts() {
  const [posts, setPosts] = useState<PostsProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const params = useParams()

  const { loadPostsWithUserId } = useLoadData()

  useEffect(() => {
    if (params.userId) {
      setIsLoading(true)
      loadPostsWithUserId(params.userId)
        .then((res) => setPosts(res))
        .finally(() => setIsLoading(false))
    } else navigate(routes.home.path)
  }, [params.userId])

  return (
    <Layout isLoading={isLoading} isNoData={posts?.length === 0}>
      <h3>Posts</h3>
      <ul>{posts?.map((el) => <Post {...el} key={el.id} />)}</ul>
    </Layout>
  )
}
