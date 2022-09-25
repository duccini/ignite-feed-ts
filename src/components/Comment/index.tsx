import { useState } from 'react'

import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './styles.module.css'
import { Avatar } from '../Avatar'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }:CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount(state => {
      return ++state
    })
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={ styles.comment }>

      <Avatar 
        avatarClass="commentAvatar" 
        src="https://avatars.githubusercontent.com/u/31144107?v=4" 
        alt="github.com/duccini"
      />

      <div className={ styles.commentBox}>

        <div className={ styles.commentContent}>

          <header>

            <div className={ styles.authorAndTime }>
              <strong>Guilherme Duccini</strong>
              <time title="11 de maio às 11h13" dateTime="2022-05-12">Cerca de 1h atrás.</time> 
            </div>

            <button title='Deletar comentário' onClick={ handleDeleteComment }>
              <Trash size={24} />
            </button>

          </header>

          <p>{ content }</p>

        </div>

        <footer>
          <button onClick={ handleLikeComment }>
            <ThumbsUp />
            Aplaudir <span>{ likeCount }</span>
          </button>
        </footer>

      </div>

    </div>
  )
}