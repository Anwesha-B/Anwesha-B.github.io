import React, { ReactNode } from 'react';
import './Card.css';

interface CardProps {
    title: string;
    content: string;
    children?: ReactNode
}

const Card: React.FC<CardProps> = ({ title, content, children }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
            {children}
        </div>
    );
}

export default Card;