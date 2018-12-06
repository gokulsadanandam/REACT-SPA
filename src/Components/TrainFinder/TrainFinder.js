import React , { Component } from 'react';
import './TrainFinder.css'

class TrainFinder extends Component {

constructor(){
	super()
	this.state = {
		From : '',
		To : '',
		Date:'',
		trains : [],
		show : false		
	}
	this.setFrom = this.setFrom.bind(this)
	this.getTrains = this.getTrains.bind(this)
	this.setTo = this.setTo.bind(this)
	this.SetDate = this.SetDate.bind(this)
} 

getTrains(e){
	e.preventDefault()
	fetch('https://api.railwayapi.com/v2/between/source/' + this.state.From + '/dest/'+ this.state.To + '/date/' + this.state.Date+ '/apikey/339c0397lq/')
	// fetch('https://api.railwayapi.com/v2/between/source/' + 'MS' + '/dest/'+ 'MDU' + '/date/' + '06-12-2018' + '/apikey/339c0397lq/')
      .then(response => response.json())
      .then(data =>
      		 {
      		 	this.setState({trains : data.trains,show:true})
  			  }
  			);
}
setFrom(e){
	this.setState({
		From: e.target.value
	})
}

setTo(e){
	this.setState({
		To:e.target.value
	})
}

SetDate(e){
	let date = e.target.value.split("-").reverse()
	let modifieddate = date.join("-")
	this.setState({
		Date:modifieddate
	})

}

render(){

	return(
		<div className="train-finder">
			<form>
				<div className="train-from">
					<label htmlFor="from">From:</label>
					<input type="text" name="to" onChange={ this.setFrom } placeholder="Enter Station Code" />
				</div>
				<div className="train-from">
					<label htmlFor="to">To:</label>
					<input type="text" name="from" onChange={ this.setTo } placeholder="Enter Station Code" />
				</div>
				<div className="train-from">
					<label htmlFor="date">Date:</label>
					<input type="date" name="date" onChange={ this.SetDate } />
				</div>
				<div className="train-from">
					<input type="submit" name="submit" onClick = { this.getTrains} />
				</div>
			</form>
			<div className={this.state.show ? "table-holder" : "table-none"}>
			<table border="1">
				<thead>
				<tr>
					<td>Name</td>
					<td>Number</td>
					<td>Departure Time</td>
					<td>Arrival Time</td>
					<td>Duration</td>
				</tr>
				</thead>
				<tbody>
					{this.state.trains.map((train)=>{
						return(
							<tr>
								<td>{train.name}</td>
								<td>{train.number}</td>
								<td>{train.src_departure_time}</td>
								<td>{train.dest_arrival_time}</td>
								<td>{train.travel_time}</td>
							 </tr>
						)
					})}
				</tbody>
			</table>
			</div>
		</div>
		)
}
}

export default TrainFinder