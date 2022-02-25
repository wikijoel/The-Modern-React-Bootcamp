class App extends React.Component {
	render(){
		return (
		<div>
			<Hello 
				to="Bob" 
				from="Jeff"
				bangs={4}
				img="https://www.facebook.com/photo/?fbid=10160139587045337&set=gm.5208426419176251"
			/>
		</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

// Comment lines
// Ctrl+K+C

// Uncomment lines
// Ctrl+K+U