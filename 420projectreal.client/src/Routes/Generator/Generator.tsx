import React, { useState } from 'react';
import { callHuggingFaceAPI } from '../../apiService';
import './Generator.css';
import { HfInference } from '@huggingface/inference'



const Generator: React.FC = () => {

    const [actors, setActors] = useState('');
    const [genre, setGenre] = useState('');
    const [director, setDirector] = useState('');
    const [summary, setSummary] = useState('');
    const [result, setResult] = useState({ title: '', rating: '', box_office: '', summary: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const hf = new HfInference('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');

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {

            
        const output = await hf.chatCompletion({
                model: 'meta-llama/Llama-3.2-3B-Instruct',                   
                max_new_tokens: 700,
                messages: [
                    {
                        role: "user",
                        content: `Create a movie using the following details: Actors: ${actors}, Genre: ${genre}, Director: ${director},Summary: ${summary || ""} 
        return a new movie name as the Movie Title, Box office worth as the Box Office Worth, Rating 1-10, and a plot as the plot. Only rreturn the information I asked for`,
                    },
                    
            ],
            parameters: {
            max_length: 100,
            max_position_embeddings: 1000, 
           }
                
            })
            
            console.log(output.choices[0].message.content);

            const generatedText = output.choices[0].message.content || '';

            // Regex patterns to match the relevant fields
            const regexPatternTitle = /Movie Title:\s(.+)/i;
            const regexPatternRating = /Rating:\s*(.+)/i;
            const regexPatternBoxOffice = /Box Office Worth:\s*(.+)/i;
            const regexPatternSummary = /Plot:\s*(.+)/i;

            // Extract values using regex
            const titleMatch = generatedText.match(regexPatternTitle);
            const ratingMatch = generatedText.match(regexPatternRating);
            const boxOfficeMatch = generatedText.match(regexPatternBoxOffice);
            const summaryMatch = generatedText.match(regexPatternSummary);

            setResult ({
                title: titleMatch?.[1]?.trim() || 'Unknown Title',
                rating: ratingMatch?.[1]?.trim() || 'No rating provided',
                box_office: boxOfficeMatch?.[1]?.trim() || 'No box office info provided',
                summary: summaryMatch?.[1]?.trim() || 'No detailed summary provided.',
            });

            //setResult(generatedResult);
        } catch (err: any) {
            setError(err.message);
            setResult({ title: '', rating: '', box_office: '', summary: '' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="generator-container">
            <div className="generator-header">
                <h3 className="generator-title">Generator</h3>
            </div>

            <div className="form-section">
                <form className="generator-form" onSubmit={handleGenerate}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Actors"
                            className="form-input"
                            value={actors}
                            onChange={(e) => setActors(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Genre"
                            className="form-input"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Director"
                        className="form-input full-width"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="(Optional) Enter your movie summary!"
                        className="form-textarea"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    ></textarea>
                    <button type="submit" className="generate-button" disabled={loading}>
                        {loading ? 'Generating...' : 'Generate'}
                    </button>
                    <p>generatedResult</p>
                </form>
            </div>

            {error && (
                <div className="error-message">
                    <p>{error}</p>
                </div>
            )}

            {result.title && !error && (
                <section className="generator-footer">
                    <div className="footer-card">
                        <h4 className="footer-title">Title</h4>
                        <p>{result.title}</p>
                    </div>
                    <div className="footer-card">
                        <h5 className="footer-title">Rating</h5>
                        <p>{result.rating}</p>
                    </div>
                    <div className="footer-card">
                        <h5 className="footer-title">Box Office</h5>
                        <p>{result.box_office}</p>
                    </div>
                    <div className="footer-card">
                        <h5 className="footer-title">Summary</h5>
                        <p>{result.summary}</p>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Generator;
