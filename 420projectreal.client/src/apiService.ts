import axios from 'axios';

const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;

export const callHuggingFaceAPI = async (
    actors: string,
    genre: string,
    director: string,
    summary: string
): Promise<{ title: string; rating: string; box_office: string; summary: string }> => {
    try {
        // Refined prompt for explicit structured output
        const prompt = `
            You are a movie idea generator. Respond strictly in the following format:
            Title: [Movie Title]
            Rating: [Rating out of 10]
            Box Office: [Estimated box office earnings]
            Summary: [Detailed summary]

            Inputs:
            Actors: ${actors}
            Genre: ${genre}
            Director: ${director}
            Summary: ${summary || "No summary provided."}

            IMPORTANT: Do not add any extra commentary or repeat the input. Only output in the specified format.
        `;

        console.log('API Request Prompt:', prompt);

        // Make the API request to Hugging Face
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B',
            { inputs: prompt },
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('Raw API Response:', response.data);

        // Extract the generated text from the response
        const generatedText = response.data?.[0]?.generated_text || '';

        if (!generatedText) {
            throw new Error('The API returned an empty response.');
        }

        // Parse the response to extract structured fields
        const titleMatch = generatedText.match(/Title:\s*(.+)/i);
        const ratingMatch = generatedText.match(/Rating:\s*(.+)/i);
        const boxOfficeMatch = generatedText.match(/Box Office:\s*(.+)/i);
        const summaryMatch = generatedText.match(/Summary:\s*(.+)/i);

        // Return structured data with fallback values
        return {
            title: titleMatch?.[1]?.trim() || 'Unknown Title',
            rating: ratingMatch?.[1]?.trim() || 'No rating provided',
            box_office: boxOfficeMatch?.[1]?.trim() || 'No box office info provided',
            summary: summaryMatch?.[1]?.trim() || 'No detailed summary provided.',
        };
    } catch (error: any) {
        console.error('Error calling Hugging Face API:', error.response?.data || error.message);

        // Return a fallback error to the user
        throw new Error(
            error.response?.data?.error ||
            'Failed to fetch results from Hugging Face API. Please try again later.'
        );
    }
};
