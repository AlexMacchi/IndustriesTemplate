import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet='UTF-8'></meta>
        <meta httpEquiv='X-UA-Compatible'></meta>
        <title>Flip Card Hover Effect</title>
      </head>
      <body>
          <main className="page">{children}</main>
      </body>
    </html>
  )
}
