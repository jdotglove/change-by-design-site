import Button from "@/components/Button";
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Assessments() {
  return (
    <div className="pt-28 min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Data-Driven Transformation That Works
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Start your transformation with the world&apos;s most predictive workplace assessment.
             At Change by Design, our integrated Saville Assessment platform provides instant insights into leadership potential,
              team dynamics, and development priorities—the foundation for all Change by Design&apos;s transformation work.
          </p>
          <div className="mb-6">
            <p className="text-xl text-white opacity-90 mb-6">
              <span className="font-bold">People Don&apos;t Change by Accident.  They Change by Design.</span>
            </p>
            <p className="text-xl text-white opacity-90 mb-6">
              <span className="font-bold">Fundamental transformation starts with clarity</span>—not assumptions or generic models.  
              That&apos;s why we anchor our work in Saville Assessment, the world&apos;s most predictive workplace tool, 
              giving you decision-grade insight into how people think, lead, and perform.
            </p>
          </div>
        </div>
      </section>

      {/* Why Saville Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <img 
                src="/saville-assessment.png" 
                alt="Saville Assessment" 
                className="max-w-4xl w-full h-auto"
              />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Saville Assessment Powers Change By Design&apos;s Approach</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Scientific Foundation</h3>
              <p className="text-slate-600">Built on 15+ years of big data and global research, Wave questionnaires put the strongest predictor of workplace performance and potential in your hands.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Instant Insights</h3>
              <p className="text-slate-600">Dynamic, on-demand dashboards provide immediate clarity on leadership strengths, development priorities, and team compatibility.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Proven Accuracy</h3>
              <p className="text-slate-600">Reduces bad hires from 1 in 5 to 1 in 50 with scientifically valid people data across the entire employee journey.</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Measurable Impact</h3>
              <p className="text-slate-600">Organizations using Saville Assessment report significant improvements in hiring accuracy, leadership development effectiveness, and employee engagement.</p>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-16 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div>
                <p className="text-xl text-slate-700 mb-6">
                  By combining predictive analytics with deep contextual understanding of your culture and strategy, we design transformation experiences that are:
                </p>
                <ul className="space-y-3 mb-8 text-slate-700 text-xl">
                  <li className="flex items-start">
                    <span className="text-[#235ba8] font-bold mr-3">•</span>
                    <span>Fully customized, never generic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#235ba8] font-bold mr-3">•</span>
                    <span>Culturally relevant and inclusive</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#235ba8] font-bold mr-3">•</span>
                    <span>Directly tied to business outcomes</span>
                  </li>
                </ul>
                <p className="text-xl text-slate-700 mb-6">
                  We don&apos;t stop at data. We translate insight into practical, culturally aligned action, reducing leadership risk, strengthening succession, and aligning teams with your strategy.
                </p>
                <p className="text-xl text-slate-700 mb-6 italic">
                  The result? Leaders who are aligned, teams that perform, and organizations built to sustain change, not just talk about it.
                </p>
                <p className="text-2xl font-semibold text-slate-900">
                  Start with insight. Design change that delivers results.
                </p>
              </div>
              
              {/* Right Column - Stats Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group max-w-lg w-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative transform transition-all duration-300 group-hover:scale-[1.02]">
                    <img 
                      src="/stats-image.png" 
                      alt="Change by Design Statistics" 
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Options Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Assessment Options</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Individual Leadership Assessment</h3>
              <p className="text-slate-600 mb-6">Comprehensive profiling for executives and emerging leaders.</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Detailed personality and aptitude analysis</span></li>
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Leadership potential identification</span></li>
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Personalized development recommendations</span></li>
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Integration with coaching and development programs</span></li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Team Assessment</h3>
              <p className="text-slate-600 mb-6">Complete team dynamics and compatibility analysis.</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Individual profiles for all team members</span></li>
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Team interaction patterns and potential conflicts</span></li>
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Collaboration optimization strategies</span></li>
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Culture health indicators</span></li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Organizational Assessment</h3>
              <p className="text-slate-600 mb-6">Enterprise-wide talent analytics and insights.</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Leadership pipeline analysis</span></li>
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Culture alignment measurement</span></li>
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Succession planning data</span></li>
                <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Retention risk identification</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Started</h2>
          <p className="text-xl text-slate-600 mb-8">Complete Your Assessment</p>
          <div className="flex justify-center space-x-4">
            <Button href="/contact" variant="primary"><div className="flex flex-col"><span>Request Individual</span><span>Assessment</span></div></Button>
            <Button href="/contact" variant="secondary"><div className="flex flex-col"><span>Request Team</span><span>Assessment</span></div></Button>
            <Button href="/contact" variant="secondary"><div className="flex flex-col"><span>Explore Enterprise</span><span>Options</span></div></Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Trusted by Global Organizations</h3>
            <p className="text-blue-200 mb-6">99.96% platform uptime • 15+ years of research • Used by Fortune 500 companies worldwide</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-blue-200 font-semibold">View Leadership Report</a>
              <a href="#" className="text-white hover:text-blue-200 font-semibold">See Team Dynamics</a>
              <a href="#" className="text-white hover:text-blue-200 font-semibold">Explore Development Guide</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
