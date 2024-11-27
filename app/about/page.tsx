import Navbar2 from "@/app/component/navbar2";
import Homes from "@/app/component/NotBar";
import Footer from "../component/footer";

export default function contact (){
    return(
        <div>
        <Homes/>
        <Navbar2/> 

        <div className="text-center bg-slate-300 my-4" >

        <div  className="text-6xl m-7 " >Schedule a Time to Talk! </div>
<div className="text-3xl" >We are based in Lagos, Nigeria and work remotely.
Call us to schedule a time to talk about your project.</div>

  <h1 className=" text-4xl " >Phone: +2348034548921</h1>
  <h1 className="text-3xl" >Email:ajeolu@gmail.com</h1>
        </div>


        <Footer/> 
        </div>
    )
}