// import { useEffect } from 'react';
import Head from "next/head";
import Layout from "containers/layout/layout";
import { useState } from "react";

export default function ContactUs() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>Contact Us</title>
      </Head>

      <div className="py-35px px-4 md:p-35px">
        <h3 className="w-full flex justify-center mb-30px text-24px text-gray-900 text-center font-semibold">
          Contact Us
        </h3>
        <div className="w-full flex justify-center items-center">
          <form
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-slate-200 w-2/4"
            // onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold dark:text-gray-900">
              Send a message
            </h1>

            <label
              htmlFor="fullname"
              className="text-gray-500 font-light mt-8 dark:text-gray-900"
            >
              Full name
              <span className="text-red-500 dark:text-gray-900">*</span>
            </label>
            <input
              type="text"
              name="fullname"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-900"
              value={fullname}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />

            <label
              htmlFor="email"
              className="text-gray-500 font-light mt-4 dark:text-gray-900"
            >
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-900"
              value={email}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />

            <label
              htmlFor="subject"
              className="text-gray-500 font-light mt-4 dark:text-gray-900"
            >
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
              value={subject}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />

            <label
              htmlFor="message"
              className="text-gray-500 font-light mt-4 dark:text-gray-900"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
              value={message}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            ></textarea>
            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                className="px-10 mt-8 py-2 bg-gray-900 text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
              >
                Send
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-yellow-500 ml-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
