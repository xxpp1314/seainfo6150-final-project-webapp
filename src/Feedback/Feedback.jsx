import React, { useState } from "react";
import styles from "./Feedback.module.css";

const Feedback = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div className={styles.grid}>
      <div>
      {
        submittedForm ? (
          <div className={styles.thankyou}>          
              <h1>Thank you for your valuable feedback</h1>
          </div>
        ) : (
         <div className={styles.feedback}>
            <h2 className={styles.h2}>Your opinions and suggestions are highly valuable. Looking forward to your feedback.</h2><br />
            <div>
            <form onSubmit={onSubmit} className={styles.text}><br />
                How would you rate this website?<br /><br />
                <input type="radio" id="1" name="place" value="1" />
                <label htmlFor="1">1 </label>
                <input type="radio" id="2" name="place" value="2" />
                <label htmlFor="2">  2 </label>
                <input type="radio" id="3" name="place" value="3" />
                <label htmlFor="3">  3 </label>
                <input type="radio" id="4" name="place" value="4" />
                <label htmlFor="4">  4 </label>
                <input type="radio" id="5" name="place" value="5" />
                <label htmlFor="5">  5 </label><br /><br /><br />

                <label htmlFor="myTextId">Do you think which information help you find a suitable pet?</label><br />
                <input  type="text" name="text1" id="text1" className={styles.textField} required/><br /><br />

                <label htmlFor="myTextId">Which part do you think we need to improve?</label><br />
                <input type="text" name="text2" id="text2" className={styles.textField} /><br /><br />

                <label htmlFor="myTextId">Do you want to share your experience when you use our website?</label><br />
                <input type="text" name="text3" id="text3" className={styles.textField} /><br /><br />

                <label htmlFor="myTextId">Is there anything else do you want to share with us?</label><br />
                <input type="text" name="text3" id="text3" className={styles.textField} /><br /><br />

                <input type="submit" value="Submit" className={styles.button}/><br /><br />
                </form>

            </div>
        </div>
        )
      }
      </div>
    </div>
  )
}

export default Feedback;