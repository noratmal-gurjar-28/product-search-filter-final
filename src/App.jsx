import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './features/products/productsSlice';
import { NavigationBar } from './components';
import IndexPage from './pages/page';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(fetchProducts());
    }, [dispatch]);

    return (
		<div className="App">
			<NavigationBar />
			<IndexPage />
		</div>
    );
}
export default App;
