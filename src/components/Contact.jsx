import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Mail, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$2k - $5k',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const budgets = [
    { label: "Under $2k", value: "Under $2k" },
    { label: "$2k - $5k", value: "$2k - $5k" },
    { label: "$5k - $10k", value: "$5k - $10k" },
    { label: "$10k+", value: "$10k+" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (val) => {
    setFormState((prev) => ({ ...prev, budget: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Quick Validation
    if (!formState.name || !formState.email || !formState.details) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    let accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      // Fallback to the public Web3Forms access key
      accessKey = 'ddb7747f-94dc-4fc2-b434-de0dd0e2d0a8';
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Client Inquiry - DesignLoop Portfolio',
          from_name: 'DesignLoop Contact Form',
          name: formState.name,
          email: formState.email,
          company: formState.company || 'N/A',
          budget: formState.budget,
          message: formState.details
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Fire confetti explosion
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#7C3AED', '#06B6D4', '#ffffff']
        });
      } else {
        setIsSubmitting(false);
        setErrorMsg(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setIsSubmitting(false);
      setErrorMsg('Network error. Please try again later.');
      console.error('Submission error:', err);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0B0B0B] border-t border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#7C3AED] opacity-[0.03] blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#06B6D4] opacity-[0.02] blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-5 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">
              Get In Touch
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Whether it's your first website or a redesign, let's build something together.
            </h2>
            
            <p className="mt-6 text-neutral-400 text-base leading-relaxed font-light">
              Tell us about your project requirements, goals, and timeline. Fill out our simple form, and we'll get back to you within 24 hours to discuss how we can help.
            </p>

            {/* Support benefits */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7C3AED]/10 text-[#7C3AED]">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                Direct communication with the developers
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#06B6D4]/10 text-[#06B6D4]">
                  <Mail className="h-4 w-4" />
                </span>
                Clear, honest scoping and estimates
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-neutral-300">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7C3AED]/10 text-[#7C3AED]">
                  <Building2 className="h-4 w-4" />
                </span>
                Collaborative design and build process
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <div className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-2">Direct Channel</div>
              <a href="mailto:designloop.work@gmail.com" className="font-heading text-lg font-bold text-white hover:text-[#06B6D4] transition-colors">
                designloop.work@gmail.com
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden border border-white/5">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Name input */}
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
                        Your Name <span className="text-[#7C3AED]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-neutral-950 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#7C3AED] transition-colors"
                        required
                      />
                    </div>

                    {/* Email & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
                          Work Email <span className="text-[#7C3AED]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="w-full bg-neutral-950 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#7C3AED] transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleInputChange}
                          placeholder="Acme Corp"
                          className="w-full bg-neutral-950 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#7C3AED] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Budget Selection */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                        Project Budget Range <span className="text-[#06B6D4]">(Estimated)</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {budgets.map((b) => (
                          <button
                            key={b.value}
                            type="button"
                            onClick={() => handleBudgetSelect(b.value)}
                            className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              formState.budget === b.value
                                ? 'bg-gradient-to-r from-[#7C3AED]/20 to-[#06B6D4]/10 border-[#7C3AED] text-white shadow-[0_0_15px_rgba(124,58,237,0.15)]'
                                : 'bg-neutral-950 border-white/5 text-neutral-400 hover:border-neutral-700 hover:text-white'
                            }`}
                          >
                            {b.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Details text */}
                    <div>
                      <label htmlFor="details" className="block text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
                        Project Details <span className="text-[#7C3AED]">*</span>
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        value={formState.details}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="Tell us about the features, timelines, and problems you are aiming to solve."
                        className="w-full bg-neutral-950 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                        required
                      ></textarea>
                    </div>

                    {/* Error Alerts */}
                    {errorMsg && (
                      <p className="text-xs font-semibold text-red-400">{errorMsg}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden rounded-full py-4 font-semibold text-white transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] opacity-90 group-hover:opacity-100 transition-opacity"></span>
                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4 text-white/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </span>
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center"
                  >
                    <div className="h-16 w-16 bg-[#06B6D4]/10 rounded-full flex items-center justify-center text-[#06B6D4] mb-6 animate-bounce">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">
                      Request Submitted!
                    </h3>
                    
                    <p className="text-neutral-400 text-sm max-w-sm mx-auto leading-relaxed font-light mb-8">
                      Thank you for reaching out! We've received your message and will get back to you via email within 24 hours to discuss your project.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-white/10 text-xs font-semibold text-neutral-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
