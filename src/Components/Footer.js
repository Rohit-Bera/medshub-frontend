import React from 'react'
import "../style/footer.css"

const Footer =()=>{
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div classname="column">
                        <h4> Our Brands</h4>
                        <ul className="list-unstyled">
                            <li>MamaEarth</li>
                            <li>Patanjali</li>
                            <li>Johnsons</li>
                        </ul>
                    </div>
                    <div className="column ">
                        <h4>Beauty Products</h4>
                        <ul>
                            <li>Skin care Products</li>
                            <li>Hair Products</li>
                            <li>Makeup Products</li>
                            <li>Personal Care Products</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Mens Grooming</h4>
                        <ul>
                            <li>Moustache and Beard Oil</li>
                            <li>Gillette Razors and Shavinf=g Cream</li>
                            <li>Shaving Brushes</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Medicines</h4>
                        <ul>
                            <li>Paracetamol</li>
                            <li>Tuscquin</li>
                            <li>Nepro</li>
                        </ul>

                    </div>
                    <div className="column">
                        <h4>Covid Essentials</h4>
                        <ul>
                            <li>Santizier</li>
                            <li>N-95 Masks</li>
                            <li>Oxymeter</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Health Devices</h4>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
    
}
export default Footer;