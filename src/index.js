import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import './index.css'
// import App from './components/App/App'
import Router from './Router/Router'
import {store} from './store'
import {Provider} from 'react-redux'


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
        
        {/* <App /> */}
        <Router/>
        </BrowserRouter>
        </Provider>
    
    </React.StrictMode>,
    // <React.StrictMode>
    //     <BrowserRouter>
    //         <Router />
    //     </BrowserRouter>
    //     <Provider store={store}>
    //         <BrowserRouter>
    //             <App />
    //         </BrowserRouter>
    //     </Provider>
    // </React.StrictMode>,
    document.getElementById('root')
)
