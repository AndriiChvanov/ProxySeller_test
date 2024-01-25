type Params = {
  userId: number
}

export const albums = {
  path: "/albums/:userId",
  url: (params: Params) => `/albums/${params.userId}`,
}
