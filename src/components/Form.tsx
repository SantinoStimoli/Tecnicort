import React, { useRef } from 'react'
import { FORMDATA } from '../services/info'

const Form = ({ refreshPage, addOrder }) => {
    const productWidth = useRef(null)
    const productHeight = useRef(null)
    const stripWidth = useRef(null)
    const stripThickness = useRef(null)
    const stripColor = useRef(null)
    const client = useRef(null)

    return (
        <section className='modal-bg' >
            <form
                className='modal'
                onSubmit={e => {
                    e.preventDefault()
                    addOrder(productWidth.current.value, productHeight.current.value, stripWidth.current.value, stripThickness.current.value, stripColor.current.value, client.current.value)
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
                                <option value=''>Selecciona una opción</option>
                                {FORMDATA.stripWidth.map((e, i) => {
                                    return (
                                        <option key={i} value={e}>{e} mm</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='div-input'>
                            <span>Espesor (mm)</span>
                            <select required ref={stripThickness}>
                                <option value=''>Selecciona una opción</option>
                                {FORMDATA.stripThickness.map((e, i) => {
                                    return (
                                        <option key={i} value={e}>{e} mm</option>
                                    )
                                })}
                            </select>
                        </div>
                    </section>

                    <section>
                        <div className='div-input'>
                            <span>Color</span>
                            <select required ref={stripColor}>
                                <option value=''>Selecciona una color</option>
                                {FORMDATA.stripColor.map((e, i) => {
                                    return (
                                        <option key={i} value={e}>{e}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='div-input'>
                            <span>Cliente</span>
                            <input required ref={client} type='text' placeholder='Osvaldo, Guido, etc...' />
                        </div>
                    </section>


                </article>

                <footer className='footer'>
                    <button type='submit'>Añadir</button>
                    <button type='button' onClick={() => refreshPage()} >Cancelar</button>
                </footer>
            </form>
        </section>
    )
}

export default Form