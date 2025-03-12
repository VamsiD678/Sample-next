import toast from "react-hot-toast"

export const metadata = {
  title:'Contact'
}

export interface formData {
  get(arg0: string): unknown
  firstname: string
  lastname: string
  email: string
  phone: string
  message: string
}

const Contact = () => {

  const onFormSubmit = async (formData: formData) => {
    'use server'

    const rawFormData = {
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    }
    console.log(rawFormData);

    toast.success('Form submission successful')
  }


  return (
    <section className="py-9 px-6 sm:py-12 md:py-12 md:px-9 lg:py-16 lg:px-12 xl:py-16 xl:px-16 min-h-screen bg-gradient-to-r from-indigo-100 via-indigo-100 to-green-100 ">
      <div className="max-w-2xl w-full mx-auto">
        <div className="flex flex-col items-center justify-center"> 
          <h2 className="text-3xl text-center md:text-left md:text-4xl capitalize font-semibold text-gray-800 leading-snug mb-4">get in touch with us today</h2>
          <p className="block text-center text-[17px] text-gray-800">We&apos;re here to help! If you have any questions or would like to discuss how our SEO and digtal marketing services can benifit your business.</p>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-4xl bg-gray-100 rounded-md w-full mx-auto">
          <div className="p-7">
            <h3 className="capitalize font-semibold text-2xl sm:text-3xl text-gray-800 mb-4">Get in touch</h3>
            <p className="font-medium text-gray-800 mb-7">We&apos;re here to help! If you have any questions or would like to discuss how our SEO and digtal marketing services can benifit your business.</p>
            <form action={onFormSubmit} className="flex flex-col space-y-7">
              <div className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-5">
                <input type='text' className="outline-none w-full px-4 py-3 rounded-md border-2 tracking-[0.015rem] text-lg border-gray-300" name="firstname" placeholder="First Name" />
                <input type='text' className="outline-none w-full px-4 py-3 rounded-md border-2 tracking-[0.015rem] text-lg border-gray-300" name="lastname" placeholder="Last Name" />
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-5 sm:space-y-0 sm:space-x-5">
                <input type='email' className="outline-none w-full px-4 py-3 rounded-md border-2 tracking-[0.015rem] text-lg border-gray-300" name="email" placeholder="Email Address" />
                <input type='text' className="outline-none w-full px-4 py-3 rounded-md border-2 tracking-[0.015rem] text-lg border-gray-300" name="phone" placeholder="Phone Number" />
              </div>
              <div>
                <textarea id="message" name="message" rows={3} cols={30} placeholder="Your Message" className="px-4 py-3 w-full outline-none rounded-md tracking-[0.015rem] text-lg border-2 border-gray-300" ></textarea>
              </div>
              <button className="button-primary self-start">Free Consultation</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;