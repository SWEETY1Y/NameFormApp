import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
const NameForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7021/api/Student/GetName', {
                firstName,
                lastName
            });
            setMessage(response.data);
        } catch (error) {
                 console.error('Error details:', error);
        setMessage('Error saving the name.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        First Name :- 
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name :- 
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default NameForm;