import NavBar from "@/components/homepage/NavBar";
import Footer from "@/components/homepage/Footer";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">About Soft.IO</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We are passionate creators of innovative mobile applications that
              empower users to live more productive, connected, and fulfilling
              lives. Our mission is to turn groundbreaking ideas into digital
              experiences that make a real difference.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to revolutionize the mobile app
                  landscape, Soft.IO began as a small team of developers and
                  designers who believed that technology should enhance human
                  potential, not complicate it.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we've grown into a dynamic company that
                  specializes in creating apps that solve real-world problems.
                  From productivity tools to entertainment platforms, our
                  diverse portfolio reflects our commitment to innovation and
                  user-centric design.
                </p>
                <p className="text-gray-600">
                  Today, millions of users worldwide trust our apps to be part
                  of their daily lives, and we're just getting started.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#632EE3] mb-2">
                      132+
                    </div>
                    <div className="text-sm text-gray-600">Apps Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#632EE3] mb-2">
                      29.6M
                    </div>
                    <div className="text-sm text-gray-600">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#632EE3] mb-2">
                      4.5
                    </div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#632EE3] mb-2">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're driven by a simple yet powerful mission: to create
                technology that matters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-[#632EE3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We constantly push boundaries to create cutting-edge solutions
                  that anticipate user needs and exceed expectations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-[#632EE3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  User-Centric
                </h3>
                <p className="text-gray-600">
                  Every decision we make starts with our users. We design with
                  empathy, ensuring our apps are intuitive and valuable.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-[#632EE3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Global Impact
                </h3>
                <p className="text-gray-600">
                  We believe in technology's power to connect people and solve
                  global challenges, one app at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Journey
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Be part of the millions who trust Soft.IO to enhance their digital
              lives. Discover our latest apps and see the difference quality
              makes.
            </p>
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200"
            >
              Explore Our Apps
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
