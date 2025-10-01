import React from "react";
import { FiDownloadCloud } from "react-icons/fi";

const ResumeDownloadButton = () => {
  return (
    <a href="/resume.pdf" download={true}>
      <button className="flex flex-row w-full justify-center from-violet-500 via-pink-500 to-rose-600 rounded-lg bg-gradient-to-r px-6 py-3 font-medium text-white ">
        <FiDownloadCloud size={24} className="mr-2" />
        <span>Download resume</span>
      </button>
    </a>
  );
};

export default ResumeDownloadButton;
