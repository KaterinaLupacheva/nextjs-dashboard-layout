import Head from "next/head";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

export default function Container({ title, children }: ContainerProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Nextjs Dashboard Layout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
