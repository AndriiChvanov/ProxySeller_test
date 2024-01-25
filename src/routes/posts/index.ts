type Params = {
    userId: number
}

export const posts = {
    path: "/posts/:userId",
    url: (params: Params) => `/posts/${params.userId}`
}