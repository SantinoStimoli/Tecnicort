import { useEffect, useState } from "react";
import numberFormat from "../services/numberFormat";
import { Order } from "../interfaces/interfaces";

interface Props {
  orders: Array<Order>;
}

const TotalPrice = ({ orders }: Props) => {
  const [finalPrice, setFinalPrice] = useState(0);

  const getTotal = () => {
    let total: number = 0;
    orders.forEach((order) => {
      total = total + order.price;
      return total;
    });
    setFinalPrice(total);
  };

  useEffect(() => {
    getTotal();
  }, []);

  return (
    <div className="flex justify-between w-full items-center">
      <span className="text-xs mr-10">
        *En caso de pagar en efectivo se le descuenta el IVA
      </span>
      <span>
        Precio total: <b>{numberFormat(finalPrice)} + IVA</b>
      </span>
    </div>
  );
};

export default TotalPrice;
