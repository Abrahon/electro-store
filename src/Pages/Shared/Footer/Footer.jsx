
import {FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="my-10">
            <section>
                <footer className="footer p-10 bg-base-200 text-base-content">
                    <aside>
                        <h1 className="text-4xl font-bold text-green-800"><b><i>ELECTRO</i></b></h1>
                     <div className="flex justify-content align-items-center gap-6">
                     <div className="text-5xl text-red-600">
                     <a href="#"><FaPhone></FaPhone></a>
                       </div>
                    <div>
                    <h1 className="font-semibold">Got any question ?call us<span> 24/7</span></h1>
                       <h1 className="text-2xl font-semibold text-red-800">+8801710670332</h1>
                    </div>
                      
                     </div>
                        <p>Electro Store.<br />Providing reliable tech since 2024</p>
                        <div>
                            <nav>
                                <div className="grid grid-flow-col gap-4 text-3xl">
                                   <a className="text-red-500 hover:text-red-700" href="https://www.youtube.com/"><FaYoutube></FaYoutube> </a>

                                   <a className="text-blue-600 hover:text-blue-700" href="https://facebook.com/"><FaFacebook></FaFacebook></a>
                                   <a className="text-blue-600 hover:text-blue-800" href="http://twiter.com/"><FaTwitter></FaTwitter></a>
                                   <a className="text-orange-500 hover: text-orange-600" href="http://instagram.com/"><FaInstagram></FaInstagram></a>
                                   <a className="text-blue-600 hover: text-blue-700" href="http://linkedin.com/"><FaLinkedin></FaLinkedin></a>
                                  
                                </div>
                            </nav>
                        </div>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Laptops & Computers</a>
                        <a className="link link-hover">Cameras & Photography</a>
                        <a className="link link-hover">Smartphnes & Tabltes</a>
                        <a className="link link-hover">Video Games & Consoles</a>
                        <a className="link link-hover">wtach</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Whislist</a>
                        <a className="link link-hover">FAQ</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Customer Care</header>
                        <a className="link link-hover">My account </a>
                        <a className="link link-hover">Track your order</a>
                        <a className="link link-hover">Customer Service</a>
                        <a className="link link-hover">Return aand Exchange</a>
                        <a className="link link-hover">Product support</a>
                    </nav>
                </footer>
            </section>
        </div>
    );
};

export default Footer;