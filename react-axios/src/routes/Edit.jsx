import  { useState, useEffect } from 'react'

import commentFetch from '../axios/config'

import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState()
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const {id} = useParams()

  const [comments, setComments] = useState([])

  const getComments = async() => {

      try {

          const response = await commentFetch.get(`/comments/${id}`)
          const data = response.data

          setEmail(data.email)
          setTitle(data.name)  
          setContent(data.body)

      } catch(error) {

          console.log(error)

      }

  }

  const editData = async(e) => {
    e.preventDefault()

    const comment = {title, email, content, userId: 1}

    await commentFetch.put(`/comments/${id}`, {
      body: comment
    })

  }

  useEffect(() => {
    getComments()
  }, [])


  return (
    <>
    <h1>Editando: {email}</h1>
    <div className='box-form'>
      <form onSubmit={(e) => editData(e)}>
        <div className="form-control">
          <label htmlFor='title'>Título:</label>
          <input
           type="text" 
           id='title' 
           placeholder='Digite o título:'
           onChange={(e) => setTitle(e.target.value)}
           value={title || ""}
           required
          />
        </div>
        <div className="form-control">
          <label htmlFor='email'>E-mail:</label>
          <input
           type="email" 
           id='email' 
           placeholder='Digite seu e-mail:'
           onChange={(e) => setEmail(e.target.value)}
           value={email || ""}
           required
           />
        </div>
        <div className="form-control">
          <label htmlFor='content'>Conteúdo:</label>
          <textarea
           name="content" 
           id="content" 
           placeholder='Digite aqui...' 
           cols={50} 
           rows={10}
           onChange={(e) => setContent(e.target.value)}
           value={content || ""}
           required>
            
           </textarea>
        </div>
        <input type="submit" value="Editar Comment" className='btn-submit'/>
      </form>
    </div>
    </>
  )
}

export default Edit