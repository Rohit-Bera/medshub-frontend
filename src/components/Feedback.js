import React from 'react';
import "../style/feedback.css"
const Feedback = () => {
    return (
        <div className="bgcolor">
            <div className="feedback">
                <p>Send Your Feedback Here</p>
            </div>
            <div className="text">
                <form> 
                    <div>
                        <input className="textarea" placeholder="Write your Suggestion Here" rows="4" cols="50"/>
                    </div>  
                </form>
                
            </div>  
        </div>
        

    )
}

export default Feedback;
