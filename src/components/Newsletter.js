import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import Astronot from "../assets/img/astronout.png"

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={9} xl={9}>
              <h3>I’m excited to discuss how I can contribute and explore opportunities to join your team. <img src={Astronot} alt="astronaut" style={{ width: '10%' }}/></h3>
            </Col>
            <Col md={5} xl={3}>
                <div className="new-email-bx">
                  <a href='mailto:salsa34545@gmail.com' >
                    <button className="buttonEmail">Contact me</button>
                  </a>
                </div>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
