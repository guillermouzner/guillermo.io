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
    <div className="flex flex-col md:p-6 p-5 h-full justify-between" onClick={scrollToSection}>
      {children}
    </div>
  );
}
