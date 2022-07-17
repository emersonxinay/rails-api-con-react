const API_URL = "https://compilando-react.herokuapp.com/api/v1/posts"

export interface Post {
  id: number;
  title:string;
  body: string;
}
interface NewPostPayload{
  title: string;
  body: string; 
}
export async function getPosts() {
  const requestInfo = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_URL}posts`, requestInfo);
  const posts = await response.json();
  console.log("API");
  console.log(posts);
  return posts; 
}

export async function createPost(payload: NewPostPayload) {
  const requestInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(API_URL + "posts", requestInfo);
  const post = await response.json();
  return post;
}