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
  const editRequest = (whichPartEdit, editedPart, request) => {
    console.log(whichPartEdit);
    console.log(editedPart);
    console.log(request);
    if (whichPartEdit === "from") {
      request.from = editedPart;
    }
    if (whichPartEdit === "to") {
      request.to = editedPart;
    }
    if (whichPartEdit === "type") {
      request.type = editedPart;
    }
    if (whichPartEdit === "date") {
      request.date = editedPart;
    }
    if (whichPartEdit === "description") {
      request.description = editedPart;
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
