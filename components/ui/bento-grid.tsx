import { cn } from "@/lib/utils";
import Image from "next/image"; // Import Image from next/image

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-xl group/bento hover:shadow-xl transition duration-300 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 overflow-hidden min-h-[120px]",
        className
      )}
      style={{
        background:
          "linear-gradient(180deg, rgba(57,69,74,1) 0%, rgba(14,28,42,1) 72%)",
      }}
    >
      {/* Background Image */}
     

{img && (
  <div className="absolute top-0 left-0 w-full h-full">
    <Image
      src={img}
      alt="grid-background"
      layout="fill" // This ensures the image covers the area properly
      objectFit="cover" // Ensures the image maintains the correct aspect ratio and positioning
      className={cn(
        "object-cover object-center w-full h-full opacity-100 group-hover/bento:opacity-80 transition duration-300",
        imgClassName
      )}
    />
  </div>
)}


      {/* Spare Image (bottom right) */}
      {spareImg && (
        <div className="absolute bottom-2 right-2 rounded">
      <Image
  src={spareImg} // The image source
  alt="spare-img"
  width={80} // Set an explicit width
  height={64} // Set an explicit height
  className="opacity-50 rounded-lg"
/>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full">
        <h3
          className={cn(
            "text-white font-semibold text-lg mb-2",
            titleClassName
          )}
        >
          {title}
        </h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};
