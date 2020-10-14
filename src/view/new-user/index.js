import React, { useState } from 'react'
import './newUser.css'

import firebase from '../../config/firebase'
import logo from '../../resources/img/logo3.png'
import 'firebase/auth'

import Navbar from '../components/navbar/index'

function NewUser(){

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [msgType, setMsgType] = useState()
  const [msg, setMsg] = useState()
  const [loading, setLoading] = useState(false)

  const createUser = () => {
    setLoading(true)
    setMsgType(null)

    if(!email || !password){
      setMsgType('error')
      setMsg('Você não preencheu todos os campos!')
      setLoading(false)
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        setLoading(false)
        setMsgType('ok')
      })
      .catch(error => {
        setLoading(false)
        setMsgType('error')
        setMessageError(error)
      })
      
    
  }

  const setMessageError = (error) => {
    console.log(error.code)
    switch(error.code){
      case 'auth/email-already-in-use': 
        setMsg('Email já cadastrado!')
        break;
      case 'auth/invalid-email':
        setMsg('Formato de email inválido, cheque-o por favor!')
        break; 
      case 'auth/weak-password':
        setMsg('A senha deve ter pelo menos 6 digitos!')
        break;
      default:
        setMsg('Alguma coisa deu errado, tente novamente mais tarde!')
        break;
    }
  }

  return (
    <>
      <Navbar />  
      <div className="form-new-user mx-auto">
        <form className="text-center form-login mx-auto mt-5">
          <img src={logo} alt=""/>
          <h1 className="h3 mb-3 text-black font-weght-bold">Cadastro</h1>

          <input type="email" className="form-control my-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className="form-control my-2" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>

          {
            loading ? <div class="spinner-border text-secondary mt-3 mb-5" role="status"><span class="sr-only">Loading...</span></div>
            : <button type="button" className="btn btn-lg mt-3 mb-5 btn-new-user" onClick={() => createUser()}>Cadastrar</button>
          }
          
          <div className="text-back my-5 text-center">
            {msgType === 'ok' && <span><strong>Uau!</strong> Usuário cadastrado com sucesso.</span>}
            {msgType === 'error' && <span><strong>Ops!</strong> {msg}</span>}
          </div>
          
        </form>
      </div>
    </>
  )
}

export default NewUser