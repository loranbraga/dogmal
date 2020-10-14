import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../../config/firebase'
import 'firebase/auth'

import Navbar from '../components/navbar'

import './lost-password.css'

function LostPassword(){

  const [email, setEmail] = useState()
  const [msg, setMsg] = useState()

  const forgetPassword = () => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        setMsg('Um email foi enviado à sua caixa de mensagem!')
      }).catch( error => {
        setMsg('Algo deu errado!')
      })
  }

  return (
    <>
      <Navbar />
      <div className="form-lost-password mx-auto">
        <form className="text-center form-login mx-auto mt-5">
          <h3 className="mb-5 font-weight-bold">Recuperação de senha</h3>
          <input type="email" className="form-control my-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

          <div className="msg my-3">
            <span>{msg}</span>
          </div>

          <button type="button" className="btn btn-lg btn-block btn-send" onClick={() => forgetPassword() }>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default LostPassword