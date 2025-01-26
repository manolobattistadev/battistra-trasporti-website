'use client'
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/ui/spinner";
import {MAILTO} from "@/lib/env";

type Inputs = {
    name: string
    company: string
    email: string
    phone: string
    notes: string
}

export default function ContactForm(){
    const IS_DEV = process.env.NODE_ENV === "development";
    const [loading, setLoading] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            name: IS_DEV ? 'Manolo Battista' : '',
            email: IS_DEV ? 'manolo.battista@gmail.com' : '',
            company: IS_DEV ? 'Arkemis S.r.l.' : '',
            phone: IS_DEV ? '3925173932' : '',
            notes: IS_DEV ? 'Test Website email' : '',
        },
    })

    const onMailRequest: SubmitHandler<Inputs> = async (data) => {
        setLoading(true)
        const html = `
          <p>Ciao Roberto,</p>
          <p>${data.notes ?? ''}</p>
          <p>Grazie,</p>
          <p>
            <strong>Nome:</strong> ${data.name ?? ''}<br>
            <strong>Telefono:</strong> ${data.phone ?? ''}<br>
            <strong>Email:</strong> <a href="mailto:${data.email ?? ''}">${data.email ?? ''}</a><br>
            <strong>Azienda:</strong> ${data.company ?? ''}
          </p>
        `;


        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({html}),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Email sent successfully:', result);
                reset()
                toast("Abbiamo ricevuto la tua richiesta! Ti contatteremo al più presto.")
            } else {
                toast(`Qualcosa è andato storto! Contattaci telefonicamente o all'indirizzo ${MAILTO}`)
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
        } catch (error: never) {
            console.error('Error sending email:', error);
        } finally {
            setLoading(false)
        }
    }


    return (
        <form id="contact-us"  onSubmit={handleSubmit(onMailRequest)} className="w-full mt-8 px-8 sm:px-16">
            <div className="w-full col-span-12">
                <p className="text-5xl font-bold mb-8">Richiedi preventivo</p>
                <p className="text-gray-600 text-lg leading-[40px] mb-8">
                    Descrivi le tue necessità, ti contatteremo prima possibile
                </p>
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                    <div className="w-full items-center gap-1.5">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                            {...register("name", { required: "Il campo nome è obbligario" })}
                            disabled={loading}
                            className="w-full"
                            type="name"
                            id="name"
                            placeholder="Inserisci il tuo nome"
                        />
                    </div>
                    {errors.name && (
                        <p className="text-xs text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                    <div className="w-full items-center gap-1.5">
                        <Label htmlFor="name">Ragione sociale</Label>
                        <Input
                            {...register("company")}
                            disabled={loading}
                            className="w-full"
                            type="name"
                            id="company"
                            placeholder="Inserisci la ragione sociale"
                        />
                    </div>
                    {errors.company && (
                        <p className="text-xs text-red-500">
                            {errors.company.message}
                        </p>
                    )}
                    <div className="w-full items-center gap-1.5">
                        <Label htmlFor="name">Email</Label>
                        <Input
                            {...register("email", {
                                required: "Il campo email è obbligario",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "L'email non è valida",
                                },
                            })}
                            disabled={loading}
                            className="w-full"
                            type="email"
                            id="email"
                            placeholder="Inserisci la tua email"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-xs text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                    <div className="w-full items-center gap-1.5">
                        <Label htmlFor="name">Numero di telefono</Label>
                        <Input
                            {...register("phone")}
                            disabled={loading}
                            className="w-full"
                            type="tel"
                            id="phone"
                            placeholder="Inserisci il tuo numero di telefono"
                        />
                    </div>
                    {errors.phone && (
                        <p className="text-xs text-red-500">
                            {errors.phone.message}
                        </p>
                    )}
                    <div className="w-full items-center gap-1.5">
                        <Label htmlFor="name">Descrivi la tua necessità</Label>
                        <Textarea
                            {...register("notes", { required: "Il campo è obbligario" })}
                            disabled={loading}
                            className="w-full"
                            id="notes"
                            placeholder="Ho bisogno di trasportare..."
                        />
                    </div>
                    {errors.notes && (
                        <p className="text-xs text-red-500">
                            {errors.notes.message}
                        </p>
                    )}
                    <div className="mt-4 sm:flex gap-8 items-center">
                        <Button
                            type="submit"
                            disabled={loading}
                            variant="default" className="w-full sm:w-60"
                        >
                            Invia richiesta
                            {loading && <Spinner size="sm" className="bg-white" />}
                        </Button>
                        <p className="mt-4 sm:mt-0">Hai un’esigenza particolare? Parliamone
                            telefonicamente</p>
                    </div>
                </div>
            </div>
        </form>
    )
}
