'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {

    //router
    const router = useRouter();

    //useState
    const [form, setForm] = useState({
        nombre: '',
        correo: '',
        contrasena: '',
        pais: '',
        ciudad: '',
    });

    //functions
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post('/api/register', form, {
                headers: { 'Content-Type': 'application/json' },
            });
            if (res?.status === 200) {
                sessionStorage.setItem('userInfo', JSON.stringify({
                    correo: form.correo,
                    contrasena: form.contrasena,
                    full_name: form.nombre
                }));
                router.push('/login')

            }
        } catch (error) {
            console.error('Error al registrar usuario', error);
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="min-h-screen w-full flex items-center justify-center bg-gray-900 relative">
                <Link
                    href="/login"
                    className="absolute top-6 left-6 py-2 px-4 rounded bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg transition hover:scale-105 hover:from-purple-500 hover:to-pink-500 z-10"
                    style={{
                        textShadow: '0 0 8px #fff, 0 0 16px #8f5cff',
                        boxShadow: '0 0 8px 2px #8f5cff',
                    }}
                >
                    ← Volver
                </Link>

                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg w-full max-w-md border border-purple-500"
                    style={{
                        boxShadow: '0 0 32px 8px #8f5cff, 0 0 64px 16px #8f5cff',
                    }}
                >
                    <h2
                        className="text-3xl font-bold text-center text-white mb-6"
                        style={{
                            textShadow: '0 0 8px #fff, 0 0 16px #8f5cff, 0 0 32px #8f5cff',
                        }}
                    >
                        Registro de usuario
                    </h2>

                    {[
                        { id: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'Tu nombre completo' },
                        { id: 'correo', label: 'Correo electrónico', type: 'email', placeholder: 'correo@ejemplo.com' },
                        { id: 'contrasena', label: 'Contraseña', type: 'password', placeholder: '********' },
                        { id: 'pais', label: 'País', type: 'text', placeholder: 'País' },
                        { id: 'ciudad', label: 'Ciudad', type: 'text', placeholder: 'Ciudad' },
                    ].map(({ id, label, type, placeholder }) => (
                        <div key={id} className="flex flex-col gap-2 mb-4">
                            <label htmlFor={id} className="text-white font-semibold">
                                {label}
                            </label>
                            <input
                                id={id}
                                name={id}
                                type={type}
                                placeholder={placeholder}
                                value={form[id as keyof typeof form]}
                                onChange={handleChange}
                                className="p-3 rounded-xl bg-gray-900 text-white border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                style={{ boxShadow: '0 0 8px #8f5cff' }}
                                required
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full py-3 mt-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg transition hover:scale-105 hover:from-pink-500 hover:to-purple-500"
                        style={{
                            textShadow: '0 0 8px #fff, 0 0 16px #8f5cff',
                            boxShadow: '0 0 16px 4px #8f5cff',
                        }}
                    >
                        Registrarse
                    </button>

                    <div className="text-center mt-6">
                        <span className="text-gray-300">¿Ya tienes cuenta?</span>
                        <Link
                            href="/login"
                            className="text-sm font-bold text-center text-white mb-6"
                            style={{
                                textShadow: '0 0 8px #fff, 0 0 16px #8f5cff, 0 0 32px #8f5cff',
                            }}
                        >
                            Inicia sesión
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
