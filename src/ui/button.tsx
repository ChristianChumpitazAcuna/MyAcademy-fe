import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button({ children, className, ...props }: Props) {

    return (
        <button className={`max-w-max px-4 py-1 rounded-xl text-white font-normal bg-blue-800/70 
        border-none transition duration-150 ease-in-out hover:shadow-xl hover:shadow-sky-600/40 
        hover:scale-95 hover:bg-blue-800 ${className}`}
            {...props}>
            {children}
        </button>
    );
}