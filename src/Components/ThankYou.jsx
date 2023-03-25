import React from 'react'

function ThankYou(props) {
  return (
    <div className="container">
    <div className="body">
      <div className="thankyou-card">
        <img className="thankyou-img" src="illustration-thank-you.svg" alt="thankyou" />
        <p id="rate-line" className="selected-rate">You selected {props.raiting} out of 5</p>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a raiting. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
    <footer className="footer">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target={"_blank"}>Frontend Mentor</a>. 
    Coded by <a target={"_blank"} href="http://altugokumus.com/">Altug Okumus</a>
  </footer>
  </div>
  )
}

export default ThankYou;