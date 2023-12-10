// useFormStateやuseStateはクライアントコンポーネントでのみ使用可能
// サーバーコンポーネントがネストされている場合はエラーになる
'use client'
import { useFormState } from "react-dom"
import { serverFormAction, serverAsyncAction } from '@/app/server-action/isolate/action'
import { useState } from "react"

const initialFormState = {message: ''}
export default function ServerActionPage() {
    // useFormStateのアクションにサーバーコンポーネントを渡しすことで
    // サブミット時のフォームデータがサーバーコンポーネントに送られサーバーサイドで処理される
    const [formState, formAction] = useFormState(serverFormAction,  initialFormState)
    const [message, setMessage] = useState('')
    return (
        <div>
            <div>
                <p>このフォームは非同期にサーバサイドで処理され、サーバーサイドから返されたエラーメッセージが更新されます</p>
                   <form action={formAction}>
                    <p style={{color: "red"}}>
                        {formState?.message}
                    </p>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <p>サーバーサイドの処理を非同期に呼び出し結果を受け取ります</p>
                <button onClick={async()=>{
                    const result = await serverAsyncAction({value: "submmit"})
                    setMessage(result['message'])
                }
                }>Submit</button>
                <p>メッセージ: {message}</p>
            </div>
        </div>
        )
    }