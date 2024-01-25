export interface AlbumProps {
  id: number
  title: string
  userId: number
}

export default function useLoadData() {
  async function loadAlbumsWithUserId(id: string): Promise<AlbumProps[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    return res.json()
  }

  return { loadAlbumsWithUserId }
}
