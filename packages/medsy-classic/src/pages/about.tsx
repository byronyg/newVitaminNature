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
        <h4 className="m-5 justify-center font-normal">
          Welcome to{" "}
          <span className="text-yellow-700">Vitamin &amp; Nature!</span> We are
          dedicated to providing you with a wide range of healthy and
          environmentally friendly self-care body products. At our store, we
          believe that taking care of yourself should not come at the expense of
          the planet. That is why we have carefully curated a collection of
          products that promote both personal wellness and sustainable living.
          Our commitment to your well-being begins with the ingredients we use
          in our products.
          <br />
          We prioritize natural, organic, and ethically sourced ingredients to
          ensure that what you put on your body is safe, gentle, and nourishing.
          You can trust that our products are free from harmful chemicals,
          artificial additives, and animal testing. We work closely with trusted
          suppliers who share our values and adhere to strict quality standards.
          In addition to caring for your own health, we also strive to minimize
          our impact on the environment. Sustainability is at the core of
          everything we do. We prioritize eco-friendly packaging materials,
          opting for recyclable, biodegradable, and compostable options whenever
          possible.
          <br />
          By reducing waste and supporting sustainable practices, we aim to
          leave a positive footprint on our planet. At our online store, you'll
          find an extensive range of self-care body products to cater to your
          unique needs. From soothing bath salts and revitalizing face masks to
          nourishing body lotions and fragrant essential oils, we have carefully
          selected each item with your well-being in mind. Whether you're
          looking to relax, rejuvenate, or enhance your daily self-care routine,
          we have the perfect products to help you achieve your goals. We are
          passionate about providing you with a seamless online shopping
          experience. Our user-friendly website allows you to browse through our
          products effortlessly and provides detailed information about each
          item. If you have any questions or need assistance, our dedicated
          customer support team is always ready to help.
          <br />
          Thank you for choosing our online store as your destination for
          healthy and environmentally friendly self-care body products.
          <br />
          We are excited to be a part of your wellness journey and look forward
          to serving you with the highest level of care and commitment. Start
          exploring our collection today and discover a new level of self-care
          that benefits both you and the planet.
        </h4>
      </div>
    </Layout>
  );
}
