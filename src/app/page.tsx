import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import { projects, skills } from "./data";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-6 mb-6">
          <Image
            src="/sush.jpg"
            alt="Susmita Das"
            width={96}
            height={96}
            className="rounded-full object-cover w-24 h-24"
          />
          <div>
            <h1 className="text-4xl font-bold text-black mb-1">susmita das</h1>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#555]" />
              <span className="text-[#444]">noida, india</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-[#555]" />
              <span className="text-[#444]">cs student • full-stack dev</span>
            </div>
          </div>
        </div>

        <p className="mb-8 text-lg leading-relaxed">
          hello!!! i&apos;m susmita, cs student & full-stack dev who vibes with
          modern tools like next.js, prisma, and typescript and loves building
          products that solve real-world problems...
        </p>

        <h2 className="text-xl text-black font-semibold mb-4">projects</h2>
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={i}>
              <h2 className="text-lg text-black font-semibold mb-2">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-pink-600 transition-colors"
                >
                  {project.title}
                </Link>
              </h2>
              <p className="text-[#333]">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-xl text-black font-semibold mb-4">
            skills & tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-[#222] animate-fade-in">
            {skills.map((skill, i) => (
              <Link
                key={i}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-600 transition-colors"
              >
                <span className="text-lg">{skill.icon}</span>
                <span>{skill.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl text-black font-semibold mb-4">contact</h2>
          <div className="flex flex-col gap-2 text-[#222] text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#444]" />
              <Link
                href="mailto:hi@sushh.me"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <span>hi@sushh.me</span>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub className="text-[#444]" />
              <Link
                href="https://github.com/susmitadas22"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                github
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-[#444]" />
              <Link
                href="https://www.linkedin.com/in/susmitadas222/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                linkedin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
