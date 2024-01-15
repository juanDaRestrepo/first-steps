import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Pagina de contacto de nuestra empresa",
  keywords: [
    "Contact page",
    "Comunicacte con nosotros",
    "fabrica de camisas",
  ],
};

export default function ContactPage() {
  return (
    <>
      <span>Contact page</span>
    </>
  );
}
