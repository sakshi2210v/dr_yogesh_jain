import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import data from "@/data.json";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TreatCard({data}) {
  return (
    <Link
    href={'/treatment/'+data.lname}>
    <li key={data.name} className=" flex flex-col md:w-[140px] w-[120px] md:m-4 m-1 rounded-md shadow-md">
        <div className="w-20 h-20 ">
      <img src={data.icon} className="md:p-4 p-2" />
      </div>
        <div className="	 px-4 py-2 text-sm 	">
          <p
            className="font-medium text-gray-900 truncate max-w-[200px] text-md hover:text-gray-600 break-words	 "
          >
            {data.name}
          </p>
        </div>
    </li>
    </Link>
  );
}
