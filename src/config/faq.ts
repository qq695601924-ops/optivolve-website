export interface FaqItem {
  question: string
  answer: string
  bullets?: string[]
  note?: string
}

export interface FaqSection {
  title: string
  items: FaqItem[]
}

export const FAQ_SECTIONS: FaqSection[] = [
  {
    title: 'General',
    items: [
      {
        question: 'What is Optivolve Digital?',
        answer: 'Optivolve Digital is a financial technology company that provides digital payment infrastructure, payment collection solutions, payment disbursement services, merchant enablement, API integration, risk management technology, and fraud monitoring tools for businesses.',
      },
      {
        question: 'Who can use Optivolve Digital services?',
        answer: 'Our services are designed for businesses, merchants, platforms, financial service providers, and organisations that require secure and reliable digital payment technology solutions. Individual access or merchant onboarding may be subject to verification, compliance review, and service eligibility requirements.',
      },
      {
        question: 'What services does Optivolve Digital provide?',
        answer: 'Optivolve Digital may provide services including:',
        bullets: [
          'Digital payment infrastructure',
          'Payment collection solutions',
          'Payment disbursement solutions',
          'Merchant onboarding support',
          'API integration',
          'Transaction processing support',
          'Risk monitoring and fraud detection tools',
          'Compliance and verification support',
        ],
        note: 'Specific service availability may depend on the customer profile, business model, jurisdiction, commercial agreement, and applicable regulatory requirements.',
      },
      {
        question: 'Is Optivolve Digital a bank?',
        answer: 'No. Optivolve Digital is not a bank. We provide financial technology, payment infrastructure, and related digital payment services. Certain services may involve cooperation with banks, financial institutions, payment networks, technology partners, or other third-party service providers.',
      },
      {
        question: 'Are all services available to every customer?',
        answer: 'No. Service availability depends on business type, risk assessment, compliance review, technical requirements, jurisdiction, and applicable commercial arrangements. Optivolve Digital reserves the right to decline, suspend, or limit services where required by law, regulation, risk management, or internal policy.',
      },
    ],
  },
  {
    title: 'Onboarding and Verification',
    items: [
      {
        question: 'Why do you request business or identity verification documents?',
        answer: 'We may request identity, business, ownership, financial, or compliance-related documents to verify customers, merchants, authorised representatives, and beneficial owners. This helps us comply with applicable legal, regulatory, AML/CFT, fraud prevention, and risk management requirements.',
      },
      {
        question: 'What documents may be required during onboarding?',
        answer: 'Depending on the customer type and service requested, we may request documents such as:',
        bullets: [
          'Company registration documents',
          'Tax registration information',
          'Business address proof',
          'Director or authorised representative information',
          'Beneficial ownership information',
          'CNIC, passport, or other identity documents',
          'Bank account or settlement account details',
          'Business licence or regulatory approval, where applicable',
          'Website, app, product, or business model information',
        ],
        note: 'Additional documents may be requested based on compliance review.',
      },
      {
        question: 'How long does onboarding take?',
        answer: 'Onboarding timelines vary depending on the completeness of the submitted information, the complexity of the business model, technical requirements, compliance review, and third-party processing timelines. Delays may occur where additional documentation, clarification, or regulatory review is required.',
      },
      {
        question: 'Can Optivolve Digital reject an onboarding application?',
        answer: 'Yes. Optivolve Digital may reject an application if the business model, documents, ownership structure, risk profile, compliance status, or service use case does not meet our internal policies, legal requirements, regulatory obligations, or risk standards.',
      },
    ],
  },
  {
    title: 'Compliance and Risk Management',
    items: [
      {
        question: 'Does Optivolve Digital conduct KYC or KYB checks?',
        answer: 'Yes. Where applicable, Optivolve Digital may conduct Know Your Customer (KYC), Know Your Business (KYB), beneficial ownership verification, sanctions screening, politically exposed person screening, and other compliance checks.',
      },
      {
        question: 'Why can a transaction be delayed, rejected, or suspended?',
        answer: 'A transaction may be delayed, rejected, reviewed, or suspended due to:',
        bullets: [
          'Incomplete or incorrect information',
          'Compliance review',
          'KYC or KYB verification requirements',
          'AML/CFT or sanctions screening',
          'Fraud prevention checks',
          'Risk monitoring alerts',
          'Bank or payment network issues',
          'Regulatory requirements',
          'Third-party service provider delays',
        ],
        note: 'Optivolve Digital may request additional information before processing or releasing a transaction.',
      },
      {
        question: 'Does Optivolve Digital monitor transactions?',
        answer: 'Yes. Optivolve Digital may monitor transactions for fraud prevention, risk management, suspicious activity detection, sanctions compliance, AML/CFT obligations, dispute handling, system security, and operational integrity.',
      },
      {
        question: 'Can Optivolve Digital suspend an account or service?',
        answer: 'Yes. We may suspend or terminate access to services where there is suspected fraud, unlawful activity, breach of our Terms and Conditions, security risk, regulatory requirement, non-payment, misuse of services, or failure to provide required compliance information.',
      },
      {
        question: 'What activities are prohibited?',
        answer: 'Users must not use Optivolve Digital services for unlawful, fraudulent, deceptive, high-risk, sanctioned, or unauthorised activities. Prohibited activities include money laundering, terrorist financing, sanctions violations, system abuse, unauthorised access, malware distribution, intellectual property infringement, or any activity that violates applicable law or our Terms and Conditions.',
      },
    ],
  },
  {
    title: 'Payments and Transactions',
    items: [
      {
        question: 'Does Optivolve Digital guarantee successful payment processing?',
        answer: 'No. While we strive to provide reliable and secure services, payment processing may depend on banks, payment networks, telecommunications providers, third-party service providers, user information, regulatory checks, system availability, and risk controls. We do not guarantee that every transaction will be approved or completed.',
      },
      {
        question: 'What happens if a payment fails?',
        answer: 'If a payment fails, the transaction may be marked as failed, rejected, pending, reversed, or subject to further review depending on the payment method, bank response, payment network status, compliance review, and technical process. Customers should contact our support team with the transaction reference number for review.',
      },
      {
        question: 'What information is required for transaction support?',
        answer: 'For transaction-related enquiries, please provide:',
        bullets: [
          'Customer or company name',
          'Transaction reference number',
          'Invoice number, where applicable',
          'Date and time of transaction',
          'Payment amount',
          'Payment method',
          'Description of the issue',
          'Supporting screenshots or documents, where available',
        ],
      },
      {
        question: 'Are payment delays caused by banks or third parties Optivolve Digital\'s responsibility?',
        answer: 'Optivolve Digital is not responsible for delays caused by banks, payment networks, telecommunications operators, financial institutions, cloud providers, payment partners, regulatory checks, or other third-party providers. However, we may assist in reviewing and escalating issues where appropriate.',
      },
    ],
  },
  {
    title: 'API and Technical Integration',
    items: [
      {
        question: 'Does Optivolve Digital provide API integration?',
        answer: 'Yes. Optivolve Digital may provide API integration for eligible customers and merchants, subject to commercial agreement, technical requirements, compliance approval, and service availability.',
      },
      {
        question: 'Is technical support available during integration?',
        answer: 'Yes. Where agreed, Optivolve Digital may provide technical documentation, integration support, testing assistance, and implementation guidance. The scope of support depends on the applicable commercial agreement, SOW, SLA, or service arrangement.',
      },
      {
        question: 'Are API integration or implementation fees refundable?',
        answer: 'Generally, API integration, development, implementation, consulting, or technical work is non-refundable once commenced or completed, unless otherwise agreed in writing or required by applicable law.',
      },
      {
        question: 'Can Optivolve Digital modify or discontinue APIs?',
        answer: 'Optivolve Digital may update, modify, suspend, or discontinue APIs, technical features, or services for security, compliance, operational, regulatory, or commercial reasons. Where practical, we may provide reasonable notice of material changes.',
      },
    ],
  },
  {
    title: 'Privacy and Data Security',
    items: [
      {
        question: 'What personal information does Optivolve Digital collect?',
        answer: 'We may collect personal, business, technical, transaction, payment, compliance, and verification information, including names, contact details, company information, identity documents, business registration details, transaction records, device information, IP addresses, cookies, and information submitted through forms or service interactions.',
      },
      {
        question: 'Why does Optivolve Digital collect personal and business information?',
        answer: 'We collect and use information to provide services, process transactions, support customers, verify identity, onboard merchants, comply with legal and regulatory obligations, prevent fraud, monitor risk, maintain system security, improve services, and communicate operational updates.',
      },
      {
        question: 'Does Optivolve Digital share customer information?',
        answer: 'We may share information with banks, financial institutions, payment service providers, payment networks, cloud hosting partners, technology providers, auditors, professional advisers, regulators, law enforcement agencies, and other parties where necessary for service delivery, compliance, security, or legal purposes.',
        note: 'We do not sell or rent personal information to third parties.',
      },
      {
        question: 'Can data be transferred outside Pakistan?',
        answer: 'Where required for service delivery, security, compliance, technical operations, or support, information may be processed or stored outside Pakistan, subject to applicable law, regulatory requirements, and appropriate contractual, technical, and organisational safeguards.',
      },
      {
        question: 'How long does Optivolve Digital retain data?',
        answer: 'We retain personal, business, transaction, KYC, KYB, settlement, compliance, audit, and dispute-related records for as long as necessary to provide services, comply with legal and regulatory obligations, resolve disputes, prevent fraud, and enforce contractual rights. Certain records may be retained beyond the end of the customer relationship where required by law, regulation, AML/CFT obligations, tax, accounting, or audit requirements.',
      },
      {
        question: 'How does Optivolve Digital protect data?',
        answer: 'We implement administrative, technical, and physical safeguards designed to protect information against unauthorised access, disclosure, alteration, loss, or destruction. However, no electronic transmission or storage method can be guaranteed to be completely secure.',
      },
    ],
  },
  {
    title: 'Service Availability and Support',
    items: [
      {
        question: 'Does Optivolve Digital guarantee uninterrupted service?',
        answer: 'No. While we aim to maintain reliable service availability, interruptions may occur due to scheduled maintenance, system upgrades, cybersecurity incidents, regulatory actions, third-party failures, banking network issues, telecommunications failures, or force majeure events.',
      },
      {
        question: 'What should I do if I experience a technical issue?',
        answer: 'Please contact our support team with a clear description of the issue, affected service, transaction reference number if applicable, screenshots, error messages, and the time the issue occurred.',
      },
      {
        question: 'How can I contact Optivolve Digital?',
        answer: 'For general enquiries, support, refund requests, privacy questions, or service-related issues, please contact:',
        note: 'Email: customerservices@optivolvedigital.com',
      },
      {
        question: 'Can these FAQs change?',
        answer: 'Yes. Optivolve Digital may update these FAQs from time to time to reflect changes in services, policies, legal requirements, regulatory obligations, or operational processes. Updated information will be published on our website.',
      },
    ],
  },
]
