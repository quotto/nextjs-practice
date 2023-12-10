async function getData() {
  const res = await fetch('https://www.google.co.jp')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  console.log("フェッチのログはサーバー側に出ます")

  return "success"
}

export default async function ServerSideRenderingPage() {
  const data = await getData()
  console.log("フェッチ後のログもサーバー側に出ます")
  console.log(data)


  return <main className="flex min-h-screen flex-col items-center jusitfy-betweenp-24">このページは生成時にhttps://www.google.co.jpをfetchします。これはサーバーサイドでプリフェッチされるため、クライアント側のログにはフェッチのログが出力されません。</main>
}