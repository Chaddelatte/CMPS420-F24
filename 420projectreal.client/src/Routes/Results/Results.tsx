import React from 'react';
import { Link } from 'react-router-dom';


const Results: React.FC = () => {
    return (
        
        <div
            style={{
                fontFamily: "'Inter Tight', sans-serif",
                padding: '1rem',
                maxWidth: '800px',
                margin: '0 auto',
                //color: '#333',
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
            <section
                style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '2rem',
                }}
            >
                <Link to="/generate">
                    <button
                        className="btn btn-primary"
                        style={{
                            fontWeight: 'bold',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '20px',
                            transition: 'all 0.2s ease-in-out',
                        }}                        
                    >
                        Regenerate!
                    </button></Link>
            </section> 
            <section className = 'Footer'
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    padding: '3rem 0',
                    
                    backgroundColor: '#fff7e4',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: '1',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1rem',
                        maxWidth: '1200px',
                        justifyContent: 'center',
                    }}
                >
                    {['Title', 'Rating', 'Box Office', 'Summary'].map((title, index) => (
                        <div
                        className='BoxDiv'    
                        key={index}
                            style={{
                                //backgroundColor: '#fff',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                padding: '1rem',
                                textAlign: 'center',
                            }}
                        >
                            <h5 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h5>
                            <p>
                                {title === 'X.com'
                                    ? ''
                                    : title === 'Facebook'
                                        ? ''
                                        : title === 'Instagram'
                                            ? ''
                                            : ''}

                                            
                            </p>
                        </div>
                    ))}
                </div>

               
            </section>



        </div>
                  

               
        
    );
    
};

export default Results;
