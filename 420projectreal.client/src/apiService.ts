import axios from 'axios';

const apiKey = `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`;

export const callHuggingFaceAPI = async (
    actors: string,
    genre: string,
    director: string,
    summary: string
): Promise<{ title: string; rating: string; box_office: string; summary: string }> => {
    try {
        // Refined prompt for explicit structured output
        const prompt = `Create a movie using the following details: Actors: ${actors}, Genre: ${genre}, Director: ${director},Summary: ${summary || "No summary provided."} 
        Suggest a new movie name, Box office worth, Rating, and a plot`;

       //onsole.log('API Request Prompt:', prompt);

        // Make the API request to Hugging Face
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B',
            {
                inputs: 'count to 10',
                //max_tokens: 10240000,
               // messages: {
                    role: "system",
                    content: "You are a Movie director.",

                
                //},
            },

            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                    //max_tokens: 1024,
                    //timeout: 30,
                    //model: 'llama-3',
                    //stream: true,
                },

            },


        );

        //console.log('Raw API Response:', response.data);

        // Extract the generated text from the response
        const generatedText = response.data?.[0]?.generated_text || '';

        if (!generatedText) {
            throw new Error('The API returned an empty response.');
        }

       // console.log(response.data?.[0]?.generated_text);
        //console.log(response);

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
