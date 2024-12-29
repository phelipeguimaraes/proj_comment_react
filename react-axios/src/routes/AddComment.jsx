import { useState } from 'react'

import commentFetch from '../axios/config'

import { useNavigate } from 'react-router-dom'

import './AddComment.css'

const AddComment = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [email, setEmail] = useState()
  const [content, setContent] = useState()

  const sendData = async(e)  => {
    e.preventDefault()
    

    const post = {title, email, content, userId: 1}

    await commentFetch.post("/comments", {
      body: post
    })

    navigate("/")
    
  }

  return (
    <>
    <h1>Adicionar comentário</h1>
    <div className='box-form'>
      <form onSubmit={(e) => sendData(e)}>
        <div className="form-control">
          <label htmlFor='title'>Título:</label>
          <input
           type="text" 
           id='title' 
           placeholder='Digite o título:'
           onChange={(e) => setTitle(e.target.value)}
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
           required>
            
           </textarea>
        </div>
        <input type="submit" value="Adicionar" className='btn-submit'/>
      </form>
    </div>
    </>
  )
}

export default AddComment