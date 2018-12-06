import React , { Component } from 'react'
import './Section.css'
import NavHeader from '../NavHeader/NavHeader'
import Navicon from '../Images/NavIcon.svg'
import Tile from '../NavContent/NavContent'
import { Route , HashRouter } from 'react-router-dom'
import footer from '../Footer/Footer'
import TrainFinder from '../TrainFinder/TrainFinder'


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
					<div className="NavContent">
						<Tile name="Train Finder" route="/trainfinder"/>	
						<Tile name="Train Fare Enquiry" route="/trainfare" />	
						<Tile name="PNR Status" route="/pnrstatus" />	
					</div>
				</div>
				<div className={ this.state.toggle ? "Content-Hide" : "Content-Show"}>
					<div className="Content-Header">
					 	<img alt="Not Found!" src= {Navicon} className={ this.state.toggle ? "Icon-Hide" : "Icon-Show"} onClick = {this.toggleNav} />
					 	<span>Welcome to MyApp</span>
					</div>
					<HashRouter>
						<div className="Content-Section">
							<Route path="/trainfinder" component={ TrainFinder } />
							<Route path="/trainfare" component={ footer } />
							<Route path="/pnrstatus" component={ footer } />
						</div>
					</HashRouter>
				</div>
			</div>
			)
	}
}

export default Section