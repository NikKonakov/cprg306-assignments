import "./styles/globals.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-100 flex justify-center">{children}</body>
    </html>
  )
}
