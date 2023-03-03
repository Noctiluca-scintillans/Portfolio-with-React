//import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import "bootstrap/dist/css/bootstrap.min.css"; //calls in react bootstrap styling
//App is a wrapper that returns the parent Component
function App() {
	return (
		<div className="App">
			<Container />
		</div>
	);
}

export default App;
