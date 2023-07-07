
import {TbGridDots} from 'react-icons/tb';
import Image from 'next/image';
import Link from 'next/link';


const Header:React.FunctionComponent = () => {

  const url: string = "https://images.unsplash.com/photo-1670834169539-feed72d15b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";

return(
      <div className='flex justify-end pr-4 pt-3 space-x-4 items-center'>
      <Link href="https://mail.google.com" className='text-sm hover:underline cursor-pointer'>Gmail</Link>
      <Link href="https://images.google.com" className='text-sm hover:underline cursor-pointer'>Images</Link>
      <TbGridDots className='text-4xl hover:bg-gray-200 p-2 rounded-full'/>
      
      
      <Image 
          className='rounded-full '
          src = {url} 
          alt='dc'
          width = {30}
          height = {100}
          style={{height:28}}
      />
      
      </div>
      )}

export default Header;