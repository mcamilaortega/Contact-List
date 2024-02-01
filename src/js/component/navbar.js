import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-10">
			<Link to="/">
				<span className="navbar-brand mb-10 h1"> Maria Ortega Contact List </span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary me-5"> Add New Contact </button>
				</Link>
			</div>
		</nav>
	);
};
