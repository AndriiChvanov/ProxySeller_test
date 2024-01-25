export interface UserProps {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export default function useLoadData() {
  async function loadUsers(): Promise<UserProps[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json()
  }

  return { loadUsers }
}
