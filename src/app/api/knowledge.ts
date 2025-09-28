import knowledgeData from '@/lib/knowledge';

export function GET() {
  return new Response(JSON.stringify(knowledgeData), { status: 200 });
}
