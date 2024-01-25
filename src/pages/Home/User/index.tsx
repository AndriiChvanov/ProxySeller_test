import React, { memo } from "react"
import classes from "./style.module.scss"
import { Link } from "react-router-dom"
import { routes } from "@/routes"
import { UserProps } from "@/pages/Home/hooks/useLoadData"

function User(props: UserProps) {
  return (
    <li className={classes.body}>
      <h3>{props.username}</h3>
      <div className={classes.link_row}>
        <Link to={routes.albums.url({ userId: props.id })} className={classes.link}>
          Albums
        </Link>
        <Link to={routes.posts.url({ userId: props.id })} className={classes.link}>
          Posts
        </Link>
      </div>
    </li>
  )
}

export default memo(User)
