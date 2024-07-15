type Props = {
  id: string;
  contentHtml: string;
  // --- optional
  title?: string;
  image?: string;
  funding?: {
    committed: number;
    total: number;
  };
  sponsors?: string[];
  authors?: string[];
};

export default function Proposal({ title, contentHtml }: Props) {
  return (
    <article className="prose">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
