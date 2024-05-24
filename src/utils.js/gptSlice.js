import {createSlice} from "@reduxjs/toolkit"

const gptSLice = createSlice({
    name: 'gpt',
    initialState: {
        language: 'en'
    },
    reducers:{
        setLanguage:(state,action)=>{
            state.language = action.payload;
        },
    }
});

export const {setLanguage}=gptSLice.actions;

export default gptSLice.reducer;