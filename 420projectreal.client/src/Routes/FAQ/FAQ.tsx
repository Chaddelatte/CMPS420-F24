import React from 'react';
import { Tooltip } from 'react-tooltip';

const FAQ: React.FC = () => {
    return (
        <div style={{
            backgroundColor: '#edefeb',
            padding: '.7rem',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
        }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>FAQ</h1>
                <p style={{ fontSize: '1.2rem', color: '#555' }}>Experiencing Issues?</p>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
                        What is the purpose of this project?
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#555' }}>
                        The purpose of this project is to allow any individual to create and obtain results about any movie of their choice. Whether you are just curious or a director trying to make more money, we have something for you!
                    </p>
                </div>

                <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
                        How do I use this project?
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#555' }}>
                        Upon clicking the generate button in the top right, please fill out the prompts based on the sample text provided within them. Once you have filled all of them out, click generate. If you are still experiencing issues, please contact us!
                    </p>
                </div>

                <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
                        How do I share my results?
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#555' }}>
                        In the bottom right of the first box to appear on the results page, there are little social media icons. Upon clicking, they will allow a user to share their results. Clicking in the top right of the navigation bar will also allow you to share these results.
                    </p>
                </div>
                <h2 style={{ color:"black",fontSize: '2rem', marginBottom: '1.5rem' }}>Still Need Help?</h2>
                <form action="https://formspree.io/f/movqwwlo"
                    method="POST" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        gap: '1rem',
                        marginBottom: '1rem'
                    }}>
                        <input
                            data-tooltip-id="name"
                            data-tooltip-content="Please enter a name we can use to contact you"
                            data-tooltip-place="top"
                            type="text"
                            name="name"
                            placeholder="Name"
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                fontSize: '1rem',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                outline: 'none'
                            }}
                            required
                        />
                        <Tooltip id="name" />
                        <input
                            data-tooltip-id="email"
                            data-tooltip-content="Please enter a valid email to contact you at."
                            data-tooltip-place="top"
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                fontSize: '1rem',
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                outline: 'none'
                            }}
                            required
                        />
                        <Tooltip id="email" />
                    </div>
                    <textarea
                        data-tooltip-id="issue"
                        data-tooltip-content="Enter detailed information. More the better!"
                        data-tooltip-place="top"
                        name="issue"
                        placeholder="What are you experiencing problems with?"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            fontSize: '1rem',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            marginBottom: '1rem',
                            minHeight: '100px',
                            outline: 'none'
                        }}
                        required
                    ></textarea>
                    <Tooltip id="issue" />
                    <button type="submit" 
                        data-tooltip-id="submit"
                        data-tooltip-content="Send a message to support"
                        data-tooltip-place="top"
                        style={{
                        fontWeight: 'bold',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '20px',
                        color: 'white',
                        borderColor: '#407bbf',
                        backgroundColor: '#407bbf',
                        transition: 'all 0.2s ease-in-out',
                        cursor: 'pointer'
                    }}
                        onMouseOver={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'white';
                            (e.currentTarget as HTMLButtonElement).style.color = '#407bbf';
                        }}
                        onMouseOut={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#407bbf';
                            (e.currentTarget as HTMLButtonElement).style.color = 'white';
                        }}>
                        Submit
                    </button>
                    <Tooltip id="submit" />
                </form>
            </div>

        </div>
    );
};

export default FAQ;
