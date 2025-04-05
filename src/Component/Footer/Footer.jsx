import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-300 py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">© Aditya Kesarwani. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="https://github.com/adityakesarwani10" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl hover:text-white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-xl hover:text-white" />
                </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
