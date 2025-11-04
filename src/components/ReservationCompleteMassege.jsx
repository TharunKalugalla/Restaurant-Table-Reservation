import { Bell, Calendar, Clock, Users, UtensilsCrossed } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import reservationCompleteImage from "@/assets/Reservation_complitation.png";

export default function ReservationCompleteMassege({ formData, bookingData }) {
  return (
    <div className="max-w-2xl mx-auto">
      {/*---------------------------------------------------- Header ---------------------------------------------------*/}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-6">
          Thank you For Choosing Us!
        </h1>

        {/*---------------------------------------------- Booking Details ------------------------------------------------*/}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-4 h-4" />
            <span>{bookingData.table || "Table"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{bookingData.date || "Date"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{bookingData.time || "Time"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{bookingData.people || "People"}</span>
          </div>
        </div>
      </div>

      {/*------------------------------------------------------- Food Image --------------------------------------------------*/}
      <div className="mb-8 items-center flex justify-center">
        <img
          src={reservationCompleteImage}
          alt="Raasa Restaurant Signature Dish"
          className="h-64 object-cover rounded-md"
        />
      </div>

      {/*----------------------------------------------------- Action Buttons -------------------------------------------------*/}
      <div className="flex flex-col gap-y-1 mb-8">
        <a href="/">
          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-md transition cursor-pointer">
            Home
          </Button>
        </a>
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition flex items-center justify-center gap-2 cursor-pointer">
          Notify Me
          <Bell className="w-4 h-4" />
        </Button>
      </div>

      {/*--------------------------------------------------------- Footer Text -------------------------------------------------*/}

    </div>
  );
}
