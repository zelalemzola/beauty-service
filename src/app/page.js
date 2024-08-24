import HeroButton from '@/components/HeroButton'
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

 const words = [
    {
      text: "Transformative",
    className: "text-secondary text-md md:text-2xl",
    },
    {
      text: "Beauty ,",
    className: "text-secondary text-md  md:text-2xl",
    },
    {
      text: "Delivered",
     className: "text-secondary text-md md:text-2xl",
    },
    {
      text: "by",
       className: "text-secondary text-md md:text-2xl",
    },
    {
      text: "Skilled",
      className: "text-secondary text-md  md:text-2xl",
    },
    {
      text: "Gig",
      className: "text-secondary text-md  md:text-2xl",
    },
    {
      text: "Workers",
      className: "text-secondary text-md  md:text-2xl",
    },
   
   
  ];
const HomePage = () => {
  return (
    <div>
        <div className='w-full  px-5 flex items-center justify-between fixed'>
          <Image src={'/bb.png'} alt='' width={100} height={20} className=''/>
          <HeroButton/>
        </div>

        <div className='py-10 w-full h-screen'>
            <Image src={'/4.png'} width={400} height={400} alt='' className='rounded-b-full absolute top-0 left-0 ml-[10%] hidden md:block'/>
            <div className='flex flex-col md:flex-row'>
                <div className=' md:w-[40%]  place-content-end'>
                
                </div>
                <div className='w-full md:w-[60%] py-6 flex items-center flex-col '>
                      <Image src={'/bb.png'} width={300} height={300} alt='' className='p-0'/>
                      <h2 className='text-secondary text-4xl font-bold'>Bloom Beauty</h2>
                      <TypewriterEffectSmooth words={words} />  
                </div>
            </div> 
        </div>
        <div className='h-screen w-full py-6'>
            <h2 className="text-3xl font-bold text-secondary text-center">Our Philosophy</h2>
            <div className='flex flex-col md:flex-row items-center gap-4 px-8 pt-20'>
                <div className='rounded-2xl border border-secondary p-2 flex flex-col items-center gap-2 shadow-md'>
                    <h2 className='text-xl font-bold text-secondary'>Artistry Meets Flexibility</h2>
                    <p className='text-sm '>
                        Beauty is an art, and our gig workers are the artists. Each of them brings their own flair, creativity, and expertise, offering you a wide range of services from haircuts to skincare, all personalized to fit your individual look and lifestyle.
                    </p>
                </div>
                <div className='rounded-2xl border border-secondary p-2 flex flex-col items-center gap-2 shadow-md'>
                    <h2 className='text-xl font-bold text-secondary'>Empowering Talent, Empowering You</h2>
                    <p className='text-sm'>
                      We believe in the power of gig work to bring fresh perspectives and talents to the beauty industry. By hiring trained freelance professionals, we’re not only offering you high-quality services but also empowering skilled workers to thrive in their careers.
                    </p>
                </div>
                <div className='rounded-2xl border border-secondary p-2 flex flex-col items-center gap-2 shadow-md'>
                    <h2 className='text-xl font-bold text-secondary'>Your Beauty, Your Way</h2>
                    <p className='text-sm'>
                        We understand that true beauty is about more than just appearances—it’s about feeling confident and empowered. Our gig workers are committed to making sure you leave our salon not just looking good but feeling your best.
                    </p>
                </div>
            </div>
        </div>
        <div className='h-screen w-full relative'>
           
            <Image src={'/bb.png'} width={300} height={300} alt='' className='p-0 absolute top-0 right-0 -mt-[2%] mr-[2%] hidden md:block'/>
          <div className='flex flex-col md:flex-row items-start'>
            <div className='w-full md:w-1/3 pl-10 '>
                 <h2 className='text-secondary text-3xl font-bold text-center md:text-start'>What You Get</h2>
                <div className='flex flex-col items-center gap-3 pt-5'>
                <div className='flex flex-col '>
                  <p className="bg-secondary text-white p-1 rounded-2xl w-[80%] text-center">
                    Talent On Demand
                  </p>
                  <p className='px-2 text-sm w-[80%] pt-2'>
                    Our salon is powered by a community of freelance beauty professionals who are passionate about their craft. Whether you need a last-minute appointment or a specialized service, our gig workers are here to deliver top-notch results.
                  </p>
               </div>
                <div className='flex flex-col '>
                  <p className="bg-secondary text-white p-1 rounded-2xl w-[80%] text-center">
                    Flexibility & Convenience
                  </p>
                  <p className='px-2 text-sm w-[80%] pt-2'>
                   Life is busy, and our gig workers offer the flexibility you need. Book appointments that fit your schedule and choose from a wide range of services, all provided by experts who are as dedicated as they are talented.
                  </p>
               </div>
                <div className='flex flex-col '>
                  <p className="bg-secondary text-white p-1 rounded-2xl w-[80%] text-center">
                    Personalized & Unique
                  </p>
                  <p className='px-2 text-sm w-[80%] pt-2'>
                     No two clients are the same, and neither are our services. Each gig worker brings their unique skill set to the table, ensuring that every treatment is tailored to your specific needs and preferences.
                  </p>
               </div>

               </div>
            </div>
            <div className='w-full md:w-2/3 px-5 '>
              <h2 className='text-3xl text-secondary font-bold text-start md:text-center '>
                How We Work
              </h2>
              <div className='flex flex-col gap-3 px-3 pt-6 '>
                <div className='flex flex-col items-center md:items-start gap-2'>
                    <div>
                    <p className="bg-secondary text-white p-1 rounded-2xl w-[60%] md:w-[30%] text-center">
                      <span className='text-xl'>1</span> Match with a Pro
                  </p>
                    <p className='px-2 text-sm w-[50%] pt-2'>
                    Start by booking a consultation with one of our gig workers. We’ll match you with the perfect professional based on your needs, ensuring you get the best possible service.
                    </p>
                    </div>
                    <div className='md:pl-[20%]'>
                    <p className="bg-secondary text-white p-1 rounded-2xl w-[40%] text-center">
                      <span className='text-xl'>2</span> Craft Your Look
                  </p>
                    <p className='px-2 text-sm w-[60%] pt-2'>
                     Our freelance beauty experts will then bring your vision to life, whether it’s a fresh haircut, a rejuvenating facial, or a stunning manicure. Every detail is handled with care and precision.
                    </p>
                    </div>
                    <div className='md:pl-[40%]'>
                    <p className="bg-secondary text-white p-1 rounded-2xl w-[50%] text-center">
                      <span className='text-xl'>3</span> Enjoy the Results
                  </p>
                    <p className='px-2 text-sm w-[80%] pt-2'>
                     Leave our salon feeling confident, empowered, and ready to take on the world. With our gig workers at your service, you can count on a beauty experience that’s both exceptional and flexible.
                    </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full py-5 px-6 bg-black'>
            <div className=' border-b border-secondary p-2 flex flex-col md:flex-row gap-3 items-center'>
                <h1 className='text-secondary text-2xl font-bold'>Join The Movement</h1>
                <p className='text-white text-sm'>
                    Blossom Beauty is redefining beauty services by tapping into the talent and innovation of gig workers. Experience the difference that skilled freelancers can make—tailored, flexible, and always on point.
                </p>
            </div>
            <div className='p-2 flex flex-col md:flex-row gap-3 items-center'>
                <div className='flex flex-col gap-3 w-2/3'>
                    <h2 className="text-secondary text-2xl font-bold">Stay In Touch</h2>
                    <p className="text-sm text-white">
                         Ready to discover your best look? Contact us today to book an appointment with one of our skilled gig workers. Your transformation starts here, with beauty services that fit your life, your style, and your schedule.
                    </p>
                </div>
                <div className='mx-auto'>
                 <Button className='rounded-md bg-secondary hover:bg-secondary hover:shadow-lg text-white shadow-md text-lg ' asChild>
                       <Link href='/workers'>
                           Find Gig Workers
                      </Link>
               </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage