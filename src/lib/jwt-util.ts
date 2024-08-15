import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

export async function sign(payload: any) {
    const iat = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
    const token = await new SignJWT({ ...payload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime('6h')
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET as string));
    return token;
}

export async function verify(token: string) {
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET as string));
        return payload;
    } catch (err) {
        console.log(err)
        throw err;
    }
}
