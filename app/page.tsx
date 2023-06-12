import Link from "next/link";

import {ClientCard} from "@/components/client-card";
import {GridCard} from "@/components/grid-card";
import {Section} from "@/components/section";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen flex flex-col mt-10 md:mt-0 md:justify-center px-10 md:px-20 lg:px-48 gap-10">
        <div className="font-bold">
          <div className="text-2xl md:text-[50px] text-white">Guillermo Uzner 🙋‍♂️</div>
          <div className="text-white">trying out cool stuff</div>
        </div>

        <div className="grid md:grid-rows-2 grid-cols-1 md:grid-cols-4 md:grid-flow-col gap-4 h-52 md:h-72 text-black font-semibold cursor-pointer">
          <div
            className="md:col-span-2 md:row-span-2 rounded-[35px] bg-indigo-500 hover:shadow-indigo/20 
          transition-all hover:scale-95 hover:opacity-90 shadow-2xl"
          >
            <ClientCard sectionId="projects">
              <h1 className="text-2xl md:text-4xl">⚡</h1>
              <h1 className="text-xl">Projects</h1>
            </ClientCard>
          </div>
          <div
            className="md:col-span-1 md:row-span-1 rounded-[35px] bg-teal-400 hover:shadow-teal/20 
          transition-all hover:scale-95 hover:opacity-90 shadow-2xl"
          >
            <ClientCard sectionId="contact">
              <h1 className="text-xl md:text-4xl">💻</h1>
              <h1 className="text-base md:text-xl">Contact</h1>
            </ClientCard>
          </div>
          <div
            className="md:col-span-2 md:row-span-1 rounded-[35px] bg-green-400 hover:shadow-green/20 
          transition-all hover:scale-95 hover:opacity-90 shadow-2xl"
          >
            <ClientCard sectionId="blog">
              <h1 className="text-2xl md:text-4xl">🧢</h1>
              <h1 className="text-lg md:text-xl">Blog</h1>
            </ClientCard>
          </div>
          <div
            className="md:col-span-1 md:row-span-1 rounded-[35px] bg-blue-500 hover:shadow-blue/20 
          transition-all hover:scale-95 hover:opacity-90 shadow-2xl"
          >
            <ClientCard sectionId="resume">
              <h1 className="text-xl md:text-4xl">👨‍💻</h1>
              <h1 className="text-base md:text-xl">Resume</h1>
            </ClientCard>
          </div>
        </div>
      </section>
      {/* Projects */}
      <Section emoji="⚡" id="projects" title="Projects">
        <GridCard
          bgImage="algo"
          colour="indigo"
          description="A collection of algorithm challenges from CodeWars."
          openRepository="https://github.com/guillermouzner/interview-algorithms-challenges"
          title="Algorithms Challenges"
        />
        <GridCard
          bgImage="react"
          colour="indigo"
          description="An open source application built with Next.js, Tailwind CSS, PlanetScale, Prisma, and Vercel."
          openLink="https://guille-stack.vercel.app/"
          openRepository="https://github.com/guillermouzner/guille-stack"
          title="Guille-Stack"
        />
      </Section>
      {/* Blog */}
      <Section emoji="🧢" id="blog" title="Blog">
        <GridCard colour="green" description="Upcoming" title="Blog 101" />
      </Section>
      {/* Contact */}
      <Section emoji="💻" id="contact" title="Contact">
        <GridCard
          bgImage="github"
          colour="teal"
          openLink="https://github.com/guillermouzner"
          title="Github"
        />
        <GridCard
          bgImage="linkedin"
          colour="teal"
          description="Guillermo Uzner"
          openLink="https://www.linkedin.com/in/guillermo-uzner/"
          title="Linkedin"
        />
        <GridCard
          bgImage="mail"
          colour="teal"
          description="guillermouz16@gmail.com"
          openLink="mailto:guillermouz16@gmail.com"
          title="Mail"
        />
      </Section>
      {/* Resume */}
      <Section emoji="👨‍💻" id="resume" title="Resume">
        <Link href="/resume">
          <GridCard bgImage="resume" colour="blue" description="PDF" title="Resume" />
        </Link>
      </Section>
    </>
  );
}

/*
bg-indigo-500 
hover:shadow-indigo/20 
transition-all 
hover:scale-95 
hover:opacity-90
shadow-2xl
*/
