import { useRef } from "react";
import { FORM_DATA, PRICEM2 } from "../services/info";
import numberFormat from "../services/numberFormat";

const Form = ({ addOrder, emptyList, emptyCondition }) => {
  const productWidth = useRef<HTMLInputElement>(null);
  const productHeight = useRef<HTMLInputElement>(null);
  const stripWidth = useRef<HTMLSelectElement>(null);
  const stripThickness = useRef<HTMLSelectElement>(null);
  const stripColor = useRef<HTMLSelectElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const priceM2 = useRef<HTMLInputElement>(null);

  return (
    <section className="static-bg">
      <form
        className="modal"
        onSubmit={(e) => {
          e.preventDefault();
          addOrder(
            productWidth.current?.value || "",
            productHeight.current?.value || "",
            stripWidth.current?.value || "",
            stripThickness.current?.value || "",
            stripColor.current?.value || "",
            price.current?.value || "",
            priceM2.current?.value || ""
          );
        }}
      >
        <h1>Ingresar pedido</h1>
        <article>
          <h2>Cortina</h2>

          <section>
            <div className="div-input">
              <span>Ancho (m)</span>
              <input
                required
                ref={productWidth}
                type="number"
                step="any"
                placeholder="1 / 1,5 / 2,75 / etc..."
              />
            </div>
            <div className="div-input">
              <span>Alto (m)</span>
              <input
                required
                ref={productHeight}
                type="number"
                step="any"
                placeholder="2,5 / 2,75 / 3 / etc..."
              />
            </div>
          </section>
        </article>

        <article>
          <h2>Tira</h2>
          <section>
            <div className="div-input">
              <span>Ancho (mm)</span>
              <select required ref={stripWidth}>
                <option value={undefined}>No definido</option>
                {FORM_DATA.stripWidth.map((e, i) => {
                  return (
                    <option key={i} value={e}>
                      {e}mm{" "}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="div-input">
              <span>Espesor (mm)</span>
              <select required ref={stripThickness}>
                <option value={undefined}>No definido</option>
                {FORM_DATA.stripThickness.map((e, i) => {
                  return (
                    <option key={i} value={e}>
                      {e}mm{" "}
                    </option>
                  );
                })}
              </select>
            </div>
          </section>

          <section className="flex justify-center">
            <div className="div-input">
              <span>Color</span>
              <select required ref={stripColor}>
                <option value={undefined}>No definido</option>
                {FORM_DATA.stripColor.map((e, i) => {
                  return (
                    <option key={i} value={e}>
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
          </section>
        </article>

        <article>
          <h2>Precios</h2>

          <section>
            <div className="div-input">
              <span>Producto</span>
              <input
                ref={price}
                type="number"
                step="any"
                placeholder={numberFormat(50000) + " / " + numberFormat(75000)}
              />
            </div>
            <div className="div-input">
              <span>Precio M2</span>
              <input
                ref={priceM2}
                type="number"
                step="any"
                placeholder={numberFormat(PRICEM2)}
              />
            </div>
          </section>
        </article>

        <footer className="footer">
          <button type="submit">Añadir</button>
          {emptyCondition && (
            <button type="button" onClick={() => emptyList()}>
              Vaciar lista
            </button>
          )}
        </footer>
      </form>
    </section>
  );
};

export default Form;
