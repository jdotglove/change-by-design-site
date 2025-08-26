import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900">Change By Design</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-[#235ba8] font-medium">Home</Link>
              <Link href="/coaching" className="text-slate-700 hover:text-[#235ba8] font-medium">Executive Coaching</Link>
              <Link href="/training" className="text-slate-700 hover:text-[#235ba8] font-medium">Leadership Training</Link>
              <Link href="/programs" className="text-slate-700 hover:text-[#235ba8] font-medium">Programs</Link>
              <Link href="/contact" className="bg-[#235ba8] text-white px-4 py-2 rounded-lg hover:bg-[#1e4a8c] transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Transform Your Organization,
            <span className="text-[#235ba8] block">Design Your Future</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Unlock your executive potential with personalized coaching, comprehensive training programs, 
            and strategic leadership development designed for today&apos;s business leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coaching" className="bg-[#235ba8] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1e4a8c] transition-colors">
              Start Your Transformation
            </Link>
            <Link href="/programs" className="border-2 border-[#235ba8] text-[#235ba8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Leadership Solutions</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tailored approaches to develop exceptional leaders and drive organizational success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#235ba8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Executive Coaching</h4>
              <p className="text-slate-600 mb-6">
                One-on-one personalized coaching to enhance leadership skills, decision-making, and executive presence.
              </p>
              <Link href="/coaching" className="text-[#235ba8] font-semibold hover:text-[#1e4a8c]">
                Learn More →
              </Link>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#62a044]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Leadership Training</h4>
              <p className="text-slate-600 mb-6">
                Comprehensive training programs designed to develop strong, effective leaders at every organizational level.
              </p>
              <Link href="/training" className="text-[#62a044] font-semibold hover:text-[#4d7f37]">
                Learn More →
              </Link>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-slate-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#615d59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-4">Program Creation</h4>
              <p className="text-slate-600 mb-6">
                Custom leadership development programs tailored to your organization&apos;s unique needs and objectives.
              </p>
              <Link href="/programs" className="text-[#615d59] font-semibold hover:text-[#4a4743]">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#235ba8]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Leadership?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Take the first step towards transformational leadership development
          </p>
          <Link href="/contact" className="bg-white text-[#235ba8] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h4 className="text-2xl font-bold mb-4">Change By Design</h4>
              <p className="text-slate-300 mb-4">
                Transforming organizations through innovative leadership development, strategic change management, 
                and custom-designed solutions that drive sustainable growth.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/coaching" className="hover:text-white">Executive Coaching</Link></li>
                <li><Link href="/training" className="hover:text-white">Leadership Training</Link></li>
                <li><Link href="/programs" className="hover:text-white">Custom Programs</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-slate-300">
                <li>info@changebydesign.com</li>
                <li>(555) 123-4567</li>
                <li><Link href="/contact" className="hover:text-white">Get in Touch</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Executive Excellence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
