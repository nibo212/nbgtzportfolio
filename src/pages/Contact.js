import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        // Logic to send email goes here...
    }

    render() {
        return (
            <Parallax className="parallax" y={[-20, 20]} tagOuter="figure">
                <div className="contact-container" id="Contacts">
                    <h2>Contactez-moi :)</h2>
                    <a href="https://www.linkedin.com/in/nicolas-b-4092901b9/" className="contact-link">Linkedin</a>
                </div>
            </Parallax>
        );
    }
}

export default Contact;
