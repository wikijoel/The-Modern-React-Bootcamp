class App extends React.Component {
	render() {
		return (
			<div>
				<Friend
				name="Brandon"
				hobbies={['Piano', 'Bass', 'Singing']}
				/>

			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));