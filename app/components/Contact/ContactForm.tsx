// export default function ContactForm() {
//   return (
//     <div>
//       <h2 className="heading-secondary mb-8">Get In Touch</h2>
//       <form className="space-y-6" action="https://formspree.io/f/xvgqogwl">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
//               First Name
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
//               required
//             />
//           </div>
//         </div>
        
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
//             required
//           />
//         </div>
        
//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
//           />
//         </div>
        
//         <div>
//           <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
//             Project Type
//           </label>
//           <select
//             id="projectType"
//             name="projectType"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
//             required
//           >
//             <option value="">Select a project type</option>
//             <option value="residential">Residential Design</option>
//             <option value="commercial">Commercial Design</option>
//             <option value="consultation">Design Consultation</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//             Tell us about your project
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows={6}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
//             placeholder="Describe your vision, timeline, and any specific requirements..."
//             required
//           ></textarea>
//         </div>
        
//         <button
//           type="submit"
//           className="btn-primary w-full"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }



export default function ContactForm() {
  return (
    <div>
      <h2 className="heading-secondary mb-8">Get In Touch</h2>
      <form
        action="https://formspree.io/f/xvgqogwl"
        method="POST"
        className="space-y-6"
      >
        
        <input type="text" name="_gotcha" style={{ display: 'none' }} />

       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            required
          >
            <option value="">Select a project type</option>
            <option value="residential">Residential Design</option>
            <option value="commercial">Commercial Design</option>
            <option value="consultation">Design Consultation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
            placeholder="Describe your vision, timeline, and any specific requirements..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-primary w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
