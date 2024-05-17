import React from 'react'
import { useState } from 'react'

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleSubmit = (event) => {
    event.preventDefault()

    //... (the rest of the code for handling the form submission)

    setFormSubmitted(true)
  }
 

  if (formSubmitted) {
    return (
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg?w=1060&t=st=1713203779~exp=1713204379~hmac=7f34b66c7f811c53a011b43e946d4c2c015e76f89dc9d82637b7d50ad7d12c39)` }} >
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="pageheading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thank You for your Response
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Your message has been sent successfully. We will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg?w=1060&t=st=1713203779~exp=1713204379~hmac=7f34b66c7f811c53a011b43e946d4c2c015e76f89dc9d82637b7d50ad7d12c39)` }}>
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className=" pageheading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 animate-fade-in-up">
            Connect with us now and join the community dedicated to turning aspirations into reality through the power of crowdfunding.
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
                First name
              </label>
              <div className="mt-1.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-200 ease-in-out hover:shadow-lg"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
                Last name
              </label>
              <div className="mt-1.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-200 ease-in-out hover:shadow-lg"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-1.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-200 ease-in-out hover:shadow-lg"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
                Phone number
              </label>
              <div className="mt-1.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-200 ease-in-out hover:shadow-lg"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                Message
              </label>
              <div className="mt-1.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition duration-200 ease-in-out hover:shadow-lg"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center z={-10}">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs