// 同じ階層にpage.tsxがあってもAPIのメソッドが優先される。
// このためGETリクエストが存在しない場合は405 Method Not Allowedが返される。
export async function POST(request: Request) {
    console.log('POST request', request)
    return Response.json({ message: 'Hello world' })
}

export async function GET(request: Request) {
    console.log('GET request', request)
    return Response.json({ message: 'これはAPIによるGETレスポンスです' })
}