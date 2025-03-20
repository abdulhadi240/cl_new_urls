// components/SectionTitle.js
const SectionTitle = ({ title, highlight }) => {
  return (
    <div className="max-w-3xl flex justify-center mx-auto">
    <h2 className="my-6 text-3xl md:text-4xl mx-2 md:mx-32 font-bold text-center text-primary">
      {title} <span className="text-[#a9becc]">{highlight}</span>
    </h2>
    </div>
  );
};

export default SectionTitle;