// import modules
import Footer from './headfoot/Footer'
import Header from './headfoot/Header'

export default function ContactPrivate() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 w-full">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Visit Our Location
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Ademola Street, Oniru, Victoria Island Lagos, Nigeria
            </p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden video-container">
                {/* <iframe
                  src="https://maps.app.goo.gl/xoweRq1EVJ17v6HF9"
                  width="300"
                  height="400"
                  // style="border:0;"
                  allowFullscreen
                  // loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe> */}
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Address
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Ademola Street, Oniru, Victoria Island Lagos, Nigeria
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9am - 5pm
                    </p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Contact
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Email: info@edumore.com
                    </p>
                    <p className="mt-1 text-gray-600">
                      Phone: +234 8165 537 373
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
