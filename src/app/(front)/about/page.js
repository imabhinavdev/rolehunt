import NavBar from "@/components/Navbar";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="  w-full font-pt text-justify py-4 rounded-md h-full">
        <div>
          <p className="font-pop font-bold text-center md:text-4xl text-2xl">
            Welcome to <span className="text-yellow">RoleHunt</span>
          </p>
        </div>
        <div className="mt-5">
          <p className="font-pt text-md mb-4">
            Empowering students to shape their future, RoleHunt is your gateway
            to a world of career opportunities. This dynamic platform is
            meticulously crafted to connect you with top-notch companies,
            providing a comprehensive suite of features to enhance your job
            search experience.
          </p>
          <p className="font-bold text-black font-pop text-xl mb-2">
            What is RoleHunt?
          </p>
          <p className="mb-4">
            RoleHunt is not just a job portal; it's your personalized career
            companion. This platform serves as a centralized hub for all things
            career-related, offering a plethora of features designed to
            streamline your job search and elevate your professional trajectory.
          </p>
          <p className="font-bold text-black font-pop text-xl mb-2">
            Key Features:
          </p>
          <p className="">
            <ul className="list-disc list-inside">
              <li className="mb-4">
                <span className="font-bold">
                  Explore Diverse Opportunities:
                </span>{" "}
                Dive into a vast array of job opportunities from leading
                companies. Whether you're seeking internships, entry-level
                positions, or advanced roles, RoleHunt caters to all career
                stages.
              </li>
              <li className="mb-4">
                <span className="font-bold">Detailed Company Insights:</span>{" "}
                Gain valuable insights into the companies you're interested in.
                From offered roles and packages to company culture and growth
                opportunities, RoleHunt provides a 360-degree view to help you
                make informed decisions.
              </li>
              <li className="mb-4">
                <span className="font-bold">Customized Student Profiles:</span>{" "}
                Showcase your skills, achievements, and aspirations through a
                customizable profile. Make a lasting impression on potential
                employers with a professional and engaging portfolio.
              </li>
              <li className="mb-4">
                <span className="font-bold">
                  Interactive Application Process:
                </span>{" "}
                Apply to multiple roles seamlessly within the platform. Track
                your applications, receive updates, and stay organized
                throughout the recruitment process.
              </li>
              <li className="mb-4">
                <span className="font-bold">Career Resources:</span> Access a
                wealth of resources to enhance your career readiness. From
                resume-building tips to interview preparation guides, RoleHunt
                equips you with the tools needed to succeed.
              </li>
            </ul>
          </p>

          <p className="font-bold text-black font-pop text-xl mb-2">
            Your Opportunities Await
          </p>
          <p className="mb-4">
            By accessing RoleHunt, you open the door to a world of
            possibilities. This platform is more than just a job search; it's a
            catalyst for your professional growth. As you navigate through
            diverse opportunities, seize the chance to shape your career
            trajectory and make meaningful strides towards your goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
