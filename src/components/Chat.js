/* eslint-disable eqeqeq */
import React from 'react';
import '../style/outlet.css';

const Chat = () => {

  return (
    <div className="container">
      <div  className="d-flex flex-column align-items-start ms-5">
        <div>
          <h2 className="mt-5">Chat</h2>
        </div>
        <div className="border border-dark rounded my-5">
          <div class="d-flex flex-row justify-content-between mt-4">
            <p className="ms-5"><strong>Jerry Mathers </strong></p>
            <p className="text-secondary me-5">14:05</p>
          </div>
          <p className="text-secondary mx-5">This was the message that was sent to you this afternoon at 14:05 by Jerry Mathers</p>
        </div>  
      </div>
    </div>
  );
};
export default Chat;
