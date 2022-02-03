import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice';
import ordersReducer from './slices/orderSlice';

export default configureStore({
	reducer: {
		orders: ordersReducer,
		products: productsReducer,
	},
});
