import {useDispatch, useSelector} from "react-redux";
import {orderMapSelector} from "../orderMapSelector";
import {fetchData, Order, setOrder} from "../orderMapSlice";
import {useMap} from "react-leaflet";
import {useEffect} from "react";

export const useOrder = () => {
  const dispatch = useDispatch();
  const orderPaths = useSelector(orderMapSelector);
  const chooseOrder = (record: Order) => {
    dispatch(setOrder(record));
  };

  return [orderPaths, chooseOrder];
};

export const useChangePosition = () => {
  const dispatch = useDispatch();
  const [orderPaths] = useOrder();
  const map = useMap();

  const {fromLat, fromLng, toLat, toLng} = orderPaths.order;

  useEffect(() => {
    dispatch(fetchData(orderPaths.order));
  }, [orderPaths.order, dispatch]);

  useEffect(() => {
    map.flyTo({lat: fromLat, lng: fromLng});
    map.fitBounds([[fromLat, fromLng], [toLat, toLng]], {maxZoom: 10});
  }, [orderPaths.polyline, fromLng, fromLat, map, toLng, toLat]);
};
