 const filterData = [
    {
      id: "role",
      type: "Role",
      menus: [
        { id: "se-sde", text: "SE/SDE" },
        { id: "ds-ai-ml", text: "DS/AI/ML" },
        { id: "product-management", text: "Product Management" },
        { id: "project-management", text: "Project Management" },
        { id: "consulting", text: "Consulting" },
        { id: "quantitative-finance", text: "Quantitative Finance" }
      ],
    },
    {
      id: "company",
      type: "Company",
      menus: [
        { id: "faang", text: "FAANG" },
        { id: "startups", text: "Startups" },
        { id: "mncs", text: "MNC’s" },
        { id: "others", text: "Others" }
      ],
    },
    {
      id: "slot",
      type: "Slot",
      menus: [
        { id: "this-week", text: "This week" },
        { id: "next-week", text: "Next week" },
        { id: "anytime", text: "Anytime" }
      ],
    },
    {
      id: "rating",
      type: "Rating",
      menus: [
        { id: "low-to-high", text: "Low to high" },
        { id: "high-to-low", text: "High to low" }
      ],
    },
  ];

export {filterData}