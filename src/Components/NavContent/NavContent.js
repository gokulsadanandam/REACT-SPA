import React , { Component } from 'react';
import { NavLink,HashRouter } from 'react-router-dom'
import './NavContent.css'

class NavContent extends Component { 

render(){

	return(
		<HashRouter>
		<div className="NavContent-Tile">
			<NavLink to={this.props.route} >{this.props.name}</NavLink>
		</div>
		</HashRouter>
		)
}
}

export default NavContent