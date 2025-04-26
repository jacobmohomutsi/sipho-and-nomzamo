// src/components/GiftRegistry.jsx
const GiftRegistry = () => {
  const categories = [
    {
      title: "Kitchen Essentials",
      items: [
        "High-Quality Knife Set",
        "Non-Stick Cookware Set (various sizes)",
        "Stainless Steel Mixing Bowl Set",
        "Non-stick Baking Sheet Set",
        "Measuring Cups and Spoons Set",
        "Colander",
        "Cutting Board (wooden or bamboo)",
        "Salt and Pepper Grinder Set",
        "Kitchen Towel Set",
        "Water Glasses (set of 8-12)",
        "Serving Platter",
        "Serving Bowl",
        "Can Opener",
        "Vegetable Peeler",
        "Spatula Set",
        "Tongs",
        "Coffee Maker",
        "Electric Kettle",
        "Grill Pan",
        "Utensils",
        "Coasters",
        "Tray"
      ]
    },
    {
      title: "Bed & Bath",
      items: [
        "High Thread Count Sheet Set (King/Queen - your size)",
        "Extra Pillowcases",
        "Comforter or Duvet Insert (King/Queen - your size)",
        "Duvet Cover Set",
        "Bath Towel Set (white)",
        "Lotion Dispenser",
        "Laundry Hamper"
      ]
    },
    {
      title: "Home Decor & Furniture",
      items: ["Picture Frames (various sizes)", "Vase", "Floor Lamp"]
    },
    {
      title: "Experiences & Miscellaneous",
      items: [
        "Gift voucher (Street Sheet, Mr Price and @home)",
        "Picnic Basket",
        "Board Games or Card Games",
        "Luggage Set",
        "Outdoor Blanket"
      ]
    },
    {
      title: "Upgrades & Investments",
      items: ["High-Quality Vacuum Cleaner", "Air Purifier"]
    }
  ];

  return (
    <section id="gift-registry" className="p-4 p-md-5">
      <div className="text-center mb-5">
        <h2 >Gift Registry</h2>
        <p className="mt-2 text-muted fs-5">
          Kindly purchase items preferably from <a className="text-alpha" href="https://www.sheetstreet.com/" target="_blank"><strong>Street Sheet</strong></a> or <a className="text-alpha" href="https://www.mrphome.com/home" target="_blank"><strong>Mr Price</strong></a> for convenience.
        </p>
      </div>

      <div className="container">
        {categories.map((category, index) => (
          <div key={index} className="mb-5">
            <h4 className="fw-bold text-start special-font text-alpha mb-3">{category.title}</h4>
            <div className="row">
              {category.items.map((item, idx) => (
                <div key={idx} className="col-12 col-md-4 mb-3">
                  <div className="d-flex align-items-start">
                    <span className="me-2">🎁</span>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftRegistry;
