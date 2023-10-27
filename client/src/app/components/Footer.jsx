import React from "react";

const Footer = () => {
    return (
        <footer className="bg-teal-700 p-4 text-white">
        <div className="container mx-auto">
          <p className="text-center">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    )
}
export default Footer;