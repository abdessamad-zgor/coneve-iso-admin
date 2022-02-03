import { createSlice } from '@reduxjs/toolkit';
import { getSelectedProductThunk, populateIdsThunk, addProductThunk } from '../thunks/productThunks';

const initialState = {
	status: 'idle',
	ids: [],
	selectedProduct: {},
	error: null,
};

const productSlice = createSlice({
	name: 'product',
	initialState: initialState,
	reducers: {},

	extraReducers(builder) {
		builder
			.addCase(populateIdsThunk.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(populateIdsThunk.fulfilled, (state, action) => {
				state.status = 'completed';
				state.ids = action.payload;
			})
			.addCase(populateIdsThunk.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(getSelectedProductThunk.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(getSelectedProductThunk.fulfilled, (state, action) => {
				state.status = 'completed';
				state.selectedProduct = action.payload;
			})
			.addCase(getSelectedProductThunk.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});
const productsReducer = productSlice.reducer;
export default productsReducer;
