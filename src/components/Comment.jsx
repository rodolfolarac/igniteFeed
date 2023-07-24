import { Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { ThumbsUp } from "@phosphor-icons/react"
import { Avatar } from "./Avatar"

export function Comment({ content, onDeleteComment }) {
    const handleDeleteComment = () =>{
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/rodolfolarac.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rodolfo Lara Cassaro</strong>
                            <time title="22 de Julho ás 10:55h" dateTime="2022-05-11 10:55:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button title="Deletar comentário">
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}