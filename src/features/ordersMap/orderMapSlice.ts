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
  name: "@@orderMap",
  initialState,
  reducers: {
    setOrder: (state: OrderPaths, action: PayloadAction<Order>) => {
      state.order = action.payload;
    },
    fetchSuccess: (state: OrderPaths, action: PayloadAction<LatLng[]>) => {
      state.polyline = action.payload;
    },
    fetchData: (_, action: PayloadAction<Order>) => {
      console.log('Loading...');
    }
  }
});

export const { setOrder, fetchData, fetchSuccess } = orderMapSlice.actions;
export const orderMapReducer = orderMapSlice.reducer;
