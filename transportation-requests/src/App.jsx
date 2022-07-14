import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import RequestForm from './components/RequestForm'

function App() {

  const addNewRequest = (request) => {
    console.log(request)
  }
  
  return (
    <div className="App">
      <RequestForm addNewRequest={addNewRequest}/>
    </div>
  )
}

export default App
