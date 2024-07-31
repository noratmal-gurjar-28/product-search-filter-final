import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { store } from './store';
import ProductDetails from './pages/ProductDetail';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/product/:productId" element={<ProductDetails />} />
			</Routes>
		</Router>
	</Provider>
);
