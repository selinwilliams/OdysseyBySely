export const metadata = {
  title: 'Odyssey By Sely - Content Studio',
  description: 'Content management for Odyssey By Sely restaurant',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
} 