import { useState, useEffect } from "react"
import commentFetch from "../axios/config"
import { Link } from "react-router-dom"

import './Comment.css'

const Comment = () => {

  const [comments, setComments] = useState([])

  const getComment = async() => {
    try {

      const response = await commentFetch.get("/comments")

      const data = response.data

      console.log(response.data)

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
    {comments.length === 0 ? (<p>Carregando...</p>) : (comments.map(comment => (
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