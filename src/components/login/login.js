import { Button, TextField } from '@material-ui/core'
import firebase from 'firebase'
import React from 'react'
import '../App/App.css'


export default function Login(props){

    const[email, setEmail]=React.useState('')
    const[password, setPassword]=React.useState('')
    const[error, setError]=React.useState('')
    const [isSigningUp, setIsSigningUp] = React.useState('')

    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleIsSigningUpChange = (e) => setIsSigningUp(e.target.checked)

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    const handleRegistr = async () => {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    const handleSubmit = () => {
      

        

        if (!email || !password) {
            setError('Заполните все поля')
            return
        }

       
        handleLogin()
    }

return <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}}>
        <p>Авторизация</p>

        <TextField 
      
       
        placeholder='Email' 
        value={email} 
        type='email' 
        onChange={handleChangeEmail}
        />
        
        <TextField 
        placeholder='Password'
         value={password} 
         type='text' 
         onChange={handleChangePassword}
         />

        <Button onClick={handleSubmit}>Login</Button>
        <Button onClick={handleRegistr}>Registration</Button>

      
            <p>{error}</p>

</div>

}