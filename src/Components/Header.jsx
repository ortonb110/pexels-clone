import NavBar from "./NavBar";
import SearchComponent from "./SearchComponent";

export const Header = () => {
  return (
    <header className="bg-[url('https://images.pexels.com/photos/18267830/pexels-photo-18267830/free-photo-of-close-up-of-red-roses-with-water-drops-on-the-petals.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[56.4vh] bg-no-repeat bg-cover bg-left bg-black bg-blend-overlay bg-opacity-[0.6]">
      <NavBar
        borderBottom={false}
        textColor={"text-white"}
        backgroundColor={"transparent"}
      />
      <section className="flex flex-col justify-center items-center text-white gap-9 mt-[7rem] px-[2rem] md:px-0">
        <h1 className="text-[3.2rem] font-[600] w-full md:w-[63rem]">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </h1>
        <SearchComponent formWidth={true} />
      </section>
    </header>
  );
};
