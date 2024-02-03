import React from "react";
import propTypes from "prop-types";

const ContactCard = (props) => {
    const contact = props.object;
    return(
        <div className="card mt-4" style={{"maxWidth": "100%"}} >
            <div className="row g-0 pt-4">
                <div className="col-md-4 justify-content-center d-flex align-items-center pb-4">
                    <img src="https://images.pexels.com/photos/2308882/pexels-photo-2308882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{"height": "200px","width": "200px"}} className="img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{contact.full_name}</h5>
                        <p className="card-text"><i className="fa-solid fa-location-dot m-1"></i>{contact.address}</p>
                        <p className="card-text"><i className="fa-solid fa-phone-flip m-1"></i>{contact.phone}</p>
                        <p className="card-text"><i className="fa-solid fa-envelope m-1"></i>{contact.email}</p>
                    </div>
                </div>
                <div className= "col-md-2 text-end">
                    <button onClick={props.edit} className="mx-4"><i className="fa-solid fa-pencil"></i></button>                    
                    <button onClick={props.delete} className="mx-4"><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>                        
            
        
        </div>
    );
}
export default ContactCard;









