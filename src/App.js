import { useState } from 'react'
function App() {
  let [name, setName] = useState('Moe Yan Htun');
  let changeName = () => {
    setName('Yan Yan');
  }
  return (
    <div className="App">
      <button onClick={changeName}>ChangeName</button>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
