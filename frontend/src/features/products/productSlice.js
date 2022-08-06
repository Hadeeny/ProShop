import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const details = createAsyncThunk("PRODUCT_DETAILS", async (id) => {
  const { data } = await axios.get(`/api/products/${id}`);
  return data;
});

export const productDetailsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: null,
    error: [],
  },
  extraReducers: {
    [details.request]: (state) => {
      state.loading = true;
      state.products = [];
    },
    [details.success]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [details.fail]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productDetailsSlice.reducer;
