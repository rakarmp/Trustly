import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  return (
    <div className="flex justify-between py-5">
      <Image
        src={"/Trustly.svg"}
        width={150}
        height={100}
        alt="Trustly"
        onClick={() => router.push("/")}
        className={"cursor-pointer"}
      />
      <Button text="Login" className="bg-black text-white hover:bg-zinc-800" />
    </div>
  );
}
