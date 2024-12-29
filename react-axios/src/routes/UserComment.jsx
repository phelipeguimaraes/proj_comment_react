import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import commentFetch from "../axios/config"

import './UserComment.css'

const UserComment = () => {

  const [comment, setComment] = useState({})

  const {id} = useParams()

  const getComment = async() => {
    try {

      const response = await commentFetch.get(`/comments/${id}`)
      const data = response.data

      setComment(data)

    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getComment()
  },[])

  return (
    <div className="box-user">
      {!comment.name ? <p>Carregando...</p> : <div>
          <li className="liComment">
            <h1>{comment.name}</h1>
            <h2>{comment.email}</h2>
            {comment.body}
          </li>
        </div>
      }
    </div>
  )
}

export default UserComment