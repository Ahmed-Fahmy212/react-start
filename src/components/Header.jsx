import { brainwave } from "../assets";
import { navigation } from "../constants";
// import useState from 'react'
function Header() {
  //   const [openNavigation] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm         `}
    >
      <div className="flex items-center px-5 lg:px-7.5 max-lg:py-4 xl:px-10">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="BrainWave" />
        </a>


         {/* /* ----------------------------- why this fixed ----------------------------- */ }
        <nav className=" fixed top[5-rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
           {/* -------------------------------- mid words ------------------------------- */ }
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((elem) => (
              <a
                key={elem.id}
                href={elem.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  elem.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold `}
              >
                {elem.title}
              </a>
            ))}
          </div>
        </nav>
         

         
        {/* want add the bottom here  */}
      </div>
    </div>
  );
}

export default Header;
