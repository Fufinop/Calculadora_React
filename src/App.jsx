import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

function App() {
	return (
		<div className="h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r ">
			<Header />
			<Calculator />
			<Footer />
		</div>
	);
}

export default App;

