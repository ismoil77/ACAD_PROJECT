import { Link, Outlet } from "react-router-dom";
import acadLogo from "/src/assets/LogoACAD.svg";
const Layout = () => {
  return (
    <>
      <div>
        <div className="bg-black flex h-[60px] items-center px-[30px] text-white font-sans">
          <div className="border-r-2 pr-[30px] h-[90%] flex items-center">
            <img src={acadLogo}  alt="" />
          </div>
          <div className="mx-[20px]">
             <div className="font-[300] text-[18px] flex gap-[15px]">
            <p>889-889-889</p>
            <p>Компания </p> 
            <p>Производство</p>
            <p>Помощь</p>
          </div>
          </div>
         
          <div className=""></div>
        </div>

        {/* <div className="">
          <ul className="flex gap-10 justify-center">
            <li>
              <Link to={"/"}> Home</Link>
            </li>
            <li>
              <Link to={"/Products"}> Products</Link>
            </li>
          </ul>
          <Outlet />
        </div> */}
      </div>
    </>
  );
};

export default Layout;
