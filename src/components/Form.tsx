import { useRef } from 'react'
import { FORM_DATA } from '../services/info'

const Form = ({ addOrder, emptyList, emptyCondition }) => {

    const productWidth = useRef<HTMLInputElement>(null);
    const productHeight = useRef<HTMLInputElement>(null);
    const stripWidth = useRef<HTMLSelectElement>(null);
    const stripThickness = useRef<HTMLSelectElement>(null);
    const stripColor = useRef<HTMLSelectElement>(null);

    return (
        <section className='static-bg' >
            <form
                className="modal"
                onSubmit={(e) => {
                    e.preventDefault();
                    addOrder(
                        productWidth.current?.value || '',
                        productHeight.current?.value || '',
                        stripWidth.current?.value || '',
                        stripThickness.current?.value || '',
                        stripColor.current?.value || '',
                    );
                }}
            >
                <h1>Ingresar pedido</h1>
                <article>
                    <h2>Cortina</h2>

                    <section>
                        <div className='div-input'>
                            <span>Ancho (m)</span>
                            <input required ref={productWidth} type='number' step='any' placeholder='1 / 1,5 / 2,75 / etc...' />
                        </div>
                        <div className='div-input'>
                            <span>Alto (m)</span>
                            <input required ref={productHeight} type='number' step='any' placeholder='2,5 / 2,75 / 3 / etc...' />
                        </div>
                    </section>
                </article>

                <article>
                    <h2>Tira</h2>
                    <section>
                        <div className='div-input'>
                            <span>Ancho (mm)</span>
                            <select required ref={stripWidth}>
                                <option value={undefined}>No definido</option>
                                {FORM_DATA.stripWidth.map((e, i) => {
                                    return (
                                        <option key={i} value={e}>{e}mm </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='div-input'>
                            <span>Espesor (mm)</span>
                            <select required ref={stripThickness}>
                                <option value={undefined}>No definido</option>
                                {FORM_DATA.stripThickness.map((e, i) => {
                                    return (
                                        <option key={i} value={e}>{e}mm </option>
                                    )
                                })}
                            </select>
                        </div>
                    </section>

                    <section className='flex justify-center'>
                        <div className='div-input'>
                            <span>Color</span>
                            <select required ref={stripColor}>
                                <option value={undefined}>No definido</option>
                                {FORM_DATA.stripColor.map((e, i) => {
                                    return (
                                        <option key={i} value={e}>{e}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </section>
                </article>

                <footer className='footer'>
                    <button type='submit'>Añadir</button>
                    {emptyCondition && <button type='button' onClick={() => emptyList()}>Vaciar lista</button>}
                </footer>
            </form>
        </section >
    )
}

export default Form