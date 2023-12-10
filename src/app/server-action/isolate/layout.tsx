
import React from 'react';

export default function TestLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <main className="flex min-h-screen flex-col items-center jusitfy-betweenp-24">{children}</main>
    )
}