// Import dependencies
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON data

// Initialize Google AI
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

// Routes
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/receive", async (req, res) => {
    try { 
        console.log("Received Input:", req.body.userInput);

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: req.body.userInput,
            parameters: {
                temperature: 0.5,
                maxOutputTokens: 200, 
                topP: 0.8,
                topK: 40,
            },
        });

        console.log("AI Response:", response.text);
        res.json({ response: response.text });
    } catch (error) {
        console.error("Error in AI processing:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
