import { useState } from 'react'
function App() {
  let [name, setName] = useState('Moe Yan Htun');
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
  let changeName = () => {
    setName('Yan Yan');
  }
  let deletePost = (id) => {
    setPost((prevState) => prevState.filter(post => post.id !== id));
  }
  return (
    <div className="App">
      <button onClick={changeName}>ChangeName</button>
      <h1>{name}</h1>
      <ul>
        {!!posts.length && posts.map((post) => (
          <li key={post.id}>{post.title}
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}{
          !posts.length && <p>There are no post</p>
        }
      </ul>
    </div>
  );
}

export default App;
