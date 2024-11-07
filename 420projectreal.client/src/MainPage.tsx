import React from 'react';
import { FaLightbulb, FaChartLine, FaComments } from 'react-icons/fa';

const MainPage: React.FC = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Header Section */}
            <section
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    padding: '1rem',
                    textAlign: 'center',
                    backgroundColor: '#edefeb',
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div style={{ maxWidth: '600px', paddingTop: '80px' }}>
                    <h1 style={{ fontSize: '2.5rem', color: '#222', marginBottom: '1rem', fontWeight: 'bold' }}>
                        Where You Get Into The Director's Seat
                    </h1>
                    <button
                        style={{
                            fontWeight: 'bold',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '20px',
                            transition: 'all 0.2s ease-in-out',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = 'black';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '';
                            e.currentTarget.style.color = '';
                        }}
                    >
                        Start now
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section
                style={{
                    width: '100vw',
                    marginLeft: 'calc(50% - 50vw)',
                    padding: '2rem 0',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    position: 'relative',
                    flex: '1',
                }}
            >
                {[{ icon: FaLightbulb, title: "Creation", description: "Imagine your favorite movie genre, actor's, or director" },
                { icon: FaChartLine, title: "Promotion", description: "See how well your movie will do in the box office" },
                { icon: FaComments, title: "Branding", description: "See who will be talking about your movie" }].map(({ icon: Icon, title, description }, index) => (
                    <div key={index}
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '1.5rem',
                            flex: 1,
                            maxWidth: '300px',
                            textAlign: 'center',
                        }}
                    >
                        <Icon style={{ fontSize: '2rem', color: '#007bff', marginBottom: '1rem' }} />
                        <h5 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{title}</h5>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>{description}</p>
                    </div>
                ))}
            </section>

            {/* Footer Section */}
            <section
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
                            key={index}
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                padding: '1rem',
                                textAlign: 'center',
                            }}
                        >
                            <h5 style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h5>
                            <p>
                                {title === 'Title'
                                    ? 'Your movie is *sample name*'
                                    : title === 'Rating'
                                        ? 'Your movie got *X/100* on the charts!'
                                        : title === 'Box Office'
                                            ? 'Your movie made X dollars in the box office!'
                                            : 'Your movie consists of X, Y, and Z.'}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    style={{
                        marginTop: '2rem',
                        display: 'flex',
                        gap: '1rem',
                    }}
                >
                    <button
                        style={{
                            padding: '0.5rem 1.5rem',
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            backgroundColor: '#000',
                            color: '#fff',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#fff7e4';
                            e.currentTarget.style.color = 'black';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'black';
                            e.currentTarget.style.color = 'white';
                        }}
                    >
                        Regenerate
                    </button>
                    <button
                        style={{
                            padding: '0.5rem 1.5rem',
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            backgroundColor: '#000',
                            color: '#fff',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#fff7e4';
                            e.currentTarget.style.color = 'black';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = 'black';
                            e.currentTarget.style.color = 'white';
                        }}
                    >
                        Post to Social Media
                    </button>
                </div>
            </section>
        </div>
    );
};

export default MainPage;
