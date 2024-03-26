const SearchModal = () => {
  return (
    <div>
      <div
        className={`${
          searchClicked ? "" : "hidden"
        } bg-[#0b0b0b2f] bg-opacity-60 backdrop-filter backdrop-blur-[4px] transition-opacity overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full mt-[4.5rem]`}
      ></div>
    </div>
  );
};

export default SearchModal;
