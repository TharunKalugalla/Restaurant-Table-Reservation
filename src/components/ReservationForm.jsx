import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import map from "@/assets/map.png";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to /booking with state
    navigate("/booking", { state: formData });
  };

  return (
    <div className="flex flex-col mt-10">
      <div>
        <img src={map} alt="Map" />
      </div>

      <Card className="p-6 border border-border mt-4">
        <h3 className="text-lg font-serif font-bold text-foreground text-center">
          Make a reservation
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Table */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Table Number
              </label>
              <div className="relative">
                <UtensilsCrossed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground pointer-events-none" />
                <select
                  name="table"
                  value={formData.table}
                  required
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2 border border-border rounded-md bg-background text-foreground text-sm appearance-none"
                >
                  <option value="">Select a table</option>
                  <option value="PS Table 1">PS Table 1</option>
                  <option value="PS Table 2">PS Table 2</option>
                  <option value="PS Table 3">PS Table 3</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* People */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Peoples Count
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground pointer-events-none" />
                <select
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-10 py-2 border border-border rounded-md bg-background text-foreground text-sm appearance-none"
                >
                  <option value="">Select people count</option>
                  <option value="2-2 People">2-2 People</option>
                  <option value="4-4 People">4-4 People</option>
                  <option value="6-6 People">6-6 People</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                placeholder="Select date"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                placeholder="Select time"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-md transition cursor-pointer"
          >
            Book Now
          </Button>
        </form>
      </Card>
    </div>
  );
}
