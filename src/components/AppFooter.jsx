import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent text-black py-4 px-6">
            <div className="container mx-auto text-center">
                <p>&copy; {currentYear} Welight Tech. All rights reserved.</p>
                <a
                    href="https://www.linkedin.com/company/welight-tech/mycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-500"
                >
                    <FaLinkedin size={24} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;