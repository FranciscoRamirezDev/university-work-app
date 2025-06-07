import React from 'react';

function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="flex flex-col items-center">
                <div className="relative">
                    <span className="absolute inset-0 rounded-full animate-ping bg-gradient-to-r from-purple-500 to-white opacity-60 blur-lg" style={{ width: 80, height: 80 }} />
                    <span
                        className="inline-block w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-white shadow-lg"
                        style={{
                            boxShadow: '0 0 32px 8px #8f5cff, 0 0 64px 16px #fff',
                        }}
                    />
                    <svg
                        className="absolute top-0 left-0 w-20 h-20 animate-spin"
                        viewBox="0 0 80 80"
                        fill="none"
                    >
                        <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="#8f5cff"
                            strokeWidth="8"
                            strokeDasharray="60 100"
                            strokeLinecap="round"
                            opacity="0.8"
                        />
                    </svg>
                </div>
                <span
                    className="mt-8 text-2xl font-bold text-white"
                    style={{
                        textShadow: '0 0 8px #fff, 0 0 16px #8f5cff, 0 0 32px #8f5cff',
                        letterSpacing: '0.1em',
                    }}
                >
                    Cargando...
                </span>
            </div>
        </div>
    );
}

export default Loading;