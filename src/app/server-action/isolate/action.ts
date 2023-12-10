'use server'
export async function serverFormAction(prevState: any,formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email)
    console.log(password)
    if(!email || !password) {
        console.log('email or password is null')
        return {message: 'email or password is null'}
    }
}