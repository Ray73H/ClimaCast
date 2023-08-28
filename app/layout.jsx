import "@styles/globals.css";

import Nav from "@components/Nav";
import { AppProvider } from "@components/Location";

export const metadata = {
  title: "ClimaCast",
  description: "Know the weather around the world",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <AppProvider>
          <main className="app">
            <Nav />
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
