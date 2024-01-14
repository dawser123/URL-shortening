const SummaryCard = ({ title, img, text, classname, }) => {
  return (
    <div className={`lg:items-start relative flex ] flex-col items-center justify-center rounded-md bg-white px-5 py-4 lg:w-72 lg:max-w-64 w-60 ${classname} `}>
      <img
        className="bg-veryDarkBlue lg:left-8 absolute -top-10 rounded-full p-4"
        src={img}
      />
      <h3 className="pt-10 text-lg font-bold  text-black">{title}</h3>
      <p className="text-grayishViolet lg:text-left py-5 text-center">{text}</p>
     
    </div>
  );
};

export default SummaryCard;
