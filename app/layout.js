import Footer from "@/component/Footer";
import "./globals.css";
import LenisWrapper from "@/component/LenisWrapper";
import NavBar from "@/component/NavBar";
import Batika from '@/public/Logo/Batika_logo.svg';
import Image from 'next/image';


export const metadata = {
  title: "BATIKA — Entreprise générale du bâtiment",
  description: "BATIKA Construction accompagne ses clients dans la réalisation de projets de bâtiment et d’infrastructures, avec un engagement fort sur la qualité, le respect des délais et du budget.",


};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`w-screen bg-[#ffffff] overflow-x-hidden relative min-h-screen h-auto  antialiased`}
      >
        <LenisWrapper>
          
          {/* <header className=" w-full z-10  ">
            <NavBar />
          </header> */}

          {children}

          {/* <section>
              <Footer/>
          </section> */}
{/* 
          <section style={{clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)'}} className="w-full  flex h-[550px]  relative ">
              <div className="fixed container-size flex bottom-0 w-full h-auto">
                  <Image 
                        className="w-full saturate-[1]" 
                        src={Batika} 
                        alt="Batika Logo" 
                        width={150}
                        height={50}
                    />
              </div>
            </section> */}
        </LenisWrapper>
      </body>
    </html>
  );
}

// 𝗕𝗔𝗧𝗜𝗞𝗔