import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent text-black py-4 px-6">
            <div className="container mx-auto text-center">
                <p>&copy; {currentYear} Welight Tech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;