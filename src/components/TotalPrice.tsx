import numberFormat from "../services/numberFormat";
interface Props {
  totalPrice: number;
}

const TotalPrice = ({ totalPrice }: Props) => {
  return (
    <div className="flex justify-between w-full items-end">
      <div className="flex justify-start">
        <ul className="info">
          <li>- Las tiras vienen encimadas al 65%</li>
          <li>- Sujetadas a un perfil de aluminio</li>
          <li>
            - Colores: Cristal, blanco, azul, rojo, amarillo, verde, fume,
            plateado
          </li>
          <li>- Plazo de entrega 3 días hábiles</li>
        </ul>
      </div>
      <span>
        Precio total: <b>{numberFormat(totalPrice)} + IVA</b>
      </span>
    </div>
  );
};

export default TotalPrice;
