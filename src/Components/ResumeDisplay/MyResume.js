import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import jsPDF from 'jspdf'
import Template1 from '../TemplatesComponents/Template1'
import Template2 from '../TemplatesComponents/Template2'
import Template3 from '../TemplatesComponents/Template3'
import Template4 from '../TemplatesComponents/Template4'
import html2canvas from 'html2canvas'
import SuccessMessage from './Modal'

function MyResume() {
    //this component shows the preview of the resume created by the user with the 'Save'and 'Back' button//
    const selectedTemplate = useSelector(state => state.dataStore.selectedTemplate)
    const [showModal, setShowModal] = useState(false)
    const downloadComponentPDF = () => {
        //this function is called when the user clicks on the 'Save Resume' button.
        // it takes the 'div' element with id 'divToPrint' and then convert it into pdf format which is downloaded into the user's computer memory.
        const input = document.getElementById('divToPrint');
        html2canvas(input, { scrollY: -window.scrollY })
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("p", "px", "a4");
            var ratio = canvas.width/canvas.height;
            var width = pdf.internal.pageSize.getWidth();
            var height = width / ratio;
            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
            pdf.save("resume.pdf");
        })
        .then(()=>{
            setTimeout(
                // this function shows the modal popup named 'SuccessMessage' after the resume has been successfully downloaded and make it to disappear on its own after 6000 ms//
                ()=>{
                    setShowModal(true)
                    setTimeout(
                        ()=>{
                            setShowModal(false)  
                        }
                    ,6000)
                }
            ,100)
        })
    ;
      }
    
    return (
        <div className='container w-100 overflow-scroll'>
        <div  className=' row mt-2 p-5'>
            <div className='w-100 d-flex justify-content-center'>
                <Link to="/detailsfillingpage/keyskills">
                    <button className='btn btn-primary me-4 p-2'> Go-Back</button>
                </Link>
                <button className='btn btn-success ms-3 p-2'onClick={downloadComponentPDF}>
                    Save Resume
                </button>
            </div>
        </div>
        <div  className='  mt-2 p-5 w-100 ' style={{ minWidth:"1200px", overflow:'scroll'}}>
            <div className=' w-100  d-flex justify-content-center '>
                <div className='w-100 ' >
                    <div id='divToPrint' className='w-100'>
                        {/* In this div, user selected template is rendered alongwith the details filled by the user. */}
                        {selectedTemplate===""
                        ?<div><h1>Please select a template!</h1></div>
                        :selectedTemplate === "Template 1"
                        ?<Template1  />
                        :selectedTemplate === "Template 2"
                        ?<Template2  />
                        :selectedTemplate === "Template 3"
                        ?<Template3  />
                        :<Template4  />}
                    </div>
                </div>

            </div>
           
            
            {/* this SuccessMessage component displays modal popup on the screen with the message 'Your resume has been successfully downloaded'. */}
            <div><SuccessMessage showModal={showModal} setShowModal={setShowModal}/></div>

        </div>
        </div>

        
    )
}

export default MyResume
