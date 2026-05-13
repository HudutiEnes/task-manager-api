import React from "react";

const LayoutWrapper = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans">
            <div className="h-1 bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800"></div>

            <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>
        </div>
    );
};

export default LayoutWrapper;
