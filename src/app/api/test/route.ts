export async function POST(request: Request) {
    console.log('POST request', request)
    return Response.json({ message: 'Hello world' })
}