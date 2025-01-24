import {useState, useEffect} from 'react'
import { useSelector, useDispatch, connect} from 'react-redux'




function App() {
  {/*state variables here*/}
  
  let [artId, setArtId] = useState (12720)
  let [date, setData] = useState ({})
  
  useEffect(() => {
    document.title= 'Welcome to Artworld'
  }, [artId])
{/* Return JSX down here */}
}

const mapStateToProps = (state) => ({
  objectId: state.data.objectId

  
})

useEffect(() => {
  dispatch(fetchData())
}, [props.objectId, dispatch])


export default connect(mapStateToProps)(App)