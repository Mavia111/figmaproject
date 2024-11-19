import { Heading_1, Heading_2, Heading_3 } from "./components/Heading";
import { Para } from "./components/para";
export default function Home(){
  return(
      <div className="">
        {/* Section 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 p-[10px]  sm:p-[50px] lg:p-[100px]">
          <div className="col-span-2 ">
            <Heading_1 name="Hi, I am Jhon,"/>
            <Heading_1 name="Creative Technologist"/>
            <Para name="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>  
            <button className="bg-red-400 text-[#f1f6f6] p-2 mt-5">Download Resume</button>
          </div>
          <div className="mt-8 sm:mt-0">
          <img src="/img.png" alt="" className="rounded-full "  />
          </div>
        </div>
        {/* Section 2 */}
        <div className="bg-[#f4e2e2] py-5  p-5 p-[10px] sm:py-0 sm:p-[50px] lg:p-[100px]">
        <div className="flex justify-between">
        <div className="flex items-left">
          <Heading_3 name="Recent"/>
        </div>
        <div className="flex items-end">
          <span className="text-red-700">View all</span>
        </div>
        </div>
        <div className=" grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  gap-5">
          <div className="p-10 bg-white">
          <Heading_2 name="Making a design system from scratch"/>
          <div className="mb-5"><span className="text-slate-600">11-19-2024 | Design , Pattern</span></div>
          <Para name="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
          </div>
          <div className="p-10 bg-white">
          <Heading_2 name="Making a design system from scratch"/>
          <div className="mb-5"><span className="text-slate-600">11-19-2024 | Design , Pattern</span></div>
          <Para name="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
          </div>
        </div>
        </div>
        {/* Section 3 */}
        <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-3 p-[10px]  sm:p-[50px] lg:p-[100px]">
        <div className="py-8">
          <img src="/images/img2.png" alt="" className="w-80 "  />
          </div>
          <div className="col-span-2 py-8">
            <Heading_2 name="Designing Dashboards"/>
            <div className="mb-2 -mt-2"><span className="text-[#f1f6f6] bg-red-400 rounded-full p-1 px-3">2024</span><span className="text-slate-600 pl-6">Dashboard</span></div>
            <Para name="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
          </div>
          <div className="py-8">
          <img src="/images/img3.png" alt="" className="w-80 "  />
          </div>
          <div className="col-span-2 py-8">
            <Heading_2 name="Designing Dashboards"/>
            <div className="mb-2 -mt-2"><span className="text-[#f1f6f6] bg-red-400 rounded-full p-1 px-3">2024</span><span className="text-slate-600 pl-6">Dashboard</span></div>
            <Para name="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
          </div>
          <div className="py-8">
          <img src="/images/img4.png" alt="" className="w-80 "  />
          </div>
          <div className="col-span-2 py-8">
            <Heading_2 name="Designing Dashboards"/>
            <div className="mb-2 -mt-2"><span className="text-[#f1f6f6] bg-red-400 rounded-full p-1 px-3">2024</span><span className="text-slate-600 pl-6">Dashboard</span></div>
            <Para name="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
          </div>
          
        </div>
      </div>    
);}