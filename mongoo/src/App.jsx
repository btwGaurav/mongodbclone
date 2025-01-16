import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="content w-screen ">
      <div className="tophead flex justify-center text-[8px] gap-4 p-2">
        <span className='bg-[#b1ff08] rounded-[20px] pt-02 py-2 px-2   font-bold grid align-middle'>A N N O U N C E M NE T S  </span>
        <div className=" text-[13px] text-white">Introducing MongoDB 8.0, the fastest MongoDB ever! Read More >> </div>
        
      </div>
      <div className="newwhite pb-7 pt-10 flex gap-12 font-semibold bg-[#ffffff]">
        <a href="" className='text-2xl ml-[75px]'>MongoDB</a>
        <a href="" className=''>Products</a>
        <a href="" className='ml-8'>Resources</a>
        <a href="" className='ml-8'>Solution</a>
        <a href="" className='ml-8'>Company</a>
        <a href="" className='ml-8'>pricing</a>
        <a href="" className='ml-28'>search</a>
        <a href="" className='ml'>Eng</a>
        <a href="" className='ml-'>support</a>
        <a href="" className='ml-'>Sign in</a>
        <a href="" className='mt-[-10px] px-8 p-3 try text-[18px]  bg-[#01ed64] font-semibold border-2 border-solid border-black rounded'>Try Free</a>
      </div>
      <div className="main  bg-[#011e2b] pt-[120px] text-center text-white">
        <div className=" text-xl tracking-widest mb-[34px] mr-4"><span className='mt-[-5px] text-[#01ed64]'> | </span>  Tools</div>
        <div className=" text-[110px] tracking-wider copmpass"> <span className='text-[#01ed64]'> Compass.</span>  The  GUI for<br></br> </div><div className=' text-[105px] tracking-wider copmpass mt-[-45px]'>MongoDB.</div>
        <p className="free tracking-wide text-[22px] text-[#b6c2c1] mt-6">Compass is a free interactive tool for querying, optimizing, and <br />
           analyzing your MongoDB data. Get key insights, drag and drop to  <br />
            build pipelines, and more.</p>
        <div className="down flex text-xl font-serfie mt-[55px] justify-center mr-[110px] gap-[40px]" >
          <button className='load text-[#011e2b] font-semibold py-4 px-6 rounded bg-[#01ed64] mt-[-20px]'>Download Now</button> <div className="">Read the docs</div></div>
          <div className="flex pl-[185px] pb-[124px] pt-[120px] ">
            <img className='w-[600px]' src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/blt5b387e6afdd329fb/655cedcc36b54587cdcd5425/compass-search.svg" alt="" />
            <div className="textb text-[22px] mt-[-10px] ml-[150px] text-[#b7c3c1] font-semibold grid place-content-center"> Easily work with your data in Compass, the  <br /> GUI built by — and for — MongoDB. Compass <br /> provides everything from schema analysis to<br />  index optimization to aggregation pipelines <br /> in a single, centralized interface.
              <br /> <span className='mt-[35px] list-disc text'><li>Compass is free to download and use</li></span>
             
              <br />
              <span className='list-disc text' ><li>Available on Linux, Mac, and Windows</li></span>
            </div>
          </div>

      </div>
      <div className="main2 p-[100px]">

      </div>


     </div>
     
    </>
  )
}

export default App
