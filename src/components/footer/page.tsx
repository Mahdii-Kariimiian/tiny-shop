const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white p-5 mt-auto">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-2 md:mb-0">
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-x-6 md:space-y-0">
                        <li>
                            <a href="/" className="hover:text-blue-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-blue-400">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-blue-400">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-blue-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex space-x-4">
                    <a
                        href="https://facebook.com"
                        className="hover:text-blue-400"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://twitter.com"
                        className="hover:text-blue-400"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://instagram.com"
                        className="hover:text-blue-400"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="hover:text-blue-400"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

            <div className="mt-2 text-center">
                <p>
                    &copy; {new Date().getFullYear()} Mahdi Karimian. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
