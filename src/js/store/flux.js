const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[
				{
				  "full_name": "Maria Ortega",
				  "phone": 1234567890,
				  "email": "maria.ortega@gmail.com",
				  "address": "123 Main St."
				},
				{
				  "full_name": "John Smith",
				  "phone": 9876543210,
				  "email": "john.smith@example.com",
				  "address": "456 Oak Avenue"
				},
				{
				  "full_name": "Alice Johnson",
				  "phone": 5551234567,
				  "email": "alice.johnson@mail.com",
				  "address": "789 Elm Street"
				}
			  ]
		},
		actions: {
			getContacts:()=>{},
			addContacts:()=>{},
			deleteContacts:()=>{},
			editContacts:()=>{}
		}
	};
};

export default getState;
