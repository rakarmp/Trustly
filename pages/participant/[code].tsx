import Head from "next/head";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";
import CandidateItem from "../../components/CandidateItem";
import Button from "../../components/Button";
import CountDown from "../../components/CountDown/CountDown";

export default function DetailParticipant() {
  const router = useRouter();
  const { code } = router.query;

  return (
    <div className="container mx-auto">
      <Head>
        <title>Mulai Voting</title>
      </Head>

      <Menu />

      <div>
        <h1 className="text-4xl mt-10 text-center">Judul Voting</h1>

        {/* Timer */}
        <CountDown className="mt-10" />
        {/* Timer */}

        {/* Kandidat */}
        <div className="mt-10 space-y-3 mx-auto w-2/3">
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
        </div>
        {/* Kandidat */}

        {/* Submit */}
        <div className="text-center mt-10">
          <Button
            text="Kirim Vote Aku"
            className="bg-black text-white hover:bg-zinc-800"
          />
        </div>
        {/* Submit */}
      </div>
    </div>
  );
}
