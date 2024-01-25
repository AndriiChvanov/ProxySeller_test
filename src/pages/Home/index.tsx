import React, { useEffect, useMemo, useState } from "react"
import User from "@/pages/Home/User"
import useLoadData, { UserProps } from "@/pages/Home/hooks/useLoadData"
import Layout from "@/components/Layout"
import SortButtons from "@/pages/Home/SortButtons"
import InputSearch from "@/pages/Home/InputSearch"
import classes from "@/components/Layout/style.module.scss"

export default function Home() {
  const [users, setUsers] = useState<UserProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [inputValue, setInputValue] = useState<string>("")
  const [searchData, setSearchData] = useState<UserProps[]>([])

  const { loadUsers } = useLoadData()

  const data = useMemo(() => {
    if (inputValue.length >= 1 || searchData.length > 0) return searchData
    else return users
  }, [users, searchData, inputValue])

  useEffect(() => {
    setIsLoading(true)

    loadUsers()
      .then((res) => setUsers(res))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <Layout isLoading={isLoading}>
      <SortButtons users={users} handleSort={setSearchData} />
      <InputSearch
        users={users}
        setUsers={setSearchData}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <h3>Users</h3>
      {data?.length <= 0 ? (
        <h5 className={classes.empty}>No results</h5>
      ) : (
        <ul>{data?.map((el) => <User {...el} key={el.id} />)}</ul>
      )}
    </Layout>
  )
}
