/* eslint-disable @next/next/no-img-element */
import React from "react";
const imagenMap = './mapa.png';

function ReserveScreen() {
    const user = {
        nombre: "Juan Pérez",
        correo: "juan.perez@example.com",
        ciudad: "Bogotá",
        telefono: "+57 300 1234567",
    };

    return (
        <div className="h-screen bg-[#0a0a23] flex flex-col text-[#e0e0ff] font-sans">
            {/* Mitad superior - imagen mapa neón */}
            <div className="flex-1 flex w-100 items-center justify-center border-b-2 border-[#8f5cff] shadow-inner-neon min-h-[50vh]">
                <img
                    src={imagenMap}
                    alt="Mapa neón"
                    className="rounded-lg shadow-lg neon-border bg-[#181846] max-h-[90%] w-100 "
                />
            </div>

            {/* Mitad inferior - datos usuario */}
            <div className="flex-1 p-8 flex flex-col justify-center gap-6 border-t-2 border-[#8f5cff] shadow-inner-neon text-center">
                <h2 className="text-3xl font-bold text-[#c0aaff] neon-text mb-6">
                    Información del usuario
                </h2>
                <p className="text-lg neon-text">
                    <strong>Nombre completo:</strong> {user.nombre}
                </p>
                <p className="text-lg neon-text">
                    <strong>Correo:</strong> {user.correo}
                </p>
                <p className="text-lg neon-text">
                    <strong>Ciudad:</strong> {user.ciudad}
                </p>
                <p className="text-lg neon-text">
                    <strong>Teléfono:</strong> {user.telefono}
                </p>
            </div>
        </div>
    );
}

export default ReserveScreen;
