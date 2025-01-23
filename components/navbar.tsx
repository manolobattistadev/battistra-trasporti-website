import Image from "next/image";

export default function Navbar(){
    return (
        <nav className="p-8 py-0 flex flex-col sm:flex-row items-center">
            <Image
                src="/logo.png"
                alt="Battista Trasporti logo"
                width={120}
                height={38}
                priority
            />
            <div className="sm:ml-12 mt-4 gap-16 flex">
                <a href="#who-we-are" className="cursor-pointer text-nowrap">Chi siamo</a>
                <a href="#services" className="cursor-pointer text-nowrap">Servizi</a>
                <a href="#contact-us" className="cursor-pointer text-nowrap">Contattaci</a>
            </div>
        </nav>
    )
}
