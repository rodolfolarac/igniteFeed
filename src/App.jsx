import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import "../src/components/global.css"
import styles from "../src/components/App.module.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/97470726?v=4",
      name: "Rodolfo Lara Cassaro",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 " },
      { type: "link", content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date("2023-07-23 14:12:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://mir-s3-cdn-cf.behance.net/user/115/1e171b213797731.61b8b49db233e.png",
      name: "Jean Carlos Rocha Amaral",
      role: "Designer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 " },
      { type: "link", content: '👉 <a href="#">jane.design/doctorcare</a> ' }
    ],
    publishedAt: new Date("2023-07-13 14:12:00")
  }
]


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

// Biblioteca de icones Phosphor icons 
//npm install phosphor-react