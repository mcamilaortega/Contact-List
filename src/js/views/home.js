import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";
import "../../styles/home.css";
import { Link } from "react-router-dom"

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container justify-content-center">

      <div className="justify-content-right">
       <Link to = "/addcontact"> 
       <button className="btn btn-success">
        Add Contact
      </button>
       </Link>

      </div>
      <div>
      {store.contacts.map((item, index) => {
        return (
          <div key={index}>
            <ContactCard contact={item} index={index}/>
          </div>
        );
      })}

      </div>
     
    </div>
  );
};
