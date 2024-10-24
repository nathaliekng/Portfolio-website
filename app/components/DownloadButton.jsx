const DownloadButton = ({ file, downloadName }) => {
  return (
    <a
      href={file}
      className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
      download={downloadName}
    >
      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
        Download CV
      </span>
    </a>
  );
};

export default DownloadButton;
