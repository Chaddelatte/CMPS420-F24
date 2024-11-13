import React, { useState } from 'react';
import './Generator.css';

const Generator: React.FC = () => {
    const [actors, setActors] = useState("");
    const [genre, setGenre] = useState("");
    const [director, setDirector] = useState("");
    const [summary, setSummary] = useState("");
    const [result, setResult] = useState({ title: "", rating: "", box_office: "", summary: "" });

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:5000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ actors, genre, director, summary })
        });

        if (response.ok) {
            const data = await response.json();
            setResult(data);
        } else {
            console.error("Error generating text");
        }
    };

    return (
        <div className="generator-container">
            {/* Header Section */}
            <div className="generator-header">
                <h3 className="generator-title">Generator</h3>
            </div>

            {/* Form Section */}
            <div className="form-section">
                <form className="generator-form" onSubmit={handleGenerate}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Actors"
                            className="form-input"
                            alt="Type in names of actors and actresses here"                            
                            value={actors}
                            onChange={(e) => setActors(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Genre"
                            className="form-input"
                            alt="Type in genre types here"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Director"
                        className="form-input full-width"
                        alt="Type in a director(s) name"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="(Optional) Enter your movie summary!"
                        className="form-textarea"
                        //alt="Type a movie summary to give AI more direction"                        
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    ></textarea>
                    <button type="submit" className="generate-button">Generate</button>
                </form>
            </div>

            {/* Display the Generated Result */}
            {result.title && (
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
                    <div className="footer-actions">
                        <button className="footer-btn regenerate-btn">Regenerate</button>
                        <button className="footer-btn share-btn">Post to Social Media</button>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Generator;
