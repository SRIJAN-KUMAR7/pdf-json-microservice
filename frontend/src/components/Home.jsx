import React from "react";
import { DocumentArrowUpIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Home({ handleNavigation }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-gray-900 to-black px-4 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="h-[100vw] w-full rounded-[3rem] border-2 border-cyan-900/30 shadow-[0_0_100px_10px_rgba(34,197,94,0.10)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-4xl px-4 flex-grow">
        <div className="flex items-center justify-center gap-4 mb-4">
         
        </div>

        <h1 className="mt-6 sm:mt-10 text-5xl sm:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400 drop-shadow-lg">
  Instantly Convert <span className="text-red-100">PDF</span> Documents to <span className="text-red-200">JSON</span>
</h1>


        <p className="text-lg text-gray-300 max-w-xl mx-auto mt-2 mb-10">
          Drop a PDF or provide a URL—our AI API extracts and delivers structured, developer-friendly JSON.
        </p>

        {/* Get Started as an anchor */}
        <a
          href="#"
          onClick={(e) => handleNavigation('docs', e)}
          className="py-4 px-16 rounded-full border border-green-400 text-white bg-gradient-to-t from-green-600 to-cyan-600 font-bold text-lg shadow-lg hover:bg-green-700 hover:to-cyan-700 transition-all md:px-16 sm:px-12 xs:px-8"
        >
          Get Started
        </a>

        {/* Icons flow above footer */}
       {/* Icons flow above footer */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
  <div className="flex flex-col items-center">
    <DocumentArrowUpIcon className="w-12 h-12 text-red-600" />
    <span className="text-white mt-2">PDF</span>
  </div>

  {/* Arrow: horizontal on desktop, vertical on mobile */}
  <div className="text-green-500 text-4xl font-bold relative -top-0 sm:-top-2 sm:mx-0 mx-auto rotate-90 sm:rotate-0">
    &rarr;
  </div>

  <div className="flex flex-col items-center">
    <CodeBracketIcon className="w-12 h-12 text-cyan-400" />
    <span className="text-white mt-2">API</span>
  </div>

  <div className="text-green-500 text-4xl font-bold relative -top-0 sm:-top-2 sm:mx-0 mx-auto rotate-90 sm:rotate-0">
    &rarr;
  </div>

  <div className="flex flex-col items-center">
    <div className="flex items-center text-green-500 text-5xl font-mono">
      <span>{'{'}</span>
      <span className="mx-1">JSON</span>
      <span>{'}'}</span>
    </div>
    <span className="text-white mt-2">JSON</span>
  </div>
</div>


        {/* Info cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
            <h3 className="font-semibold text-xl mb-2 text-green-400">Powerful API</h3>
            <p className="text-gray-400">
              Simple, secure REST endpoints designed for easy integration with your apps.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
            <h3 className="font-semibold text-xl mb-2 text-green-400">AI LLM Powered</h3>
            <p className="text-gray-400">
              State-of-the-art Large Language Models extract structured data from complex PDFs.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
            <h3 className="font-semibold text-xl mb-2 text-green-400">Clean JSON Responses</h3>
            <p className="text-gray-400">
              Well-formed JSON outputs ready to use in your workflows and applications.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 mt-16 bg-gradient-to-br from-[#0f172a] via-gray-900 to-black border-t border-cyan-900 text-gray-500 text-center text-sm">
        <div className="flex justify-center gap-8 mb-2 flex-wrap">
          <a href="https://github.com/SRIJAN-KUMAR7" target="_blank" rel="noopener noreferrer" className="text-green-600 transition hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/srijan-kumar-a780b9246/" target="_blank" rel="noopener noreferrer" className="text-green-600 transition hover:text-white">LinkedIn</a>
        </div>
        <div className="text-white">© {new Date().getFullYear()} &nbsp; Made with ❤️ by <span className="hover:text-blue-200">Srijan Kumar</span></div>
      </footer>
    </section>
  );
}
