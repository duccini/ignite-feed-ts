import { Header } from './components/Header'

import { Sidebar } from  './components/Sidebar'
import { Post, PostProps } from './components/Post/index'

import styles from './App.module.css'

import './global.css'

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/duccini.png',
      name: 'Guilherme Duccini',
      role: 'CEO @d2w'
    },
    publishedAt: new Date('2022-09-20 20:54:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @rocketseat'
    },
    publishedAt: new Date('2022-05-02 20:00:00'),
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ]
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={ styles.wrapper }>

        <Sidebar />

        <main>
          { posts.map(post => {
            return (
              <Post
                key={ post.id }
                author={ post.author }
                publishedAt={ post.publishedAt }
                content={ post.content }
              />
            )
          })}
        </main>

      </div>
    </div>

  )
}

