import React , { Component } from 'react'
import Arrow from '../Section/arrow-left.svg'
import './NavHeader.css'

class NavHeader extends Component{

	constructor(props){
		super(props)
		console.log(this.props)
	}

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