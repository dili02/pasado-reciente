import React from "react";

// type Props = {
//   children: React.ReactNode;
// };

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function SectionTitle({ children, ...props }: Props) {
  return (
    <h2
      className="uppercase text-orange-500 text-center flex justify-center items-center gap-1 font-extrabold text-2xl lg:text-xl sm:items-center xl:text-2xl 2xl:text-3xl"
      {...props}
    >
      {children}
    </h2>
  );
}
