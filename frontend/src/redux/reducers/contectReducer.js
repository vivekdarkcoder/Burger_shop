import { createReducer } from "@reduxjs/toolkit";

export const ContactReducer = createReducer( {}, { 
       
    contactRequest : (state) =>{
        state.loading = true;
    },
    contactSuccess :(state, action) =>{
    state.loading = false;
    state.message = action.payload;
    },
    contactFailure :(state, action) =>{
        state.loading = false;
        state.error = action.payload;

    }

})