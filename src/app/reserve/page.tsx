'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function ReserveScreen() {

    //navigation
    const router = useRouter();

    const handleReserve = () => {
        alert('Reserva realizada existosamente, que disfrutes tu noche!!')
        router.push('/')
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
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.893051077854!2d-74.07209268470207!3d4.710988543907912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99dada9f5cb5%3A0x35804e789d31ab25!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1684998748123!5m2!1ses!2sco"
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
            ></iframe>
            <div
                className="p-5 w-full border border-zinc-50 h-full rounded-lg mt-6"
            >
                <h2 className=" text-[#8f5cff] text-xl font-semibold">Datos del usuario</h2>
                <span className="w-full p-2 block ">
                    Juan Pérez
                </span>
                <span className="w-full p-2 block ">
                    juan.perez@email.com
                </span>
                <span className="w-full p-2 block">
                    Bogotá
                </span>
                <button
                    onClick={() => handleReserve()}
                    className="mt-3 py-2 bg-[#8f5cff] text-white rounded-md font-bold cursor-pointer text-lg hover:bg-[#7a4be3] transition p-2"
                >
                    Reservar
                </button>
            </div>
        </div>


    );
}

export default ReserveScreen;
