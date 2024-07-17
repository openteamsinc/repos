import Link from "next/link";
import { Progress } from "./shadCDN/progress";
import { FaImage } from "react-icons/fa6";
import { HomePageAvatar } from "./HomePageAvater";
import { ProposalData } from "@/app/getProposalData";



export default function ProposalDiv({ data }: { data: ProposalData }) {
    return (
        <Link href={'/proposals/polars-marco'}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 ease-in-out hover:scale-105 py-3 px-6"
        >
            <div className="w-full flex items-center justify-between">
                <div className="w-[30%] h-full flex items-center justify-center">
                    <div className="w-full aspect-square border rounded-md border-gray-500 flex items-center justify-center relative overflow-hidden">
                        <FaImage className="text-[5vmax] text-gray-300" />
                    </div>
                </div>
                <div className="w-[67%]">
                    <h4 className="w-full h-full text-sm 2xl:text-base text-black font-semibold overflow-hidden">
                        {data.title}
                    </h4>
                </div>
            </div>
            <div className="w-full flex flex-col gap-3 pt-5">
                <Progress value={(data.funding.total! / data.funding.committed!) * 100} />
                <div className="w-full flex gap-2">
                    <p className="text-color-primary font-medium">
                        {data.funding.total}
                    </p>
                    <p className="text-black">
                        of {data.funding.committed} committed
                    </p>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <p className="text-[0.9rem] text-black font-semibold">Proposal Author</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            data.authors.map((name) => {
                                return <span>{name}</span>
                            })
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}
