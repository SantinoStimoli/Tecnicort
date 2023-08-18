import numberFormat from "../services/numberFormat";
import { Order } from "../interfaces/interfaces";
import InfoList from "./InfoList";
import TotalPrice from "./TotalPrice";
import tableFormat from "../services/tableFormat";
import { useEffect, useState } from "react";

interface Props {
  orders: Array<Order>;
  shipment: number;
}

const Table = ({ orders, shipment }: Props) => {
  const [totalPrice, setTotalPrice] = useState(getTotal());

  function getTotal() {
    let total: number = 0;
    orders.forEach((order) => {
      total = total + order.price;
      return total;
    });
    return total;
  }

  useEffect(() => {
    setTotalPrice(getTotal() + shipment);
  }, [shipment]);

  return (
    <div className="flex flex-col px-28 gap-2">
      <table>
        <thead>
          <th>Ancho</th>
          <th>Alto</th>
          <th>Ancho (tira)</th>
          <th>Espesor (tira)</th>
          <th>Color</th>
          <th>Precio unitario</th>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            return (
              <tr key={index}>
                <td>{order.productWidth}m</td>
                <td>{order.productHeight}m</td>
                <td>{tableFormat(order.stripWidth)}</td>
                <td>{tableFormat(order.stripThickness)}</td>
                <td>{order.stripColor}</td>
                <td>{numberFormat(order.price)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {shipment === 0 ? (
        ""
      ) : (
        <div className="w-full flex justify-end">
          <table className="w-[300px]">
            <tbody className="border border-red-500">
              <tr>
                <td>Envío:</td>
                <td>{numberFormat(shipment)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <InfoList />
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
};

export default Table;
