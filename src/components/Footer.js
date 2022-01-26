import React from 'react'
import "../style/footer.css"

const Footer =()=>{
    return(
        <div className="footer-container">
            <div className="footer-feedback">
            <p>Send Your Feedback Here</p>
                <form> 
                    <textarea className="" placeholder="write a review" rows="10" cols="40">

                    </textarea>
                </form>
            </div>
            <div className="footer-elements">
                <div className="footer-element-column">
                        <h4> Our Brands</h4>
                        <ul>
                            <li>MamaEarth</li>
                            <li>Patanjali</li>
                            <li>Johnsons</li>
                        </ul>
                </div>
                <div className="footer-element-column">
                        <h4>Beauty Products</h4>
                        <ul>
                            <li>Skin care Products</li>
                            <li>Hair Products</li>
                            <li>Makeup Products</li>
                            <li>Personal Care Products</li>
                        </ul>
                </div>
                <div className="footer-element-column">
                        <h4>Mens Grooming</h4>
                        <ul>
                            <li>Moustache and Beard Oil</li>
                            <li>Gillette Razors and Shaving Cream</li>
                            <li>Shaving Brushes</li>
                        </ul>
                </div>
                <div className="footer-element-column">
                        <h4>Medicines</h4>
                        <ul>
                            <li>Paracetamol</li>
                            <li>Tuscquin</li>
                            <li>Nepro</li>
                        </ul>
                </div>
                <div className="footer-element-column">
                        <h4>Covid Essentials</h4>
                        <ul>
                            <li>Santizier</li>
                            <li>N-95 Masks</li>
                            <li>Oxymeter</li>
                        </ul>
                </div>
                <div className="footer-element-column">
                        <h4>Health Devices</h4>
                        <ul>
                            <li>Wearable Fitness Trackers</li>
                            <li>Smart Health Watches</li>
                            <li>Wearable ECG Monitors</li>
                            <li>Wearable Blood Pressure Monitors</li>
                            
                        </ul>
                </div>
            </div>
        </div>
    )
    
}
export default Footer;