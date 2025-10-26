import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const languages = ["EN", "CZ", "SK"];

  return (
    <div className="bg-black py-2 min-h-14 flex items-center px-6">
      <div className="flex justify-end items-center text-gray-400 w-full mr-16 space-x-3">
        {/* Email Link */}
        <a
          href="mailto:hello@lurity.com"
          className="hover:text-white transition-colors"
        >
          hello@lurity.com
        </a>

        {/* Separator */}
        <span className="mx-1 text-gray-600">|</span>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            {language}
            <FaChevronDown className="ml-2 text-sm" />
          </button>

          {open && (
            <ul className="absolute right-0 mt-2 w-20 bg-black text-white rounded-md shadow-lg overflow-hidden z-50">
              {languages.map((lang) => (
                <li
                  key={lang}
                  className="px-4 py-2 hover:bg-black/90 hover:text-yellow cursor-pointer"
                  onClick={() => {
                    setLanguage(lang);
                    setOpen(false);
                  }}
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
