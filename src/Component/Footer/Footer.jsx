import { FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">© Aditya Kesarwani. All rights reserved.</p>
                <div className="flex space-x-6 mr-8 mt-2 md:mt-0">
                <a href="https://github.com/adityakesarwani10" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/aditya-kesarwani-057b56311/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl hover:text-white" />
                </a>
                <a href="https://instagram.com/adityakesarwani21" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl hover:text-white" />
                </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
