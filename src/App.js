import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>

      <District name="Noakhali" special="bivag"></District>
      <District name="Bramonbaria" special="jodo akbar"></District>
      <District name="Cumilla" special="Moyna and Moti"></District>
    </div>

  );
}

function LoadPosts() {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Post:{posts.length} </h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props) {
  return (
    <div style={{ backgroundColor: 'lightblue', margin: '15px', border: '4px solid salmon' }}>
      <h2>Title: {props.title}</h2>
      <p>Body:{props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'lightgray',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}

function District(props) {
  const [power, setPower] = useState(1)

  const boostPower = () => {
    const newPower = power * 3;
    setPower(newPower);
  }

  return (
    <div style={districtStyle}>
      <h2>Name: {props.name} </h2>
      <p>Specialty:{props.special} </p>
      <h4>Power:{power} </h4>
      <button onClick={boostPower}>Booast The Power</button>
    </div>
  )
}

export default App;
