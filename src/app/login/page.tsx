"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 relative">
                <Link
                    href={"/"}
                    className="absolute top-6 left-6 py-2 px-4 rounded bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg transition hover:scale-105 hover:from-purple-500 hover:to-pink-500 z-10"
                    style={{
                        textShadow: '0 0 8px #fff, 0 0 16px #8f5cff',
                        boxShadow: '0 0 8px 2px #8f5cff',
                    }}
                >
                    ← Volver
                </Link>
                <form className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg flex flex-col gap-6 w-full max-w-md border border-purple-500"
                    style={{
                        boxShadow: '0 0 32px 8px #8f5cff, 0 0 64px 16px #8f5cff',
                    }}
                >
                    <h2 className="text-3xl font-bold text-center text-white mb-4"
                        style={{
                            textShadow: '0 0 8px #fff, 0 0 16px #8f5cff, 0 0 32px #8f5cff',
                            color: '#fff',
                        }}
                    >
                        Iniciar Sesión
                    </h2>
                    <label className="text-white font-semibold" htmlFor="email">Correo electrónico</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="p-3 rounded-xl bg-gray-900 text-white border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        style={{
                            boxShadow: '0 0 8px #8f5cff',
                        }}
                        placeholder="ejemplo@email.com"
                        autoComplete="email"
                    />
                    <label className="text-white font-semibold" htmlFor="password">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="p-3 rounded-xl bg-gray-900 text-white border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        style={{
                            boxShadow: '0 0 8px #8f5cff',
                        }}
                        placeholder="********"
                        autoComplete="current-password"
                    />
                    <button
                        type="submit"
                        className="mt-4 py-3 px-6 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg transition hover:scale-105 hover:from-pink-500 hover:to-purple-500"
                        style={{
                            textShadow: '0 0 8px #fff, 0 0 16px #8f5cff',
                            boxShadow: '0 0 16px 4px #8f5cff',
                        }}
                    >
                        Entrar
                    </button>
                    <div className="text-center mt-4">
                        <span className="text-gray-300">¿No tienes cuenta?</span>
                        <button
                            type="button"
                            onClick={() => router.push('/register')}
                            className="ml-2 font-semibold text-pink-400 hover:text-purple-400 transition underline"
                            style={{
                                textShadow: '0 0 8px #fff, 0 0 16px #8f5cff',
                            }}
                        >
                            Regístrate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen