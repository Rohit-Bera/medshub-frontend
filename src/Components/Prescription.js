//import { upload } from '@testing-library/user-event/dist/upload'
import React from 'react'
import "../style/Prescription.css"
const Prescription = () => {
    const upload = (e) => {
        console.log(e.target.files)
        const file = e.target.files
        const formData = new FormData();
        formData.append('img'.files[0])
        fetch({
            method:"POST",
            body:formData
        }).then((resp) => {
            resp.json().then((result) => {
                console.log("result",result)
            })
        })
    }
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
            <div className="background">
                    <p>Attach Prescription</p>

                <div className="upload">

                    <p>Upload</p>

                    <p>Please Attach a valid Prescription.</p>
                    <div className="file">
                        <i class="fa fa-cloud-upload fa-3x"></i>
                        
                        <div className="file">
                            <input type="file" onChange={(e)=>upload(e)} className="img"/>
                        </div>
                    </div>

                </div>

            </div>
            
        </>
    )
}

export default Prescription
