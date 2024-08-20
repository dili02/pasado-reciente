import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export function Title({ children, ...props }: HeadingProps) {
  return (
    <h1
      // uppercase text-5xl text-primary font-extrabold
      // font-extrabold uppercase text-3xl md:text-5xl xl:text-5xl py-2 text-center text-primary
      className="uppercase text-5xl text-primary font-extrabold text-center"
      {...props}
    >
      {children}
    </h1>
  );
}

export function SubTitle({ children, ...props }: HeadingProps) {
  return (
    <h2
      className="font-extrabold uppercase text-2xl md:text-3xl xl:text-4xl py-2 text-center"
      {...props}
    >
      {children}
    </h2>
  );
}

interface TitleDateProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export function TitleDate({ children, ...props }: TitleDateProps) {
  return (
    <p
      className="text-primary-foreground text-center font-bold text-2xl"
      {...props}
    >
      {children}
    </p>
  );
}

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <p className="text-lg" {...props}>
      {children}
    </p>
  );
}
