/* eslint-disable eqeqeq */
import React from 'react';
import { useParams } from 'react-router-dom';
import contacts from './data';
import '../style/outlet.css';

const Chat = () => {
  const { id } = useParams();

  const selectedContact = contacts.find((contact) => contact.id === parseInt(id, 10));

  return (
    <div className="container">
      <div  className="d-flex flex-column align-items-start ms-5">
        <div>
          <h2 className="mt-5">Chat</h2>
        </div>
        <div className="border border-dark rounded my-2 mx-5">
          <div class="d-flex flex-row justify-content-between mt-4">
              <p className="ms-5"><strong>{selectedContact.name}</strong></p>
              <p className="text-secondary me-5">{selectedContact.time}</p>
          </div>
          <p className="text-secondary mx-5">{selectedContact.text}</p>
          <form>
            <div class="form-group d-flex flex-column align-items-start my-3 mx-5">
              <input type="text" class="form-control px-5" id="message-respond" placeholder="" />
            </div>
            <div class="d-flex flex-row justify-content-end">
              <button type="submit" class="btn btn-outline-primary mb-3 me-5 py-0">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Chat;
