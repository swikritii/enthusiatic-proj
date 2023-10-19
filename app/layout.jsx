import "./css/globals.css";

export const metadata = {
  title: "Enthusiastic Interview Task",
  description: "UI Developement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
