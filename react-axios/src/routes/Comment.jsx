import { useState, useEffect } from "react"
import axios from 'axios'
import { use } from "react"
import { data } from "react-router-dom"
import { Link } from "react-router-dom"

import './Comment.css'

const Comment = () => {

  const [comments, setComments] = useState([])

  const getComment = async() => {
    try {

      const response = await axios.get("https://jsonplaceholder.typicode.com/comments")

      const data = response.data

      console.log(data)

      setComments(data)

    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getComment()
  }, [])

  return (
    <>
   <ul>
    {!comments ? (<p>Carregando...</p>) : (comments.map(comment => (
      <li key={comment.id} className="liComment">
          <h1>{comment.name}</h1>
          <h2>{comment.email}</h2>
          {comment.body}
          <Link to={`/comment/${comment.id}`}>Ler mais</Link>
      </li>
      )))
    }
   </ul>
   </>
  )
}

export default Comment