// useStateを利用する場合はimpor時点でモジュール全体に対する`use client`の指定が必要
'use client'
import { useState } from "react"

export default function ClientRenderingPage() {
    const [message, setMessage] = useState('')
    async function clientAsyncAction(params: any) {
        console.log('called clientAsyncAction from client')
        console.log(JSON.stringify(params))
        console.log("フェッチもクライアントサイドで実行すます")
        await fetch('https://www.google.co.jp')
        return {message: "recieved"}

    }
    return (
        <main className="flex min-h-screen flex-col items-center jusitfy-betweenp-24">
            <div>
                <p>この処理は全てクライアントサイドで実行されます</p>
                <button onClick={async()=>{
                    const result = await clientAsyncAction({value: "submmit"})
                    setMessage(result['message'])
                }}>Submit</button>
                <p>メッセージ: {message}</p>
            </div>
        </main>
        )
    }