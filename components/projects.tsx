import {GridCard} from "./grid-card";

export function Projects() {
  return (
    <section className="min-h-screen flex flex-col px-48 gap-10 py-10" id="projects">
      <div className="text-4xl flex flex-col gap-4 font-bold">
        <h1>⚡</h1>
        <h1>Projects</h1>
        <hr />
      </div>
      <div className="grid grid-cols-1 gap-5">
        <GridCard colour="indigo" description="All in one" title="Titulo" />
        <GridCard colour="indigo" description="interview algorithms" title="Titulo" />
      </div>
    </section>
  );
}

/*
bg-teal-400 rounded-[60px] p-10 flex flex-col-reverse transition-all col-span-2 row-span-2 bg-[url('https://cdn-icons-png.flaticon.com/512/25/25231.png')] bg-contain  shadow-xl transition-all hover:scale-95 bg-brightness-50 text-black  cursor-pointer bg-blend-soft-light w-[100%]
*/
