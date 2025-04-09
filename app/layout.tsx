import '@/app/ui/global.css'
import { mulish } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased`}>{children}</body>
    </html>
  );
}
