import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing!");
      return NextResponse.json(
        { error: "API Key tsy hita ao amin'ny Vercel" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Format hafatra diso" },
        { status: 400 }
      );
    }

    // Mampiasa gemini-1.5-flash
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Maka ny teksta farany nalefan'ny mpampiasa
    const lastMessage = messages[messages.length - 1]?.content || "";

    const result = await model.generateContent(lastMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ role: "assistant", content: text });
  } catch (error) {
    console.error("Error ao amin'ny Chat API:", error);
    return NextResponse.json(
      { error: "Misy olana tamin'ny fakana valiny." },
      { status: 500 }
    );
  }
}
