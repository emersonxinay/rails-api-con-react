# README


Los pasos que voy siguiendo:
```bash 
rails new rails-react-movile --api 
```
```bash
cd rails-react-movile
```
```bash
rails g scaffold Post title body:text
```
```bash
rails db:migrate
```

-- nos vamos a gemfile 
```ruby
gem "rack-cors" 
```
-- en consola 
´´bash
bundle install
``
-- descomentar la siguiente linea en:  config/enviroments/production.rb 
```ruby
  config.force_ssl = true
```
-- descomentar la siguentes lineas en: config/initializers/cors.rb y cambiar 

origins "example.com" a origins "*"
```ruby 
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "*"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
``` 
--- ahora vamos a canfigurar la ruta en config/routes.rb 

```ruby
Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :posts

    end
  end
end

```
--- ahora vamos a crear carpetas y mover el archivo posts_controller.rb dentro de app/controller/api/v1/posts_controller.rb 

```ruby 
  #dentro del archivo modificamos la clase porque se movio el archivo 

  class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: api_v1_posts_url(@post)
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :body)
    end
end

```

-- ahora vamos a generar secret 

```bash 
cd rails secret 
´´´

-- y ahora lo vamos a copiar desde consola  
´´´bash 
EDITOR="code --wait" rails credentials:edit 

```

te va salir con codigo en tu misma consola y ese codigo lo vas a copiar y pegar luego en el archivo que se abrio en tu editor, ahora lo cierras y se abra guardado y en tu consola aparecerá el siguiente mensaje. 

```bash 
File encrypted and saved
```

--- ahora vamos a ir a consola de rails de la siguiente manera desde el terminal solo para comprobar 
```bash
RAILS_ENV=production rails c
```
-- luego en consola corremos y nos vamos a la ruta localhost:3000/api/v1/posts

```bash 
rails s 
```

-- AHORA ABRIMOS POSTAM O INSOMIA PARA PROBAR QUE SE ESTA CONECTANDO CORRECTAMENTE 

hacemos nuestra petición POST porque vamos a crear datos en la siguiente ruta: 
http://localhost:3000/api/v1/posts

{
	"post": {
		"title": "El gran Xinay",
		"body": "Los misterios de xinay en su día a día"
	}
}

--- y si ahora verificamos nuestra pagina nuevamente, notaras que se cargo los datos 

--- _::::::: ahora vamos a instalar desde consola una dependencia para el proyecto para REACT 

```bash
npm i expo 

```
```bash
npm i -g expo-cli
```
```bash
expo init blog 
```
--- al hacer este ultimo comando se va ir creando react y vas a seleccionar 
black (Typescript) 
y con eso ya terminara todo okey

--- ahora vamos nuevamente desde consola y vamos a entrar a la carpeta que se creo 

```bash 
cd blog
```
```bash 
yarn add react-native-paper
```
```bash 
yarn add react-native-vector-icons react-native link react-native-vector-icons
```
una vez todo okey, ahora solo nuevamente desde consola 

```bash 
yarn start
```
te va salir que presiones en letras 
a para android 
i para ios 
w para web 

---- ahora vamos a crear carpeta rails  blog/app/api , blog/app/screens, blog/app/components

y dentro de blog/app/screens/Blogcreen.tsx 

puedes usar un atajo de rfce para que se autocomplete 
```tsx  
import React from 'react'

function BlogScreens() {
  return (
    <div>BlogScreens</div>
  )
}

export default BlogScreens
```
y dentro de blog/app/components/BlogPost.tsx 
puedes usar un atajo de rfce para que se autocomplete 
```tsx
import React from 'react'

function BlogPost() {
  return (
    <div>BlogPost</div>
  )
}

export default BlogPost
```

y dentro de blog/app/screens/NavBar.tsx 
puedes usar un atajo de rfce para que se autocomplete 
```tsx 
import React from 'react'

function NavBar() {
  return (
    <div>NavBar</div>
  )
}

export default NavBar
```

y dentro de blog/app/api/BlogAPI.ts 
```ts
const API_URL = "http://localhost:3000/api/v1"

export interface Post {
  id: number;
  title:string;
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

export async function createPost(payload: 'NewPostPayload') {
  const requestInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  };
  const response = await fetch(API_URL + "posts", requestInfo);
  const post = await response.json();
  return post;
}
```













