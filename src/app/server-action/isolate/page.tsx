// useFormStateやuseStateはクライアントコンポーネントでのみ使用可能
// サーバーコンポーネントがネストされている場合はエラーになる
'use client'
import { useFormState } from "react-dom"
import { serverFormAction } from '@/app/server-action/isolate/action'

const initialFormState = {message: ''}
export default function ServerActionPage() {
    // useFormStateのアクションにサーバーコンポーネントを渡しすことで
    // サブミット時のフォームデータがサーバーコンポーネントに送られサーバーサイドで処理される
    const [formState, formAction] = useFormState(serverFormAction,  initialFormState)
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
        </div>
        )
    }