

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  p-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <p className="mb-4">
            We are a leading e-commerce platform providing a wide range of products to meet your needs. Shop now and experience excellence in online shopping!
          </p>
          <p className="mb-4">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul>
            <li className="mb-2">
              <a href="/about" className="hover:text-gray-400">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/shop" className="hover:text-gray-400">Shop</a>
            </li>
            <li className="mb-2">
              <a href="/faq" className="hover:text-gray-400">FAQs</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-gray-400">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="mb-2">123 E-commerce St, Shopping City, USA</p>
          <p className="mb-2">Email: support@yourcompany.com</p>
          <p className="mb-2">Phone: +1 234 567 890</p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M24 4.56v14.91c0 1.08-.88 1.95-1.95 1.95H1.95C.88 21.42 0 20.54 0 19.47V4.56C0 3.49.88 2.61 1.95 2.61h20.1c1.07 0 1.95.88 1.95 1.95zm-14.7 7.56v5.2h-2.6v-5.2h-1.5v-2.1h1.5v-1.2c0-1.2.73-2.3 2.8-2.3l1.9.01V8.7h-1.3c-.77 0-.9.29-.9.92v1.34h2.1l-.3 2.1h-1.8zm12.2-.18l-.04 5.38-2.59-.02-.04-5.35 2.67-.01zm-3.42-3.82c-.9-.02-1.6-.73-1.6-1.63 0-.9.7-1.62 1.6-1.62s1.62.72 1.62 1.62c0 .9-.73 1.63-1.62 1.63zm5.7 7.27h-.02c-.06-.37-.37-.67-.74-.67H16.7c-.37 0-.68.3-.74.67v5.38h6.46l-.04-5.37z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M24 4.56v14.91c0 1.08-.88 1.95-1.95 1.95H1.95C.88 21.42 0 20.54 0 19.47V4.56C0 3.49.88 2.61 1.95 2.61h20.1c1.07 0 1.95.88 1.95 1.95zm-8.24 9.25h-3.16v-5.17h3.16V8.31h-3.16V6.64c0-.91.23-1.53 1.56-1.53h1.44V3.43a19.41 19.41 0 00-2.26-.12c-2.25 0-3.77 1.36-3.77 3.84v2.16H9.55v2.17h2.3v5.17H7.87v-5.17H5.57v-2.17h2.3V6.39C7.87 3.1 9.8 1.7 13.24 1.7c1.46 0 2.62.11 2.96.16v2.7h-2.04c-1.6 0-2.28.84-2.28 2.13v1.91h3.19l-.27 2.17h-2.92v5.17h5.76v-5.17z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M16.98 3.56c-1.26-.14-4.53-.14-5.8 0-.98.11-1.82.42-2.57.94-.69.48-1.25 1.13-1.7 1.94-.44.77-.74 1.71-.85 2.77-.14 1.38-.14 4.57 0 5.95.11 1.06.41 1.99.85 2.76.45.81 1.01 1.46 1.7 1.95.75.52 1.59.83 2.57.94 1.27.14 4.53.14 5.8 0 .98-.11 1.82-.42 2.57-.94.69-.48 1.25-1.13 1.7-1.94.44-.77.74-1.71.85-2.77.14-1.38.14-4.57 0-5.95-.11-1.06-.41-1.99-.85-2.77-.45-.81-1.01-1.46-1.7-1.95-.75-.52-1.59-.83-2.57-.94zM12 15.7c-2.06 0-3.74-1.67-3.74-3.73s1.68-3.73 3.74-3.73 3.74 1.67 3.74 3.73-1.68 3.73-3.74 3.73zm4.92-6.74c-.35 0-.64-.28-.64-.63s.28-.63.64-.63.64.28.64.63-.28.63-.64.63zM12 8.59c-1.87 0-3.4 1.53-3.4 3.4 0 1.87 1.53 3.4 3.4 3.4s3.4-1.53 3.4-3.4c0-1.87-1.53-3.4-3.4-3.4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Join Our Newsletter</h4>
          <p className="mb-4">Get the latest updates on new products and upcoming sales.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mb-4 text-gray-900 rounded-lg border border-gray-300 focus:outline-none"
              required
            />
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
