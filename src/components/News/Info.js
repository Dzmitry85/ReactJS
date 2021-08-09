import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NEWS_REQUEST_STATUS } from '../../reducers/news'
import { fetchNews, fetchNewsByAxios, setNewsList } from '../../actions/news'
import { API_URL } from '../App/constants'
import '../App/App.css'
import logo from '../../logo.svg'


export default function News(props){
    // const [news, setNews] = React.useState([])
    // const [isLoading, setIsLoading]=React.useState(false)
    // const [isError, setIsError]=React.useState(false)


    const { status, list } = useSelector((state) => state.news)
    const dispatch = useDispatch()

    const loadData = () => dispatch(fetchNews())
    // const loadDataByAxios = () => dispatch(fetchNewsByAxios())
    const clearData = () => dispatch(setNewsList([]))

    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <p>Loading...</p>
    }

    // const loadData = () => {
    //         setIsLoading(true)
    //         setIsError(false)
        
    //         fetch(API_URL)
    //             .then((response) => {
    //                 console.log('success', { response })
        
    //                 if (!response.ok || response.status !== 200) {
    //                     throw Error('Something went wrong')
    //                 }
        
    //                 return response.json()
    //             })
    //             .then((responseJson) => {
    //                 console.log('second then in promise', { responseJson })
        
    //                 setNews(responseJson)
    //                 setIsLoading(false)
    //             })
    //             .catch((error) => {
    //                 console.error('error', error)
        
    //                 setIsLoading(false)
    //                 setIsError(true)
    //             })
    //     }

    // const clearData = ()=>setNews([])
      
    //     if(isLoading) {
    //         return <p>LOADING........</p>
    //     }


//   let newsBlock = {status !== NEWS_REQUEST_STATUS.ERROR ?
//                     (
//        <ol className="bordered">
//                     {list.map((newsItem) => (     //// news-list
//                         <li key={newsItem.id}>
//                             <p>{newsItem.title}</p>
//                         </li>
//                     ))}
//                 </ol> 
//   ):(<p style={{color:'red'}}>ERROR</p>)
//                     }
    return <div>
         <img src={logo} className="App-logo"></img>
        <p>News page</p>
        <Button onClick={loadData}>Загрузка данных</Button>
          
            <Button onClick={clearData}>Очиститка данных</Button>
            
            
            {/* {newsBlock} */}
              
                 {status !== NEWS_REQUEST_STATUS.ERROR ?
                    (
       <ol className="bordered">
                    {list.map((newsItem) => (     //// news-list
                        <li key={newsItem.id}>
                            <p>{newsItem.title}</p>
                        </li>
                    ))}
                </ol> 
  ):(<p style={{color:'red'}}>ERROR</p>)
                    }
        
                
        
        </div>
}