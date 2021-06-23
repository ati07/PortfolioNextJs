import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/solid'
const Sidebar = () => {
    return (
        <div className=''>
        <Image className='object-contain rounded-2xl'
         width={200}
                height={100} 
                src='https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg' alt='logo'/>
        <h3>Atiurrahman</h3>
        <p>Web developer</p>
        <p>Download Resume</p>
        {/* Social Link */}
        <div className='grid grid-cols-3 text-center'>
                <div className='col-span-1'></div>
                <div className='col-span-1'></div>
                <div className='col-span-1'></div>
        </div>
        {/* Email Button */}
        {/* Ligth UI */}
        </div>
    )
}

export default Sidebar
