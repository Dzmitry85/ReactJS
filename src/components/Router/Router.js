import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import '../App/App.css'
import Chat from '../Chat/Chat'

import Chats from '../Chats/Chats'
import Profile from '../Profile/Profile'
import Home from '../Home/Home'
import News from '../News/Info'
import login from '../login/login'
import { useSelector } from 'react-redux'



const PrivateRoute = (props) => {
    // const isAuthed = useSelector((state) => state.profile.isAuthed)
const isAuthed =useSelector(state=>state.profile.isAuthed)
    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}




export default function Router() {
    return (
        <Switch>
            <Route
                path="/"
                exact
                render={() => (
                    <React.Fragment>
                        
                        
                        <Home />

                        
                    </React.Fragment>
                )}
            />

            <PrivateRoute exact path="/chats" component={Chats} />

            <PrivateRoute path="/chats/:chatId" component={Chat} />

            <PrivateRoute path="/profile">
                <Profile />
            </PrivateRoute>

            <Route path="/login" component={login} />

            <Route patt="/news" component={News} />          

            <Route>
                <p>404: not found</p>
            </Route>
        </Switch>
    )
}
