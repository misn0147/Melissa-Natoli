import { SocialIcon } from "react-social-icons";

function Footer() {
    return (
        <footer>
            <div className="socials">
                <div>
                    <SocialIcon
                        url="https://www.linkedin.com/in/melissa-natoli/"
                        target="_blank"
                    />
                </div>
                <div>
                    <SocialIcon
                        url="https://github.com/misn0147"
                        target="_blank"
                    />
                </div>
                <div>
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
