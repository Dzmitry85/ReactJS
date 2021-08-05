import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../src/actions/profile'
import Input from '../src/input'

function Data(props) {
    const dispatch = useDispatch()
    const { name, age } = useSelector((state) => state.profile)

    const handleNameSubmit = (newName) => {


        dispatch(changeName(newName))
    }
   
    return (
        <div className="app app__content app__content_row">
            <div className="bordered">
                <p>Profile Page</p>
                <p>
                    <b>Name: </b>
                    {name}
                </p>
                <p>
                    <b>Age: </b>
                    {age}
                </p>
            </div>

            <Input onSubmit={handleNameSubmit} />
            
        </div>
    )
}

export default Data