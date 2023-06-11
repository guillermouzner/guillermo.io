// import {Blog} from "@/components/blog";
import {ClientCard} from "@/components/client-card";
// import {Contact} from "@/components/contact";
import {GridCard} from "@/components/grid-card";
// import {Projects} from "@/components/projects";
// import {Resume} from "@/components/resume";
import {Section} from "@/components/section";

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center px-48 gap-10">
        <div className="font-bold">
          <div className="text-[50px]">Guillermo Uzner 🙋‍♂️</div>
          <div>trying out cool stuff</div>
        </div>

        <div className="grid grid-rows-2 grid-cols-4 grid-flow-col gap-4 h-72 text-black font-semibold cursor-pointer">
          <div
            className="col-span-2 row-span-2 rounded-[35px] bg-indigo-500 hover:shadow-indigo/20 
          transition-all hover:scale-95 hover:opacity-90 shadow-2xl"
          >
            <ClientCard sectionId="projects">
              <h1 className="text-4xl">⚡</h1>
              <h1 className="text-xl">Projects</h1>
            </ClientCard>
          </div>
          <div
            className="col-span-1 row-span-1 rounded-[35px] bg-teal-400 hover:shadow-teal/20 
          transition-all hover:scale-95 hover:opacity-90 shadow-2xl"
          >
            <ClientCard sectionId="contact">
              <h1 className="text-4xl">💻</h1>
              <h1 className="text-xl">Contact</h1>
            </ClientCard>
          </div>
          <div
            className="col-span-2 row-span-1 rounded-[35px] bg-green-400 hover:shadow-green/20 
          transition-all hover:scale-95 hover:opacity-90 shadow-2xl"
          >
            <ClientCard sectionId="blog">
              <h1 className="text-4xl">🧢</h1>
              <h1 className="text-xl">Blog</h1>
            </ClientCard>
          </div>
          <div
            className="col-span-1 row-span-1 rounded-[35px] bg-blue-500 hover:shadow-blue/20 
          transition-all hover:scale-95 hover:opacity-90 shadow-2xl"
          >
            <ClientCard sectionId="resume">
              <h1 className="text-4xl">👨‍💻</h1>
              <h1 className="text-xl">Resume</h1>
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
        <GridCard bgImage="github" colour="teal" title="Github" />
        <GridCard bgImage="linkedin" colour="teal" description="Guillermo Uzner" title="Linkedin" />
        <GridCard bgImage="mail" colour="teal" description="guillermouz16@gmail.com" title="Mail" />
      </Section>
      {/* Resume */}
      <Section emoji="👨‍💻" id="resume" title="Resume">
        <GridCard bgImage="resume" colour="blue" description="PDF" title="Resume" />
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
