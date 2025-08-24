import React, { useState, useEffect } from 'react';
import Terms from './Terms';

const exampleUploadCode = `curl -X POST https://api.jsonifypdf.com/upload \\
  -H "Authorization: Bearer <your-gemini-api-key>" \\
  -F "file=@/home/user/sample.pdf"`;

const exampleUrlCode = `curl -X POST https://api.jsonifypdf.com/upload-url \\
  -H "Authorization: Bearer <your-gemini-api-key>" \\
  -H "Content-Type: application/json" \\
  -d '{"pdf_url": "https://example.com/document.pdf"}'`;

export default function Docs() {
  const [copiedUpload, setCopiedUpload] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [activeSection, setActiveSection] = useState('quickstart');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = '70px';
    return () => {
      document.documentElement.style.scrollPaddingTop = '';
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-200 pt-16">
      {/* Mobile Menu Button */}
      <button
  onClick={() => setSidebarOpen(!sidebarOpen)}
  className="md:hidden fixed top-20 left-1 z-50 p-1 rounded text-white bg-transparent text-3xl leading-none"
  aria-label="Open documentation menu"
>
  &rsaquo; 
</button>
     
      <aside
        className={`fixed top-16 left-0 w-64 h-full bg-black border-r border-gray-800 pt-6 px-4 overflow-y-auto transition-transform duration-300 z-40
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:h-auto md:border-0 md:overflow-visible md:px-6`}
      >
        <nav className="space-y-1">
          {[
            ['quickstart', 'Introduction & Quickstart'],
            ['auth', 'Authentication'],
            ['reference', 'API Reference'],
            ['examples', 'Code Examples'],
            ['testing', 'API Testing'],
            ['faq', 'FAQ & Troubleshooting'],
            ['legal', 'Terms & Legal']
          ].map(([key, title]) => (
            <button
              key={key}
              onClick={() => { setActiveSection(key); setSidebarOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors 
                ${activeSection === key ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
            >
              {title}
            </button>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-800 px-2 text-center text-gray-500 text-sm select-none">
          Need help? <br />
          <a href="mailto:support@jsonifypdf.com" className="text-green-500 hover:underline">
            srijankumar77777@gmail.com
          </a>
        </div>
      </aside>

      {/* Overlay on mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 sm:p-8 max-w-4xl mx-auto">
        {/* Introduction & Quickstart */}
        {activeSection === 'quickstart' && (
          <section id="quickstart" className="mb-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
              Introduction & Quickstart
            </h2>

            <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to JsonifyPDF! Easily convert your PDFs to structured JSON data using our AI-powered API. Make sure to pass your <code className="font-mono px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">Gemini API key</code> for secure and private access.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">File Upload Method</h3>
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow p-5 mb-10 relative">
              <div className="flex items-center mb-4 gap-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Upload a PDF file directly with a POST request:
                </span>

                <button
                  className="ml-auto text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition flex items-center gap-1"
                  onClick={() => {
                    navigator.clipboard.writeText(exampleUploadCode);
                    setCopiedUpload(true);
                    setTimeout(() => setCopiedUpload(false), 1200);
                  }}
                  aria-label="Copy upload example code"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {copiedUpload ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-xs overflow-x-auto text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700">
                {exampleUploadCode}
              </pre>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">URL Processing Method</h3>
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow p-5 mb-10 relative">
              <div className="flex items-center mb-4 gap-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Process a PDF document directly from any public URL:
                </span>

                <button
                  className="ml-auto text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500 transition flex items-center gap-1"
                  onClick={() => {
                    navigator.clipboard.writeText(exampleUrlCode);
                    setCopiedUrl(true);
                    setTimeout(() => setCopiedUrl(false), 1200);
                  }}
                  aria-label="Copy URL processing example code"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {copiedUrl ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-xs overflow-x-auto text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700">
                {exampleUrlCode}
              </pre>
            </div>
          </section>
        )}

        {/* Authentication */}
        {activeSection === 'auth' && (
          <section id="auth" className="mb-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
              Authentication
            </h2>
            <div className="flex items-center text-green-600 dark:text-green-500 mb-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2v1h1a2 2 0 110 4h-1v1a2 2 0 11-4 0v-1h-1v-3h1v-1a2 2 0 012-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13v3a2 2 0 01-4 0v-3" />
              </svg>
              Include your Gemini API Key in each request.
            </div>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Use the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono text-sm border border-gray-200 dark:border-gray-700">Authorization</code> header, like so:</p>
            <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-gray-800 dark:text-gray-200 font-mono text-sm border border-gray-200 dark:border-gray-700 max-w-full overflow-x-auto">
              {`Authorization: Bearer <your-gemini-api-key>`}
            </pre>
          </section>
        )}

        {/* API Reference */}
        {activeSection === 'reference' && (
          <section id="reference" className="mb-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
              API Reference
            </h2>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 mb-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                POST /upload
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Upload a PDF file for processing.</p>

              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Parameters</h4>
              <div className="overflow-x-auto rounded-md">
                <table className="w-full text-sm text-gray-700 dark:text-gray-300 mb-6">
                  <thead className="bg-gray-50 dark:bg-gray-700 font-semibold">
                    <tr>
                      <th className="text-left py-2 px-3">Parameter</th>
                      <th className="text-left py-2 px-3">Type</th>
                      <th className="text-left py-2 px-3">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-2 px-3 font-mono">file</td>
                      <td className="py-2 px-3">File (.pdf)</td>
                      <td className="py-2 px-3">Required. The PDF document to parse.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono">Authorization</td>
                      <td className="py-2 px-3">Header (Bearer token)</td>
                      <td className="py-2 px-3">Required. Your Gemini API key.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Request Example:</h4>
              <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded mb-4 font-mono text-xs dark:text-gray-200 text-gray-900 overflow-auto max-w-full border border-gray-300 dark:border-gray-700">
                {exampleUploadCode}
              </pre>

              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Success Response:</h4>
              <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded mb-4 font-mono text-xs dark:text-green-400 text-green-700 border border-gray-300 dark:border-gray-700 max-w-full overflow-auto">
                {`{
  "fields": {
    "InvoiceNumber": "12345",
    "Date": "2025-08-24"
  },
  "tables": []
}`}
              </pre>

              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Error Response:</h4>
              <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded mb-4 font-mono text-xs dark:text-red-600 text-red-700 border border-gray-300 dark:border-gray-700 max-w-full overflow-auto">
                {`{
  "error": "Invalid API Key",
  "status": 401
}`}
              </pre>

              <p className="text-gray-600 dark:text-gray-400 text-xs">
                Status Codes: <span className="font-mono text-green-600">200</span> Success, <span className="font-mono text-red-600">401</span> Unauthorized, <span className="font-mono text-yellow-600">400</span> Bad Request
              </p>
            </div>

            {/* Add section for /upload-url similarly, if you like */}
          </section>
        )}

        {/* Code Examples */}
        {activeSection === 'examples' && (
          <section id="examples" className="mb-16 scroll-mt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">Code Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Python</h3>
                <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-xs dark:text-green-400 text-green-700 overflow-auto max-w-full border border-gray-300 dark:border-gray-700">
{`import requests

url = "https://api.jsonifypdf.com/upload"
headers = {"Authorization": "Bearer <your-gemini-api-key>"}
files = {"file": open("sample.pdf", "rb")}
response = requests.post(url, headers=headers, files=files)
print(response.json())`}
                </pre>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Node.js</h3>
                <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-xs dark:text-green-400 text-green-700 overflow-auto max-w-full border border-gray-300 dark:border-gray-700">
{`const axios = require('axios');
const fs = require('fs');

const url = "https://api.jsonifypdf.com/upload";
const apiKey = "<your-gemini-api-key>";
const file = fs.createReadStream("sample.pdf");

axios.post(url, file, {
  headers: {
    "Authorization": \`Bearer \${apiKey}\`,
    "Content-Type": "multipart/form-data"
  }
}).then(res => {
  console.log(res.data);
});`}
                </pre>
              </div>
            </div>
          </section>
        )}


        {/* Testing the API (Postman / Thunder Client) */}
{activeSection === 'testing' && (
  <section id="testing" className="mb-16 scroll-mt-16">
    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
      Testing the API (Postman / Thunder Client)
    </h2>
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 md:p-8">
      <div className="text-gray-700 dark:text-gray-300 space-y-6">
        <p className="font-semibold">1. Create a <code>POST</code> request</p>
        <p>Use either endpoint:</p>
        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li><code>/upload</code> → Upload a PDF file (use <strong>form-data</strong>)</li>
          <li><code>/upload-url</code> → Send a PDF URL (use <strong>raw JSON</strong>)</li>
        </ul>

        <p className="font-semibold">2. Headers</p>
        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li><code>Content-Type</code>: <code>application/json</code> (for URL method)</li>
          <li><code>Authorization</code>: <code>Bearer &lt;your-gemini-api-key&gt;</code></li>
        </ul>

        <p className="font-semibold">3. Body Example (URL)</p>
        <pre className="text-green-600 bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm overflow-x-auto border border-gray-300 dark:border-gray-700 mb-6">
{`{
  "pdf_url": "https://example.com/resume.pdf"
}`}
        </pre>

        <p className="font-semibold">4. Response Example</p>
        <pre className="text-green-300 bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm overflow-x-auto border border-gray-300 dark:border-gray-700">
{`{
  "json": {
    "personal_information": {
      "name": "John doe",
      "email": "johndoeemail@gmail.com",
      "phone": "+91 1234567890"
    },
    "skills": ["JavaScript", "Python", "React", "Next.js"],
    "education": [...],
    "work_experience": [...],
    "projects": [...]
  }
}`}
        </pre>
      </div>
    </div>
  </section>
)}

{/* FAQ & Troubleshooting */}
{activeSection === 'faq' && (
  <section id="faq" className="mb-16 scroll-mt-16">
    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
      FAQ & Troubleshooting
    </h2>
    <dl className="space-y-8 text-gray-700 dark:text-gray-300">
      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
        <dt className="font-semibold text-xl mb-3 text-green-600 dark:text-green-400">Why am I getting 'Invalid API Key'?</dt>
        <dd className="leading-relaxed">
          Check your Gemini API key's <strong>validity and quota</strong>. Make sure there are no extra spaces, typos, or expired keys.
        </dd>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
        <dt className="font-semibold text-xl mb-3 text-green-600 dark:text-green-400">What file types are accepted?</dt>
        <dd className="leading-relaxed">Currently, only <strong>PDF</strong> files are accepted for processing.</dd>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
        <dt className="font-semibold text-xl mb-3 text-green-600 dark:text-green-400">Is my data stored?</dt>
        <dd className="leading-relaxed">
          Uploaded PDFs are processed <strong>securely and temporarily</strong>. We do not store your files after processing to ensure your privacy.
        </dd>
      </div>
    </dl>
  </section>
)}

{/* Terms & Legal */}
{activeSection === 'legal' && (
  <section id="legal" className="mb-16 scroll-mt-16">
    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-2">
      Terms & Legal
    </h2>
  <Terms/> 
  </section>
)}

      </main>
    </div>
  );
}
