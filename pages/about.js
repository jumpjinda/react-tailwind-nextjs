import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page | Jump Jinda</title>
      </Head>
      <div className="flex flex-col items-center space-y-10 mt-10 mb-10">
        <h1 className="text-3xl">About us</h1>
        <Image
          src='/about.svg'
          width={500}
          height={300}
          alt="about"
        />
      </div >
      <hr />
    </>
  );
};

export default About;