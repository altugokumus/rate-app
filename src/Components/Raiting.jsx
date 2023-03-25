import React from 'react'
import { Link } from 'react-router-dom';

function Raiting(props) {
  return (
    <div>
        <div className="container">
    <div className="body">
      <div className="raiting-card">
        <img className="icon-star" src="icon-star.svg" alt="icon-star" />
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="raitings">
          <p onClick={props.click} className="raiting" tabIndex="1">1</p>
          <p onClick={props.click} className="raiting" tabIndex="2">2</p>
          <p onClick={props.click} className="raiting" tabIndex="3">3</p> 
          <p onClick={props.click} className="raiting" tabIndex="4">4</p>
          <p onClick={props.click} className="raiting" tabIndex="5">5</p>
        </div>
        <Link to={"/thankyou"} href='/thankyou' className="submit-btn" type="button" value="SUBMIT">SUBMIT</Link>{""}
      </div>
    </div>
    <footer className="footer">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="http://altugokumus.com/">Altug Okumus</a>
  </footer>
  </div>
    </div>
  )
}

export default Raiting;