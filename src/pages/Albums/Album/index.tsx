import React, { memo } from "react"
import { AlbumProps } from "@/pages/Albums/hooks/useLoadData"

function Album(props: AlbumProps) {
  return (
    <li>
      <h3>{props.title}</h3>
    </li>
  )
}

export default memo(Album)
