export default function ServerActionPage() {
    // サーバーコンポーネントはasyncでなければならない
    async function serverFormAction(formData: FormData) {
        'use server'
        console.log(formData.get('email'))
        console.log(formData.get('password'))
        if(!formData.get('email')|| !formData.get('password')) {
            console.log('email or password is null')
            return {message: 'email or password is null'}
        }
    }
    return (
        <div>
            <div>
                <p>このフォームはサーバーサイドで非同期に処理されますが、エラーメッセージは受け取れません</p>
                <form action={serverFormAction}>
                    {/* onSubmitはクライアントコンポーネントでしか使用できない
                        <form onSubmit={serverFormAction}>
                    */}
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