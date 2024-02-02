import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contact card";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="">
      {store.contacts.map((item, index) => {
        return (
          <div key={index}>
            <ContactCard />
          </div>
        );
      })}
    </div>
  );
};
