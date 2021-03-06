import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import AccountLogin from "./AccountLogin";


export default class NavigationBar extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>Let&#39;s Make Great Stories!</h1>
					<nav>
						<label htmlFor="toggle" className="toggle" data-open="Menu" data-close="Close"></label>
						<ul className="menu">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/archives-room">Archives</Link></li>
						</ul>
					</nav>
				</header>
				<h2>Welcome to Crowd Story!</h2>
				<AccountLogin/>
			</div>
		);
	}
}