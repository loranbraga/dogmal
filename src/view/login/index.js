/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import './login.css'

import firebase from '../../config/firebase'
import logo from '../../resources/img/logo3.png'
import 'firebase/auth'

function Login () {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [msgType, setMsgType] = useState()

  const dispatch = useDispatch()

  const auth = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(result =>{
      setMsgType('ok')
      dispatch({type: 'LOGIN', userEmail: email})
    }).catch(error => {
      setMsgType('error')
    })
  }
  

  return (
    <div className="login-content d-flex aling-items-center">
      { useSelector(state => state.loggedUser) && <Redirect to="/" />}
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
        <img src={logo} alt=""/>
          {/* <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1> */}
        </div>

        <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />
        <button className="btn btn-lg btn-login btn-block my-2" type="button" onClick={() => { auth()}}>Entrar</button>

        <div className="text-white my-5 text-center">
          {msgType === 'ok' && <span><strong>Uau!</strong> Você entrou no sistema!</span>}
          {msgType === 'error' && <span><strong>Ah!</strong> Por favor, verifique se o seu email e senha estão corretos!</span>}
        </div>

        <div className="option-login mt-3 text-center">
          <Link to="lost-password" className="mx-2">Recuperar senha</Link>
          <Link to="new-user" className="mx-2">Quero me cadastrar</Link>
        </div>

      </form>
    </div>
  )
}

export default Login