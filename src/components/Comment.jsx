import { Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { ThumbsUp } from "@phosphor-icons/react"
import { Avatar } from "./Avatar"
import { useState  } from "react"

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () =>{
        onDeleteComment(content)
    }

    const handleLikeComment = () =>{
        //método de sempre mostrar a renderização em tempo real, já que no
        //React por padrão é mostrado o valor "anterior"
        setLikeCount((state) => {
            return state + 1;
        })
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
                    <button onClick={handleLikeComment} title="Deletar comentário">
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}