import React, { useRef, useState } from "react";
import coverImage from "@/assets/banner.png";
import Logo from "@/assets/rasa_logo.png";
import { MapPin } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import MenuItem from "@/components/MenuItem";
import Reviews from "@/components/Review";
import ReservationForm from "@/components/ReservationForm";

export default function Home() {
  const [activeTab, setActiveTab] = useState("photos");
  const photosRef = useRef(null);
  const menusRef = useRef(null);
  const reviewsRef = useRef(null);

  const handleScrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full mx-auto bg-white mt-4">
      {/*------------------------------------------------------ Banner ----------------------------------------------------------*/}
      <div className="rounded-lg flex w-fit mx-auto my-auto">
        <img
          src={coverImage}
          alt="Restaurant floor plan"
          className="w-full object-cover"
        />
      </div>

      {/*---------------------------------------------------------- Body Section ---------------------------------------------------*/}
      <div className="max-w-6xl w-full mx-auto mt-8 mb-10 px-4 xl:px-0 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10">
        
        {/*-------------------------------------------------------------------------------------------------------------------------
        ------------------------------------------------- Left: Scrollable Content -------------------------------------------------
        ----------------------------------------------------------------------------------------------------------------------------*/}
        <div className="order-2 md:order-1 flex flex-col min-w-0">
          <div className="mb-4">
            <img src={Logo} alt="Raasa Restaurant Logo" className="w-40 mb-2" />
            <h1 className="text-4xl font-bold text-foreground mb-2 font-[Inter]">
              Raasa Restaurant
            </h1>
            <p className="text-muted-foreground mb-4 font-[Poppins] text-[14px]">
              Best Indian Cuisine restaurant in London
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-[Poppins] text-[12px]">
              <MapPin className="w-4 h-4" />
              <span>366 Crofton Rd, Orpington BR6 8NN</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-border sticky top-0 bg-white pt-4 z-20">
              <button
                className={`pb-3 font-medium transition-all ${
                  activeTab === "photos"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
                }`}
                onClick={() => {
                  setActiveTab("photos");
                  handleScrollTo(photosRef);
                }}
              >
                Photos
              </button>
              <button
                className={`pb-3 font-medium transition-all ${
                  activeTab === "menus"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
                }`}
                onClick={() => {
                  setActiveTab("menus");
                  handleScrollTo(menusRef);
                }}
              >
                Menus
              </button>
              <button
                className={`pb-3 font-medium transition-all ${
                  activeTab === "reviews"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
                }`}
                onClick={() => {
                  setActiveTab("reviews");
                  handleScrollTo(reviewsRef);
                }}
              >
                Reviews
              </button>
            </div>
          </div>

          {/*------------------------------------------------- Scrollable Sections ------------------------------------------------*/}
          <div className="mt-4 p-4 lg:p-0" ref={photosRef}>
            <PhotoGallery />
          </div>
          <div className="mt-8 p-4 lg:p-0" ref={menusRef}>
            <MenuItem />
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