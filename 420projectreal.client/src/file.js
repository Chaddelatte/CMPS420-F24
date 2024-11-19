import axios from "axios";

const callLlama3API = async (prompt) => {
    try {
        const response = await axios.post(
            "https://api.llama3provider.com/v1/completions",
            {
                prompt: prompt,
                max_tokens: 100, // Adjust based on your use case
            },
            {
                headers: {
                    Authorization: `Bearer YOUR_API_KEY`, // Replace with your actual API key
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error calling Llama 3 API:", error);
        throw error;
    }
};

export default callLlama3API;
