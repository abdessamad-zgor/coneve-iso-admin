import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { populateIdsThunk } from '../../store/thunks/productThunks';
import styles from './products.module';
import ProductsTable from '../../components/ProductsTable';

function Products() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(populateIdsThunk());
	}, []);

	return (
		<div className={styles.root}>
			<ProductsTable />
		</div>
	);
}

export default Products;
