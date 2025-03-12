import Image from "next/image";
import Link from "next/link";
import Contact from "./contact/page";
// import Contact from "./contact/page";

const Home = ()=> {
  return (
    <main>
      <section className="py-9 px-6 sm:py-12 md:py-12 md:px-9 lg:py-16 lg:px-12 xl:py-24 xl:px-16 xl:min-h-[90vh] bg-gradient-to-r from-indigo-200 to-green-200 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 space-y-10 md:grid-cols-2 md:items-center md:justify-items-center">
            <div className="md:col-span-1">
              <h1 className="text-2xl text-center md:text-left lg:leading-snug lg:text-3xl xl:text-5xl xl:leading-tight text-gray-700 capitalize tracking-normal leading-tight font-semibold mb-5">Elevate Your Brand With expert SEO & digital marketing</h1>
              <p className="text-base text-center md:text-left lg:text-[17px] xl:text-lg text-gray-700 mb-6 md:mb-9">Welcome to SEOC where we specialize in revolutionizing your online presence through expert SEO and digital marketing solutions.</p>
              <div className="flex items-center md:justify-start justify-center space-x-3 lg:space-x-4">
                <Link href='/our-services'><button className="capitalize button-primary font-medium">Start Ranking</button></Link>
                <Link href='/contact'><button className="button-secondary">Contact Now</button></Link>
              </div>
            </div>
            <div className="relative aspect-square w-52 md:w-60 lg:w-64 xl:w-72 md:col-span-1 justify-self-center md:self-start md:place-self-center">
              <Image src='/loaderImage.svg' alt='Hero image' className="object-cover" fill />
              {/* <div className="absolute top-0 w-56 h-56 rounded-full block z-10 bg-green-300 after:content-['']"></div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!----> */}  
      <section className="px-6 sm:px-12 xl:px-16 bg-indigo-100">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between"> 
          <div className="relative aspect-square w-20 h-auto sm:w-28 md:w-36 xl:w-44">
            <Image
              src='/logos/usa-today.png'
              fill
              alt='USA Today'
              className="brightness-0 opacity-50 object-contain"
            />
          </div>
          <div className="relative aspect-square w-20 h-auto sm:w-28 md:w-36 xl:w-44">
            <Image
              src='/logos/techcrunch.png'
              fill
              alt='USA Today'
              className="brightness-0 opacity-50 object-contain"
            />
          </div>
          <div className="relative aspect-square w-20 h-auto sm:w-28 md:w-36 xl:w-44">
            <Image
              src='/logos/the-new-york-times.png'
              fill
              alt='USA Today'
              className="brightness-0 opacity-50 object-contain"
            />
          </div>
          <div className="relative aspect-square w-20 h-auto sm:w-28 md:w-36 xl:w-44">
            <Image
              src='/logos/business-insider.png'
              fill
              alt='USA Today'
              className="brightness-0 opacity-50 object-contain"
            />
          </div>
        </div>
      </section>
      {/* <!----> */}

      <section className="py-9 px-6 sm:py-12 md:py-12 md:px-9 lg:py-16 lg:px-12 xl:py-16 xl:px-16 bg-gradient-to-r to-green-100 via-indigo-100 from-indigo-100">
        <div className="max-w-2xl w-full mx-auto mb-12">
          <div className="flex flex-col items-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl capitalize font-semibold text-gray-800 tracking-[0.015rem] leading-snug mb-4">Popular digital marketing services to <span className="block text-center">build your business</span></h2>
            <p className="block text-center text-[17px] text-gray-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum explicabo accusantium architecto! Aliquam.</p>
          </div>
        </div>

        <div className="flex flex-col min-[685px]:flex-row max-w-6xl w-full mx-auto">
          <div className="p-6 flex flex-col items-center space-y-8 bg-purple-300">
            <h3 className="capitalize font-semibold text-gray-800 text-xl sm:text-2xl">Search Engine optimization</h3>
            <Image src='/window.svg' alt='SEO' width={80} height={80} />
            <p className="text-gray-900 font-medium block text-center">Process of improving a websites visibility in search engines. The goal is to get more organic traffic to a website. </p>
          </div>
          <div className="p-6 flex flex-col items-center space-y-8 bg-indigo-300">
            <h3 className="capitalize font-semibold text-gray-800 text-xl sm:text-2xl">Social media marketing</h3>
            <Image src='/globe.svg' alt='SEO' width={80} height={80} />
            <p className="text-gray-900 font-medium block text-center">Process of improving a websites visibility in search engines. The goal is to get more organic traffic to a website. </p>
          </div>
          <div className="p-6 flex flex-col items-center space-y-8 bg-green-200">
            <h3 className="capitalize font-semibold text-gray-800 text-xl sm:text-2xl">Web design & developement</h3>
            <Image src='/vercel.svg' alt='SEO' width={80} height={80} />
            <p className="text-gray-900 font-medium block text-center">Process of improving a websites visibility in search engines. The goal is to get more organic traffic to a website. </p>
          </div>
        </div>
      </section>

      <section className="py-9 px-6 sm:py-12 md:py-12 md:px-9 lg:py-16 lg:px-12 xl:py-16 xl:px-16 bg-gradient-to-r from-indigo-100 via-indigo-100 to-green-100">
        <div className="max-w-2xl mx-auto w-full mb-10">
          <div className="flex flex-col items-center">
            <h2 className="text-xl lg:text-4xl capitalize tracking-[0.015rem] font-semibold text-gray-800 leading-snug mb-4">Tailored Solutions, proven results <span className="block text-center">and exceptional results</span></h2>
            <p className="block text-center text-base lg:text-lg text-gray-800">We pride ourselves for providing value preposition that goes beyond our expectations. Our approach is business centered inside.</p>
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center lg:space-x-4">
          <div className="relative aspect-video max-w-4xl w-full lg:max-w-xl max-h-[28rem] h-[24rem]">
            <Image
              src='/seo-person.jpg' 
              className="w-full h-full rounded-lg brightness-[0.5]" 
              placeholder="blur"
              blurDataURL="/loaderImage.svg"
              alt='Image'
              fill
            />
            <div className="absolute top-[25%] sm:top-[45%] px-5 text-white">
              <p className="font-semibold tracking-wider text-sm mb-2">Our Value</p>
              <h3 className="text-xl font-semibold capitalize mb-2 tracking-wider">Explore our unique value preposition & how we drive business growth</h3>
              <p className="text-gray-200 text-sm mb-6">We&apos;re commited to delievering exceptional value to our clients. we understand that every business is unique, personalized approach to every project.</p>
              <button className="button-primary px-4 py-2 text-[16px] font-medium">Learn More</button>
            </div>
          </div>
          <div className="flex max-[520px]:flex-col flex-row min-[520px]:space-x-4 max-[520px]:space-y-5 lg:flex-col lg:space-x-0 lg:space-y-5">
            <div className="p-5 rounded-lg max-w-md bg-purple-300">
              <span className="block font-bold text-purple-900 tracking-[0.015] mb-4">Our Mission</span>
              <h3 className="text-lg text-gray-800 leading-[25px] tracking-[0.015rem] font-semibold mb-3">We strive to be more than just a service provider, we aim to be trusted SEOC</h3>
              <p className="font-medium text-[15px] text-gray-800">Process of improving a websites visibility in search engines. The goal is to get more organic traffic to a website.</p>
            </div>
            <div className="p-5 rounded-lg max-w-md bg-indigo-300">
              <span className="block font-bold text-indigo-900 tracking-[0.015] mb-4">Our Vision</span>
              <h3 className="text-lg text-gray-800 leading-[25px] tracking-[0.015rem] font-semibold mb-3">We strive to be more than just a service provider, we aim to be trusted SEOC</h3>
              <p className="font-medium text-[15px] text-gray-800">Process of improving a websites visibility in search engines. The goal is to get more organic traffic to a website.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-9 px-6 sm:py-12 md:py-12 md:px-9 lg:py-16 lg:px-12 xl:py-24 xl:px-16 bg-gradient-to-r from-indigo-100 via-indigo-100 to-green-100">
        <div className="max-w-2xl w-full mx-auto mb-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl lg:text-4xl capitalize font-semibold text-gray-800 tracking-[0.015rem] leading-snug mb-4">Insights & Innovations: our latest <span className="block text-center">Blog posts</span></h2>
            <p className="block text-center text-[17px] text-gray-800">Explore our to discover actionable insights, success stories and exert advice that can help drive growth for your business</p>
          </div>
        </div>
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 gap-y-6  md:grid-cols-3 md:gap-x-6 place-items-center">
            <div className="bg-white rounded-md shadow-md">
              <div className="flex flex-col">
                <div className="relative aspect-square h-60">
                  <Image src='/seo-person.jpg' alt='seo1' fill className="object-cover rounded-t w-full h-full"  /> 
                </div>
                <div className="min-[800px]:p-4 p-4  md:p-2">
                  <div className="flex items-center gap-4 text-sm font-medium text-gray-800 mb-3">
                    <p>Ben Stokes</p>
                    <p>16 August 2024</p>
                  </div>
                  <h3 className="text-base min-[820px]:text-lg tracking-wide leading-6 text-gray-800 font-semibold capitalize mb-2">10 Essential SEO Tips to Boost Your Website&apos;s Ranking</h3>
                  <p className="text-gray-800 text-sm min-[820px]:text-base mb-4">Are you looking to improve your website&apos;s visibility and attract more traffic?</p>
                  <p className="font-semibold leading-6 text-sm text-gray-800 cursor-pointer">Read More &rarr;</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <div className="flex flex-col">
                <div className="relative aspect-square h-60">
                  <Image src='/seo-person.jpg' alt='seo1' fill className="object-cover rounded-t w-full h-full"  /> 
                </div>
                <div className="min-[800px]:p-4 p-4 md:p-2">
                  <div className="flex items-center gap-4 text-sm font-medium text-gray-800 mb-3">
                    <p>Ben Stokes</p>
                    <p>16 August 2024</p>
                  </div>
                  <h3 className="text-base min-[820px]:text-lg tracking-wide leading-6 text-gray-800 font-semibold capitalize mb-2">10 Essential SEO Tips to Boost Your Website&apos;s Ranking</h3>
                  <p className="text-gray-800 text-sm min-[820px]:text-base mb-4">Are you looking to improve your website&apos;s visibility and attract more traffic?</p>
                  <p className="font-semibold leading-6 text-sm text-gray-800 cursor-pointer">Read More &rarr;</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <div className="flex flex-col">
                <div className="relative aspect-square h-60">
                  <Image src='/seo-person.jpg' alt='seo1' fill className="object-cover rounded-t w-full h-full"  /> 
                </div>
                <div className="min-[800px]:p-4 p-4 md:p-2">
                  <div className="flex items-center gap-4 text-sm font-medium text-gray-800 mb-3">
                    <p>Ben Stokes</p>
                    <p>16 August 2024</p>
                  </div>
                  <h3 className="text-base min-[820px]:text-lg tracking-wide leading-6 text-gray-800 font-semibold capitalize mb-2">10 Essential SEO Tips to Boost Your Website&apos;s Ranking</h3>
                  <p className="text-gray-800 text-sm min-[820px]:text-base mb-4">Are you looking to improve your website&apos;s visibility and attract more traffic?</p>
                  <p className="font-semibold leading-6 text-sm text-gray-800 cursor-pointer">Read More &rarr;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <section className="bg-indigo-700">
        <div className="px-6 py-12 md:py-16 max-w-lg w-full mx-auto text-white">
          <div className="flex flex-col items-center space-y-5">
            <h2 className="text-2xl md:text-3xl capitalize font-semibold text-center tracking-wide leading-snug">Ready to take your SEO to the next level</h2>
            <p className="text-indigo-100 pb-2 tracking-[0.015rem] text-center">Effective SEO strategies not only elevate a website&apos;s visibility but also drive targeted traffic & enhance user experience.</p>
            <Link href='/our-services'><button className="button-secondary">Free Consultation</button></Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;