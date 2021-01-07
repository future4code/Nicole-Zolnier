export const goToSignUp = (history) => {
    history.push("/cadastrar")
}

export const goToFeed = (history) => {
    history.push("/feed")
}

export const goToPostDetails = (history, id) => {
    history.push(`/feed/post/${id}`)
}

export const goToLogin = (history) => {
    history.push("/login")
}