import img1 from "../assets/Vector.png";
import arrow from "../assets/Group 28.png";
import { useRef, useState } from "react";
import { galleryData } from "../data/gallery.js";

const Gallery = () => {
  const [images, setImages] = useState(galleryData);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const srcUrl = URL.createObjectURL(file);
    const newImage = {
      id: 5,
      img: srcUrl,
    };
    setImages([newImage, ...images]);
    setSelectedImage(file);
  };

  return (
    <div className="flex w-full items-stretch h-full justify-between p-10 bg-[#363C43] rounded-[19px] shadow-[5px_5px_8px_3px_rgba(0,0,0,0.21)]">
      <div className="min-h-full hidden sm:flex flex-col justify-between">
        <img src={img1} alt="" />
        <div className="flex flex-wrap w-8 gap-[2px]">
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
        </div>
        <div className="size-8"></div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex justify-between items-center w-full p-5 flex-wrap gap-5">
          <span className="w-full sm:w-[149px] h-[62px] text-[19px] font-semibold grid place-content-center bg-black rounded-[19px]">
            Gallery
          </span>
          <div className="flex gap-10 flex-wrap sm:justify-start justify-center">
            <button
              className="box-shadow px-5 py-3 rounded-[19px]"
              onClick={() => fileInputRef.current.click()}>
              + ADD IMAGE
            </button>
            <input
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
            />
            <div className="flex gap-10 flex-wrap">
              <button className="oval-shadow rounded-full p-4 bg-[#16171890]">
                <img src={arrow} alt="" />
              </button>
              <button className="oval-shadow rounded-full p-4 bg-[#16171890]">
                <img src={arrow} alt="" className="rotate-180" />
              </button>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="flex gap-[50px] flex-col items-center md:flex-row md:overflow-x-auto hide-scrollbar max-w-[720px]">
            {images.map((image) => (
              <img
                src={image.img}
                alt=""
                key={image.id}
                className="h-[180px] rounded-[30px]"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[64px] w-2"></div>
    </div>
  );
};
export default Gallery;
