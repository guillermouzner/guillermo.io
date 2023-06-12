import {ChevronLeft} from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="bg-zinc-600 text-black min-h-screen lg:mx-56 md:mx-20 flex justify-center items-center">
      <div className="bg-white">
        <div className="mt-7 bg-red-900">
          <Link
            className="sticky left-4 top-4 z-30 float-left rounded-full p-3  transition-all duration-75 hover:bg-gray-100 focus:outline-none active:scale-75 flex flex-row gap-3"
            href="/"
          >
            <>
              <ChevronLeft className="h-6 w-6" />
              Back
            </>
          </Link>
        </div>
        <div className="py-16 px-8  md:p-24">
          <div className="flex flex-col gap-4 xl:gap-0 xl:flex-row justify-between items-baseline">
            <h1 className="text-2xl bg-sky-600 text-white px-3 rounded-lg font-bold">
              Guillemo uzner
            </h1>
            <div className="flex gap-6">
              <a
                className="underline"
                href="https://www.linkedin.com/in/guillermo-uzner/"
                rel="noreferrer"
                target="_blank"
              >
                [linkedin]
              </a>

              <a
                className="underline"
                href="https://github.com/guillermouzner"
                rel="noreferrer"
                target="_blank"
              >
                [github]
              </a>

              <a
                className="underline"
                href="https://guillermo-io.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                [guillermouz.io]
              </a>
            </div>
          </div>
          <div className="my-5 flex flex-col gap-2 font-medium text-sm">
            <p>🙋‍♂️ Full Stack Developer, 23 y.o</p>
            <p>🌍 Tucuman, Argentina</p>
            <p>
              📩{" "}
              <a href="mailto:guillermouz16@gmail.com" rel="noreferrer" target="_blank">
                guillermouz16@gmail.com
              </a>
            </p>
            <p>📱 (+54) 381 4987351</p>
          </div>

          {/* About */}
          <div className="my-8 flex flex-col gap-3">
            <h1 className="text-sky-600 font-bold text-xl">About</h1>
            <div className="font-medium text-sm flex flex-col gap-1">
              <p>Fullstack developer specializad in frontend of web applications.</p>
              <p>
                I love building for the web. From something as simple as a simple HTML file - all
                the way to large Next.js applications.
              </p>
              <p>✅ web2</p>
              <p>🔜 web3</p>
            </div>
          </div>
          {/* Education */}

          <div className="my-8 flex flex-col gap-3">
            <h1 className="text-sky-600 font-bold text-xl">Education</h1>
            <div className="font-medium text-sm flex flex-col">
              <p className="text-slate-500">Mar 2018 - Nov 2020 (40%)</p>
              <p>
                <span className="font-black">UNT, San Miguel de Tucuman</span> - Bachelor of
                Business Administration
              </p>
            </div>
            <div className="font-medium text-sm flex flex-col">
              <p className="text-slate-500">Mar 2020 - Nov 2020</p>
              <p>
                <span className="font-black">UTN, Buenos Aires</span> - Python Certification
              </p>
            </div>
            <div className="font-medium text-sm flex flex-col">
              <p className="text-slate-500">Mar 2022 - May 2022</p>
              <p>
                <span className="font-black">Alkemy Bootcamp</span> - Data Analytics + Python
              </p>
            </div>
          </div>

          {/* Experience */}

          <div className="my-8 flex flex-col gap-3">
            <h1 className="text-sky-600 font-bold text-xl">Experience</h1>
            <div className="font-medium text-sm flex flex-col">
              <p className="text-slate-500">Oct 2022 - Apr 2023</p>
              <p>
                <span className="font-black">WAU! - Marketing Agency</span> - Full Stack Developer
              </p>
              <p>Task: Create pages that adapt according to the client&apos;s needs.</p>
            </div>
          </div>

          {/* Skills */}

          <div className="my-8 flex flex-col gap-3">
            <h1 className="text-sky-600 font-bold text-xl">Skills</h1>
            <div className="font-medium text-sm flex flex-col mx-10">
              <ul className="list-disc flex flex-col gap-1">
                <li>
                  <span className="font-black">General:</span> JavaScript/TypeScript, Python, Jira.
                </li>
                <li>
                  <span className="font-black">Frontend:</span> React, Next(SSR, ISR, SSG), auth.
                </li>
                <li>
                  <span className="font-black">Backend:</span> Node + Express, Django, SQL - NoSQL,
                  worked with Postgres + PlanetScale, Prisma ORM.
                </li>
                <li>Native Spanish, fluent English (B1).</li>
              </ul>
            </div>
          </div>

          {/* Achievements */}
          <div className="my-8 flex flex-col gap-3">
            <h1 className="text-sky-600 font-bold text-xl">Achievements</h1>
            <div className="font-medium text-sm flex flex-col mx-10">
              <ul className="list-disc flex flex-col gap-1">
                <li>
                  Hackathon projects: Whatsapp bot for SantanderRio Bank build with Nodejs +
                  Whatsapp API to reduce client&apos;s time take to do operations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
