import styles from './App.module.css';
import './global.css';

import { Post, IPost } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/WalkerBrum.png',
      name: 'Walker Lobato',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }  
    ],
    publishedAt: new Date('2023-06-29 20:39:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/shadowlik.png',
      name: 'Henrique Marques',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'jane.design/doctorcare' }  
    ],
    publishedAt: new Date('2023-06-27 21:19:00')
  },
]

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id} 
              post={post}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
