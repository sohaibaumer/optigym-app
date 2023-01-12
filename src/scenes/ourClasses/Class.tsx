import { useEffect, useState } from "react";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <li className="w-3/9 relative h-2/5">
      <div
        style={
          innerWidth > 1536
            ? { fontSize: "1vw" }
            : innerWidth > 1280
            ? { fontSize: "1.1vw" }
            : innerWidth > 1060
            ? { fontSize: "1.2vw" }
            : innerWidth > 768
            ? { fontSize: "1.8vw" }
            : innerWidth > 620
            ? { fontSize: "1.9vw" }
            : innerWidth > 480
            ? { fontSize: "2.3vw" }
            : { fontSize: "3vw" }
        }
        className="whitespace absolute z-30 flex h-full w-full flex-col items-center justify-center bg-primary-500 p-1 text-center text-white opacity-0 transition duration-500 hover:opacity-90 sm:p-2 md:p-3 xl:p-4 2xl:p-5"
      >
        <p className="p-1 font-bold sm:p-1.5 md:p-2">{name}</p>
        <p className="">{description}</p>
      </div>
      <img alt={`${image}`} src={image} className="w-[500px] min-w-[300px]" />
    </li>
  );
};

export default Class;
