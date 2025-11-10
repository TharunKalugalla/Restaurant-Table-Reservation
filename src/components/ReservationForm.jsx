import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import map from "@/assets/table2.png";
import { Users, UtensilsCrossed, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ReservationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    table: "",
    people: "",
    date: "",
    time: "",
  });

  const [minDate, setMinDate] = useState("");
  const [minTime, setMinTime] = useState("");

  useEffect(() => {
    const now = new Date();

    // Get YYYY-MM-DD format
    const today = now.toISOString().split("T")[0];

    // Get HH:MM format (24-hour)
    const currentTime = now.toTimeString().slice(0, 5);

    setMinDate(today);
    setMinTime(currentTime);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If user changes date, adjust time restriction
    if (name === "date") {
      if (value !== minDate) {
        // Future date → allow any time
        setMinTime("00:00");
      } else {
        // Today → restrict past times
        const now = new Date();
        const currentTime = now.toTimeString().slice(0, 5);
        setMinTime(currentTime);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking", { state: formData });
  };

  return (
    <div className="flex flex-col mt-10">
      <div>
        <img className="border-2 p-2 rounded-2xl" src={map} alt="Map" />
      </div>

      <Card className="p-6 border bg-[#261911] border-[#F0A800] mt-4">
        <h3 className="text-lg font-serif font-bold text-[#ffff] text-center">
          Make a reservation
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Table and People */}
          <div className="grid grid-cols-2 gap-4">
            {/* Table */}
            <div>
              <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
                Table Number
              </label>
              <div className="relative">
                <UtensilsCrossed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#F0F0F0]" />
                <select
                  name="table"
                  value={formData.table}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-10 py-2 border border-[#3D2C21] text-[#F0F0F0] bg-[#261911] rounded-md text-sm appearance-none"
                >
                  <option value="">Select a table</option>
                  {[...Array(15)].map((_, i) => (
                    <option key={i} value={`PS Table ${i + 1}`}>
                      PS Table {i + 1}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#F0F0F0]" />
              </div>
            </div>

            {/* People */}
            <div>
              <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
                Peoples Count
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#F0F0F0]" />
                <select
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-10 py-2 border rounded-md border-[#3D2C21] text-[#F0F0F0] bg-[#261911] text-sm appearance-none"
                >
                  <option value="">Select people count</option>
                  <option value="2-2 People">2-2 People</option>
                  <option value="4-4 People">4-4 People</option>
                  <option value="6-6 People">6-6 People</option>
                  <option value="6+ People">6+ People</option>
                  <option value="10+ People">10+ People</option>
                  <option value="20+ People">20+ People</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={minDate}
                className="w-full px-3 py-2 border rounded-md border-[#3D2C21] text-[#F0F0F0] bg-[#261911] text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
                Time 
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                min={minTime}
                className="w-full px-3 py-2 border rounded-md border-[#3D2C21] text-[#F0F0F0] bg-[#261911] text-sm"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#F0A800] hover:bg-amber-600 text-[#F0F0F0] font-semibold py-2 rounded-md transition cursor-pointer"
          >
            Book Now
          </Button>
        </form>
      </Card>
    </div>
  );
}
