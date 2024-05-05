import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filteredObject: {},
    data:[],
    
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setFilteredObject: (state, action) => {
      state.filteredObject = action.payload
      
    },
    setData: (state, action) => {
       
       state.data = action.payload;
    },
    
    
  },
});

export const {setFilteredObject,setData} = jobSlice.actions

export default jobSlice.reducer;