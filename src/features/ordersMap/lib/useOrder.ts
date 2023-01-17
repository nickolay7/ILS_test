import {useDispatch, useSelector} from "react-redux";
import {orderMapSelector} from "../orderMapSelector";
import {fetchData, Order, OrderPaths, setOrder} from "../orderMapSlice";
import {useMap} from "react-leaflet";
import {useEffect, useState} from "react";
import axios from "axios";
import {useAppDispatch} from "store";
import {sagaActions} from "sagaActions";

export const useOrder = (): [OrderPaths, (record: Order) => void] => {
  const dispatch = useDispatch();
  const orderPaths = useSelector(orderMapSelector);
  const chooseOrder = (record: Order) => {
    dispatch(setOrder(record));
  };

  return [orderPaths, chooseOrder];
};

interface Paths {
  code: number,
  routes: any[],
  waypoints: any[]
}

export const useChangePosition = () => {
  const dispatch = useAppDispatch();
  const [orderPaths] = useOrder();
  const map = useMap();

  const {fromLat, fromLng, toLat, toLng} = orderPaths.order;

  useEffect(() => {
    if (orderPaths.polyline && orderPaths.order) {
      dispatch({type: sagaActions.FETCH_DATA_SAGA, payload: orderPaths.order});
    }
  }, [orderPaths.order]);

  useEffect(() => {
    map.flyTo({lat: fromLat, lng: fromLng});
    map.fitBounds([[fromLat, fromLng], [toLat, toLng]], {maxZoom: 10});
  }, [orderPaths.polyline]);
};
