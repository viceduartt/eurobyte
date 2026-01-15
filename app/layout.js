
export default async function RootLayout({ children, params }) {
  return (
    <html lang="en" translate='no'>
      <body>
        {children}
      </body>
    </html>
  );
}
