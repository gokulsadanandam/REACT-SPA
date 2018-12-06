import React , { Component } from 'react'
import Arrow from '../Images/arrow-left.svg'
import './NavHeader.css'

class NavHeader extends Component{

render(){
	return(
		<div className="NavHeader">
			<span>My App</span>
			<img onClick = { this.props.clickHandle } src={Arrow} alt="Hide Me!"/>
		</div>
	)
}
}

export default NavHeader