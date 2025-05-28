import Image from "next/image";

import EmptyImage from "@images/empty-links.png";

export default function EmptyLinks() {
  return (
    <div className="w-full h-[600px] flex justify-center items-center">
      <Image
        alt="empty-links"
        className="h-auto"
        height={30}
        src={EmptyImage}
        width={280}
      />
    </div>
  );
}
