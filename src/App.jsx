import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import "../src/components/global.css"
import styles from "../src/components/App.module.css"


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Rodolfo Lara"
            content="Texto do post"
          />
          <Post
            author="Geny Lara"
            content="Texto do post"
          />
          <Post
            author="Jean Carlos Rocha Amaral"
            content="Texto do post"
          />
        </main>
      </div>
    </div>
  )
}

// Biblioteca de icones Phosphor icons 
//npm install phosphor-react