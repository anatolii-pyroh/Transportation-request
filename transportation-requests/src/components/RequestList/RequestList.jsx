import React from "react";
import classes from "./RequestList.module.css";
import RequestItem from "../RequestItem/RequestItem";
import ListGroup from "react-bootstrap/ListGroup";

const RequestList = (props) => {
  return (
    <div className={classes["request_list"]}>
        <ListGroup as='ol' numbered>
          {props.requests.map((request) => (
            <RequestItem key={request.id} request={request} delete={props.deleteRequest}/>
          ))}
        </ListGroup>
    </div>
  );
};

export default RequestList;
