---
title: "DPI Deep Dive — Sunday | September 06, 2026"
date: 2026-09-06T08:30:00+05:30
draft: false
tags: ["DPI", "Deep Dive", "Layer: Sunday"]
categories: ["DPI Deep Dive"]
description: "Weekly analysis of Sunday layer in India's Digital Public Infrastructure"
---

# DPI Deep Dive — Sunday | September 06, 2026

---
title: "DPI Deep Dive — Sunday | September 06, 2026"
date: 2026-09-06T08:30:00+05:30
draft: false
tags: ["DPI", "Deep Dive", "Layer: Sunday"]
categories: ["DPI Deep Dive"]
description: "Weekly analysis of Sunday layer in India's Digital Public Infrastructure"
---

# DPI Deep Dive — Sunday | September 06, 2026

Layer 7 — Security, Privacy & Trust — had an unusually revealing week. The through-line across August 30–September 6 is that **trust is now the binding constraint on India's digital public infrastructure**, and it is being tested simultaneously on four fronts: the advertising systems of global platforms quietly becoming a malware delivery channel into Indian phones; a security researcher going on strike against the state's vulnerability-handling machinery; and two separate decisions — one on Alipay+ and one on Huawei/ZTE kit — showing that national security considerations are now hard-coded into the plumbing of payments and telecom. Meanwhile, the DPDP Act quietly crossed from statute into bureaucracy, with the first state government building actual implementation machinery.

---

## 1. The Ad-Tech Attack Vector: Government Flags, Meta Deletes — Eventually

The week's most consequential consumer-protection story began, as usual, with a government advisory that had to be issued twice to work. The National Cybercrime Threat Analytics Unit (NCTAU) under I4C warned on September 1 that misleading Facebook and Instagram advertisements under names like Night Play, Reloop, Kyss, Riva, Vima, Nexo and Vixa were redirecting users to malicious Android apps that abuse Accessibility permissions to take control of devices, capture OTPs and banking PINs, and move money without the owner's knowledge. [^1] [^1] J&K Police issued a parallel warning the same day. [^2] [^2]

What makes this worth more than a routine fraud alert is the distribution mechanism, and the timeline. According to Reuters, Meta removed dozens of the ads after the Indian government's advisory — but reporters then found at least 39 of the same fraud-app ads still running, and those came down only after Reuters asked about them directly. [^3] [^3] The apps were capable of reading one-time passwords straight off the device — the second factor that India's entire banking security model leans on — which means a successful infection defeats the 2FA architecture on which UPI, netbanking and card transactions all depend.

India is Meta's largest user market, and the country recorded close to $2.4 billion in cyber fraud losses in 2025. [^4] [^3] An app in a store must be found by its victim; a paid ad is *delivered* to people the ad system predicts will engage. That inverts the usual defence: the platform's targeting machinery works for the fraudster too.

**The cross-layer angle:** This is a Layer 7 failure with a Layer 2 payload. Every OTP harvested is a UPI or bank account opened from the inside. It also pressures the IT Rules' due-diligence obligations for intermediaries — the government's advisory-and-ask-twice cycle suggests the current enforcement posture catches campaigns after launch, not before. The consumer question is blunt: how much harmful advertising gets caught by the platform's own systems, versus discovered by everyone else? [^2]

## 2. Two to Three Hundred Unreported Vulnerabilities: A Researcher's Trust Strike

A teenage ethical hacker has put India's vulnerability-disclosure machinery on blast. Nisarga Adhikary — the researcher whose February 2026 disclosure of a hardcoded master password and exploitable OTP bypass in CBSE's On-Screen Marking portal triggered a national scandal and, eventually, a leadership reshuffle at CBSE — told Times Now Digital that he is now sitting on **200–300 unreported vulnerabilities in Indian government portals**, and will not disclose them to CERT-In until MeitY responds to him. [^5] [^4]

His charges deserve to be read carefully, because they are structural, not personal grievances. He alleges that of the hundreds of flaws he has flagged, fewer than 1–2% were actually fixed; that he received confirmations of patches that turned out to be false; that the CBSE portal's flaws remained unpatched even after the public fallout; and that a 2025 telecom-sector breach exposing billions of records with Aadhaar data linked through telecom infrastructure was never credibly investigated by CERT-In. [^5] [^4] Notably, he distinguishes the Ministry of Home Affairs, which engaged him directly and quietly fixed a portal, from CERT-In, which he says gave him three months of near-silence after his February report. [^4]

The CBSE OSM episode was already the stress test case: a single researcher with a browser found mark-tampering capability in a national exam portal, and the institutional response was an investigation committee that has produced no findings. [^4] Now the same researcher is pricing his future cooperation.

**The cross-layer angle:** This is the darkest kind of Layer 7 story because the failure mode is *withheld disclosure*. Good-faith researchers are the only reason most government portal flaws get fixed at all; a hostile actor who finds the same flaws does not file a report. If CERT-In's handling converts collaborators into silent holders of live critical vulnerabilities across education portals (Layer 5), exam infrastructure and beyond, the state's attack surface quietly expands. India still has no functioning coordinated vulnerability disclosure framework with statutory teeth or researcher protections — this week demonstrated the cost of that absence.

## 3. Trust as Trade Policy: The Alipay+–UPI Link Stalled

Reuters reported on September 3 that India has stalled Alipay+'s proposal to link with UPI for cross-border transactions, over national security concerns and questions about the storage and use of customer data. [^5] The link would have let Indian travellers pay at Alipay+'s 150-million-merchant network across China, Hong Kong and parts of Asia. Three sources familiar with the discussions pointed to the proposal's Chinese links, data-security risks and potential misuse of customer data as the sticking points. [^6] [^5]

The decision continues a clear arc: the 2020 post-Galwan purge of Chinese payment apps, the trusted-source regime for telecom gear, and now a security-first posture on cross-border interoperability. What's notable in 2026 is that *interoperability itself* — normally the sacred word of DPI evangelism — is being treated as a data-flow decision with attack surface, not just a commercial one. Every cross-border link is a pipeline for transaction metadata tied to Indian identity.

**The cross-layer angle:** This is Layer 2 (Payments) being governed by Layer 7 (Trust) logic. It also has a consumer cost: Indian travellers in China will keep paying through more expensive rails while negotiators work out where the data sits. Security hawks and DPI advocates should be honest about that trade-off rather than pretending the stall is costless.

## 4. Rip and Replace: The $3 Billion Question of Network Trust

The Department of Telecommunications, working for the Ministry of Home Affairs, has begun gathering detailed information from telecom operators on their exposure to legacy Chinese equipment from Huawei and ZTE — the first concrete step toward an India-style "rip and replace" programme for 4G and fixed networks, reported September 2. [^7] [^6] [^7] Moneycontrol's sources indicate replacing the gear could cost Airtel and Vodafone Idea up to $3 billion, [^8] and analysts expect Ericsson, Nokia, Samsung, Tejas Networks and domestic vendors to be the beneficiaries of any replacement cycle. [^9] [^7] [^8]

Because Chinese vendors were excluded from 5G under the trusted-source regime imposed in June 2021, the exercise targets the older installed base — the networks that actually carry most of India's traffic today. [^6] The open questions are who pays (operators, taxpayers via a US-style subsidy model, or consumers via tariffs) and how long a replacement cycle takes when it touches thousands of sites. [^8]

**The cross-layer angle:** Every UPI transaction, DigiLocker fetch and Aadhaar eKYC call rides on this physical layer. A $3 billion security-driven capex program will eventually show up somewhere in the cost stack of digital services — likely in telecom tariffs, which feed directly into the affordability of connectivity that Layer 1 and Layer 2 depend on. Security spend is not free; the deep dive question for the coming months is whether its incidence lands on consumers regressively.

## 5. DPDP Gets a Bureaucracy: Delhi's Nodal Officers and the November Clock

The DPDP Act moved from statute to administrative reality this week — at the state level first. The Delhi government announced it will designate **Data Protection Nodal Officers in every department** and issue detailed standards for handling personal information, with IT Minister Pankaj Kumar Singh framing the mandate around the citizen data that flows through ration cards, caste certificates and welfare platforms. [^10] [^9] The capital's IT department also ran a training workshop for officials on the DPDP Act and Rules — an unglamorous but telling signal that implementation is now a human-resources exercise, not just a legal one. [^11] [^10]

The private-sector clock is running in parallel and unevenly. With the May 13, 2027 main compliance deadline now visible, industry reporting shows large enterprises are positioned but SMEs remain stuck at the first step — mapping where personal data even enters their systems. Consent Managers face a harder milestone: **registration by November 2026**, meaning consent infrastructure needs to exist within weeks, not months. [^12] [^11] Legal analysis published this week also flagged the interpretive gaps the law leaves open — from genetic data's identifiability to the fact that Rule 15 on cross-border transfers is not yet in force — that will shape real compliance decisions. [^13] [^14] [^12] [^13]

**The cross-layer angle:** Delhi's nodal-officer model is likely to become the template other states copy, and it lands directly on Layer 3 (DigiLocker, API Setu) and Layer 1 (Aadhaar) workflows that are, at bottom, government-as-data-fiduciary operations. A state apparatus that cannot articulate consent flows for a caste certificate is the same apparatus the DPI stack assumes will handle data responsibly at scale.

## Also This Week: BRICS Summit Cyber Shield

With the 18th BRICS Summit coming to New Delhi on September 12–13, the government is deploying a multi-layered cyber defence, officials telling The New Indian Express that DDoS-style traffic directed at Indian infrastructure after attacks linked to the G20 era was detected and contained through coordinated I4C–CERT-In–NIC action. [^15] [^14] Watch for summit-period advisories and potential internet-level "precautions" — a recurring Indian pattern ahead of high-visibility events.

---

## The Week in One Sentence

India's trust layer is being rebuilt in three registers at once — geopolitical (Alipay+, Huawei/ZTE), institutional (CERT-In's researcher problem, DPDP bureaucracies) and commercial (Meta's ad system) — and the uncomfortable finding of the week is that in each case, external pressure (an advisory issued twice, a researcher going public, a stalled deal) is doing the work that internal safeguards should have done.

**Consumer watchlist for next week:** consent-manager registrations before the November 2026 milestone; whether MeitY responds to Adhikary and what happens to those 200–300 vulnerabilities; BRICS summit cyber posture; and whether the rip-and-replace cost discussion starts naming who pays.

---

[^1]: https://timesofindia.indiatimes.com/india/porn-ads-on-fb-insta-lure-users-into-fraud-centre/articleshow/133664951.cms
[^2]: https://www.latestly.com/technology/night-play-vimo-and-other-malicious-apps-can-hack-your-phone-jk-police-issue-warning-7585396.html
[^3]: https://thenextweb.com/news/meta-india-fraud-app-ads-banking-malware
[^4]: https://www.reuters.com/world/meta-removes-ads-fraud-apps-posing-as-porn-after-india-sounds-alarm-2026-08-31/
[^5]: https://www.timesnownews.com/india/teen-hacker-tells-times-now-digital-sitting-on-200-300-unreported-govt-vulnerabilities-wont-disclose-till-meity-responds-article-156025778
[^6]: https://www.reuters.com/world/china/india-stalls-alipay-payments-link-over-security-data-concerns-sources-say-2026-09-03/
[^7]: https://www.lightreading.com/regulatory-politics/india-weighs-rip-and-replace-of-legacy-chinese-telecom-gear---report
[^8]: https://www.moneycontrol.com/news/telecom/india-evaluates-plan-to-replace-legacy-telecom-gear-from-china-s-huawei-zte-assesses-cost-impact-14018736.html
[^9]: https://rcrwireless.com/20260904/carriers/india-replace-chinese-equipment
[^10]: https://www.thestatesman.com/cities/delhi/delhi-govt-plans-data-protection-nodal-officers-across-departments-under-dpdp-act-1503634142.html
[^11]: https://www.aninews.in/news/national/general-news/delhi-govt-holds-dpdp-act-workshop-to-strengthen-data-privacy-security20260902190455
[^12]: https://www.thehindubusinessline.com/companies/smes-lag-as-corporate-india-moves-into-dpdp-implementation-phase/article71361661.ece
[^13]: https://www.livelaw.in/articles/genetic-data-processing-dpdpa-548278
[^14]: https://www.livelaw.in/amp/articles/data-privacy-mental-privacy-unesco-neurotechnology-recommendation-548629
[^15]: https://www.newindianexpress.com/india/2026/Sep/03/india-readies-multi-layered-cyber-defence-for-brics-summit-after-g20-attacks
