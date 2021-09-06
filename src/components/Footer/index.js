import { SocialIcon } from "react-social-icons";

function Footer() {
    return (
        <footer className="relative bg-gray-400">
            <div className="inset-x-0 flex justify-between items-center mx-0.5 md:justify-center">
                <div className="md:px-5">
                    <SocialIcon
                        url="https://www.linkedin.com/in/melissa-natoli/"
                        target="_blank"
                    />
                </div>
                <div className="md:px-5">
                    <SocialIcon
                        url="https://github.com/misn0147"
                        target="_blank"
                    />
                </div>
                <div className="md:px-5">
                    <SocialIcon
                        url="https://soundcloud.com/user-693992123"
                        target="_blank"
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
