interface Props {
  id: string;
  emoji: string;
  title: string;
  children: React.ReactNode;
}

export function Section({id, emoji, title, children}: Props) {
  return (
    <section
      className="min-h-screen flex flex-col lg:px-48 md:px-20 px-10 gap-10 py-10 text-white"
      id={id}
    >
      <div className="text-3xl md:text-4xl flex flex-col gap-4 font-bold">
        <h1>{emoji}</h1>
        <h1>{title}</h1>
        <hr />
      </div>
      <div className="grid grid-cols-1 gap-5">{children}</div>
    </section>
  );
}
