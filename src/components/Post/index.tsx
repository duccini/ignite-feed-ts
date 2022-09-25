import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.css'

interface Author {
  name: string;
  role: string;
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link';
  content: string
}

export interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[]
}

export function Post({ author, publishedAt, content }:PostProps) {
  const [comments, setComments] = useState([ 
    'Post muito bacana, hein?!' 
  ])

  const [newCommentText, setNewCommentText] = useState('')

  function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('O comentário deve ter 2 ou mais caracteres')
  }

  function handleCreateNewComment(event:FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(commentToDelete: string) {
    const commentsExtractDelete = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsExtractDelete)
  }

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentEmpty = newCommentText.length == 0

  return (
    <article className={ styles.post }>

      <header>
        <div className={ styles.author }>
          <Avatar 
            avatarClass="postAvatar"
            src={ author.avatarUrl } 
            alt="github.com/duccini"
          />

          <div className={ styles.authorInfo}>
            <strong>{ author.name }</strong> 
            <span>{ author.role }</span>
          </div>
        </div>

        <time 
          title={ publishedDateFormatted } 
          dateTime={publishedAt.toISOString()}>
            { publishedDateRelativeToNow }
        </time>  
      </header>

      <div className={ styles.content}>

        { content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={ line.content }>{ line.content }</p>
          } else if(line.type === 'link') {
            return <p key={ line.content }><a href='#'>{ line.content }</a></p>
          }
        })}

      </div>

      <form onSubmit={ handleCreateNewComment } className={ styles.commentForm }>
        <strong>Deixe seu Feedback</strong>

        <textarea 
          placeholder='Deixe seu comentário' 
          value={ newCommentText }
          onChange={ handleNewCommentChange }
          required
          onInvalid={ handleNewCommentInvalid }
        />

        <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
      </form>

      <div className={ styles.commentList}>
        
        { comments.map(comment => {
          return (
            <Comment 
              key={ comment } 
              content={ comment } 
              onDeleteComment={deleteComment} 
            />
          )
        })}
        
      </div>

    </article> 
  )
}

