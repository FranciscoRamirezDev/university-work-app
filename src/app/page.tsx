/* eslint-disable @next/next/no-img-element */
'use client'

//react
import type { SVGProps } from 'react'
import { useRouter } from "next/navigation";

// Icono personalizado: gato negro sentado (elegante, independiente, místico)
// Silueta negra con halo neón morado y ojos amarillos de cazador.
function BlackCatIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
            <defs>
                <radialGradient id="black-cat-iris" cx="50%" cy="55%" r="60%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#d97706" />
                </radialGradient>
            </defs>
            {/* Cola enroscada */}
            <path
                d="M24 28 Q30 27 29 21 Q28.5 18 30 16"
                stroke="#0a0a0f"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
            {/* Silueta: orejas puntiagudas, cabeza y cuerpo sentado */}
            <path
                d="M9 3 L12.5 7.5 Q16 6.5 19.5 7.5 L23 3 L24 10 Q24.5 14.5 21 16.5
                   Q25 20 25 26 Q25 29.5 22 30 L10 30 Q7 29.5 7 26 Q7 20 11 16.5
                   Q7.5 14.5 8 10 Z"
                fill="#0a0a0f"
            />
            {/* Ojos rasgados de cazador */}
            <path d="M11 10.5 Q13 10 15 11.8 Q12.8 13 11 10.5 Z" fill="url(#black-cat-iris)" />
            <path d="M21 10.5 Q19 10 17 11.8 Q19.2 13 21 10.5 Z" fill="url(#black-cat-iris)" />
            {/* Pupilas en rendija */}
            <ellipse cx="13.2" cy="11.4" rx="0.3" ry="1" fill="#0a0a0f" />
            <ellipse cx="18.8" cy="11.4" rx="0.3" ry="1" fill="#0a0a0f" />
        </svg>
    )
}

const imageBackground = '/baile-de-discoteca.png';

const navigation = [
    { name: 'Quienes somos', href: '#' },
    { name: 'Establecimientos', href: '#' },
    { name: 'Soporte tecnico', href: '#' },
    { name: 'PQR', href: '#' },
]

export default function Home() {
    const router = useRouter();
    return (
        <div className="bg-white">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1 flex-col-2 items-center">
                        <div
                            className="text-balance text-sm font-semibold tracking-tight text-white sm:text-xl"
                            style={{
                                textShadow:
                                    '0 0 8px #fff, 0 0 16px #8f5cff, 0 0 32px #8f5cff, 0 0 64px #8f5cff',
                                color: '#fff',
                            }}
                        >
                            Nocturno
                        </div>
                        <BlackCatIcon
                            className='ml-2 w-8 h-8'
                            style={{
                                filter:
                                    'drop-shadow(0 0 1px #c4b5fd) drop-shadow(0 0 6px #8f5cff) drop-shadow(0 0 12px #8f5cff)',
                            }}
                        />
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative text-sm/6 font-semibold text-white transition duration-200 hover:text-white"
                            >
                                <span
                                    className="relative z-10"
                                >
                                    {item.name}
                                </span>
                                <span
                                    className="absolute inset-0 z-0 rounded-full opacity-0 transition duration-200 hover:opacity-100"
                                    style={{
                                        boxShadow: '0 0 16px 8px #8f5cff, 0 0 32px 16px #8f5cff',
                                        background: 'rgba(143,92,255,0.2)',
                                    }}
                                ></span>
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button
                            onClick={() => router.push('/login')}
                        >
                            <a href="#" className="text-sm/6 font-semibold text-white" style={{
                                textShadow:
                                    '0 0 8px #fff, 0 0 16px #8f5cff, 0 0 32px #8f5cff, 0 0 64px #8f5cff',
                                color: '#fff',
                            }}>
                                Iniciar sesion <span aria-hidden="true">&rarr;</span>
                            </a>
                        </button>

                    </div>
                </nav>
            </header>

            <main>
                <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
                    <img
                        alt=""
                        src={imageBackground}
                        className="absolute inset-0 -z-10 size-full object-cover opacity-10 "
                    />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                            <div className="text-center">
                                <h1
                                    className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl"
                                    style={{
                                        textShadow:
                                            '0 0 8px #fff, 0 0 16px #8f5cff, 0 0 32px #8f5cff, 0 0 64px #8f5cff',
                                        color: '#fff',
                                    }}
                                >
                                    NocTurno
                                </h1>
                                <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                                    Reserva tus noches sin complicaciones, con el mejor aliado para tus planes nocturnos.
                                </p>

                            </div>
                        </div>

                        {/* Logo social red */}
                        <div className=" flex-1  grid max-w-lg grid-cols-4 items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="col-span-1 flex justify-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                                    alt="Facebook"
                                    className="h-8 w-8"
                                    style={{ filter: 'invert(1) brightness(2)' }}
                                />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="col-span-1 flex justify-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
                                    alt="Twitter"
                                    className="h-8 w-8"
                                    style={{ filter: 'invert(1) brightness(2)' }}
                                />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="col-span-1 flex justify-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                                    alt="Instagram"
                                    className="h-8 w-8"
                                    style={{ filter: 'invert(1) brightness(2)' }}
                                />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="col-span-1 flex justify-center">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                                    alt="LinkedIn"
                                    className="h-8 w-8"
                                    style={{ filter: 'invert(1) brightness(2)' }}
                                />
                            </a>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}