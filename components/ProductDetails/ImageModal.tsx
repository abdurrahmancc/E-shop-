import Image from "next/image";
import React from "react";
type Props = {
  images: any;
  selectImage: number;
};
const ImageModal = ({ images, selectImage }: Props) => {
  return (
    <div>
      <input type="checkbox" id="zoom-image-modal" className="modal-toggle" />
      <label htmlFor="zoom-image-modal" className="modal bg-[rgba(0,0,0,0.6)]  cursor-pointer">
        <label
          className="xl:h-[600px] lg:h-[500px] lg:max-w-[500px] xl:max-w-[600px] md:max-w-[500px] sm:max-w-[400px] max-w-[300px] w-full bg-none relative"
          htmlFor=""
        >
          <div className="relative mx-auto">
            <div className="w-full h-full">
              <figure>
                {images && (
                  <Image src={images[selectImage]} height={600} width={600} alt="product image" />
                )}
              </figure>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default ImageModal;
