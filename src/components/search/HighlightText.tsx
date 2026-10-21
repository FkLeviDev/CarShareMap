interface HighlightTextProps {
  text: string;
  query: string;
}

/** A szöveg keresővel egyező részét kiemeli */
export function HighlightText({ text, query }: HighlightTextProps) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (!query || idx === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}
