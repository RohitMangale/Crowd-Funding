import React, { useState } from 'react'

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // You can add logic here to send the form data via fetch/axios if needed
    setFormSubmitted(true)
  }

  const backgroundImage = 'https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg?w=1060&t=st=1713203779~exp=1713204379~hmac=7f34b66c7f811c53a011b43e946d4c2c015e76f89dc9d82637b7d50ad7d12c39'

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-white bg-opacity-90 px-6 py-12 sm:py-20 lg:px-10 rounded-lg shadow-xl max-w-3xl w-full">
        {formSubmitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thank You for your Response
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Your message has been sent successfully. We will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Connect with us now and join the community dedicated to turning aspirations into reality through the power of crowdfunding.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-600 shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-600 shadow-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-600 shadow-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    name="phone-number"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-600 shadow-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-600 shadow-sm"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-6 py-2.5 text-white font-semibold shadow hover:bg-indigo-700 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default ContactUs
