/* eslint-disable eqeqeq */
import React from 'react';
import contacts from './data';
import '../style/outlet.css';

const Chat = () => {

  return (
    <div className="container">
      <div  className="d-flex flex-column align-items-start ms-5">
        <div>
          <h2 className="mt-5">Chat</h2>
        </div>
       
          {contacts.map((contact) => (
            <div className="border border-dark rounded my-2">
              <div class="d-flex flex-row justify-content-between mt-4">
                  <p className="ms-5"><strong>{contact.name}</strong></p>
                  <p className="text-secondary me-5">{contact.time}</p>
              </div>
              <p className="text-secondary mx-5">{contact.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Chat;
