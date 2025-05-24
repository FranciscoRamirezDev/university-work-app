import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();

    const requiredFields = ['nombre', 'correo', 'contrasena', 'pais', 'ciudad'];
    const missingFields = requiredFields.filter(field => !data[field] || data[field].toString().trim() === '');

    if (missingFields.length > 0) {
        return NextResponse.json(
            { message: 'Faltan campos obligatorios', missingFields },
            { status: 400 }
        );
    }

    return NextResponse.json({ message: 'Usuario registrado', data });
}
