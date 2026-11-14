export const engagements = [
  {
    slug: 'citi-ai-credit-card-issuance',
    index: '01',
    domain: 'Banking',
    title: 'Citi AI-assisted online credit card issuance',
    client: 'Citibank',
    where: 'Altimetrik',
    when: 'June 2024 – Present',
    summary:
      'Led an AI-powered conversational credit card journey covering application, verification, approval and issuance. Turnaround moved from 3–5 days to within 24 hours.',
    tags: ['Conversational AI', 'Credit issuance', 'Product KPIs'],
    problem:
      'At Citi, I led an AI-powered conversational credit card journey covering application, verification, approval and issuance. The original process took 3–5 days. I focused on helping customers complete the application and understand what was holding it up, while keeping the bank’s credit and verification controls in the journey.',
    decision:
      'I chose guided conversational intake to reduce avoidable back-and-forth. A static form offered a familiar path, while agent-led intake suited complex applications. The chatbot guided customers through the application and explained the next step. Approved bank systems and review teams retained authority for eligibility, underwriting, exceptions and issuance. The 24-hour turnaround is a product result. The product workflow needs its own policy and compliance review in each market.',
    plan: [
      'Map the time spent in intake, verification, credit decision and issuance. Log milestones so Operations can identify whether delays come from missing information, external services or manual review.',
      'Use secure fields for sensitive information. Apply the bank’s Customer Identification Program, including approved identity verification methods and exception handling. For the fast path, require resolved identity and bank-required fraud and sanctions checks before release.',
      'Have the underwriting service apply approved credit policy consistently, including consideration of the applicant’s ability to make minimum payments based on income or assets and current obligations.',
      'Present applicable application and account-opening disclosures. Capture the disclosure version and delivery event. Route incomplete applications and adverse decisions through approved notice workflows.',
      'Pilot with an eligible cohort. When verification fails, disclosures cannot be delivered, or a dependency is down, keep the application in a recoverable state, show an accurate next step and route it to the owning team. Test duplicate submissions and issuance retries.',
    ],
    criteria: [
      'Given a complete application clears the approved checks and is approved, when issuance succeeds, the system records the issuance timestamp and shows the actual status. Physical delivery is tracked separately.',
      'Given a required verification or policy check is unresolved, when the fast path evaluates the application, it holds issuance and records the exception for review.',
      'Given a completed application receives an adverse credit decision, when the notice workflow starts, it uses the actual decision reasons and issues the applicable notice within the required timeframe.',
      'Given an issuance request times out, when the system retries, it checks the existing application and issuance state before creating a card record.',
    ],
    outcome:
      'Reported delivery outcome: turnaround improved from 3–5 days to within 24 hours. For ongoing measurement, define the 24-hour metric from completed application to confirmed issuance for eligible approved applications. Track median and 90th-percentile turnaround, the share issued within 24 hours, and end-to-end time across all submitted applications so exception delays remain visible. Guardrails: notice timeliness, exception ageing, identity verification failures, duplicate issuance, fraud losses and fair-lending monitoring through approved processes.',
  },
  {
    slug: 'citi-issuance-and-servicing',
    index: '02',
    domain: 'Banking',
    title: 'Citi credit card issuance and servicing',
    client: 'Citibank',
    where: 'Altimetrik',
    when: 'June 2024 – Present',
    summary:
      'Led the conversational issuance journey, then extended the product into fraud scoring, servicing verification and dispute intake after cards were in customers’ hands.',
    tags: ['Fraud scoring', 'Servicing', 'Disputes'],
    problem:
      'I led the AI-powered conversational credit card issuance journey, from application and verification to approval and issuance. My focus was to reduce turnaround and make the next step clear for customers throughout the process. A multi-stage application can stall when customers don’t know what’s missing or what happens next. After issuance, a separate challenge emerges: static fraud rules can block genuine spending, and synthetic voice increases the risk of relying on callers’ voices for trust.',
    decision:
      'For the fraud extension, I would compare tuning rules, replacing them with a model, and combining the two. I chose behavioral scoring alongside policy rules and fallbacks. For servicing, synthetic-audio signals prompt approved verification, with agents following existing policy. For disputes, start with evidence gathering and summaries before automating decisions.',
    plan: [
      'Baseline authorization decisions, false declines and analyst queues by market and cohort.',
      'Run transaction scoring in shadow mode, then pilot in one eligible cohort.',
      'Trial a call-center verification prompt with trained agents.',
      'Pilot structured dispute intake and evidence collection for one dispute type. Expand only after Risk and Operations review guardrails.',
    ],
    criteria: [
      'Given a call is flagged as suspicious, when an agent requests a sensitive account change, then the workflow requires approved additional verification and records the agent’s decision.',
      'If model scoring is unavailable, authorization uses the approved fallback and records it.',
    ],
    outcome:
      'Delivered issuance outcome: processing moved from 3–5 days to within 24 hours. Illustrative fraud pilot targets: 15% relative reduction in fraud losses per payment volume, with false declines and P99 scoring latency within agreed limits. For disputes: test 45% straight-through resolution for eligible low-risk cases and track reopen rate, credit leakage and deadline adherence. For agent assist: monitor handling time, summary edits and reason-code coverage. Review drift and performance by cohort before expansion.',
  },
  {
    slug: 'citi-faq-support-chatbot',
    index: '03',
    domain: 'Banking',
    title: 'Citi credit card FAQ support chatbot',
    client: 'Citibank',
    where: 'Altimetrik',
    when: 'June 2024 – Present',
    summary:
      'A conversational support assistant for routine card questions, with authentication before account data and a direct route to people for fraud, disputes and complaints.',
    tags: ['Conversational AI', 'Customer support', 'Authentication'],
    problem:
      'Customers contact card support for routine questions such as when a payment is due, how to find a statement or how to activate a card. These enquiries can be resolved quickly when guidance is accurate. A customer reporting unfamiliar activity or a billing error needs a different path, with a clear way to report the issue and get help.',
    decision:
      'I would compare a searchable help centre, a menu-based bot and a conversational support assistant. I would start with a conversational assistant that answers from approved card content, retrieves account-specific data only after authentication and hands complex cases to the right team. Public FAQs would cover general guidance. Secure flows would handle account details such as the actual due date or statement link. Disputes, suspected fraud, complaints and customer requests for a person would have direct routes to assisted support.',
    plan: [
      'Review support reasons and start with common topics that have clear answers. Baseline repeat contacts, time to resolution and transfers by topic.',
      'Build an approved knowledge base with an owner and review date for each article. Test how the bot handles ambiguous questions, stale content and unavailable account data.',
      'Connect secure account lookups for a small set of read-only tasks. Pass relevant context to agents through the approved servicing channel so customers can continue the conversation.',
      'Design routing for lost cards, suspected fraud and billing errors. Preserve access to the issuer’s designated reporting channel. Show a case reference only after the servicing system confirms intake.',
      'Test scripted and real-world questions with Support, Risk and Compliance. Pilot with a small cohort, review failed answers and misroutes, and expand once resolution improves without additional customer harm.',
    ],
    criteria: [
      'Given a customer asks how to activate a card, when an approved answer is available, the bot provides the current steps and a link to the secure activation flow.',
      'Given a customer asks for their payment due date before signing in, when the bot receives the request, it prompts for authentication before retrieving any account details.',
      'Given a customer says “I don’t recognise this charge”, when the bot identifies possible fraud or a dispute, it offers the approved reporting route or transfers to the correct queue and provides a confirmation only if intake succeeds.',
      'Given a customer asks for an agent or the bot cannot verify an answer, when self-service reaches that point, it offers a handoff or displays the available support channels and hours.',
    ],
    outcome:
      'Proposed pilot. I would measure confirmed resolution without a repeat contact for the same issue within seven days, alongside median time to resolution. I would review routine questions and escalated issues by topic. Guardrails: audited answer accuracy, correct routing for fraud and disputes, successful handoffs, reopen rate, customer satisfaction and exposure of account information. Treat guardrail breaches as a reason to pause the affected intent and review it before expanding.',
  },
  {
    slug: 'aldo-omnichannel-ai-try-on',
    index: '04',
    domain: 'E-commerce',
    title: 'ALDO omnichannel commerce and AI try-on',
    client: 'ALDO',
    where: 'Tata Consultancy Services',
    when: 'Through June 2024',
    summary:
      'Responsive e-commerce work for ALDO, with reliable availability, checkout and fulfillment ahead of an opt-in AI try-on experiment.',
    tags: ['Omnichannel', 'Fulfillment', 'AI try-on'],
    problem:
      'I developed responsive e-commerce features for ALDO and later worked in product ownership. This case connects the broader commerce transformation with a mobile experiment I would prioritise once the purchase journey was reliable. Peak demand exposed constraints in legacy commerce systems. Fragmented stock across stores, warehouses and online made availability and fulfillment harder to promise. Local markets also needed flexibility in payments, promotions and logistics.',
    decision:
      'I would prioritise reliable size availability, checkout and fulfillment before AI try-on. A front-end refresh improves browsing, while headless commerce and order-management integrations address delivery bottlenecks and support independent storefront updates. For try-on, compare richer imagery with a camera-based visual preview and test the incremental value of the camera experience.',
    plan: [
      'Baseline mobile funnel drop-off, stock mismatches and peak checkout errors.',
      'Prioritise size-level stock and fulfillment by market and validate them with store and operations teams.',
      'Load-test checkout and inventory updates, then roll out by market.',
      'Pilot opt-in AI try-on in the app for one footwear collection. Keep standard imagery and size guidance available when camera access is declined.',
    ],
    criteria: [
      'Given a shopper denies camera access, when they return to the product page, then images, size selection and add-to-bag remain usable.',
      'Given selected stock runs out before checkout, then the shopper sees updated availability and eligible fulfillment options.',
    ],
    outcome:
      'Work & Co reported a 20% lift in mobile conversions after six months and a 17% lift in brand perception in the first quarter. In a separate Southeast Asia program, Codilar reported up to 150% conversion growth, double order-processing capacity and a 15% lower cost of ownership. For the try-on A/B test use completed purchases per eligible visitor, with returns, page performance and camera opt-out as guardrails. Describe try-on as a style preview and keep sizing guidance separate.',
  },
  {
    slug: 'ecommerce-interactive-shopping',
    index: '05',
    domain: 'E-commerce',
    title: 'Interactive shopping for an e-commerce platform',
    client: 'E-commerce platform',
    where: 'Tata Consultancy Services',
    when: 'Product study',
    summary:
      'Interactive product previews, festival themes and frequently bought together bundles so shoppers can hear, see and complete a purchase with fewer unanswered questions.',
    tags: ['Product previews', 'Campaigns', 'Bundles'],
    problem:
      'Shoppers can see what a product looks like, but static product pages leave important questions unanswered. A doorbell listing cannot tell a shopper how the chime sounds, and a single photo cannot show how decorative lights look in different modes. During festivals, shoppers also spend time searching for relevant products and adding related items individually. I would address those gaps to help more shoppers make a confident purchase.',
    decision:
      'Compare richer photos and descriptions, interactive product previews, and promotional discovery through seasonal themes and bundles. I would start with interactive previews on a small set of products where sound or lighting changes the purchase decision. I would then test festival themes and frequently bought together bundles independently to see which changes help customers complete an order.',
    plan: [
      'Baseline product-page conversion, add-to-cart rate, purchase completion and returns for doorbells and decorative lights. Review search terms, return reasons and support questions to choose the first products.',
      'Add a tap-to-play doorbell preview with a stop control. Record each supported chime against the correct SKU and label the audio as a sample. Keep playback off by default.',
      'Add White, Warm and Yellow radio buttons for a Diwali LED listing. Use verified reference images for supported modes and show which mode is selected. Keep the selected purchase variant independent of the preview.',
      'Use remote configuration to schedule Diwali and Valentine Week themes by market and local time. Test a week-long theme with optional daily collections, while keeping search, cart and checkout consistent.',
      'Build editable bundles using items customers frequently buy together. Start with a few combinations, show the individual prices and bundle total, and recheck availability before adding items to the cart.',
    ],
    criteria: [
      'Given a doorbell sample is available, when the shopper taps Play and then Stop, the correct chime plays and stops. Playback also stops when the shopper leaves the page.',
      'Given an LED listing supports three modes, when the shopper selects Warm, the preview updates and the selection is accessible by keyboard and screen reader. The SKU in the cart stays the same.',
      'Given a festival campaign expires in a market, when the shopper next opens the app, the default theme appears and the existing cart remains available.',
      'Given a bundle item becomes unavailable, when the shopper adds the bundle, the app identifies the unavailable item and asks the shopper to confirm the revised selection and total.',
    ],
    outcome:
      'Proposed experiment. I would compare each feature with the existing experience and start with the products and markets most likely to benefit. Primary measures: completed purchases per eligible product-page visitor for previews, completed purchases per eligible session for themes, and additional items purchased per eligible order for bundles. Guardrails: product returns and expectation-related contacts, mobile page-load time, checkout completion, unavailable bundle items and gross margin per eligible order. Evaluate each feature separately and expand where purchase outcomes improve and guardrails stay within agreed limits.',
  },
  {
    slug: 'ge-healthcare-portrait-mobile',
    index: '06',
    domain: 'Healthcare',
    title: 'GE HealthCare Portrait Mobile',
    client: 'GE HealthCare',
    where: 'Tata Consultancy Services',
    when: 'Product Owner years',
    summary:
      'Continuous wearable monitoring of respiratory rate, oxygen saturation and pulse rate, with a clear split between a clinical alarm and a technical interruption.',
    tags: ['Clinical workflow', 'Wearable monitoring', 'UAT'],
    problem:
      'As a Product Owner supporting GE HealthCare, I worked on clinical workflow requirements, backlog prioritisation and user acceptance testing. Portrait Mobile provides continuous dual-vector respiratory rate, oxygen saturation and pulse-rate monitoring using wearable wireless sensors. Ward teams need visibility into vital-sign changes while patients move. Nurses also need to distinguish a clinical alarm from a technical interruption, particularly during rounds and shift changes.',
    decision:
      'Intermittent checks allow mobility with gaps in visibility. Tethered bedside monitoring provides continuous readings and limits movement. Wearable monitoring supports both needs. My proposed interface pairs the vital-sign trend with signal status and the last valid reading so a nurse can interpret them together.',
    plan: [
      'Map sensor setup, patient association, ambulation, signal interruption and handover with ward staff.',
      'Prioritise reliable setup and readable trends before adding secondary features.',
      'Run simulated UAT for movement, lost signal, recovery and handover.',
      'Pilot with one ward and review early incidents with nursing, clinical engineering and quality teams.',
    ],
    criteria: [
      'Given a sensor connection is interrupted, when the viewer stops receiving readings, then it shows the interruption and time of the last valid reading so the nurse can distinguish stale data from live data.',
    ],
    outcome:
      'GE HealthCare documents continuous trends and actionable alarms alongside patient mobility. For a ward pilot, I would measure valid monitoring coverage during movement, setup completion time, technical alarms per patient-day and clinician-rated actionability. Any claim about earlier intervention would require supporting clinical evidence.',
  },
  {
    slug: 'ge-healthcare-edge-ai-infant-monitoring',
    index: '07',
    domain: 'Healthcare',
    title: 'GE HealthCare Edge AI for infant monitoring',
    client: 'GE HealthCare',
    where: 'Tata Consultancy Services',
    when: 'Product concept',
    summary:
      'An on-device neonatal monitoring concept for posture, crying and objects in the bed, starting with a posture cue and a clear “unable to assess” state.',
    tags: ['Edge AI', 'Neonatal monitoring', 'Clinical safety'],
    problem:
      'I applied my healthcare Product Owner experience to a neonatal monitoring concept. GE HealthCare and NXP demonstrated on-device AI exploring infant posture, crying and objects in the bed. Continuous feeds create more information for nurses to monitor. A useful alert needs to direct attention without creating alarm fatigue or implying certainty when the view is obstructed.',
    decision:
      'I would compare an always-on video feed, alerting on every detected cue, and a small set of clinician-reviewed events. I’d start with an on-device posture cue and a clear “unable to assess” state. Crying and object cues would remain discovery candidates until staff can judge whether each helps them act.',
    plan: [
      'Agree event definitions and acceptable workload with neonatal staff and clinical safety leads.',
      'Test a bedside review prototype with simulated scenarios including low light, partial obstruction and routine care.',
      'Evaluate on-device processing and retention controls.',
      'Run an observational pilot before exposing notifications in care workflows, with expansion subject to clinical, privacy and quality review.',
    ],
    criteria: [
      'Given the camera view is obstructed, when the device cannot assess posture, then the UI shows “Unable to assess” and records the reason.',
      'When a candidate event is detected, the nurse can acknowledge it and record a review outcome.',
    ],
    outcome:
      'The public milestone was a proof of concept. Pilot measures would include reviewed-event precision, missed events in the reference set, alerts per monitored hour, time to review and frequency of “unable to assess” states. Review results across lighting and care scenarios.',
  },
];
