let objectArray = []

function createPost() {
  const initialTitle = document.getElementById("titulo-post")
  const initialAuthor = document.getElementById("autor-post")
  const initialContent = document.getElementById("conteudo-post")
  const initialImage = document.getElementById("imagem-post")
  const postContainer = document.getElementById("container-de-posts")

  const post = {
    title: initialTitle.value,
    author: initialAuthor.value,
    content: initialContent.value,
    image: initialImage.value
  }

  objectArray = [...objectArray, post]
  initialTitle.value = ""
  initialAuthor.value = ""
  initialContent.value = ""
  initialImage.value = ""

  if (post.title === "" && post.author === "" && post.content === "" && post.image === "") {
    alert("Escreva alguma coisa!")
  } else {
    postContainer.innerHTML += `<h1>${post.title}</h1>`
    postContainer.innerHTML += `<h3>Por: ${post.author}</h3>`
    postContainer.innerHTML += `<p>${post.content}</p>`
    postContainer.innerHTML += `<img src=${post.image}>`
  }
}