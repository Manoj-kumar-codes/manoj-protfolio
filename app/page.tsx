import Image from "next/image";
import manoj from "./assets/manoj.png";

export default function Home() {
  return <Image src={manoj} alt="Vercel Logo" width={200} height={200} />;
}
