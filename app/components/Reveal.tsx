"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
};

// Оборачивает контент и плавно проявляет его, когда он попадает во вьюпорт.
// Повторяет поведение класса .reveal из исходного сайта, но по-реактовски.
export default function Reveal({ children, as, delay = 0, className = "", id, style }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? ` delay-${delay}` : "";
  const classes = `reveal${delayClass}${visible ? " visible" : ""}${className ? ` ${className}` : ""}`;

  return (
    <Tag ref={ref} id={id} className={classes} style={style}>
      {children}
    </Tag>
  );
}
