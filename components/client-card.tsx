"use client";
interface Props {
  sectionId: string;
  children: React.ReactNode;
}

export function ClientCard({sectionId, children}: Props) {
  function scrollToSection() {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  }

  return (
    <div className="flex flex-col p-6 h-full justify-between" onClick={scrollToSection}>
      {children}
    </div>
  );
}
