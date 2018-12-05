import React , { Component } from 'react'
import './Section.css'
import Arrow from './arrow-left.svg'

class Section extends Component {

	constructor(){
		super()
		console.log(this)
		this.state = {
			toggle : true
		}
		this.toggleNav = this.toggleNav.bind(this)
	}

	toggleNav(){
				this.setState({
					toggle: !this.state.toggle
				})
		}

	render(){

		

		return(
			<div className="Section">
				<div className={ this.state.toggle ? "Nav-Show" : "Nav-Hide"}>
					<div className="NavHeader">
						<span>My App</span>
						<img onClick = { this.toggleNav } src={Arrow} alt="Hide Me!"/>
					</div>
					<div className="NavContent">
					</div>
				</div>
				<div className={ this.state.toggle ? "Content-Show" : "Content-Hide"}>
				</div>
			</div>
			)


	}





}

export default Section