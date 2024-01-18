import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchProductsByFilters,
  fetchBrands,
  fetchCategories,
  fetchProductByID,
} from "./productAPI";

const initialState = {
  products: [],
  brands: [],
  categories: [],
  selectedBrands: [],
  status: "idle",
  selectedProduct : null //nachaley {} rakh
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

//single productdetail
export const fetchProductByIDAsync = createAsyncThunk(
  "product/fetchProductByID",
  async (id) => {
    const response = await fetchProductByID(id);
    return response.data;
  }
);

export const fetchBrandsAsync = createAsyncThunk(
  "product/fetchbrands",
  async () => {
    const response = await fetchBrands();
    return response.data;
  }
);

export const fetchCategoriesAsync = createAsyncThunk(
  "product/fetchcategory",
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async ({ filter, sort }) => {
    const response = await fetchProductsByFilters(filter, sort);
    return response.data;
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState, // Set the initial state here
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })

      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })

      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      })

      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })

      //for single productdetailpage
      .addCase(fetchProductByIDAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIDAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      })
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export const selectBrands = (state) => state.product.brands;

export const selectCategories = (state) => state.product.categories;

//single productdetail
export const selectProductByID = (state) => state.product.selectedProduct;

export default productSlice.reducer;
