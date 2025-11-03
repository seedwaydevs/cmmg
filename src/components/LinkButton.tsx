import Link from "next/link";

type LinkButtonProps = {
  text: string;
  url: string;
  styles: string;
};

export default function LinkButton({ text, url, styles }: LinkButtonProps) {
  return (
    <Link href={url} className={styles}>
      {text}
    </Link>
  );
}
