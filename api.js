// api/ai.js
export default async function handler(req, res) {
  const { query } = req.query;

  // OpenAI
  const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: query }],
    }),
  });
  const openaiData = await openaiRes.json();

  // Gemini
  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: query }] }],
      }),
    }
  );
  const geminiData = await geminiRes.json();

  res.status(200).json({
    chatgpt: openaiData?.choices?.[0]?.message?.content || "No response",
    gemini: geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "No response",
  });
}
