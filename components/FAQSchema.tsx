const faqData = [
  {
    question: "How much can I save with solar panels?",
    answer: "Most homeowners save 70-90% on their electricity bills. The exact savings depend on your energy usage, roof size, and local utility rates. Our experts provide detailed savings calculations during consultation.",
  },
  {
    question: "What's the installation timeline?",
    answer: "Typical installation takes 1-3 days for residential systems. The entire process from consultation to activation usually takes 6-12 weeks, including permits and utility interconnection.",
  },
  {
    question: "Do solar panels work in cloudy weather?",
    answer: "Yes, solar panels still generate electricity on cloudy days, though at reduced capacity. Modern panels are efficient even in diffused sunlight and can produce 10-25% of their peak output on overcast days.",
  },
  {
    question: "What warranties do you provide?",
    answer: "We offer comprehensive warranties: 25-year manufacturer warranty on panels, 10-year warranty on inverters, and 10-year workmanship warranty on installation. Extended warranties are also available.",
  },
  {
    question: "How do I maintain my solar system?",
    answer: "Solar systems require minimal maintenance. Regular cleaning and annual inspections are recommended. Our maintenance packages include cleaning, performance monitoring, and preventive maintenance services.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
