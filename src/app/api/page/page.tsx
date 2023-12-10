'use client'
import { useState } from "react"
export default function ApiPage() {
    const [message, setMessage] = useState('')
    return (
        <main className="flex min-h-screen flex-col items-center jusitfy-betweenp-24">
            <div>
                <p>同じアプリケーション内のAPIへのリクエスト</p>
                <button onClick={()=>{
                    fetch('/api',{method: 'POST', body: JSON.stringify({value: "submmit"})})
                    .then(res => res.json())
                    .then(res => setMessage(res.message))
                }}>
                    送信
                </button>
                <p>メッセージ: {message}</p>
            </div>
        </main>
        )
    }