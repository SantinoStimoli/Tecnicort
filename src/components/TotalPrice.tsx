import numberFormat from "../services/numberFormat";
interface Props {
  totalPrice: number;
}

const TotalPrice = ({ totalPrice }: Props) => {
  return (
    <div className="flex justify-between w-full items-center">
      <span className="text-xs mr-10">
        *En caso de pagar en efectivo se le descuenta el IVA
      </span>
      <span>
        Precio total: <b>{numberFormat(totalPrice)} + IVA</b>
      </span>
    </div>
  );
};

export default TotalPrice;
