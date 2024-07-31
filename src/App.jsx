import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './features/products/productsSlice';
import { NavigationBar } from './components';
import IndexPage from './pages/page';
import FooterComponent from './components/Footer/index'

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(fetchProducts());
    }, [dispatch]);

    return (
		<div className="App">
			<NavigationBar />
			<IndexPage />
      <FooterComponent />
		</div>
    );
}
export default App;
