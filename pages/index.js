import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


const index = () => {
  return (
    <>
      <Head>
        <title>Home Page | Jump Jinda</title>
        <meta
          name="keyword" content="Jumpjinda Shop"
        />
      </Head>
      <div className="flex flex-col items-center space-y-10 mt-10 mb-10">
        <h1 className="text-3xl">Home page</h1>
        <Image
          src='/shopping.svg'
          width={500}
          height={300}
        />
        <h1>Welcome to Jump Jinda shop</h1>
        <Link
          href='/products'
          className="bg-blue-500 px-10 py-3 rounded-md text-white"
        >
          View all products</Link>
      </div>
      <hr />
    </>
  );
};

export default index;
