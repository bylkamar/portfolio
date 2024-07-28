"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

interface IFormInput {
  nom: string;
  prenom: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  let [messageSent, setMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const text = `Prénom:${data.email} Nom: ${data.nom}\nEmail: ${data.email}\nMessage: ${data.message}`;
    try {
      const response = await fetch(`/api/contact`, {
        // Remplacez par l'URL de votre API externe
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
        }),
      });
      if (response.ok) {
        setMessageSent(true);
      } else {
        alert("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de l'envoi du message.");
    }
  };
  return (
    <div>
      <section id="contact" className="mb-48">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-white text-center mb-8">
          Me contacter
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-[10%]">
          <div className="lg:ml-[45%]">
            <Link href="https://www.linkedin.com/in/amerac/">
              <div className="bg-[#0A66C2] rounded-md p-4 mb-4">
                <div className="flex items-center space-y-1.5">
                  <RiLinkedinFill className="text-white" size={"30"} />
                  <h2 className="text-white font-bold text-xl ml-2">
                    Linkedin
                  </h2>
                </div>
              </div>
            </Link>

            <Link href="https://github.com/bylkamar">
              <div className="bg-[#1F2328] rounded-md p-4">
                <div className="flex items-center space-y-1.5">
                  <RiGithubFill className="text-white" size={"30"} />
                  <h2 className="text-white font-bold text-xl ml-2">GitHub</h2>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-gray-700 dark:text-white font-bold text-lg mb-5">
                Vous souhaitez laisser un message ?
              </h1>
              <Field>
                <Label className="text-gray-700 dark:text-white font-bold text-lg">
                  Votre nom
                </Label>
              </Field>
              <Input
                type="text"
                role="textbox"
                required={true}
                placeholder="Nom"
                {...register("nom", {
                  required: "Ce champ est obligatoire",
                })}
                className={
                  "block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-gray-700 dark:text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                }
              />
              {errors.nom && (
                <div>
                  <span className="text-red-500 italic">
                    {errors.nom.message}
                  </span>
                </div>
              )}
              <Field>
                <Label className="text-gray-700 dark:text-white font-bold text-lg">
                  Votre prénom
                </Label>
                <Input
                  role="textbox"
                  type="text"
                  {...register("prenom", {
                    required: "Ce champ est obligatoire",
                  })}
                  required={true}
                  placeholder="Prénom"
                  className={
                    "block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-gray-700 dark:text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  }
                />
                {errors.prenom && (
                  <div>
                    <span className="text-red-500 italic">
                      {errors.prenom.message}
                    </span>
                  </div>
                )}
              </Field>
              <Field>
                <Label className="text-gray-700 dark:text-white font-bold text-lg">
                  Votre e-mail
                </Label>
                <Input
                  role="textbox"
                  type="email"
                  {...register("email", {
                    required: "Ce champ est obligatoire",
                  })}
                  required={true}
                  placeholder="e-mail"
                  className={
                    "block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-gray-700 dark:text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  }
                />
                {errors.prenom && (
                  <div>
                    <span className="text-red-500 italic">
                      {errors.prenom.message}
                    </span>
                  </div>
                )}
              </Field>
              <Field>
                <Label className="text-gray-700 dark:text-white font-bold text-lg">
                  Votre message
                </Label>
                <Textarea
                  placeholder="Votre message"
                  aria-required="true"
                  maxLength={500}
                  role="textbox"
                  {...register("message", {
                    required: "Ce champ est obligatoire",
                  })}
                  className={
                    "mt-2 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-gray-700 dark:text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  }
                />
                {errors.message && (
                  <div>
                    <span className="text-red-500 italic">
                      {errors.message.message}
                    </span>
                  </div>
                )}
              </Field>
              <button
                className="mt-4 bg-[#0A66C2] text-white py-2 px-4 rounded-lg"
                type="submit"
              >
                <span>Envoyer</span>
              </button>
            </form>
          </div>
        </div>
        <Dialog
          open={messageSent}
          onClose={() => setMessageSent(false)}
          className="relative z-50 "
          transition
        >
          <DialogBackdrop className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel
              transition
              className="max-w-lg space-y-4 border bg-white p-12 rounded-lg text-gray-700 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <DialogTitle className="font-bold text-center">
                Envoyer un message
              </DialogTitle>
              <p>Votre message a été envoyé avec succès.</p>
              <div className="flex justify-center gap-4">
                <button
                  className="bg-green-500 duration-300 hover:scale-110 p-2 px-3 rounded-full text-white font-bold"
                  onClick={() => setMessageSent(false)}
                >
                  Fermer
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </section>
    </div>
  );
};

export default Contact;
