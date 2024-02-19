import { InternshipIcon, JobsIcon } from "@/components/Icons";
import Link from "next/link";
const integrations = [
  {
    title: "Front End Developer",
    desc: "Sagar Group of Institutions",
    icon: InternshipIcon,
    active: true,
  },
  {
    title: "Full Stack Developer",
    desc: "Cocgnizant Technology Solutions",
    icon: JobsIcon,
    active: false,
  },
  {
    title: "Android Developer",
    desc: "Kotlin and Java Developer",
    icon: InternshipIcon,
    active: true,
  },
  {
    title: "Android Developer",
    desc: "Kotlin and Java Developer",
    icon: InternshipIcon,
    active: true,
  },
];

const AdminJobs = () => (
  <section className="  ">
    <div className="max-w-screen-xl  ">
      <div className="max-w-md">
        <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl">
          Jobs and Internships
        </h1>
        <p className="text-gray-600 mt-2">
          All the jobs and internships listed by you will be shown here.
        </p>
      </div>
      <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((item, idx) => (
          <li className="border rounded-lg">
            <div className="flex items-start justify-between p-4">
              <div className="space-y-2">
                <item.icon className="w-8 h-8 text-indigo-600" />
                <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
              <button className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">
                Edit
              </button>
            </div>
            <div className="py-5 px-4 border-t flex justify-between">
              <span
                className={`${
                  item.active ? "bg-green" : "bg-red-400"
                } text-sm p-1 rounded-md font-semibold text-white`}
              >
                {item.active ? "Active" : "Inactive"}
              </span>
              <Link
                href="javascript:void(0)"
                className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
              >
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AdminJobs;
