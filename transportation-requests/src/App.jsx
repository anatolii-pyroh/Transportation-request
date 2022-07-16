import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RequestForm from "./components/RequestForm/RequestForm";
import RequestList from "./components/RequestList/RequestList";

function App() {
  const [requests, setRequests] = useState([]);

  const addNewRequest = (newRequest) => {
    console.log(newRequest);
    setRequests([...requests, newRequest]);
  };
  const deleteRequest = (request) => {
    setRequests(requests.filter(r => r.id !== request.id))
    console.log("request deleted")
  }

  return (
    <div className='App'>
      <RequestForm addNewRequest={addNewRequest} />
      {requests.length > 0 && <RequestList requests={requests} deleteRequest={deleteRequest}/>}
    </div>
  );
}

export default App;
