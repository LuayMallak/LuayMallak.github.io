import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contactMe" id="contact-me">
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mwkrzagv"
          method="POST"
          className="form"
        >
          {/* add your custom form HTML here */}
          <div className="fieldDiv fieldName">
            <label>Full Name:</label>
            <input type="text" name="fullName" />
          </div>
          <div className="fieldDiv fieldPhone">
            <label>Phone:</label>
            <input type="text" name="phone" />
          </div>
          <div className="fieldDiv fieldEmail">
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div className="fieldDiv fieldMessage">
            <label>Message:</label>
            {/* <input type="text" name="message" /> */}
            <textarea name="message"></textarea>
          </div>

          {status === "SUCCESS" ? (
            <p className="successMessage">
              Thanks, I will contact you as soon as possible!
            </p>
          ) : (
            <button className="submitBtn">Send</button>
          )}
          {status === "ERROR" && (
            <p className="failedMessage">
              Please make sure to fill all fields!
            </p>
          )}
        </form>
        <div className="footer">
          <div className="socialLink">
            <a href="https://www.facebook.com/mallak.luay" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="socialLink">
            <a href="https://www.linkedin.com/in/luay-mallak/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="socialLink">
            <a href="https://github.com/LuayMallak" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

          <div className="socialLink">
            <a href="https://www.instagram.com/luay.mallak/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
