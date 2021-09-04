import React, { useState } from "react";
import emailjs from "emailjs-com";
// import { useAlert } from "react-alert";

export default function Contact() {
    const [errorMessage] = useState("");
    const [toSend, setToSend] = useState({
        name: "",
        message: "",
        email: "",
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    // const alert = useAlert();
    function handleSubmit(e) {
        e.preventDefault();
        // alert.success("Messege sent");
        setToSend({
            name: "",
        message: "",
        email: "",
        });
        emailjs
            .sendForm(
                "service_7kejx8j",
                "template_7hrbeka",
                e.target,
                "user_gSnY6uiZP9W6zw0KcU30O"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    return (
        <section className="my-5">
            <h1 className="titles">Contact Me</h1>
            <hr></hr>
            <div className="boxes">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Smith"
                            value={toSend.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john.smith@gmail.com"
                            value={toSend.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            rows="5"
                            value={toSend.message}
                            onChange={handleChange}
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button value="Send" data-testid="button" type="submit">
                        Submit
                    </button>
                </form>
            </div>

            <div className="boxes">
                <h3 className="titles">Let's talk</h3>
                <ul>
                    <li>
                        <a className="contacts" href="tel:+15125895283">
                            512-589-5283
                        </a>
                    </li>
                    <li>
                        <a
                            className="contacts"
                            href="mailto:natoli.missy@gmail.com"
                        >
                            natoli.missy@gmail.com
                        </a>
                    </li>
                    <li>
                        <a
                            className="contacts"
                            href="https://github.com/misn0147"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
