import localFont from "next/font/local";
import "./globals.css";
import { SearchContextProvider } from "./context/SearchContext";

const vazir = localFont({
  src: [
    {
      path: './fonts/Vazir-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Vazir-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    
    {
      path: './fonts/Vazir-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Vazir-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-vazir',
});



const APP_NAME = "Carland App";
const APP_DEFAULT_TITLE = "My Awesome Carland App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#FFFFFF",
};



export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
    <html lang="fa" dir="rtl">
      <body
        className={vazir.variable}
      >
        
        {children}
      </body>
    </html>
    </SearchContextProvider>
  );
}
