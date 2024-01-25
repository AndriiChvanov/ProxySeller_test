import React, { useCallback } from "react"
import debounce from "@/utils/debounce"
import { UserProps } from "@/pages/Home/hooks/useLoadData"

interface Props {
  inputValue: string
  setInputValue: (e: string) => void
  setUsers: (user: UserProps[]) => void
  users: UserProps[]
}

export default function InputSearch(props: Props) {
  const handleChange = useCallback(
    (text: string) => {
      props.setUsers(
        props.users?.filter((user) => {
          return user.username.toLowerCase().includes(text.toLowerCase())
        }),
      )
    },
    [props.users, props.setUsers],
  )

  const searchUser = useCallback(debounce(handleChange, 500), [
    props.users,
    props.setUsers,
    props.inputValue,
  ])
  return (
    <input
      value={props.inputValue}
      onChange={(e) => {
        searchUser(e.target.value)
        props.setInputValue(e.target.value)
      }}
      placeholder={"Search people by username"}
    />
  )
}
