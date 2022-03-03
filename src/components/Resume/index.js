import React from 'react';
import pdf from "../../assets/pdf/resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import './style.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {



    return (
        <div className="resumeContainer">
            
            <section className='resume'>
                <div>

                <Document file={pdf}><Page pageNumber={1} /></Document>
                </div>
              

            </section>
        </div>
    )
}

export default Resume;