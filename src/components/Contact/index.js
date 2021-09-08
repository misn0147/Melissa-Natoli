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
            <h1 className="text-center text-xl font-serif text-lime-100">
                Contact Me
            </h1>
            <hr className="w-2/3 h-3 mx-auto text-lime-100"></hr>
            <div className="shadow-box p-2 max-w-95 md:max-w-3/4 mx-auto flex-col justify-center">
                <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                class="block uppercase tracking-wide text-lime-100 text-xs font-bold mb-2"
                                for="grid-name"
                            >
                                Name:
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-800 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                name= "name"
                                type="text"
                                placeholder="John Smith"
                                value={toSend.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label
                                class="block uppercase tracking-wide text-lime-100 text-xs font-bold mb-2"
                                for="grid-email"
                            >
                                Email:
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                name="email"
                                type="text"
                                placeholder="john.smith@gmail.com"
                                value={toSend.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label
                                class="block uppercase tracking-wide text-lime-100 text-xs font-bold mb-2"
                                for="grid-message"
                            >
                                Message:
                            </label>
                            <textarea
                                class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-message"
                                type="message"
                                name="message"
                                rows="5"
                                value={toSend.message}
                                onChange={handleChange}
                            />
                            <button
                            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                            value="Send"
                            data-testid="button"
                            type="submit"
                        >
                            Submit
                        </button>
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                </form>
            </div>

            <div className="shadow-box p-2 max-w-95 md:max-w-3/4 mx-auto flex-col justify-center">
                <h3 className="text-center text-xl font-serif text-lime-100">Let's talk</h3>
                <ul>
                    <li>
                        <a className="text-xl font-serif text-white hover:text-blue" href="tel:+15125895283">
                            512-589-5283
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-xl font-serif text-white hover:text-blue"
                            href="mailto:natoli.missy@gmail.com"
                        >
                            natoli.missy@gmail.com
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-xl font-serif text-white hover:text-blue"
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
