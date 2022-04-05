import React from 'react';

const Title = ({ className, text }) => {
    return (
        <div>
            <span className={className}>{text}</span>
        </div>
    );
};

export default Title;