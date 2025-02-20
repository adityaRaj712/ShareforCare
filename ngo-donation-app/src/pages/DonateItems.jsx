import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const itemsList = [
  { id: 1, name: "Rice", unit: "kg" },
  { id: 2, name: "Wheat Flour", unit: "kg" },
  { id: 3, name: "Milk Powder", unit: "pack" },
  { id: 4, name: "Blankets", unit: "pcs" },
  { id: 5, name: "Clothes", unit: "sets" },
  { id: 6, name: "Medicines", unit: "kits" },
  { id: 7, name: "Toys", unit: "pcs" },
  { id: 8, name: "Books", unit: "pcs" },
  { id: 9, name: "Stationeries (Pens, Notebooks)", unit: "sets" },
];

const DonateItems = () => {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedItems, setSelectedItems] = useState({});
  const [visitDate, setVisitDate] = useState("");
  const [partyWithThem, setPartyWithThem] = useState(false);
  const [partyDetails, setPartyDetails] = useState("");

  // Handle quantity change
  const handleQuantityChange = (itemId, quantity) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: quantity > 0 ? quantity : "",
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!name || !email) {
      alert("Please enter your name and email!");
      return;
    }

    if (!visitDate) {
      alert("Please select a visit date!");
      return;
    }

    const selected = Object.entries(selectedItems)
      .filter(([_, quantity]) => quantity > 0)
      .map(([id, quantity]) => ({
        name: itemsList.find((item) => item.id === parseInt(id)).name,
        quantity,
      }));

    if (selected.length === 0 && !partyWithThem) {
      alert("Please select at least one item or opt for a party!");
      return;
    }

    const donationData = {
      name,
      email,
      visitDate,
      partyWithThem,
      partyDetails,
      selectedItems: selected,
    };

    try {
      const response = await fetch("http://localhost:3000/submit-donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        alert("Donation recorded successfully!");
        navigate("/thank-you");
      } else {
        throw new Error("Failed to record donation");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen flex flex-col items-center p-6`}>
      <h2 className="text-3xl font-semibold mb-6">Donate Items</h2>
      <p className="mb-4">Select items and choose a visit date to donate.</p>

      <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white"} p-6 rounded-lg shadow-md w-full max-w-md`}>
        {/* Name & Email Fields */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded-md mb-2 dark:text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded-md mb-4 dark:text-black"
        />

        {itemsList.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <span>{item.name} ({item.unit})</span>
            <input
              type="number"
              min="0"
              value={selectedItems[item.id] || ""}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              className="border p-2 w-20 text-center rounded-md dark:text-black"
            />
          </div>
        ))}

        {/* Party with Them Section */}
        <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={partyWithThem}
              onChange={() => setPartyWithThem(!partyWithThem)}
              className="mr-2"
            />
            <span>Organize a Party on a Special Occasion 🎉</span>
          </label>
          {partyWithThem && (
            <textarea
              placeholder="Enter event details (e.g., Birthday, Festival Celebration)"
              value={partyDetails}
              onChange={(e) => setPartyDetails(e.target.value)}
              className="border p-2 w-full rounded-md mt-2"
            />
          )}
        </div>

        {/* Visit Date Selection */}
        <div className="mt-4">
          <label>Choose Visit Date:</label>
          <input
            type="date"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
            className="border p-2 w-full rounded-md mt-2 dark:text-black"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Confirm Donation
        </button>
      </div>
    </div>
  );
};

export default DonateItems;
