import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import './home.css'

import firebase from '../../config/firebase'

import Navbar from '../components/navbar'
import PostCard from '../components/post-card'

function Home({ match }){

  const [posts, setPosts] = useState([])
  const [search, setSeach] = useState('')
  const postList = []

  const email = useSelector( state => state.userEmail)


  useEffect(() => {
    if(match.params.my){
      firebase.firestore().collection('posts').where('user', '==', email).get().then(async result => {
        await result.docs.forEach(doc => {
          if(doc.data().title.toLowerCase().indexOf(search.toLowerCase()) >= 0){
            postList.push({
              id: doc.id,
              ...doc.data()
            })
          }
        })
  
        setPosts(postList)
      })
    }else{
      firebase.firestore().collection('posts').get().then(async result => {
        await result.docs.forEach(doc => {
          if(doc.data().title.toLowerCase().indexOf(search.toLowerCase()) >= 0){
            postList.push({
              id: doc.id,
              ...doc.data()
            })
          }
        })
  
        setPosts(postList)
      })
    }
  })

  return (
    <>
      <Navbar />
      <div className="row mt-3 mx-2">
        <input type="text" className="form-control text-center" placeholder="Pesquisar" onChange={e => setSeach(e.target.value)} />
      </div>
      <div className="row p-3">
        {
          posts.map( item => {
            return <PostCard key={item.id} data={item}/>
          })
        }
      </div>
    </>
  )
}

export default Home