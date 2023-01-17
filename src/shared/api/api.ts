import axios from "axios";
import {Order} from "features/ordersMap";

interface Paths {
  code: number,
  routes: any[],
  waypoints: any[]
}

const BASE_URL = 'http://router.project-osrm.org/route/v1/driving';
export const fetchPath = async (params: Order): Promise<{lat: number, lng: number}[]> => {
  const {fromLat, fromLng, toLat, toLng} = params;

  const {data: {waypoints}} = await axios.get<Paths>(`${BASE_URL}/${fromLat},${fromLng};${toLat},${toLng}?overview=false`);

  return waypoints.map(({location}: { location: number[] }) => ({lat: location[0], lng: location[1]}));
};
