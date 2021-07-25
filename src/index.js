import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import './index.css'
// import App from './components/App/App'
import Router from './Router/Router'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        {/* <App /> */}
        <Router/>
        </BrowserRouter>
    
    </React.StrictMode>,
    document.getElementById('root')
)
