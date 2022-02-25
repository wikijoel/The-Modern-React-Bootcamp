class App extends React.Component {
	render(){
		return (
		<div>
			<Hello 
				to="Bob" 
				from="Jeff"
				bangs={4}
			/>
			<Hello 
				to="Pedro" 
			/>
		</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));