import React from "react";

function Footer(props) {
  return (
    <div>
      <footer className="bg-gradient-to-tr from-green-600 to-green-800 text-white py-4">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-400">
              © 2023 QualityLife. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
