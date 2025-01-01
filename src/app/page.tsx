import soundwaves from '../../public/images/soundwaves.jpg'
import heroImage from '../../public/images/heroImage.png'
import Image from 'next/image';
import Link from 'next/link';
import {
  divinity,
  synchronicity,
  theUndertaking,
  asTheSunSpeaks
} from '@/../public/images/albums'
import SiteHeader from '@/components/SiteHeader';

export default function Home() {
  return (
    <div className="h-full">
      <SiteHeader />
      <div className="h-[28%]">
        <Image src={heroImage} alt='hero-image' className='object-fill h-full' />
      </div>
      <div className="h-[32%] flex justify-center items-center">
        <div className='border-t border-b border-black h-[85%] w-full sm:w-[95%] flex justify-center items-center'>
          <div className='h-[90%] flex w-full justify-between sm:justify-center items-center'>
            <Image src={divinity} alt='divinity' className='h-[65%] sm:h-full object-fill w-[19%] sm:w-[15%] p-0 sm:px-2' />
            <Image src={synchronicity} alt='synchronicity' className='h-[65%] sm:h-full object-fill w-[19%] sm:w-[15%] p-0 sm:px-2' />
            <div className='h-[65%] sm:h-full font-sans text-gray-600 text-[10px] sm:text-3xl p-0 sm:px-3 flex flex-col items-center justify-center mt-2 sm:mt-0 w-[19%] sm:w-[25%] overflow-hidden'>
              <div className='block'>Your
                <span className='text-pink-500'> Album</span> And
                <span className='text-pink-500'> Artist</span> Name
              </div>
              <div className='block'>on<span className='text-pink-500'> Custom</span> Album Designs</div>
              <div className='block mt-1 sm:mt-3 bg-pink-500 text-white hover:font-extrabold hover:bg-pink-700 text-[10px] sm:text-2xl border rounded-lg'>
                <Link href="/catalog">
                  <button className='p-1 sm:p-2'>Shop Now</button>
                </Link>
              </div>
            </div>
            <Image src={theUndertaking} alt='theUndertaking' className='h-[65%] sm:h-full object-fill w-[19%] sm:w-[15%] p-0 sm:px-2' />
            <Image src={asTheSunSpeaks} alt='asTheSunSpeaks' className='h-[65%] sm:h-full object-fill w-[19%] sm:w-[15%] p-0 sm:px-2' />
          </div>
        </div>
      </div>
      <div className="h-[33%]">
        <Image src={soundwaves} alt='footer image' className='object-fill h-full' />
      </div>
    </div>
  );
}
