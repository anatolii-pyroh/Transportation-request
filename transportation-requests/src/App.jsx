import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RequestForm from "./components/Request/RequestForm";
import RequestList from "./components/Request/RequestList";

function App() {
  const [requests, setRequests] = useState([]);

  const addNewRequest = (newRequest) => {
    console.log(newRequest);
    setRequests([...requests, newRequest]);
  };
  const deleteRequest = (request) => {
    setRequests(requests.filter((r) => r.id !== request.id));
    console.log("request deleted");
  };
  const editRequest = (requestPart, request) => {
    console.log(requestPart);
    console.log(request)
    if (requestPart === "from") {
      request.from = prompt(`Please enter new value of ${requestPart}`)
    }
    if (requestPart === "to") {
      request.to = prompt`Please enter new value of ${requestPart}`()
    }
    if (requestPart === "type") {
      request.type = prompt(`Please enter new value of ${requestPart}`)
    }
    if (requestPart === "date") {
      request.date = prompt(`Please enter new value of ${requestPart}`)
    }
    if (requestPart === "description") {
      request.description = prompt(`Please enter new value of ${requestPart}`)
    }
  };
  return (
    <div className='App'>
      <RequestForm addNewRequest={addNewRequest} />
      {requests.length > 0 && (
        <RequestList
          requests={requests}
          deleteRequest={deleteRequest}
          editRequest={editRequest}
        />
      )}
    </div>
  );
}

export default App;
