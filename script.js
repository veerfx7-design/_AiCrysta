async function search() {
  const q = document.getElementById("query").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "🔍 Searching...";

  // Dummy response (real API keys बाद में जोड़ेंगे)
  resultsDiv.innerHTML = `
    <p><b>ChatGPT:</b> ${q} का उत्तर ...</p>
    <p><b>Gemini:</b> ${q} के लिए जानकारी ...</p>
    <p><b>Perplexity:</b> ${q} का विश्लेषण ...</p>
  `;
}
