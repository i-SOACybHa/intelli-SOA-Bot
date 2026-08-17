import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages[messages.length - 1]?.content || '';

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: lastUserMessage,
      config: {
        systemInstruction: "Ianao dia intelli-SOA, mpanampy Intelligence Artificielle maoderina, maranitra, sy sariaka. Mamaly ny fanontanian'ny mpampiasa amin'ny fomba mazava sy matihanina ianao.",
      }
    });

    const replyText = response.text || "Miala tsiny, misy olana teknika kely. Mba andramo indray.";

    return Response.json({ result: replyText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return Response.json({ error: "Misy fahadisoana amin'ny fifandraisana amin'ny AI." }, { status: 500 });
  }
}
