import Head from "next/head";
import Menu from "../../components/Menu";
import Image from "next/image";
import Form from "../../components/Form";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import CandidateForm from "../../components/CandidateForm";
import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../../components/Button";
registerLocale("id", id);

export default function CreateVote() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [candidates, setCandidates] = React.useState<Candidate[]>([]);

  const submitCandidate = (candidate: Candidate) => {
    setCandidates(
      candidates.map((c) => (c.key === candidate.key ? candidate : c))
    );
  };

  const addCandidateForm = () => {
    const newCandidate: Candidate = {
      name: "",
      key: candidates.length + 1,
      title: "",
    };
    setCandidates([...candidates, newCandidate]);
  };

  const removeCandidateForm = (key: number) => {
    // list kandidat baru kecuali dengan key diatas
    const newCandidates = candidates.filter(
      (candidate) => candidate.key !== key
    );

    // diurutkan ulang
    newCandidates.forEach((candidate, index) => {
      candidate.key = index + 1;
    });

    setCandidates(newCandidates);
  };

  return (
    <div className="container mx-auto">
      <Head>
        <title>Voting Baru</title>
      </Head>
      <Menu />

      <div>
        <Image alt="Create vote" src={"/4428.jpg"} width={284} height={198} />
        <h1 className="text-4xl font-bold">Buat Voting Baru</h1>
        <h2 className="text-zinc-700 mt-3">
          Silahkan masukan data yang diperlukan sebelum membuat vote online
        </h2>

        <form action="" className="flex flex-col">
          {/* detail vote */}
          <div className="space-y-5">
            <h3 className="font-medium text-xl mt-10">Detail Voting</h3>

            <div className="flex flex-col">
              <label className="text-sm mt-5">Judul</label>
              <Form
                onChange={() => {}}
                value={""}
                placeHolder={"Contoh : Voting React Vs Vue"}
                className={"mt-1 w-1/2"}
              />
            </div>
            <div>
              <div className="flex flex-col w-2/3">
                <label className="text-sm">Kapan Dimulainya ?</label>
                <div className="inline-flex">
                  <ReactDatePicker
                    locale={"id"}
                    showTimeSelect
                    selected={startDate}
                    onChange={(date) => date && setStartDate(date)}
                    dateFormat={"Pp"}
                    minDate={new Date()}
                    className={"w-full px-3 py-2 bg-zinc-100"}
                  />
                  <span className="text-sm text-center p-3">Sampai</span>
                  <ReactDatePicker
                    locale={"id"}
                    showTimeSelect
                    selected={endDate}
                    onChange={(date) => date && setEndDate(date)}
                    dateFormat={"Pp"}
                    minDate={startDate}
                    className={"w-full px-3 py-2 bg-zinc-100"}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* detail vote */}
          {/* Kandidat */}
          <h3 className="font-medium text-xl mt-10">Kandidat</h3>
          <div className="grid gap-4 grid-cols-4 mt-5">
            {candidates.map((candidate: Candidate, index: number) => (
              <CandidateForm
                key={index}
                candidate={candidate}
                submitCandidate={submitCandidate}
                removeCandidateForm={removeCandidateForm}
              />
            ))}
            <div
              className="w-1/3 flex flex-col items-center justify-center cursor-pointer bg-zinc-100 aspect-square text-zinc-400 hover:bg-black hover:text-white"
              onClick={() => addCandidateForm()}
            >
              <PlusIcon className="w-1/3" />
            </div>
          </div>
          {/* Kandidat */}
          <div className="text-right mt-10">
            <Button
              text="Buat Voting"
              className="bg-black text-white hover:bg-zinc-800"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
