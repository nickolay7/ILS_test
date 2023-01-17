import React from "react";
import {data} from "data";
import {Table} from "antd";
import styled from "styled-components";
import {useOrder} from "../lib/useOrder";

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
export const OrdersTable = () => {
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
