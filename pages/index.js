import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>First Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="next, js, server side rendering, node, react"></meta>
        <meta name="author" content="Md. Asaduzzaman, md.asad.mony@gmail.com, +8801753007145"></meta>
      </Head>

      <main>
        <h1>Hello next app</h1>
        <p>I'm Md. Asaduzzaman here to welcome you</p>
      </main>

      <footer>
      </footer>
    </div>
  )
}
