import getPoposalData from "@/app/getProposalData";
import Proposal from "./Proposal";

type Props = {
  params: {
    name: string;
  };
};
export default async function ProposalPage({ params: { name } }: Props) {
  const data = await getPoposalData(name);

  return <Proposal {...data} />;
}
