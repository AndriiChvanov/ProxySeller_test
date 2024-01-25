import React, { memo } from "react"
import { PostsProps } from "@/pages/Posts/hooks/useLoadData"
import classes from "./style.module.scss"

function Post(props: PostsProps) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p className={classes.text}>{props.body}</p>
    </li>
  )
}

export default memo(Post)
