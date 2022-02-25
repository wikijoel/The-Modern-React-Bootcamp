function getMood() {
	const moods = ['Angry', 'Sad', 'Happy', 'Hungry', 'Sleepy'];
	return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
	render(){
		return(
			<div>
				<h1>My Current Mood is: {getMood()}</h1>
				
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));

// Comment lines
// Ctrl+K+C

// Uncomment lines
// Ctrl+K+U