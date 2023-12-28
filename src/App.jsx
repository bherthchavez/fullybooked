import book from '../src/assets/book.webp'
import fb from '../src/assets/fb.jpg'
import { FaGlobeAsia } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
function App() {
  return (
    <>
      {/* <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
        <div className="hidden sm:block content text-3xl text-center md:text-left">
          <h1 className="text-5xl text-blue-500 font-bold">Facebook</h1>
          <p>Connect with friends and the world around you on Facebook.</p>
        </div>
        <div className="container mx-auto flex gap-5 flex-col items-center">
          <div className=" flex-col sm:hidden content text-3xl text-center md:text-left">
            <h1 className="text-5xl text-[#1877f2] font-bold">facebook</h1>
            <p className="text-lg">Connect with friends and the world around you on Facebook.</p>
          </div>
          <form className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
            <input type="text" placeholder="Email or Phone Number" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
            <input type="password" placeholder="Pasword" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
            <button className="w-full bg-[#1877f2] text-white p-3 rounded-lg font-semibold text-lg">Login</button>
            <a className="text-blue-400 text-center my-2">Forgot Pasword?</a>
            <hr />
            <button className="w-full bg-green-600 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Create New Account</button>
          </form>
          <p className="text-center text-sm my-4">
            <span className="font-semibold text-center w-full">Create a Page</span> for a celebrity, band or business
          </p>
        </div>
      </div> */}

      <div className="bg-white fixed flex justify-between shadow px-4 items-center top-0 w-screen h-14 text-blue-700">
        <h1 className="text-3xl text-blue-600 font-bold">facebook</h1>
        <div className="flex gap-2 mr-2">
          <input type="text" placeholder="Email or phone"
            className="hidden sm:flex py-2 px-2 border border-gray-300 text-gray-900 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
          <input type="Password" placeholder="Password"
            className="hidden sm:flex py-2 px-2 border border-gray-300 text-gray-900 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
          <button className=" bg-blue-600  text-white px-3 py-2 rounded-lg font-semibold text-md">
            Log In</button>
          <a className="text-blue-600 text-center items-center text-md hidden sm:flex">Forgot Pasword?</a>
        </div>
      </div>
      <div className="flex  w-screen h-screen">
        <div className="bg-black h-screen w-[75rem] flex justify-center items-center">
          <img
            src={book}
            alt="Book"
            className="object-cover"
          />
        </div>
        <div className='mt-20 mx-5 w-[19rem] hidden sm:block'>
          <div className='flex gap-2 justify-between items-center'>
            <div className='flex gap-2'>
              <img
                src={fb}
                alt="FB"
                className="rounded-full w-12 border-2 border-blue-600 object-cover"
              />
              <div>
                <h1 className='font-semibold '>Fully Booked</h1>
                <div className='flex gap-2 items-center'>
                  <p className='text-sm text-gray-400'>4h</p>
                  <FaGlobeAsia className='text-gray-500 text-sm' />
                </div>
              </div>
            </div>

            <div>
              <SlOptions className='text-gray-500' />
            </div>

          </div>

        </div>

      </div>

      <div className={`fixed z-50 inset-0 overflow-y-auto h-screen block`}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center  ">

          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-black/60  sm:bg-white/70"></div>
          </div>

          <form
            className="p-5 sm:p-9  flex-col bg-white  inline-block  rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle w-[20rem]  sm:w-[30rem] sm:max-w-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >

            
              <div className="container mx-auto flex gap-3 flex-col items-center ">
                <div className=" flex-col  content text-3xl text-center md:text-left mb-2">
                  <p className="text-xl sm:text-3xl font-bold text-center">See more of Fully Booked on Facebook</p>
                </div>
                  <input type="text" placeholder="Email or phone number" className="text-center w-full  py-4 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                  <input type="password" placeholder="Password" className="text-center w-full   py-4 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                  <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold text-md">Log In</button>
                  <a className="text-blue-600 font-semibold text-center">Forgot pasword?</a>
                  <hr />
                  <button className=" bg-green-600 px-9 mb-4 text-white p-2 rounded-lg font-semibold text-md">Create new account</button>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
