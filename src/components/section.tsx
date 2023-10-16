import { ReactNode } from "react";

interface Props {
    background?: boolean;
    children: ReactNode;
}

const Section = ({ children, background }: Props) => {
  return (
    <>
      <div className={`section${background ? ' bg' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default Section;
