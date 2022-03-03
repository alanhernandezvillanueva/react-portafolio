import React from 'react';
import pdf from "../../assets/pdf/resume.pdf";
import { Document, Page } from 'react-pdf';
import './style.css'



function Resume() {



    return (
        <div className="resumeContainer">
            <a href={pdf} target="_blank" rel="noreferrer"></a>
            <section className='resume'>

                <Document file={pdf}><Page pageNumber={1} /></Document>

              

            </section>
        </div>
    )
}

export default Resume;