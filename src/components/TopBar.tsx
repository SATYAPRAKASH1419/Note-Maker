import { AlignJustify, X } from "lucide-react";
import { HiddenBar } from "./HiddenBar";


interface topBarParam{
  hamburgerClicked: boolean;
  setHamburgerClicked: (value: boolean) => void;
  
}
export const TopBar = ({hamburgerClicked,setHamburgerClicked}:topBarParam) => {
  const token = localStorage.getItem("token");
  
  const user = token ? JSON.parse(token).user : { fullName: "?" };
  const HiddenBarHandler =()=>{
    setHamburgerClicked(!hamburgerClicked)
    return(
      <HiddenBar/>
    )
  }
  return (
    <div className="bg-blue-500 h-14 flex items-center justify-between   ">
      <div className="flex justify-between gap-15 lg:gap-40 items-center">
        <div onClick={HiddenBarHandler} className="w-4 h-4 cursor-pointer m-2">
          {hamburgerClicked ?<X/> :<AlignJustify />}
        </div>
        <div className="text-2xl font-bold">Note maker</div>
      </div>

      <div className="bg-white h-8 w-8 m-3 rounded-full">
        {token ? (
          <div className="flex justify-center items-center text-[18px] pt-0.5">
            {user.fullName?.[0]?.toUpperCase() || "?"}
          </div>
        ) : (
          <div>Login</div>
        )}
      </div>
    </div>
  );
};
