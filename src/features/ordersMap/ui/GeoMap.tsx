import {MapContainer, Marker, Polyline, TileLayer} from 'react-leaflet';
import React from "react";

import {useChangePosition, useOrder} from "../lib/useOrder";

function MyComponent() {
  const [orderPaths] = useOrder();
  useChangePosition();

  const {fromLat, fromLng, toLat, toLng} = orderPaths.order;

  return (
    <>
      <Marker position={[fromLat, fromLng]} />
      <Marker position={[toLat, toLng]} />
      {
        orderPaths.polyline && <Polyline pathOptions={{color: "blue"}} positions={orderPaths.polyline} />
      }
    </>
  );
}

export const GeoMap = () => {

  return (
    <>
      <MapContainer center={[59.84970399, 30.29496392]} zoom={12} scrollWheelZoom={false} style={{height: "100%"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyComponent />
      </MapContainer>
    </>
  );
}
