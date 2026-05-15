import React from "react";

const LayoutWrapper = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans">
            <div className="h-1 bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800"></div>

            {children}
        </div>
    );
};

export default LayoutWrapper;
