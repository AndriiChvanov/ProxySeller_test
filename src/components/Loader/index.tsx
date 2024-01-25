import React from "react"
import classes from "./style.module.scss"


export default function Loader() {
    return (
        <div className={classes.body}>
            <div className={classes.loader}/>
        </div>
    )
}