import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "Tsy hita ny GEMINI_API_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json();
    // Maka ny text mivantana na avy amin'ny array hafatra
    const userPrompt = body.prompt || 
                       (Array.isArray(body.messages) ? body.messages[body.messages.length - 1]?.content : null) || 
                       "Manao ahoana";

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(userPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ role: "assistant", content: text });
  } catch (error) {
    console.error("Runtime error:", error);
    return NextResponse.json(
      { error: "Misy olana tamin'ny fakana valiny." },
      { status: 500 }
    );
  }
}
