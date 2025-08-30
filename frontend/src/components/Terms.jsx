import React from "react";
export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200 p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">1.Terms of Service & Privacy Policy</h2>
      <section className="mb-8">
        <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          By using JsonifyPDF, you agree to comply with our terms and conditions. Unauthorized use of the API is prohibited.
          You must provide your own valid Gemini API key for authentication. We reserve the right to suspend or terminate accounts violating these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. User Responsibilities</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          Users are responsible for securing their API keys and ensuring their usage complies with all relevant laws. You should not share your API key or use another user’s key.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Data Privacy</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          Uploaded PDF documents are processed securely and only temporarily stored for the duration of the processing. We do not retain your files or extracted data beyond the necessary processing timeframe.
          We do not share your data with third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Liability</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          JsonifyPDF is provided as-is and we do not guarantee accuracy or availability. Use at your own risk.
          We disclaim liability for any direct or indirect damages resulting from API usage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Changes to Terms</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          We may update these terms from time to time. Continued use of the service constitutes acceptance of the updated terms.
          We encourage you to review this page periodically.
        </p>
      </section>

      <section className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-prose">
  By using <span className="font-semibold text-green-600 dark:text-green-400">JsonifyPDF</span>, you agree to our{' '}
  <button
    className="text-green-500 dark:text-green-400 hover:underline font-semibold"
    onClick={() => setPage('/terms')}
  >
    Terms and Privacy Policy
  </button>. All files you upload are handled securely and deleted after processing to protect your privacy.
  Checkout Official repository on  <a href="https://github.com/SRIJAN-KUMAR7/pdf-json-microservice" target="_blank" className="hover:underline font-semibold text-green-600 dark:text-green-400">Git Hub</a>
</p>
      </section>
    </main>
  );
}
