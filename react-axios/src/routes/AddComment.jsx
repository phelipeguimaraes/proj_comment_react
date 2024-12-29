import React from 'react'
import './AddComment.css'

const AddComment = () => {
  return (
    <>
    <h1>Adicionar comentário</h1>
    <div className='box-form'>
      <form>
        <div className="form-control">
          <label htmlFor='title'>Título:</label>
          <input type="text" id='title' placeholder='Digite o título:'/>
        </div>
        <div className="form-control">
          <label htmlFor='email'>E-mail:</label>
          <input type="email" id='email' placeholder='Digite seu e-mail:'/>
        </div>
        <div className="form-control">
          <label htmlFor='content'>Conteúdo:</label>
          <textarea name="content" id="content" placeholder='Digite aqui...' cols={50} rows={10}></textarea>
        </div>
        <input type="submit" value="Adicionar" className='btn-submit'/>
      </form>
    </div>
    </>
  )
}

export default AddComment