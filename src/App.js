import { useState } from 'react'
import NavBar from './components/navbar/index'
import Body from './components/body/index'
import Model from './components/Model/index'
import PostForm from './components/postForm/index'

function App() {
  let [showModel, setShowModel] = useState(false);
  let [posts, setPost] = useState([
    {
      id: 1,
      title: 'post 1'
    },
    {
      id: 2,
      title: 'post 2'
    },
    {
      id: 3,
      title: 'post 3'
    }
  ])

  return (
    <>
      <NavBar setShowModel={setShowModel} />
      <Body posts={posts} />
      {showModel && <Model>
        <PostForm setShowModel={setShowModel} />
      </Model>}
    </>
  );
}

export default App;
