"use client";
import React from "react";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { logOut } from "@/redux/user/userSlice";
import axios from "axios";
import { useRouter } from "next/navigation";

const Aside = () => {
  const { openSidebar } = useSelector((state) => state.user);

  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("http://localhost:3000/api/logout");

      dispatch(logOut());
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <aside
      class={`fixed top-0 left-0 z-40 w-52 sm:w-64  border h-screen transition-transform ${
        openSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-24 overflow-y-auto  bg-white flex flex-col justify-between">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="py-2">
            <AccordionTrigger className="text-md">
              Certification Courses
            </AccordionTrigger>
            <AccordionContent>
              <div className="  group-hover:block bg-white py-2 w-full rounded-sm">
                <div>
                  <h3 className="text-lg font-semibold px-4 py-2">
                    Most Popular
                  </h3>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Web Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Mobile App Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Cyber Security Course
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="py-3">
            <Link href="/dashboard" className="text-md">
              Dashboard
            </Link>
          </AccordionItem>
          <AccordionItem value="item-3" className="py-3">
            <div onClick={logout} className="text-md">
              Logout
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
};

export default Aside;
