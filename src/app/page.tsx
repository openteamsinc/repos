"use client"
import React from "react";
import Image from "next/image";
import bannerImg from "../../public/bannerImage.png";
import ProposalDiv from "@/components/ProposalDiv";
import { getAllProposalsList, ProposalData } from "./getProposalData";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Homepage() {

  const allProposalsData: ProposalData[] = getAllProposalsList();

  return (
    <main className="flex flex-col justify-center bg-nav-color items-center h-full">
      <div className="w-full flex flex-col items-start justify-between gap-5 lg:gap-0 lg:flex-row lg:items-center lg:justify-between px-5 lg:px-20 xl:px-44 3xl:px-60 4xl:px-72 mt-5 lg:mt-0">
        <div className="w-full lg:w-[70%] flex flex-col gap-3">
          <div className="w-full text-[2.5rem] leading-[3rem] lg:leading-[4rem] text-black-main lg:text-[2vmax] xl:text-[2.5vmax] font-semibold">
            <p>
              Empower Open Source with REPOS,
            </p>
            <span className="text-color-primary">A Sustainable Funding Model</span>
          </div>
          <div className="w-full lg:w-[85%] text-[1.2rem] lg:text-xs xl:text-sm 3xl:text-lg">
            <span>
              REPOS (Reimbursed Enhancement Proposals for Open Source) is a platform that connects open source developers with sponsors and contributors. Whether you want to support existing projects or propose new ideas, REPOS provides a sustainable way to fund and drive innovation in the open source ecosystem.
            </span>
          </div>
        </div>
        <div className="w-full h-[20rem] lg:w-[28%] lg:h-[20vmax] flex items-center justify-end relative">
          <Image src={bannerImg} alt="Banner Image" fill={true} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-between gap-8 lg:gap-0 bg-white px-8 lg:px-20 xl:px-52 3xl:px-80 py-7">
        <div className="lg:px-10 xl:px-0 lg:w-[80%] xl:w-1/2 flex flex-col items-center justify-center text-black-main gap-5 lg:gap-2 3xl:gap-3">
          <h2 className="text-[2.5rem] leading-[3rem] lg:text-[2vmax] xl:text-[2.5vmax] font-semibold lg:text-center">
            Find Your Next Project
          </h2>
          <p className="text-[1.2rem] lg:text-xs xl:text-sm 3xl:text-xl lg:text-center">
            Discover open source projects to contribute to or sponsor.
          </p>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center w-full py-10 xl:px-20 3xl:px-60">
        <div className={`w-full min-h-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 px-10 xl:px-0 gap-10`}>
          {
            allProposalsData.map((proposal, i) => {
              return <ProposalDiv key={i} data={proposal} />

            })
          }
        </div>
      </section>
    </main>
  );
};
