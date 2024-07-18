import { Progress } from '../../../components/shadCDN/progress';
import Image from "next/image";
import { FaImage } from "react-icons/fa6";
import Link from "next/link";
import { getProposalData, ProposalData } from '@/app/getProposalData';

interface PageName {
  name: string
}

export default async function Proposal({ params }: { params: PageName }) {

  const proposalData: ProposalData = await getProposalData(params.name);

  return (
    <article className="w-full">
      <div className="w-full min-h-[100vh] xl:px-10 2xl:px-40 4xl:px-60 py-10">

        <div className="w-full xl:h-[28vmax] 2xl:h-[24vmax] 3xl:h-[15vmax] hidden xl:flex xl:item-center xl:justify-between">
          <div className={`h-full aspect-square relative border border-gray-color-2 flex items-center justify-center overflow-hidden`}>
            {
              proposalData?.image ? <Image fill={true} src={proposalData?.image} alt="Proposal Image" className="w-full h-full object-cover" /> : <FaImage className="text-[10vmax] text-gray-300" />
            }
          </div>
          <div className="w-[78%] h-full">
            <p className="max-h-[80%] overflow-hidden text-xl 3xl:text-2xl font-semibold">
              {proposalData?.title}
            </p>
          </div>
        </div>
        <div className={`w-full h-[40vmax] relative ${!proposalData?.image && 'border-2 border-gray-300'} flex items-center justify-center xl:hidden overflow-hidden mb-5`}>
          {
            proposalData?.image ? <Image fill={true} src={proposalData?.image} alt="Proposal Image" className="w-full h-full object-contain" /> : <FaImage className="text-[10vmax] text-gray-300" />
          }
        </div>

        <div className="w-full lg:px-20 max-h-[35vmax] lg:h-[15vmax] flex flex-col px-3 mb-10 xl:hidden">
          <p className="max-h-[26vmax] overflow-hidden text-xl 3xl:text-2xl font-semibold">
            {proposalData?.title}
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5 xl:hidden px-5 lg:px-20 mb-10">
          <div className="flex flex-col gap-2 internal-project-item-border shadow p-5 w-full min-h-[20vmax]">
            <p className="text-black-color text-sm font-semibold">Proposal Authors</p>
            <div className="flex flex-wrap gap-2">
              {
                proposalData?.authors.map((author, i) => {
                  return <span key={i}>{author}</span>
                })
              }
            </div>
          </div>
        </div>

        <div className="w-full xl:h-[13vmax] 2xl:h-[15vh] hidden xl:flex xl:items-center xl:justify-between my-10">
          <div className="w-[35%] 2xl:w-[45%] h-full internal-project-item-border shadow p-5">
            <Progress value={(proposalData.funding.total / proposalData.funding.committed) * 100} />
            <div className="w-full flex flex-col justify-center">
              <p className="text-sm text-color-primary mt-3 font-semibold">
                ${proposalData.funding.total}
              </p>
              <p className="text-sm text-black-color">
                of ${proposalData.funding.committed} committed
              </p>
            </div>
          </div>
          <div className="w-[65%] 2xl:w-[55%] h-full flex items-center justify-end gap-2">
            <div className="flex flex-col gap-2 internal-project-item-border shadow p-2 2xl:p-5 w-[33%] 2xl:w-[11vw] min-h-full">
              <p className="text-black-color text-sm font-semibold">Proposal Authors</p>
              <div className="flex flex-wrap gap-2">
                {
                  proposalData?.authors.map((author, i) => {
                    return <span key={i}>{author}</span>
                  })
                }
              </div>
            </div>
            <div className="flex flex-col gap-2 internal-project-item-border shadow p-2 2xl:p-5 w-[33%] 2xl:w-[11vw] min-h-full">
              <p className="text-black-color text-sm font-semibold">Sponsors</p>
              <div className="flex flex-wrap gap-2">
                {
                  proposalData.sponsors?.map((sponsor, i) => {
                    return <span key={i}>{sponsor}</span>
                  })
                }
              </div>
            </div>
            <div className="h-full flex flex-col items-center justify-start">
              <Link href={"https://forms.gle/Uj1SY1w5hxq2Sn938"} rel="noopener noreferrer" target="_blank" className="px-4 py-2 bgcolor-primary text-white rounded">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="ul-type-disc text-black-main main-body mt-20" dangerouslySetInnerHTML={{ __html: proposalData.content }} />
      </div>
    </article>
  );
}
