import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Navbar from '../components/navbar'

import firebase from '../../config/firebase'

import './new-post.css'


function NewPost(){
  return (
    <>
      <Navbar /> 
      <div className="col-12 form-new-post mx-auto">
        <div className="row">
          <h3 className="mx-auto font-weight-bold mt-5">Novo post</h3>
        </div>

        <form>
          <div className="form-group">
            <label>Título</label>
            <input type="text" className="form-control"/>
          </div>

          <div className="form-group">
            <label>Descrição</label>
            <textarea rows="4" className="form-control"/>
          </div>

          <div className="form-group">
            <label>Categoria</label>
            <select className="form-control">
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
              <input type="date" className="form-control"/>
            </div>
            <div className="col-6">
              <label>Hora</label>
              <input type="time" className="form-control"/>
            </div>
          </div>

          <div className="form-group">
            <label>Upload:</label>
            <input type="file" className="form-control"/>
          </div>

          <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-publish">Publicar</button>
        </form>
      </div>
    </>
  )
}

export default NewPost