import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <div>
                <h1>Countries App</h1>
            </div>
            <Link to='/home'>
                <button>Start</button>
            </Link>
        </div>
    )
}