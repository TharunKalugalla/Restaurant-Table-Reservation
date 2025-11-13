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
    const today = now.toISOString().split("T")[0];
    const currentTime = now.toTimeString().slice(0, 5);
    setMinDate(today);
    setMinTime(currentTime);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "table") {
      setFormData((prev) => ({
        ...prev,
        table: value,
        people: "",
      }));
    } else if (name === "date") {
      setFormData((prev) => ({ ...prev, date: value }));
      if (value !== minDate) {
        setMinTime("00:00");
      } else {
        const now = new Date();
        const currentTime = now.toTimeString().slice(0, 5);
        setMinTime(currentTime);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking", { state: formData });
  };

  // Determine allowed people options based on selected table
  const getAllowedPeople = () => {
    const { table } = formData;
    const tableNum = table.match(/\d+/) ? parseInt(table.match(/\d+/)[0]) : null;

    if (!tableNum) return [];

    const group2 = [1, 3, 6, 10, 11, 15];
    const group4 = [3, 4, 7, 8, 9, 12, 13, 14];
    const group6 = [2, 5];

    if (group2.includes(tableNum)) return ["1-2 People"];
    if (group4.includes(tableNum)) return ["1-4 People"];
    if (group6.includes(tableNum)) return ["1-6 People"];
    return [];
  };

  const allowedPeople = getAllowedPeople();

  return (
    <div className="flex flex-col mt-10">
      <div>
        <img className="border-2 p-2 rounded-2xl" src={map} alt="Map" />
      </div>

      <Card className="p-6 border bg-[#261911] border-[#F0A800] mt-4">
        <h3 className="text-lg font-serif font-bold text-[#ffffff] text-center mb-4">
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
                <UtensilsCrossed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#ffffff]" />
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
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#ffffff]" />
              </div>
            </div>

            {/* People */}
            <div>
              <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
                People Count
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#ffffff]" />
                <select
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  required
                  disabled={!formData.table}
                  className="w-full pl-10 pr-10 py-2 border rounded-md border-[#3D2C21] text-[#F0F0F0] bg-[#261911] text-sm appearance-none"
                >
                  <option value="">
                    {formData.table
                      ? "Select people count"
                      : "Select table first"}
                  </option>
                  {allowedPeople.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#ffffff]" />
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                onFocus={(e) =>
                  e.target.showPicker && e.target.showPicker()
                } // ensures picker opens
                required
                min={minDate}
                className="w-full px-3 py-2 border rounded-md border-[#3D2C21] text-[#F0F0F0] bg-[#261911] text-sm"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                onFocus={(e) =>
                  e.target.showPicker && e.target.showPicker()
                } // ensures picker opens
                required
                min={minTime}
                className="w-full px-3 py-2 border rounded-md border-[#3D2C21] text-[#F0F0F0] bg-[#261911] text-sm"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#F0A800] hover:bg-amber-600 text-[#ffffff] font-semibold py-2 rounded-md transition cursor-pointer"
          >
            Book Now
          </Button>
        </form>
      </Card>

      {/* Inline CSS for white picker icons */}
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 1;
        }
        input[type="date"],
        input[type="time"] {
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
}
