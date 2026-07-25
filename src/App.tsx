import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CheckCircle, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

const FIRM_DETAILS = {
  name: "Siddarthan Sarumathi Pandian & Associates",
  brand: "Pandian AI",
  address: "PLT NOS 40 41 AND 42 SY NOS 42 43 44 45 AND 54 RAVI ENCL KOTHAGUDA V RANGAREDDY CWSONE OPP MANCHE BUFFET HYDERABAD 500084 TELANGANA",
  email: "hello@pandian-ai.com",
  phone: "+91 9940137198",
  paymentLink: "#buy-now" // Replace with Gumroad/Razorpay link later
};

const Header = () => (
  <header className="bg-white border-b sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {FIRM_DETAILS.brand}
      </Link>
      <nav className="flex gap-6">
        <Link to="/" className="text-sm font-medium hover:text-blue-600">Home</Link>
        <Link to="/contact" className="text-sm font-medium hover:text-blue-600">Contact</Link>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-white font-bold mb-4">{FIRM_DETAILS.brand}</h3>
          <p className="text-sm mb-2">{FIRM_DETAILS.name}</p>
          <p className="text-sm">{FIRM_DETAILS.address}</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <Link to="/privacy" className="text-sm hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="text-sm hover:text-white">Terms & Conditions</Link>
          <Link to="/refund" className="text-sm hover:text-white">Cancellation & Refund Policy</Link>
          <Link to="/shipping" className="text-sm hover:text-white">Shipping & Delivery Policy</Link>
          <Link to="/contact" className="text-sm hover:text-white">Contact Us</Link>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-sm text-center">
        © {new Date().getFullYear()} {FIRM_DETAILS.name}. All rights reserved.
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-6">
            ✨ Native WordPress Plugin Available Now
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
            Automate Your Social Media with <span className="text-blue-600">Social Spark AI</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate 30 days of highly engaging, narrative-driven social media content directly inside your WordPress dashboard in under 2 minutes.
          </p>
          <a href={FIRM_DETAILS.paymentLink} className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get the Plugin Now — ₹999
          </a>
          <p className="mt-4 text-sm text-slate-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" /> Secure payment processing via Razorpay
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-slate-600">Generate an entire month of long-form, highly engaging posts formatted perfectly in seconds.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Native WordPress</h3>
              <p className="text-slate-600">No external SaaS subscriptions required. Just paste the shortcode and run it locally on your site.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Storytelling AI</h3>
              <p className="text-slate-600">Our custom AI pipeline uses proven marketing psychology and narrative structures to convert readers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Built by Pandian AI</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            We specialize in advanced AI Layering Architectures, custom n8n node development, and full-service digital marketing. 
            Social Spark AI was born out of our own internal tools used to scale businesses efficiently.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://pandian-ai.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">Our Digital Marketing Services →</a>
            <span className="text-slate-700">|</span>
            <a href="https://github.com/kspandian32-sudo" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">View Open Source Work →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

const PageWrapper = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="min-h-screen bg-slate-50 py-16 px-4">
    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
      <h1 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b">{title}</h1>
      <div className="prose prose-slate max-w-none prose-h2:text-xl prose-h2:mt-8">
        {children}
      </div>
    </div>
  </div>
);

const PrivacyPolicy = () => (
  <PageWrapper title="Privacy Policy">
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    <p>{FIRM_DETAILS.name} ("we", "our", or "us") operates {FIRM_DETAILS.brand}. This Privacy Policy explains how we collect, use, and protect your information.</p>
    <h2>1. Information We Collect</h2>
    <p>We collect information you provide directly to us when you make a purchase, including your name, email address, and payment information (processed securely by Razorpay/Gumroad).</p>
    <h2>2. How We Use Your Information</h2>
    <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and send related information including purchase confirmations and technical notices.</p>
    <h2>3. Data Sharing</h2>
    <p>We do not sell or rent your personal information to third parties. We only share information with payment processors strictly necessary to complete your transaction.</p>
    <h2>4. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at {FIRM_DETAILS.email}.</p>
  </PageWrapper>
);

const Terms = () => (
  <PageWrapper title="Terms & Conditions">
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    <p>These Terms & Conditions govern your use of the Social Spark AI WordPress Plugin provided by {FIRM_DETAILS.name}.</p>
    <h2>1. License</h2>
    <p>Upon purchase, you are granted a non-exclusive, non-transferable license to use the plugin on your own WordPress websites. You may not resell or redistribute the plugin source code.</p>
    <h2>2. API Keys</h2>
    <p>The plugin requires an active OpenAI API key to function. You are solely responsible for obtaining this key and for any charges incurred on your OpenAI account.</p>
    <h2>3. Disclaimer of Warranties</h2>
    <p>The software is provided "as is", without warranty of any kind. We do not guarantee that the plugin will function uninterrupted or error-free.</p>
    <h2>4. Governing Law</h2>
    <p>These terms shall be governed by the laws of India, under the jurisdiction of Telangana courts.</p>
  </PageWrapper>
);

const RefundPolicy = () => (
  <PageWrapper title="Cancellation & Refund Policy">
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    <h2>Digital Products</h2>
    <p>Because the Social Spark AI WordPress Plugin is a digitally delivered product that cannot be physically returned, <strong>all sales are final and non-refundable</strong> once the software has been downloaded.</p>
    <h2>Cancellation</h2>
    <p>As this is a one-time purchase software license (not a recurring subscription), there are no ongoing services to cancel. If you experience technical issues installing the plugin, please contact our support team at {FIRM_DETAILS.email} and we will assist you.</p>
  </PageWrapper>
);

const ShippingPolicy = () => (
  <PageWrapper title="Shipping & Delivery Policy">
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    <h2>Digital Delivery</h2>
    <p>Social Spark AI is a digital software product (WordPress Plugin). No physical goods will be shipped.</p>
    <h2>Delivery Method</h2>
    <p>Upon successful payment processing, the digital `.zip` file containing the plugin will be immediately available for download on the checkout confirmation page. A backup download link will also be automatically sent to the email address provided during checkout.</p>
    <h2>Delivery Timeframe</h2>
    <p>Delivery is instant and automated. In rare cases of payment processing delays, the email may take up to 24 hours to arrive. If you do not receive your product, contact us at {FIRM_DETAILS.email}.</p>
  </PageWrapper>
);

const Contact = () => (
  <PageWrapper title="Contact Us">
    <p>If you have any questions, technical issues, or business inquiries, please reach out to us using the details below.</p>
    <div className="mt-8 space-y-6">
      <div>
        <h3 className="font-bold text-slate-900 mb-1">Legal Entity</h3>
        <p className="text-slate-600">{FIRM_DETAILS.name}</p>
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">Registered Address</h3>
        <p className="text-slate-600">{FIRM_DETAILS.address}</p>
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">Email Support</h3>
        <p className="text-slate-600"><a href={`mailto:${FIRM_DETAILS.email}`} className="text-blue-600 hover:underline">{FIRM_DETAILS.email}</a></p>
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">Phone Support</h3>
        <p className="text-slate-600">{FIRM_DETAILS.phone}</p>
      </div>
    </div>
  </PageWrapper>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
