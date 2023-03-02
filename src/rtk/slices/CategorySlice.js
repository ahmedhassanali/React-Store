import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from '../../data/CategoryData'
export const fetchCategories = createAsyncThunk(
    "CategorySlice/fetchCategories",
    async () => {
        // const res = await fetch("");
        // const data = await res.json();
        return data;
    }
);

const CategorySlice = createSlice({
    initialState: [],
    name: "CategorySlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
        return action.payload;
        })
    }
})

export const {} = CategorySlice.actions;
export default CategorySlice.reducer;
