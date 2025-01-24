import Image from "next/image";
import {ReactNode} from "react";
import Link from "next/link";

export default function Navbar({children}: {children: ReactNode}){
    return (
        <nav className="p-8 py-0 flex flex-col sm:flex-row items-center">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="Battista Trasporti logo"
                    width={120}
                    height={38}
                    priority
                />
            </Link>
            <div className="sm:ml-12 mt-4 gap-16 flex">
             {children}
            </div>
        </nav>
    )
}
