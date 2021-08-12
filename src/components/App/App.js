import React from 'react'
import './App.css'
import Router from '../Router/Router'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import{useDispatch} from 'react-redux'
import { changeIsAuthed } from '../../actions/profile'

function App() {

    const dispatch= useDispatch()

    React.useEffect ( ()=>{
        firebase.auth().onAuthStateChanged((user) => {
            console.log('onAuthStateChange', { user })

            if(user) {
                dispatch(changeIsAuthed(true))
            } else{
                dispatch(changeIsAuthed(false))
            }
        })
    }, [])

    const handleOut=(e)=>{
        e.preventDefault()
        firebase.auth().signOut()
    }

    return (
        <div className="app">
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/chats">Chats</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/news">News</Link>
                 <a   onClick={handleOut}> Out</a>
            </div>

            <Router />
        </div>
    )
}

export default App
