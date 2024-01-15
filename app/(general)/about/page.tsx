import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Pricing description",
  keywords: [
    "About page",
    "Información sobre la empresa",
    "fabrica de camisas",
  ],
};

export default function AboutPage() {
  return (
    <>
      <span>About page</span>
    </>
  );
}
