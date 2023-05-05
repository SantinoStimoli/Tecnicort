import React from 'react'
import { Order } from '../interfaces/interfaces'
import html2pdf from "html2pdf.js";
import fondo from '../assets/fondo.jpg'
import footer from '../assets/footer.jpg'
import { Table } from "./table";

interface Props {
    orders: Order
    refreshPage: any
}

const PdfGenerator = ({ orders, refreshPage }: Props) => {
    const handleDownloadPDF = () => {
        const element = document.getElementById("pdf-content");
        const options = {
            filename: "detalles.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        html2pdf().set(options).from(element).save();
    };

    return (
        <section className='modal-bg pdf'>
            <article className='modal pdf'>
                <section id="pdf-content">
                    <img src={fondo} />
                    <p className='date'>04-05-2023</p>
                    <h1 id='title'>Cortinas de PVC</h1>
                    <Table orders={orders} />
                    <img className="relative -bottom-10" src={footer} />
                </section>

                <footer className='footer'>
                    <button onClick={handleDownloadPDF}>Descargar PDF</button>
                    <button type='button' onClick={() => refreshPage()} >Cancelar</button>
                </footer>
            </article>
        </section>
    )
}

export default PdfGenerator