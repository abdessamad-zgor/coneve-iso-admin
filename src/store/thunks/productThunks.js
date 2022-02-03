import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addProductThunk = createAsyncThunk('product/addProduct', async (data) => {
	const response = axios.post(
		`${
			process.env.NODE_ENV == 'production' ? 'https://quiet-shelf-27868.herokuapp.com' : process.env.HOST
		}/api/products`,
		data
	);
	return response.json().then((data) => {
		return data;
	});
});

const populateIdsThunk = createAsyncThunk('product/populateIds', async () => {
	const response = axios.get(
		`${
			process.env.NODE_ENV == 'production' ? 'https://quiet-shelf-27868.herokuapp.com' : process.env.HOST
		}/api/products/ids`
	);
	return response.json().then((data) => {
		return data;
	});
});

const getSelectedProductThunk = createAsyncThunk('product/getSelectedProduct', async (id) => {
	const response = axios.get(
		`${
			process.env.NODE_ENV == 'production' ? 'https://quiet-shelf-27868.herokuapp.com' : process.env.HOST
		}/api/products/${id}`
	);

	return response.json().then((data) => {
		return data;
	});
});

export { addProductThunk, populateIdsThunk, getSelectedProductThunk };
