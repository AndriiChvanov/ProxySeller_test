import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useLoadData, { AlbumProps } from "@/pages/Albums/hooks/useLoadData"
import { routes } from "@/routes"
import Layout from "@/components/Layout"
import Album from "@/pages/Albums/Album"

export default function Albums() {
  const [albums, setAlbums] = useState<AlbumProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const params = useParams()

  const { loadAlbumsWithUserId } = useLoadData()

  useEffect(() => {
    if (params.userId) {
      setIsLoading(true)
      loadAlbumsWithUserId(params.userId)
        .then((res) => setAlbums(res))
        .finally(() => setIsLoading(false))
    } else navigate(routes.home.path)
  }, [params.userId])

  return (
    <Layout isLoading={isLoading} isNoData={albums?.length <= 0}>
      <h3>Albums </h3>
      <ul>
        {albums.map((el) => (
          <Album {...el} key={el.id} />
        ))}
      </ul>
    </Layout>
  )
}
