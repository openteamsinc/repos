import { getPoposalData, getPoposalIds } from "@/app/getProposalData";
import Proposal from "./Proposal";

type Props = {
  params: {
    name: string;
  };
};

export async function generateStaticParams() {
  const ids = await getPoposalIds();
  return ids.map((name: string) => ({ name }));
}
export default async function ProposalPage({ params: { name } }: Props) {
  const data = await getPoposalData(name);
  return <Proposal {...data} />;
}
