// import { parallelLimit } from 'async'
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import App from '../components/App/App'
import Data from '../profile'
import Chats from '../components/Chats/Chats'
import '../components/App/App.css'
import logo from '../../src/logo.svg'



export default function Router () {
    return (
    <Switch>
        <div>
           <img src={logo}></img>
            <div className='top'>
            <Link to='/'>Home</Link>
            <Link to='/chats'>Chats</Link>
            <Link to='/profile'>Profile</Link>
            </div>
        
        {/* <Route  path='/' 
                exact component={App} /> */}
             

        {/* <Route  exact
                path='/chats'
               render={(params)=>{
                   return <p>Chats Page</p>
               }}                
            /> */}
            <Route exact path="/chats" component={Chats} />

        <Route  exact
                path='/chats/:chatId'
               render={({match})=>{
                   return <p>Chats Page, {match.params.chatId}</p>
               }}                
            />
            
        <Route path='/profile'
            exact component={Data}/>   
           
             {/* <p>Profile Page</p>
            </Route>         */}

            {/* <Route >
            <p> 404- not found</p>
            </Route>   */}
            
            
            </div>    
    </Switch>
    )
}