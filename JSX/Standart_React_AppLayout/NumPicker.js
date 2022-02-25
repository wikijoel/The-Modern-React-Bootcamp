function getNumber(){
	return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
	render(){
		const num = getNumber();
		let msg;
		if (num === 7){
			msg = <h3>Lucky number!</h3>
		} else {
			msg = <h3>Normal number</h3>
		}
		return(
			<div>
				<h1>Your Number is: {num}</h1>
				{msg}
			</div>
		);
	}
}

// Comment lines
// Ctrl+K+C

// Uncomment lines
// Ctrl+K+U