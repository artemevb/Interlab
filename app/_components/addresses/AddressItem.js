import callIcon from "@/public/svg/call-icon-red.svg";
import Image from "next/image";
import arrowRight from "@/public/svg/arrow-right-gray.svg"

export default function AddressItem({
  key,
  title,
  address,
  graphic,
  tel,
  url,
}) {
  return (
    <div
      key={key}
      className="p-4 border rounded-2xl shadow-lg flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-rose-400 font-bold">{title}</h3>
        <p className="font-medium">{address}</p>
        <div className="flex flex-col ">
          {graphic.map((item, index) => {
            return (
              <p className="text-neutral-400" key={index}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <hr />
        <div className="w-full flex justify-between flex-wrap">
          <div className="flex gap-3">
            <Image
             src={callIcon}
             width={100}
             height={100}
             alt="Call icon red"
             className="h-6 w-6"
            />
            <a href={`tel:${tel}`} className="text-lg font-bold text-rose-400">
              {tel}
            </a>
          </div>
          <a href={url} className="flex gap-3 items-center">
             <p className="text-neutral-400">Подробнее</p>
             <Image
             src={arrowRight}
             width={100}
             height={100}
             alt="Arrow right icon gray"
             className="h-3 w-3"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
