import Head from "next/head";
import Image from "next/image";
import style from '@/styles/Products.module.css';
import Link from "next/link";

// getStaticProps will one time run after server builded (npm run dev)
export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  // show data in server side, it means data show in vscode terminal
  console.log(data);

  return {
    props: { products: data.products }
  };
}

const Index = ({ products }) => {
  return (
    <>
      <Head>
        <title>Products Page | Jump Jinda</title>
      </Head>
      <div className="flex flex-wrap gap-3 justify-center">
        {products.map(product => (
          <div className="mt-3 bg-gray-500 hover:bg-sky-300 cursor-pointer" key={product.id}>
            <Link href={'/products/' + product.id}>
              <h2 className="text-center text-xl py-2">{product.title}</h2>
              {/* configure next.config.js if you want to import picture outside project */}
              {/* https://nextjs.org/docs/messages/next-image-unconfigured-host */}
              <Image
                className="h-72 object-cover"
                src={product.thumbnail}
                width={300}
                height={300}
                alt={product.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;

// https://dummyjson.com/products?limit=12