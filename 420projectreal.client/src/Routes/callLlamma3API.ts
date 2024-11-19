// callLlama3API.ts
import axios from "axios";
import { Llama3Request, Llama3Response } from "./types";

const callLlama3API = async (prompt: string): Promise<Llama3Response> => {
    const requestData: Llama3Request = {
        prompt,
        max_tokens: 100, // Adjust as needed
    };

    try {
        const response = await axios.post<Llama3Response>(
            "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B",
            requestData,
            {
                headers: {
                    Authorization: `Bearer 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`, // Replace with your actual API key
                    "Content-Type": "application/json",
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error calling Llama 3 API:", error);

        throw error;
    }
};

export default callLlama3API;
