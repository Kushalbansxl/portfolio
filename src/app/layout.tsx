import "./globals.css";
import RefreshRedirect from '@/components/RefreshRedirect'

export const metadata = {
  title: "Kushal Bansal",
  description: "Portfolio...",
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden antialiased bg-[#0d0d0d] text-white">
        <RefreshRedirect />
        {children}
        </body>
    </html>
  );
}