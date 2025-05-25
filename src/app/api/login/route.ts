import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { correo, contrasena } = await req.json();
    console.log(correo, contrasena);

    const userInfo = {
        correo: 'francisco.ramirez@dropi.co',
        contrasena: 'Dominick1801',
    };

    if (correo === userInfo.correo && contrasena === userInfo.contrasena) {
        return NextResponse.json({ messagge: 'Ingreso existoso' }, { status: 200 });
    } else {
        return NextResponse.json(
            { error: 'Correo o contraseña incorrectos.' },
            { status: 401 }
        );
    }
}
