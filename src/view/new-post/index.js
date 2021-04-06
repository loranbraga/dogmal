import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Navbar from '../components/navbar'

import firebase from '../../config/firebase'

import './new-post.css'


function NewPost(){

  const [msgType, setMsgType] = useState()
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [image, setImage] = useState()
  const userEmail = useSelector(state => state.userEmail)

  //Firebase
  const storage = firebase.storage()
  const db = firebase.firestore()

  // useEffect(() => {

  // })

  const sendPost = () => {
    setLoading(true)

    storage.ref(`images/${image.name}`).put(image)
      .then(() => {
        db.collection('posts').add({
          title,
          description,
          category,
          date,
          hour,
          user: userEmail,
          public: true,
          views: 0,
          image: image.name,
          created_at: new Date()
        }).then(() => {
          setMsgType('ok')
          setLoading(false)
        }).catch(() => {
          setMsgType('error')
          setLoading(false)
        })
      })

      
  }


  return (
    <>
      <Navbar /> 
      <div className="col-12 form-new-post mx-auto">
        <div className="row">
          <h3 className="mx-auto font-weight-bold mt-5">Novo post</h3>
        </div>

        <form className="mx-auto">
          <div className="form-group">
            <label>Título</label>
            <input type="text" className="form-control" onChange={e => setTitle(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Descrição</label>
            <textarea rows="4" className="form-control" onChange={e => setDescription(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Categoria</label>
            <select className="form-control" onChange={e => setCategory(e.target.value)}>
              <option disabled selected value>Selecione uma categoria</option>
              <option>Pessoal</option>
              <option>Games</option>
              <option>Trabalho</option>
              <option>Academia</option>
              <option>Relacionamento</option>
            </select>
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label>Data</label>
              <input type="date" className="form-control" onChange={e => setDate(e.target.value)}/>
            </div>
            <div className="col-6">
              <label>Hora</label>
              <input type="time" className="form-control" onChange={e => setHour(e.target.value)}/>
            </div>
          </div>

          <div className="form-group">
            <label>Upload</label>
            <input type="file" className="form-control" onChange={e => setImage(e.target.files[0])}/>
          </div>

          <div className="row">
            {
              loading ? <div className="spinner-border text-secondary mt-3 mb-5 mx-auto" role="status"><span class="sr-only text-center">Loading...</span></div>
              : <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-publish" onClick={() => sendPost()}>Publicar</button>
            }
          </div>

          <div className="text-back my-5 text-center">
            {msgType === 'ok' && <span><strong>Uau!</strong> Post cadastrado com sucesso.</span>}
            {msgType === 'error' && <span><strong>Ops!</strong> Algo deu errado!</span>}
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPost