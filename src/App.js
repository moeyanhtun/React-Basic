import { useState } from 'react'
import NavBar from './components/navbar/index'
import Body from './components/body/index'
function App() {
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
      <NavBar />
      <Body posts={posts} />
    </>
  );
}

export default App;
