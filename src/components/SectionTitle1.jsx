// components/SectionTitle.js
const SectionTitle1 = ({ title, highlight }) => {
    return (
      <h2 className="my-6 text-3xl  md:text-5xl mx-10 font-bold text-center text-white dark:text-white">
        {title.replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
      .join(' ')} <span className="text-secondary">{highlight.replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
      .split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
      .join(' ')}</span>
      </h2>
    );
  };
  
  export default SectionTitle1;