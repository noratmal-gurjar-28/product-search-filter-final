import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.unsplash.com/photos';
const ACCESS_KEY = 'XsbjQq0QxQBFHQURGOuXVrSQsb9_Dv-t0TjXlgNbcK4';

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (query = '') => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`
    },
    params: {
      query,
      per_page: 30,  // Limit the number of results for better performance
    },
  });
  return response.data;
});

// Slice definition
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
    searchTerm: '', // Add searchTerm to state
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;
