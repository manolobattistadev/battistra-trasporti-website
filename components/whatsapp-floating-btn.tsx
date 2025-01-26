import WhatsappIcon from "@/components/whatsapp-icon";

export default function WhatsappFloatingBtn(){
    return (
        <div
            className="shadow-xl cursor-pointer fixed bottom-8 right-8 bg-black p-2 px-4 rounded-full text-white flex gap-2">
            <a
                title="Contattaci su whatsapp"
                aria-label="Contattaci su whatsapp"
                href="https://wa.me/+39335453733" className="flex gap-4" target="_blank">
                <WhatsappIcon/>
            </a>
        </div>
    )
}
