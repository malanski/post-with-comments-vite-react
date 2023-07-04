import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface ICommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: ICommentProps) => {
  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => { 
    onDeleteComment(content);
  }

  const handleLikeComment = () => {
    setLikeCount(state => state + 1)
  }

  return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src='https://github.com/shadowlik.png' alt=''/>

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <div>
              <header>
                <div className={styles.authorAndTime}>
                  <strong>Walker Lobato</strong>
                  <time title='27 de junho às 22:59'dateTime='2023-06-27 22:59:00'>
                    Cerca de 1h atrás
                  </time>
                </div>

                <button onClick={handleDeleteComment} title="Deletar comentário">
                  <Trash size={24}/>
                </button>
              </header>
            </div>

            <p>{content}</p>
          </div>

          <footer>
            <button className={styles.button} onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    );
}