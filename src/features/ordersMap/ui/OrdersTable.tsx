import React from "react";
import {data} from "../../../data";
import {Table} from "antd";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {themeSelector} from "../../theme/themeSelectors";
import {orderMapSelector} from "../orderMapSelector";
import {setOrder} from "../orderMapSlice";
import {useOrder} from "../lib/useOrder";

interface OrdersTableProps {
}

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const columns = [
  {
    key: "id",
    title: "Номер заявки",
    dataIndex: "id",
  },
  {
    key: "fromLat",
    title: "Координаты от lat",
    dataIndex: "fromLat",
  },
  {
    key: "fromLng",
    title: "Координаты от lng",
    dataIndex: "fromLng",
  },
  {
    key: "toLat",
    title: "Координаты до lat",
    dataIndex: "toLat",
  },
  {
    key: "toLng",
    title: "Координаты до lng",
    dataIndex: "toLng",
  },
];

const dataSource = data.map((item) => ({ ...item, key: item.id }));
export const OrdersTable = ({}: OrdersTableProps) => {
  const [, chooseOrder] = useOrder();

  return (
    <Wrapper>
      <div className="table">
        <Table dataSource={dataSource} columns={columns} pagination={false} rowSelection={{
          onSelect: (record, selected, selectedRows, nativeEvent) => {
            chooseOrder(record);
          },
          type: "radio"
        }} />
      </div>
    </Wrapper>
  );
}
