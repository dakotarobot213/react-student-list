import logo from "./logo.svg";
import "./App.css";
import College from "./components/College";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
				/>
				<h1>Student Info App</h1>
				<p>
					Edit <code>src/App.jsx</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<College />
			</header>
		</div>
	);
}

export default App;
