import React , { Component } from 'react'
import './Section.css'
import NavHeader from '../NavHeader/NavHeader'
import Navicon from './NavIcon.svg'
import Header from '../Header/Header'

class Section extends Component {

	constructor(){
		super()
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
					<NavHeader clickHandle=  {this.toggleNav } />
				</div>
				<div className={ this.state.toggle ? "Content-Show" : "Content-Hide"}>
					<div className="Content-Header">
					 	<img src= {Navicon} className={ this.state.toggle ? "Icon-Hide" : "Icon-Show"} onClick = {this.toggleNav} />
					</div>
				</div>
			</div>
			)


	}





}

export default Section