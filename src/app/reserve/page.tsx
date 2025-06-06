/* eslint-disable @next/next/no-img-element */
'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function ReserveScreen() {

    //navigation
    const router = useRouter();

    //useState
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        fecha: '',
        hora: '',
        personas: 1,
    });

    const handleReserve = () => {
        console.log('Datos de reserva:', formData);
        alert('Reserva realizada con éxito');
        setShowModal(false);
        router.push('/reserve');
    }
    return (
        <div>
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
            <div className="relative w-full" style={{ height: 0 }}>
                <img
                    src="/marker.jpg"
                    alt="Marker 1"
                    className="absolute"
                    style={{ top: 60, left: '20%' }}
                    width={40}
                    height={40}
                    onClick={() => setShowModal(true)}
                />
                <img
                    src="/marker.jpg"
                    alt="Marker 2"
                    className="absolute"
                    style={{ top: 120, left: '60%' }}
                    width={40}
                    height={40}
                    onClick={() => setShowModal(true)}
                />
                <img
                    src="/marker.jpg"
                    alt="Marker 3"
                    className="absolute"
                    style={{ top: 200, left: '35%' }}
                    width={40}
                    height={40}
                    onClick={() => setShowModal(true)}
                />
                <img
                    src="/marker.jpg"
                    alt="Marker 4"
                    className="absolute"
                    style={{ top: 300, left: '75%' }}
                    width={40}
                    height={40}
                    onClick={() => setShowModal(true)}
                />
                <img
                    src="/marker.jpg"
                    alt="Marker 5"
                    className="absolute"
                    style={{ top: 370, left: '10%' }}
                    width={40}
                    height={40}
                    onClick={() => setShowModal(true)}
                />
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.739213785507!2d-76.5320!3d3.4516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6e9e1e8b7c1%3A0x1e0b1b1e1e1e1e1e!2sLa%20Topa%20Tolondra!5e0!3m2!1ses!2sco!4v1684998748123!5m2!1ses!2sco"
                width="100%"
                height="450"
                style={{
                    border: "2px solid #fff",
                    borderRadius: 10,
                    boxShadow: "0 0 20px 4px #8f5cff, 0 0 40px 8px #fff",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <div
                className="p-5 w-full border border-zinc-50 h-full rounded-lg mt-6 bg-white"
            >
                <h2 className=" text-[#8f5cff] text-xl font-semibold">Datos del usuario</h2>
                <span className="w-full p-2 block text-black ">
                    Nombre : Juan Pérez
                </span>
                <span className="w-full p-2 block text-black ">
                    Correo : juan.perez@email.com
                </span>
                <span className="w-full p-2 block text-black ">
                    Ubicacion : Bogotá
                </span>

            </div>
            {showModal === true && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-semibold mb-4 text-black">Realizar Reserva</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleReserve();
                        }}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nombre</label>
                                <input
                                    type="text"
                                    value={formData.nombre}
                                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded text-indigo-800"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black">Correo</label>
                                <input
                                    type="email"
                                    value={formData.correo}
                                    onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded text-indigo-800"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black">Fecha</label>
                                <input
                                    type="date"
                                    value={formData.fecha}
                                    onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded text-indigo-800"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-black">Hora</label>
                                <input
                                    type="time"
                                    value={formData.hora}
                                    onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                                    className="w-full p-2 border border-gray-300 rounded text-indigo-800"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black">Personas</label>
                                <input
                                    type="number"
                                    value={formData.personas}
                                    onChange={(e) => setFormData({ ...formData, personas: parseInt(e.target.value) })}
                                    min={1}
                                    className="w-full p-2 border border-gray-300 rounded text-indigo-800"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#8f5cff] text-white py-2 rounded hover:bg-[#7a4be3] transition"
                            >
                                Reservar
                            </button>
                        </form>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 w-full bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 transition"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}


        </div>


    );
}

export default ReserveScreen;
