export default function ContactInfo() {
  return (
    <div>
      <h2 className="heading-secondary mb-8">Contact Information</h2>
      
      <div className="space-y-8 mb-12">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Visit Our Studio</h3>
            <p className="text-body">
              123 Design Street<br />
              New Delhi, ND 110025
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
            <p className="text-body">+91 (999) 123-4567</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
            <p className="text-body">Blueshineassociate.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Office Hours</h3>
            <p className="text-body">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: By appointment
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="text-xl font-playfair font-medium mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">How long does a typical project take?</h4>
            <p className="text-body text-sm">Project timelines vary based on scope, but most residential projects take 8-16 weeks from design to completion.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Do you work with existing furniture?</h4>
            <p className="text-body text-sm">Absolutely! We love incorporating pieces that have sentimental value or work well with the new design.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">What's included in the consultation?</h4>
            <p className="text-body text-sm">Our initial consultation includes space assessment, style discussion, budget planning, and a preliminary design direction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}