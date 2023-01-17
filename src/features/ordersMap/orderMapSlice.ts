import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Order {
  id: number,
  fromLat: number,
  fromLng: number,
  toLat: number,
  toLng: number
}

interface LatLng {
  lat: number,
  lng: number
}

export interface OrderPaths {
  order: Order,
  polyline: LatLng[] | null
}

const initialState: OrderPaths = {
  order: {
    id: 1,
    fromLat: 59.84660399,
    fromLng: 30.29496392,
    toLat: 59.82934196,
    toLng: 30.42423701
  },
  polyline: null
};

const orderMapSlice = createSlice({
  name: "@@orderMap/orders",
  initialState,
  reducers: {
    setOrder: (state: OrderPaths, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
    fetchData: (state: OrderPaths, action: PayloadAction<LatLng[]>) => {
      state.polyline = action.payload;
    }
  }
});

export const {setOrder, fetchData} = orderMapSlice.actions;
export const orderMapReducer = orderMapSlice.reducer;