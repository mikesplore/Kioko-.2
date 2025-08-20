import React, { useState } from 'react';

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const TermsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Terms & Conditions</h2>
            <button 
              onClick={() => setShowTerms(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="text-gray-800 space-y-4">
            <p className="text-sm text-gray-600"><strong>Effective Date:</strong> [Insert Date]<br/><strong>Last Updated:</strong> [Insert Date]</p>
            
            <section>
              <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
              <p>By using Kioko Enterprise delivery services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">2. Age Restriction and Eligibility</h3>
              <h4 className="font-semibold mb-1">2.1 Minimum Age Requirement</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>You must be at least <strong>18 years of age</strong> to use our services</li>
                <li>Valid government-issued photo identification is required for all deliveries</li>
                <li>Age verification is mandatory for all alcohol deliveries</li>
              </ul>
              <h4 className="font-semibold mb-1">2.2 Account Registration</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>You must provide accurate, current, and complete information</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>One account per person is permitted</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">3. Alcohol Delivery Services</h3>
              <h4 className="font-semibold mb-1">3.1 Legal Requirements</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>All alcohol deliveries are subject to local, state, and federal laws</li>
                <li>We reserve the right to refuse delivery to anyone who cannot provide valid ID</li>
                <li>Delivery personnel will verify age and sobriety at the time of delivery</li>
              </ul>
              <h4 className="font-semibold mb-1">3.2 Restrictions</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>No delivery to visibly intoxicated individuals</li>
                <li>No delivery to anyone under 21 years of age (where applicable by law)</li>
                <li>No delivery to prohibited locations (schools, government buildings, etc.)</li>
                <li>We comply with all local alcohol delivery time restrictions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">4. Delivery Services</h3>
              <h4 className="font-semibold mb-1">4.1 Service Areas</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>Delivery is available within designated service areas only</li>
                <li>Delivery times and availability may vary by location</li>
              </ul>
              <h4 className="font-semibold mb-1">4.2 Delivery Requirements</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Someone 18+ must be present to receive the delivery</li>
                <li>Valid photo ID must be presented upon request</li>
                <li>We reserve the right to refuse delivery if ID cannot be verified</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">5. Payment and Pricing</h3>
              <h4 className="font-semibold mb-1">5.1 Pricing</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>All prices are subject to change without notice</li>
                <li>Delivery fees, taxes, and tips are additional to item costs</li>
                <li>Payment is due at the time of order</li>
              </ul>
              <h4 className="font-semibold mb-1">5.2 Accepted Payment Methods</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Credit/debit cards</li>
                <li>Digital payment platforms</li>
                <li>Cash (where available)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">6. Prohibited Uses</h3>
              <p>You may not use our services to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Violate any local, state, or federal laws</li>
                <li>Deliver alcohol to minors</li>
                <li>Resell delivered products for commercial purposes</li>
                <li>Use false identification or impersonate another person</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">7. Limitation of Liability</h3>
              <h4 className="font-semibold mb-1">7.1 Service Limitations</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>We are not liable for delays due to weather, traffic, or other circumstances beyond our control</li>
                <li>Our liability is limited to the cost of the delivered items</li>
              </ul>
              <h4 className="font-semibold mb-1">7.2 Product Quality</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>We are not responsible for product defects from third-party vendors</li>
                <li>All returns and exchanges must be handled directly with the original retailer</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">8. Privacy and Data Protection</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Your personal information is protected according to our Privacy Policy</li>
                <li>We collect and use data necessary to provide delivery services</li>
                <li>Age verification information is securely stored and protected</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">9. Termination</h3>
              <p>We reserve the right to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Suspend or terminate accounts for violation of these terms</li>
                <li>Refuse service to anyone at our discretion</li>
                <li>Modify or discontinue services with notice</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">10. Changes to Terms</h3>
              <p>We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.</p>
            </section>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
              <p className="text-yellow-800 font-semibold">Important Notice:</p>
              <p className="text-yellow-700">These terms are specifically designed to comply with alcohol delivery regulations. Users must be 18+ to use our platform and 21+ to receive alcohol deliveries (where required by law).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PrivacyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
            <button 
              onClick={() => setShowPrivacy(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="text-gray-800 space-y-4">
            <p className="text-sm text-gray-600"><strong>Effective Date:</strong> [Insert Date]<br/><strong>Last Updated:</strong> [Insert Date]</p>
            
            <section>
              <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
              <p>Kioko Enterprise ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our delivery services.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">2. Information We Collect</h3>
              <h4 className="font-semibold mb-1">2.1 Personal Information</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li><strong>Identity Verification:</strong> Full name, date of birth, government-issued ID details</li>
                <li><strong>Contact Information:</strong> Phone number, delivery address</li>
                <li><strong>Payment Information:</strong> Credit/debit card details, billing address</li>
                <li><strong>Account Information:</strong> Username, password, order history</li>
              </ul>
              <h4 className="font-semibold mb-1">2.2 Age Verification Data</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li><strong>Government ID:</strong> We scan and verify government-issued photo identification</li>
                <li><strong>Biometric Verification:</strong> Face matching technology for ID verification</li>
                <li><strong>Age Confirmation:</strong> Date of birth and age calculation records</li>
              </ul>
              <h4 className="font-semibold mb-1">2.3 Automatically Collected Information</h4>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Location Data:</strong> GPS coordinates for delivery purposes</li>
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                <li><strong>Usage Data:</strong> App interactions, order patterns, delivery preferences</li>
                <li><strong>Cookies:</strong> Website usage, preferences, and session information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">3. How We Use Your Information</h3>
              <h4 className="font-semibold mb-1">3.1 Service Delivery</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>Process and fulfill your delivery orders</li>
                <li>Verify your identity and age for alcohol deliveries</li>
                <li>Communicate with you about your orders</li>
                <li>Provide customer support</li>
              </ul>
              <h4 className="font-semibold mb-1">3.2 Legal Compliance</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>Comply with alcohol delivery regulations</li>
                <li>Maintain records required by law</li>
                <li>Verify age and identity as required by regulations</li>
                <li>Report to authorities when legally required</li>
              </ul>
              <h4 className="font-semibold mb-1">3.3 Business Operations</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Improve our services and user experience</li>
                <li>Analyze usage patterns and trends</li>
                <li>Prevent fraud and unauthorized access</li>
                <li>Marketing and promotional communications (with consent)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">4. Information Sharing and Disclosure</h3>
              <h4 className="font-semibold mb-1">4.1 Third-Party Service Providers</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li><strong>Payment Processors:</strong> To process payments securely</li>
                <li><strong>Delivery Partners:</strong> To fulfill delivery requests</li>
                <li><strong>Identity Verification Services:</strong> For age and ID verification</li>
                <li><strong>Cloud Storage Providers:</strong> For secure data storage</li>
              </ul>
              <h4 className="font-semibold mb-1">4.2 Legal Requirements</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>When required by law or regulation</li>
                <li>To comply with court orders or legal proceedings</li>
                <li>To protect our rights and prevent illegal activities</li>
                <li>In emergency situations to protect safety</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">5. Age Verification and Alcohol Delivery</h3>
              <h4 className="font-semibold mb-1">5.1 Mandatory Verification</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>All users must verify they are 18+ to use our platform</li>
                <li>Alcohol orders require additional 21+ verification (where applicable)</li>
                <li>ID verification is conducted at account creation and delivery</li>
              </ul>
              <h4 className="font-semibold mb-1">5.2 ID Storage and Security</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>ID images are encrypted and securely stored</li>
                <li>Access is limited to authorized personnel only</li>
                <li>Data is retained as required by law</li>
                <li>Automatic deletion after legal retention period</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">6. Data Security</h3>
              <h4 className="font-semibold mb-1">6.1 Security Measures</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>Industry-standard encryption for all data transmission</li>
                <li>Secure servers with restricted access</li>
                <li>Regular security audits and updates</li>
                <li>Employee training on data protection</li>
              </ul>
              <h4 className="font-semibold mb-1">6.2 ID Protection</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Government ID data is encrypted using AES-256 encryption</li>
                <li>Biometric data is hashed and cannot be reverse-engineered</li>
                <li>Access logs are maintained for all ID verification activities</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">7. Your Privacy Rights</h3>
              <h4 className="font-semibold mb-1">7.1 Access and Control</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li><strong>Access:</strong> Request copies of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data in machine-readable format</li>
              </ul>
              <h4 className="font-semibold mb-1">7.2 Communication Preferences</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Opt-out of marketing communications</li>
                <li>Choose notification preferences</li>
                <li>Update contact information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">8. Data Retention</h3>
              <h4 className="font-semibold mb-1">8.1 General Information</h4>
              <ul className="list-disc list-inside mb-2 space-y-1">
                <li>Account information: Retained while account is active</li>
                <li>Order history: Retained for 7 years for business records</li>
                <li>Payment information: Not stored (processed through secure third parties)</li>
              </ul>
              <h4 className="font-semibold mb-1">8.2 ID Verification Data</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Government ID images: Retained for 3 years as required by law</li>
                <li>Age verification records: Retained for regulatory compliance</li>
                <li>Biometric data: Automatically deleted after successful verification</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">9. Children's Privacy</h3>
              <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18. If we discover that we have collected information from a child under 18, we will delete it immediately.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">10. Changes to Privacy Policy</h3>
              <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Posting the updated policy on our website</li>
                <li>Sending notifications to registered users</li>
                <li>In-app notifications</li>
              </ul>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-blue-800 font-semibold">Important:</p>
              <p className="text-blue-700">We take the protection of your personal information seriously, especially ID verification data required for alcohol delivery compliance. Your trust is essential to our business.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-4">Kioko Enterprise</h3>
              <p className="text-gray-400">
                Fast, reliable delivery services for modern businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setShowTerms(true)} 
                    className="text-gray-400 hover:text-white transition text-left"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowPrivacy(true)} 
                    className="text-gray-400 hover:text-white transition text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                <p>123 Delivery Street</p>
                <p>San Francisco, CA 94107</p>
                <p className="mt-2">hello@oaks.delivery</p>
                <p>+1 (555) 123-4567</p>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Kioko Enterprise. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showTerms && <TermsModal />}
      {showPrivacy && <PrivacyModal />}
    </>
  );
};

export default Footer;