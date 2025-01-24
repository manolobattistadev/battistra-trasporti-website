import {PhoneIcon} from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Footer() {
    return(
        <>
            <footer
                className="p-4 bg-gradient-to-r from-red-500 to-orange-500">
                <div className="text-white w-full flex justify-center text-center leading-[40px]">
                    <div className="col-span-12">
                        <p className="font-bold text-xs sm:text-base uppercase">
                            Battista Trasporti s.a.s di Roberto Battista & C.
                        </p>
                        <p className="italic text-xs uppercase">
                            Via F. Cavallotti 134 - 26841 - Casalpusterlengo (LO)
                        </p>
                        <a href="mailto:battistatrasporti1963@gmail.com"
                           target="_blank"
                           className="mt-4 text-xs sm:text-base underline">
                            battistatrasporti1963@gmail.com
                        </a>
                        <a href="tel:+39335453733"
                           target="_blank"
                           className="text-xs sm:text-base flex items-center justify-center gap-2">
                            <PhoneIcon className="w-6"/>
                            +39 335453733
                        </a>
                    </div>
                </div>
            </footer>
            <div className="w-full px-8 py-4 flex">
                <div className="flex flex-1 gap-4">
                    <Link href="/cookie-policy" className="underline">
                        Cookie Policy
                    </Link>
                    <Link href="/privacy-policy" className="underline">
                        Privacy Policy
                    </Link>
                </div>
                <div>
                    P.IVA 08229920965
                </div>
            </div>
        </>
    )
}


