import styled from 'styled-components';
import {OrdersTable} from "./OrdersTable";
import {GeoMap} from "./GeoMap";

const Wrapper = styled.div`
  width: 100%;
  height: 77vh;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6rem;
`;

interface OrdersMapProps {

}

export const OrdersMap = ({  }: OrdersMapProps) => {
  return (
    <Wrapper>
      <OrdersTable />
      <GeoMap />
    </Wrapper>
  );
};