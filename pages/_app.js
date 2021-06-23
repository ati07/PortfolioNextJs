import "tailwindcss/tailwind.css";
import Sidebar from "../Components/Sidebar/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48'>
      <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl'><Sidebar/></div>
      <div className='col-span-12 bg-white lg:col-span-9 rounded-2xl'>
        {/* <Component {...pageProps} /> */}
        Component
      </div>
    </div>
  );
}

export default MyApp;
