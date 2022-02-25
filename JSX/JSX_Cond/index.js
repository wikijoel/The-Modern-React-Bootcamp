function getNumber(){
	return Math.floor(Math.random() * 10) + 1;
}

// class NumPicker extends React.Component {
// 	render(){
// 		const num = getNumber()
// 		return(
// 			<div>
// 				<h1>Your Number is: {num}</h1>
// 				<p>{num === 7 ? 'Lucky number': 'Ok'}</p>
// 			</div>
// 		);
// 	}
// }

class NumPicker extends React.Component {
	render(){
		const num = getNumber();
		let msg;
		if (num === 7){
			msg = <h2>Lucky number!</h2>
		} else {
			msg = <h2>Normal number</h2>
		}
		return(
			<div>
				<h1>Your Number is: {num}</h1>
				{msg}
			</div>
		);
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));

// Comment lines
// Ctrl+K+C

// Uncomment lines
// Ctrl+K+U