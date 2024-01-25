import React, { ReactNode } from "react"
import Loader from "@/components/Loader"
import classes from "./style.module.scss"

interface Props {
  isLoading: boolean
  isNoData?: boolean
  children: ReactNode
}

export default function Layout(props: Props) {
  if (props.isLoading) return <Loader />
  if (props.isNoData)
    return (
      <div className={classes.body}>
        <h3 className={classes.empty}>NO DATA</h3>
      </div>
    )
  else return <div className={classes.body}>{props.children}</div>
}
