import Image from "next/image";

export const metadata = {
  title: 'About us'
}


const About = () => {
  return (
    <section className="py-9 px-6 sm:py-12 md:py-12 md:px-9 lg:py-16 lg:px-12 xl:py-24 xl:px-16 min-h-screen bg-gradient-to-r from-indigo-200 via-indigo-200 to-green-200">
      <div className="max-w-6xl w-full mx-auto mb-16 md:mb-28">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 items-center justify-items-center">
          <div className="flex flex-col space-y-3 md:space-y-5">
            <h2 className="text-2xl text-center md:text-left lg:leading-snug lg:text-3xl xl:text-4xl xl:leading-tight text-gray-700 capitalize tracking-normal leading-tight font-semibold mb-4">Comprehensive SEO & digital marketing solutions.</h2>
            <p className="text-gray-700 font-medium text-base text-center md:text-left md:text-lg">Welcome to SEOC where we specialize in revolutionizing your online presence through expert SEO and digital marketing solutions,
              The process of improving your website visibility in search engines. The goal is to get more organic traffic to a website, enhance user experience.</p>
          </div>
          <div className="relative aspect-square max-w-xl w-72 sm:w-80 lg:w-80">
            <Image src='/SEO.jpg' alt='About image' className="object-cover w-full h-full rounded-full" fill/> 
          </div>
        </div>
      </div>

      <div className="max-w-lg sm:max-w-xl w-full mx-auto">
        <div className="flex flex-col items-center space-y-3">
          <p className="text-xl sm:text-2xl tracking-[0.015rem] leading-snug text-gray-800 font-medium block text-center italic">
            &quot;Our customers are insurance companies banks, and other types of digital platforms for which insurance is relevant.&quot;
          </p>
          <span className="text-base sm:text-lg text-gray-700 font-medium">- Smily, CEO</span>
        </div>
      </div>
    </section>
  )
}

export default About;