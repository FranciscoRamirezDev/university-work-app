import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { correo, contrasena } = await req.json();

    // Validación básica de campos
    if (
        typeof correo !== 'string' ||
        typeof contrasena !== 'string' ||
        !correo.includes('@') ||
        contrasena.length < 6
    ) {
        return NextResponse.json(
            { error: 'Correo o contraseña inválidos.' },
            { status: 400 }
        );
    }

    let userInfo;
    if (typeof window !== 'undefined' && window.sessionStorage) {
        const userInfoStr = window.sessionStorage.getItem('userInfo');
        userInfo = userInfoStr ? JSON.parse(userInfoStr) : null;
    } else {
        userInfo = {
            correo: 'ejemplo@email.com',
            contrasena: '12345678',
            full_name: 'Usuario Ejemplo'
        };
    }

    if (userInfo && correo === userInfo.correo && contrasena === userInfo.contrasena) {
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json(
            { error: 'Correo o contraseña incorrectos.' },
            { status: 401 }
        );
    }
}
