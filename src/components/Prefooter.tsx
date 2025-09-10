import { Github, Linkedin, Mail, Download, FileText } from "lucide-react";

const Prefooter = () => {
  const currentYear = new Date().getFullYear();

  // Resume file (keep your resume inside /public folder as resume.pdf)
  const resumeFile = "/pooja-react-developer.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "pooja-react-developer.pdf"; // file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumeFile, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-center">

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          {/* Download Resume */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg shadow hover:bg-primary/80 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>

          {/* View Resume */}
          <button
            onClick={handleView}
            className="flex items-center gap-2 px-5 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
          >
            <FileText className="w-4 h-4" />
            View Resume
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Prefooter;
