import React, { useEffect, useState } from 'react';
import { Order } from '../interfaces/interfaces';
import html2pdf from 'html2pdf.js';
import fondo from '../assets/fondo.jpg';
import footer from '../assets/footer.jpg';
import Table from './Table';

interface Props {
    orders: Array<Order>;
    refreshPage: any;
}

const PdfGenerator: React.FC<Props> = ({ orders, refreshPage }: Props) => {
    const [date, setDate] = useState('');
    const text =
        'Buen día, aquí le dejo el presupuesto del pedido que nos ha solicitado a través de nuestra página web. En caso de tener alguna duda o comentario, no dude en comunicarse con nosotros. Desde ya, muchas gracias y le deseamos que siga bien.';

    const copyText = (texto: string) => {
        const input = document.createElement('input');
        input.setAttribute('value', texto);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    };

    const handleDownloadPDF = () => {
        const element = document.getElementById('pdf-content');
        const options = {
            filename: 'Presupuesto_Tecnicort.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf().set(options).from(element).save();
        copyText(text);
    };

    const getDate = () => {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        setDate(`${day}-${month}-${year}`);
    };

    useEffect(() => {
        getDate();
    }, []);

    return (
        <section className="modal-bg pdf">
            <article className="modal pdf">
                <section id="pdf-content">
                    <img className="border-b-4 pb-5 border-dashed border-red-300" src={fondo} alt="Fondo" />
                    <p className="date">{date}</p>
                    <h1 id="title">Cortinas de PVC</h1>
                    <Table orders={orders} />
                    <img className="relative -bottom-10" src={footer} alt="Footer" />
                </section>

                <footer className="footer">
                    <button onClick={handleDownloadPDF}>Descargar PDF</button>
                    <button type="button" onClick={() => refreshPage()}>
                        Cancelar
                    </button>
                </footer>
            </article>
        </section>
    );
};

export default PdfGenerator;
