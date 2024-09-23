import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data.json');

export async function GET() {
    try {
        const data = await fs.readFile(filePath, 'utf-8');

        const post =  JSON.parse(data);

        return NextResponse.json(post);
    } catch(error) {
        console.error('Error reading data.json:', error);
        return NextResponse.error();
    }
} 