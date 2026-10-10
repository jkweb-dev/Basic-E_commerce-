import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items : [] ,
    shippingInfo : {}
}

export const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state , action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.name === item.name);
            if(!existingItem){
                state.items.push(item)
            }
        },

        removeFromCart : (state , action) => {
            const name = action.payload;
            state.items = state.items.filter(i => i.name !== name);
        },

        clearCart : (state) => {
            state.items = []
            state.shippingInfo = {}
        },

        saveShippingInfo : (state , action) => {
            state.shippingInfo = action.payload
        }
    }
}) ;

export const {addToCart , removeFromCart , clearCart , saveShippingInfo} = cartSlice.actions;

export default cartSlice.reducer;