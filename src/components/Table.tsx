import numberFormat from "../services/numberFormat";
import { Order } from "../interfaces/interfaces";
import InfoList from "./InfoList";
import TotalPrice from "./TotalPrice";

interface Props {
  orders: Array<Order>;
}

const Table = ({ orders }: Props) => {
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
                <td>{order.stripWidth}mm</td>
                <td>{order.stripThickness}mm</td>
                <td>{order.stripColor}</td>
                <td>{numberFormat(order.price)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <InfoList />

      <TotalPrice orders={orders} />
    </div>
  );
};

export default Table;
