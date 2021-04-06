import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../../../config/firebase'

import './post-card.css'

function PostCard({ data}){
  
  const [urlImagem, setUrlImagem] = useState()

  useEffect(() => {
    if(data.image){
      firebase.storage().ref(`images/${data.image}`).getDownloadURL()
      .then( url => setUrlImagem(url))
    }
    // console.log(key)
  }, [urlImagem])

  return (
    <div className="col-md-3 col-sm-12 mt-4">
      <img id="imgCard" src={urlImagem ? urlImagem : "https://via.placeholder.com/600X300"} alt="Teste" className="card-img-top img-card" />

      <div className="card-body">
        <h5>{data.title}</h5>
        <p className="card-text text-justify">
          {data.description}
        </p>

        <div className="row d-flex align-items-center footer-card">
          <div className="col-6">
            <Link to={`/post/${data.id}`} className="btn btn-sm btn-details">+ detalhes</Link>
          </div>
          <div className="col-6">
            <i className="far fa-eye"></i>
            <span> {data.views}</span>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default PostCard