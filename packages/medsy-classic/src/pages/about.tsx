// import { useEffect } from 'react';
import Head from "next/head";
import Layout from "containers/layout/layout";

export default function FAQ() {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>About Us</title>
      </Head>

      <div className="py-35px px-4 md:p-35px">
        <h3 className="w-full flex justify-center mb-30px text-24px text-gray-900 text-center font-semibold">
          About Us
        </h3>
        A brief story about us
      </div>
    </Layout>
  );
}
