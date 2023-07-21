import { Post } from "./Post"
import { Header } from "./components/Header"

import "../src/components/global.css"
import styles from "../App.module.css"


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>

      </div>
    </div>
  )
}

