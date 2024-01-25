import React, { useCallback } from "react"
import { UserProps } from "@/pages/Home/hooks/useLoadData"
import classes from "./style.module.scss"

interface Props {
  users: UserProps[]
  handleSort: (e: (state: UserProps[]) => UserProps[]) => void
}

export enum SortType {
  ASC,
  DESC,
}

export default function SortButtons(props: Props) {
  const handleSort = useCallback(
    (type: SortType) => {
      const direction = type === SortType.ASC ? 1 : -1
      const sorted = props.users.sort((a, b) => {
        if (a.username === b.username) {
          return 0
        }
        return a.username > b.username ? direction : direction * -1
      })

      props.handleSort((state: UserProps[]) => {
        // для обновления стейта
        if (state?.length > 0) {
          return []
        } else return sorted
      })
    },
    [props.handleSort, props.users],
  )

  return (
    <div className={classes.inputs}>
      <button onClick={() => handleSort(SortType.ASC)}>Sort ASC</button>
      <button onClick={() => handleSort(SortType.DESC)}>Sort DESC</button>
    </div>
  )
}
