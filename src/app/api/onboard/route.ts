import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python3', [
      path.join(process.cwd(), 'python', 'onboard.py'),
      name
    ]);

    let output = '';
    pythonProcess.stdout.on('data', (data) => {
      output += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        resolve(NextResponse.json({ error: 'Python script failed' }, { status: 500 }));
      } else {
        resolve(NextResponse.json(JSON.parse(output)));
      }
    });
  });
}
