import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import toast, { Toaster } from 'react-hot-toast';
import TrackVisibility from 'react-on-screen';
import jsonp from 'jsonp';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://gmail.us22.list-manage.com/subscribe/post-json?u=c1e2518681f729408356127bd&amp;id=49b7515f31&amp;f_id=00c2d2e1f0";
    setButtonText("Sending...");


    jsonp(`${url}&FNAME=${formDetails.firstName}&LNAME=${formDetails.lastName}&EMAIL=${formDetails.email}&PHONE=${formDetails.phone}&MEESSAGE=${formDetails.message}`, { param: 'c' }, (_, data) => {
      const { msg, result } = data
      // do something with response
      if (result === "success")
        toast.success("Thank you for contacting! I will get back to you soon.")
      else toast.error("Oops! Something went wrong.")
    });
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} name="FNAME" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lasttName} name="LNAME" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} nmae="EMAIL" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="number" value={formDetails.phone} nmae="PHONE" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} name="MEESSAGE" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
