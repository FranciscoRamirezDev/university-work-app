'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import axios from 'axios'
import Loading from '../components/Loading';


function LoginScreen() {
    //navigation
    const router = useRouter();

    //useState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showConfirmLogin, setshowConfirmLogin] = useState(false)
    const [loading, setloading] = useState(false)

    //functions
    const handleSubmit = async () => {
        setloading(true);
        try {
            const res = await axios.post('/api/login', {
                correo: email,
                contrasena: password,
            });

            if (res?.status === 200 && !res.data.error) {
                setTimeout(() => {
                    setshowConfirmLogin(true);
                    setloading(false);
                    router.push('/reserve');
                }, 2000);
            } else {
                alert('Correo o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error al iniciar sesión', error);
            setloading(false);
            alert('Error al iniciar sesión');
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            {loading === true ? <Loading /> :
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
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
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
                                className="text-sm font-bold text-center text-white mb-6"
                                style={{
                                    textShadow: '0 0 8px #fff, 0 0 16px #8f5cff, 0 0 32px #8f5cff',
                                }}
                            >
                                Regístrate
                            </button>
                        </div>
                    </form>
                </div>
            }
            {showConfirmLogin && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4 text-black">Inicio de Sesión Exitoso</h2>
                        <p className="text-black">Has iniciado sesión correctamente.</p>
                        <button
                            onClick={() => setshowConfirmLogin(false)}
                            className="mt-4 w-full bg-[#8f5cff] text-white py-2 rounded hover:bg-[#7a4be3] transition"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LoginScreen