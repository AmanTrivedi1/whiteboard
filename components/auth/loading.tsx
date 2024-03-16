import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full  flex flex-col justify-center items-center">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={60}
        height={60}
        className="animate-pulse  bg-black/5 p-2  duration-700"
      />
    </div>
  );
};