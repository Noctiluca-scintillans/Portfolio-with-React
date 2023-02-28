//import logo from "./logo.svg";
import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer";
import "bootstrap/dist/css/bootstrap.min.css"; //calls in react bootstrap styling
//App is a wrapper that returns the parent Component
function App() {
	return (
		<div className="App">
			<PortfolioContainer />
		</div>
	);
}

export default App;
