import React from 'react'
import logo from '../../../src/logo.svg';
// import TextField from '@material-ui/core/TextField'
// import usePrevious from '../../hooks/usePrevious'
// import Message from '../Message/Message'
import { AUTHORS } from './constants'
import Chat from '../Chat/Chatitem'
import SimpleList from '../SimpleList';
// 
import './App.css'



function App() {
    // const [messageList, setMessageList] = React.useState([])
    // const [inputValue, setInputValue] = React.useState('')

    // const timer = React.useRef(null)

    // const prevMessageList = usePrevious(messageList)

    // React.useEffect(() => {
    //     if (
    //         prevMessageList?.length < messageList.length &&
    //         messageList[messageList.length - 1].author !== AUTHORS.BOT
    //     ) {
    //         timer.current = setTimeout(
    //             () =>
    //                 setMessageList((currentMessageList) => [
    //                     ...currentMessageList,
    //                     { author: AUTHORS.BOT, text: 'Сообщение бота' },
    //                 ]),
    //             1500
    //         )
    //     }
    // }, [messageList, prevMessageList])

    // React.useEffect(() => {
    //     return () => {
    //         clearTimeout(timer.current)
    //     }
    // }, [])

    // const handleMessageChange = (e) => {
    //     setInputValue(e.target.value)
    // }

    // const handleMessageSubmit = (e) => {
    //     e.preventDefault()

    //     setMessageList((currentMessageList) => [
    //         ...currentMessageList,
    //         { author: AUTHORS.ME, text: inputValue },
    //     ])
    //     setInputValue('')
    // }
    // 
    
    //   
//     const Chat=()=>(
// <div>
//             <div className="top">
           
//                 {messageList.map((message, index) => (
//                     <Message
//                         key={index}
//                         text={message.text}
//                         author={message.author}
//                     />
//                 ))}
//             </div>

//             <form className="app__form bordered" onSubmit={handleMessageSubmit}>
//                 <TextField
//                     fullWidth
//                     required
//                     autoFocus
//                     className="child__text-field bordered"
//                     variant="outlined"
//                     label="Сообщение"
//                     placeholder="Введите сообщение"
//                     value={inputValue}
//                     onChange={handleMessageChange}
//                 />
//                 <button>Отправить</button>
//             </form>
//             </div>
//     )


    return (
        <div className="app">
              <img src={logo} className="App-logo" alt="logo" />
              <div className='box'>
                  <SimpleList/>
     
               <div className='chatBox'><Chat/></div>
                </div>
              
                  
              
          
        </div>
    )
}

export default App
