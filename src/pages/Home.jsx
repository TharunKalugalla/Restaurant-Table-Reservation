import React, { useRef } from "react";
import coverImage from "@/assets/banner_v2.png";
import Logo from "@/assets/rasa_logo.png";
import { MapPin, PhoneCall } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
// import MenuItem from "@/components/MenuItem";
import Reviews from "@/components/Review";
import ReservationForm from "@/components/ReservationForm";
import { FaWhatsapp } from "react-icons/fa";


export default function Home() {
  const photosRef = useRef(null);
  const menusRef = useRef(null);
  const reviewsRef = useRef(null);

  return (
    <div className="flex flex-col w-full mx-auto bg-white mt-4">
      {/*------------------------------------------------------ Banner ----------------------------------------------------------*/}
      <div className="rounded-lg flex w-full h-[400px] mx-auto my-auto">
        <img
          src={coverImage}
          alt="Restaurant floor plan"
          className="w-full object-cover h-full"
        />
      </div>

      {/*---------------------------------------------------------- Body Section ---------------------------------------------------*/}
      <div className="max-w-6xl w-full mx-auto mt-8 mb-10 px-4 xl:px-0 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10">

        {/*-------------------------------------------------------------------------------------------------------------------------
        ------------------------------------------------- Left: Scrollable Content -------------------------------------------------
        ----------------------------------------------------------------------------------------------------------------------------*/}
        <div className="order-2 md:order-1 flex flex-col min-w-0">
          <div className="mb-4">
            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <img src={Logo} alt="Raasa Restaurant Logo" className="w-40" />
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-2 font-[Inter]">
                  Raasa Restaurant
                </h1>
                <a
                  href="https://www.google.com/maps/place/Raasa,+Indian+Restaurant+Orpington/@51.3671924,0.0531388,18z/data=!4m15!1m8!3m7!1s0x47d8ab226e8085f5:0x15428845edfabaf8!2s366+Crofton+Rd,+Locksbottom,+Orpington+BR6+8NN,+UK!3b1!8m2!3d51.3671388!4d0.0543833!16s%2Fg%2F11b8txk39k!3m5!1s0x47d8ab226eaaf1b5:0x48f02f8156d732ef!8m2!3d51.3671388!4d0.0543833!16s%2Fg%2F11ydpg0w9r?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  <div className="flex items-center justify-center gap-2 text-sm  mb-6 font-[Poppins] text-[12px]">
                    <MapPin className="w-4 h-4" />
                    <span>366 Crofton Rd, Orpington BR6 8NN</span>
                  </div>
                </a>
                <div className="flex items-center justify-center gap-2 text-sm  mb-6 font-[Poppins] text-[12px]">
                  <PhoneCall className="w-4 h-4" />
                  <a href="tel:+44 016 8966 6990">
                    <span >+44 016 8966 6990</span>
                    </a>
                  <br />
                  <FaWhatsapp className="w-4 h-4" />
                  <a href="https://wa.me/+447448276771">
                    <span>+44 7448 276771</span>
                    </a>
                </div>

                {/* <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6 font-[Poppins] text-[12px]">
                  <PhoneCall className="w-4 h-4" />
                  <span>+44 016 8966 6990</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6 font-[Poppins] text-[12px]">
                  <FaWhatsapp className="w-4 h-4" />
                  <span>+44 7448 276771</span>
                </div> */}

              </div>
            </div>
          </div>

          {/*------------------------------------------------- Scrollable Sections ------------------------------------------------*/}
          <div className="mt-4 p-4 lg:p-0" ref={photosRef}>
            <PhotoGallery />
          </div>
          <div className="mt-8 p-4 lg:p-0" ref={menusRef}>
            {/* <MenuItem /> */}
          </div>
          <div className="mt-8 p-4 lg:p-0" ref={reviewsRef}>
            <Reviews />
          </div>
        </div>

        {/*------------------------------------------------------------------------------------------------------------------------
        ------------------------------------------------- Right: Sticky Reservation Form ------------------------------------------
        ---------------------------------------------------------------------------------------------------------------------------*/}
        <div className="order-1 md:order-2 h-fit md:sticky md:top-0 md:self-start">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}