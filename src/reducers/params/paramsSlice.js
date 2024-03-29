import { createSlice } from "@reduxjs/toolkit";
//el reducer actualiza el estado
const initialState = {
  location: "",
  checkin: "",
  checkout: "",
  adults: "",
  children: "",
};

export const paramsSlice = createSlice({
  name: "params",
  initialState: initialState,
  reducers: {
    // con esta funcion, el reducer tomo el estado inicial de mi aplicacion, en la props location,
    // y lo actualizo con lo que me vino en el payload (son los datos que mando al estado) del action! Despues lo exporto.
    setParams: (state, action) => {
      state.location = action.payload.location;
      state.checkin = action.payload.checkin;
      state.checkout = action.payload.checkout;
      state.adults = action.payload.adults;
      state.children = action.payload.children;
    },
  },
});

export const { setParams } = paramsSlice.actions;

//al reducer lo exporto al store.js, que es el que me actualiza el estado
export default paramsSlice.reducer;
