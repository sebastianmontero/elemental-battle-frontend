import React from 'react';
import './WaitCursor.css';

const WaitCursor = ({ show }) => (
    show
    && (
        <div className="spinner">
            <div className="image" />
            <div className="circles">
                <div className="circle">
                    <div className="inner" />
                </div>
                <div className="circle">
                    <div className="inner" />
                </div>
                <div className="circle">
                    <div className="inner" />
                </div>
                <div className="circle">
                    <div className="inner" />
                </div>
                <div className="circle">
                    <div className="inner" />
                </div>
            </div>
        </div>
    )
);

export default WaitCursor;
