import React from "react";

function FeaturesSection() {
  const features = [
    {
      icon: "💼", // Replace this with actual icon/image URL
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: "⚡", // Replace this with actual icon/image URL
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: "📊", // Replace this with actual icon/image URL
      title: "Manage your team with reports",
      description:
        "Measure what matters with our easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.",
    },
    {
      icon: "💬", // Replace this with actual icon/image URL
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email.",
    },
    {
      icon: "🔌", // Replace this with actual icon/image URL
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our developer tools.",
    },
    {
      icon: "👥", // Replace this with actual icon/image URL
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our team 24/7.",
    },
  ];

  return (
    <div className="p-10  ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6  ">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
