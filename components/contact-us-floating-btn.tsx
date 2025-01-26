import {PhoneIcon} from "@heroicons/react/16/solid";

export default function ContactUsFloatingBtn() {
    return (
        <a href="tel:+39335453733"
           aria-label="Contattaci"
           className="cursor-pointer flex gap-4">
            <div
                className="z-10 shadow-xl cursor-pointer fixed top-8 right-0 bg-black p-2 px-4 rounded-tl-md rounded-bl-md text-white flex gap-2">
                <PhoneIcon className="w-6"/>
                <div className="hidden sm:flex flex-col">
                    Richiedi preventivo
                    <p>+39 335453733</p>
                </div>
            </div>
        </a>
    )
}
