import React from "react";

interface PlaygroundLayoutProps {
    children: React.ReactNode
}

function PlaygroundLayout({ children }: PlaygroundLayoutProps) {
    return (
        <div>
            {children}
        </div>
    );
}

export default PlaygroundLayout;
