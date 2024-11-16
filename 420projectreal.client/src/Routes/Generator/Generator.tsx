import React, { useState } from 'react';
import { callHuggingFaceAPI } from '../../apiService';
import './Generator.css';

const Generator: React.FC = () => {
    const [actors, setActors] = useState('');
    const [genre, setGenre] = useState('');
    const [director, setDirector] = useState('');
    const [summary, setSummary] = useState('');
    const [result, setResult] = useState({ title: '', rating: '', box_office: '', summary: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const generatedResult = await callHuggingFaceAPI(actors, genre, director, summary);
            setResult(generatedResult);
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
                        <h5 className="footer-title">Title</h5>
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
