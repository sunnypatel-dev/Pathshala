import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Certificates = () => {
  const { currentUser } = useSelector((state) => state.user);

  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const handleCertificate = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/get_certificate/",
          {
            userId: currentUser._id,
          }
        );
        setCertificates(response.data.certificates);
      } catch (err) {
        console.log(err);
      }
    };

    handleCertificate();
  }, [currentUser._id]);

  return (
    <div className="pb-6 pt-5 md:pb-6 md:pt-6">
      <h1 className="text-[1.3rem] sm:text-2xl font-bold text-[#494949]">
        Certificates
      </h1>

      <div class="relative overflow-x-auto shadow-md  mt-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Enrolled Courses
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Date of Completion
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                View Certificate
              </th>
            </tr>
          </thead>
          <tbody>
            {certificates?.map((item, index) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.course_name}
                </th>
                <td class="px-6 py-4">{item.course_category}</td>
                <td class="px-6 py-4">
                  {item.date_of_completion.substring(0, 10)}
                </td>
                <td class="px-6 py-4 text-green-500">Completed</td>
                <td class="px-6 py-4 text-blue-500">
                  <Link href={item.certificateDownloadUrl}>Link</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Certificates;
