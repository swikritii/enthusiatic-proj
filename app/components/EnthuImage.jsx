import Image from "next/image";

const EnthuImage = ({ src, alt }) => {
  return (
    <span className="w-6 h-6">
      <Image
        src={src}
        alt={alt}
        width="0"
        height="0"
        sx={{ width: "100%", height: "100%" }}
      />
    </span>
  );
};

export default EnthuImage;
