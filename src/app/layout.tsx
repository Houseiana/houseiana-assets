import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "هاوسيانا | إدارة الأصول العقارية",
  description: "هاوسيانا — إدارة احترافية لأصولك العقارية في مصر ودول الخليج. ثلاث باقات متكاملة تضع المالك في مركز القرار.",
  icons: {
    icon: "/logo.jpg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
