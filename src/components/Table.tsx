import numberFormat from "../services/numberFormat";
import { Order } from "../interfaces/interfaces";
import InfoList from "./InfoList";
import TotalPrice from "./TotalPrice";
import tableFormat from "../services/tableFormat";

interface Props {
  orders: Array<Order>;
  shipment: number;
}

const Table = ({ orders, shipment }: Props) => {
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
        <table className="ml-72 w-[300px]">
          <tbody className="border border-red-500">
            <tr>
              <td>Envío:</td>
              <td>{numberFormat(shipment)}</td>
            </tr>
          </tbody>
        </table>
      )}

      <InfoList />
      <TotalPrice orders={orders} />
    </div>
  );
};

export default Table;
