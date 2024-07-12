type Props = {
  title?: string;
  contentHtml: string;
};

export default function Proposal({ title, contentHtml }: Props) {
  return (
    <main>
      <div>{title}</div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
