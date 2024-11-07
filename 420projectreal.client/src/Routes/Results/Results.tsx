import React from 'react';

const Results: React.FC = () => {
    return (
        <div
            style={{
                fontFamily: "'Inter Tight', sans-serif",
                padding: '1rem',
                maxWidth: '800px',
                margin: '0 auto',
                color: '#333',
            }}
        >
            <h2
                style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '2rem',
                }}
            >
                Results
            </h2>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                }}
            >
                <div
                    style={{
                        flex: '0 0 200px',
                        fontWeight: 'bold',
                    }}
                >
                    You prompted:
                </div>
                <div
                    style={{
                        flex: 1,
                        fontSize: '1rem',
                    }}
                >
                    Sample Actor, Sample Director, Sample Genre, Sample Title
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                }}
            >
                <div
                    style={{
                        flex: '0 0 200px',
                        fontWeight: 'bold',
                    }}
                >
                    Title
                </div>
                <div
                    style={{
                        flex: 1,
                        fontSize: '1rem',
                    }}
                >
                    Your movie title is *sample title*
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                }}
            >
                <div
                    style={{
                        flex: '0 0 200px',
                        fontWeight: 'bold',
                    }}
                >
                    Rating
                </div>
                <div
                    style={{
                        flex: 1,
                        fontSize: '1rem',
                    }}
                >
                    Your movie scored a/an *X/100*!
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                }}
            >
                <div
                    style={{
                        flex: '0 0 200px',
                        fontWeight: 'bold',
                    }}
                >
                    Box Office Income
                </div>
                <div
                    style={{
                        flex: 1,
                        fontSize: '1rem',
                    }}
                >
                    Your movie made X dollars in the box office!
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                }}
            >
                <div
                    style={{
                        flex: '0 0 200px',
                        fontWeight: 'bold',
                    }}
                >
                    Summary
                </div>
                <div
                    style={{
                        flex: 1,
                        fontSize: '1rem',
                    }}
                >
                    Your movie about X, Y, and Z!
                </div>
            </div>
        </div>
    );
};

export default Results;
