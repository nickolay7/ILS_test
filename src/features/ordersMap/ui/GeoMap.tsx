import {MapContainer, Marker, Polyline, TileLayer} from 'react-leaflet';

import styled from "styled-components";
import React from "react";

import './styles.css';
import {useChangePosition, useOrder} from "../lib/useOrder";

interface GeoMapProps {
}

const Wrapper = styled.div`
`;

function MyComponent() {
  const [ orderPaths ] = useOrder();
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

export const GeoMap = ({}: GeoMapProps) => {

  return (
    <Wrapper>
      <MapContainer center={[59.84970399, 30.29496392]} zoom={13} scrollWheelZoom={false} style={{height: "100%"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyComponent />
      </MapContainer>
    </Wrapper>
  );
}
