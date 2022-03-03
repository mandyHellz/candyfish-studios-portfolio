import Head from "next/head";
import DefaultLayout from "../components/Layouts/DefaultLayout";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <div className="question">
        <p className="cursor-pointer py-8 text-2xl font-bold">Contact us</p>
      </div>
    </>
  );
};

export default ContactUs;
