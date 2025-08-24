import { DM_Sans, Inter, Quicksand } from "next/font/google";

export const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const DMSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["100","200", "300", "400", "500", "600", "700", "800", "900"]

})

export const inter = Inter({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100","200", "300", "400", "500", "600", "700", "800", "900"]

})