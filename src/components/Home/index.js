import React from 'react'
import Input from '../Input/Input'
import logo from '../../../src/logo.svg'
import '../App/App.css'

export default function Home(props) {
    const { age = 0, name = 'Unknown', onChangeProfileName } = props

    const handleNameSubmit = (newName) => {
        onChangeProfileName(newName)
    }

    return (
        <div className="app app__content app__content_row">
            <img src={logo} className="App-logo"></img>
            <div className="bordered">
                <p>
                    <b>Name: </b>
                    {name}
                </p>
                <p>
                    <b>Age: </b>
                    {age}
                </p>
            </div>

            <Input
                label="Имя"
                placeholder="Введите новое имя"
                onSubmit={handleNameSubmit}
            />
        </div>
    )
}
