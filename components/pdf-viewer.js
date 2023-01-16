import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

const pdfviewer = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js">
      <div className="mx-auto max-w-4xl py-8" style={{ height: "100%" }}>
        <Viewer fileUrl="./sample.pdf" />
      </div>
    </Worker>
  );
};

export default pdfviewer;
