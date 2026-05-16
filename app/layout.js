import "./globals.css";

export const metadata = {
  title: "Outllyr | Living Truth Map Platform",
  description: "Nucleus Ingestion Engine mapping behavioral signals that precede every market shift.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
