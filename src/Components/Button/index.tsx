import * as React from 'react';

interface Props {
    text: string;
    onClick: () => void;
}

export const Button: React.FC<Props> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full rounded-full border border-sand bg-white p-3 text-xl font-medium text-black"
        >
            {text}
        </button>
    );
};
