import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Display from './Components/display'

function App() {
  const [title,setTitle] = useState("")
  const [des,setDes] = useState("")
  const [cat,setCat] = useState("")

  const handle=async (e)=>{
    e.preventDefault();

   const {success} = await axios.post("http://localhost:8000/posts/save",{
      title:title,
      description:des,
      category:cat
    })

    if (success) {
      console.log("Post saved");
    }
  }
  

  return (
    <div className="App">
      <form onSubmit={handle}>
        <input 
          type="text"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
            console.log(title)
          }}
          placeholder="titiel"
        />
        <input 
        type="text"
          value={des}
          onChange={(e)=>{
            setDes(e.target.value);
            console.log(des)
          }}
          placeholder="des"
        />
        <input 
        type="text"
          value={cat}
          onChange={(e)=>{
            setCat(e.target.value);
            console.log(cat)
          }}
          placeholder="cat"
        />
        <button>Submit</button>
      </form>
      <Display />
    </div>
  )
}

export default App
