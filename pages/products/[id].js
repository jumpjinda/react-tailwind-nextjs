import Head from "next/head";
import Image from "next/image";

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  const paths = data.products.map(product => {
    return {
      params: { id: String(product.id) }
    };
  });
  // console.log(paths);
  return {
    paths,
    fallback: false
  };
}

// getStaticProps will one time run after server builded (npm run dev)
export async function getStaticProps({ params }) {
  // console.log(params);
  const id = params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
  // show data in server side, it means data show in vscode terminal
  // console.log(data);

  return {
    props: { product: data }
  };
}

const ProductDetail = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className="flex justify-center mt-5 gap-4">
        <Image
          className="h-72 object-cover"
          src={product.thumbnail}
          width={300}
          height={300}
          alt={product.title}
        />
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Name: {product.title}</h1>
          <h1 className="text-xl font-bold">Price: ${product.price}</h1>
          <h1>Category: {product.category}</h1>
          <h1>Brand: {product.brand}</h1>
          <h1>Description: {product.description}</h1>
          <h1>Rating: {product.rating} / 5</h1>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;