"use client";

import {useCallback, useRef, useEffect} from "react";
import {useRouter} from "next/navigation";

import useOnClickOutside from "@/hooks/on-click-outside";

interface Props {
  children: React.ReactNode;
}

export function Modal({children}: Props) {
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  useOnClickOutside(wrapper, onDismiss);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div className="lg:mx-56 md:mx-20 flex justify-center items-center min-h-screen">
      <div ref={wrapper} className="">
        {children}
      </div>
    </div>
  );
}
