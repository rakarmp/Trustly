import Head from "next/head";
import Image from "next/image";
import Form from "../../components/Form";
import React from "react";
import Button from "../../components/Button";
import { useRouter } from "next/router";

export default function Participant() {
  const [code, setCode] = React.useState("");
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/participant/kode-voting");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5 container mx-auto">
      <Head>
        <title>Ikut Partisipasi</title>
      </Head>

      <Image alt="participant" src={"/4555.png"} width={200} height={180} />

      <h1 className="text-4xl font-bold">Ikutan Voting</h1>
      <h2 className="w-1/2 text-center">
        Untuk ikutan voting, kamu harus memasukan kode voting yang sudah
        dibagikan oleh panitia/pembuat voting
      </h2>
      <Form
        value={code}
        onChange={setCode}
        placeHolder="Masukan kode voting disini"
        className="w-1/3 mt-3"
      />

      <Button
        onClick={handleSubmit}
        text={"Lanjutkan"}
        className="bg-black text-white hover:bg-zinc-800"
      />
      <button
        className="text-sm hover:font-bold"
        onClick={() => router.push("/")}
      >
        Kembali
      </button>
    </div>
  );
}
