"use client";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "@/firebase";

export default function FileUploader() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [videoUrls, setVideoUrls] = useState([]); // New state for video URLs

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    const uploadPromises = selectedFiles.map(async (file) => {
      const videoRef = ref(storage, "videos/" + file.name);
      const uploadTask = uploadBytesResumable(videoRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      });

      await uploadTask;

      // Get the download URL for the uploaded video
      const filePublicURL = await getDownloadURL(videoRef);
      return { name: file.name, url: filePublicURL };
    });

    const uploadedUrls = await Promise.all(uploadPromises);
    setVideoUrls(uploadedUrls); // Set the video URLs

    console.log("Videos uploaded successfully");
    setSelectedFiles([]);
  };
  const [openUser, setOpenUser] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setOpenSidebar(!openSidebar)}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <img src="logo1.png" className="w-48" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"></span>
              </a>
            </div>
            <div className="flex items-center ">
              <div className="flex items-center ms-3 ">
                <div>
                  <button
                    onClick={() => setOpenUser(!openUser)}
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className={`z-50 ${
                    openUser ? "absolute" : "hidden"
                  } my-4 text-base list-none top-10 right-0 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
          </ul>
        </div>
      </aside> */}

      {/* <div className="px-4 pb-4 pt-16 sm:ml-64">
        <div className="p-4 dark:border-gray-700">
          <h1 className="text-2xl font-bold">Upload New Courses {":-"}</h1>
          <div className="grid grid-cols-2 gap-4 ">
            <div className="flex flex-col justify-center gap-1  border-b sm:px-6 h-24  dark:bg-gray-800 relative">
              <label className="font-medium">New Course Name:</label>
              <input
                type="text"
                className="border border-slate-400 p-1"
              ></input>
            </div>
            <div className="flex flex-col justify-center gap-1 border-b sm:px-6 h-24  dark:bg-gray-800 relative">
              <label className="font-medium">Course Category:</label>
              <select className="border border-slate-400 p-1">
                <option>Select Course Category</option>
              </select>
            </div>
            <div className="flex flex-col col-span-2 justify-center gap-1  border-b sm:px-6 h-24  dark:bg-gray-800 relative">
              <label className="font-medium text-xl text-center">
                Chapter Name:-
              </label>
              <input
                type="text"
                className="border border-slate-400 p-1"
              ></input>
            </div>
            <div className="flex flex-col  col-span-2  justify-center gap-1  border-b sm:px-6 h-24  dark:bg-gray-800 relative">
              <label className="font-medium text-center text-lg">
                Upload all the topics under this chapter
              </label>

              <input
                type="file"
                className="border border-slate-400 p-1"
              ></input>
            </div>

            <table border="1" className="border">
              <tr>
                <th>Srl.no</th>
                <th>New Chapter Name:-</th>
              </tr>
            </table>

            <div className="flex items-center col-span-2 sm:px-6 justify-center border-b sm:justify-normal h-24   dark:bg-gray-800">
              <button className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded">
                Upload Now!
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className=" max-w-screen-sm m-auto grid place-content-center h-screen gap-4 ">
        <input type="file" multiple onChange={handleFileChange} />
        <div style={{ width: "100%", height: "20px", background: "#eee" }}>
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "green",
            }}
          />
        </div>
        <p>{progress.toFixed(2)}% uploaded</p>

        <button
          className="bg-teal-500 text-white py-2 px-4"
          onClick={handleUpload}
        >
          Upload Videos
        </button>

        {videoUrls.length > 0 && (
          <div className="">
            <p className="pb-3 font-semibold">Uploaded Videos:-</p>
            <ul className="flex flex-col gap-2">
              {videoUrls.map((video, index) => (
                <li className="text-sm font-medium" key={index}>
                  {video.name}:{" "}
                  <a
                    className="text-xs font-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {video.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
