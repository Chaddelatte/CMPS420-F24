import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const Results: React.FC = () => {
    const location = useLocation();
    const [cachedResult, setCachedResult] = useState<unknown>(null);

    useEffect(() => {
        const storedResult = sessionStorage.getItem("movieResult");
        if (storedResult) {
            setCachedResult(JSON.parse(storedResult));
        }
    }, []);

    const { title, rating, box_office, summary, poster } = cachedResult || location.state || {};

    const handleShare = () => {
        if (poster) {
            FB.ui({
                method: 'share',
                href: poster,
                quote: ''
            });
        } else {
            console.error("No poster to share");
        }
    };

    return (
        <div style={{ fontFamily: "'Inter Tight', sans-serif", padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>
                Results
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ flex: '0 0 200px', fontWeight: 'bold' }}>Title</div>
                <div style={{ flex: 1, fontSize: '1rem' }}>{title || "No title available"}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ flex: '0 0 200px', fontWeight: 'bold' }}>Rating</div>
                <div style={{ flex: 1, fontSize: '1rem' }}>{rating || "No rating available"}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ flex: '0 0 200px', fontWeight: 'bold' }}>Box Office Income</div>
                <div style={{ flex: 1, fontSize: '1rem' }}>{box_office || "No box office data available"}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ flex: '0 0 200px', fontWeight: 'bold' }}>Summary</div>
                <div style={{ flex: 1, fontSize: '1rem' }}>{summary || "No summary available"}</div>
            </div>

            {poster && (
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h3 style={{ fontWeight: 'bold' }}>Poster</h3>
                    <img src={poster} alt="Movie Poster" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
                </div>
            )}

            <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Link to="/generate">
                    <button
                        data-tooltip-id="regenerate"
                        data-tooltip-content="Click to get new results"
                        data-tooltip-place="top"
                        className="btn btn-primary"
                        style={{
                            fontWeight: 'bold',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '20px',
                            transition: 'all 0.2s ease-in-out',
                        }}
                    >
                        Regenerate!
                    </button>
                    <Tooltip id="regenerate" />
                </Link>
            </section>

            <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <button
                    onClick={handleShare}
                    className="footer-btn share-btn"
                    style={{
                        fontWeight: 'bold',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        transition: 'all 0.2s ease-in-out',
                    }}
                >
                    Post to Social Media
                </button>
            </section>
        </div>
    );
};

export default Results;
