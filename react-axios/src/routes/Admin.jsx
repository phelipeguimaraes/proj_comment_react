import { useState, useEffect } from "react"
import commentFetch from "../axios/config"
import './Admin.css'
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const Admin = () => {

    

    const {id} = useParams()

    const [comments, setComments] = useState([])

    const getComments = async() => {

        try {

            const response = await commentFetch.get("/comments")
            const data = response.data

            setComments(data)

        } catch(error) {

            console.log(error)

        }

    }

    const deleteComment = async(id) => {
        await commentFetch.delete(`/comments/${id}`)
        const filtedComment = comments.filter(comment => comment.id !== id)
        setComments(filtedComment)
        
    }

    useEffect(() => {
        getComments()
    }, [])


    

  return (
        <ul>
        {comments.map(comment => (
            <div className="admin-box" key={comment.id}>
                <li>
                    <h2>{comment.email}</h2>
                </li>
                <button className="edit-btn"><Link to={`/edit/${comment.id}`}>Editar</Link></button>
                <button className="delete-btn" onClick={() => deleteComment(comment.id)}>Excluir</button>
            </div>
        ))}
        </ul>
  )
}

export default Admin