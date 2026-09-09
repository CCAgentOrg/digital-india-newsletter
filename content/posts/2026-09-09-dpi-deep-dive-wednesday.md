---
title: "DPI Deep Dive — Wednesday | September 09, 2026"
date: 2026-09-09T08:30:00+05:30
draft: false
tags: ["DPI", "Deep Dive", "Layer: Wednesday"]
categories: ["DPI Deep Dive"]
description: "Weekly analysis of Wednesday layer in India's Digital Public Infrastructure"
---

# DPI Deep Dive — Wednesday | September 09, 2026

Layer 3 — Documents & Data Exchange — spent the week of September 2–9 doing the least glamorous and most consequential thing an infrastructure layer can do: becoming compulsory. A national exam bolted its registration flow to DigiLocker and instantly met the first mass wave of verification failures. Tamil Nadu decided that the driving licence you download is the licence — same day, no smart card in the loop. Punjab's school board became the first in India to verify students without the photocopy. And the central KYC registry quietly became a real-time, consent-gated API — just as the DPDP consent-manager deadline came into view. The through-line: when documents become infrastructure, document failure becomes consumer harm, and every bug report is now a rights issue.

---

## 1. GATE 2027: The First Mass Test of Compulsory DigiLocker

Last week this column covered IIT Madras's decision to make DigiLocker verification mandatory for all Indian GATE 2027 candidates. This week registrations opened — and the mandate met its first lakh users. Education portals have filled with troubleshooting guides for two failure modes: **"DigiLocker verification failed"** during GOAPS registration, and **DigiLocker login issues** that block candidates from completing the form at all. [^1] [^2] The window runs to September 27 without late fee, so lakhs of applicants are debugging their document lockers against a hard deadline.

The failure modes deserve more attention than the mandate itself, because they are structural. The most common breakage is a name or date-of-birth mismatch between school records and Aadhaar — the canonical ailment of every Aadhaar-seeded system since 2010, now with an exam deadline attached. Fixing it is not a refresh button; it requires a correction cycle at the issuing board or an Aadhaar update, each with its own queue. A second failure class is mundane but telling: photo and signature format rejections, once an RTO-counter argument, now a helpdesk article. [^1]

This is not an isolated exam. India Post's recruitment for **23,757 Gramin Dak Sevak posts** (registrations opened September 2) verifies educational documents through DigiLocker or API Setu, [^3] and UPTET 2026 certificates are being delivered into candidates' DigiLocker accounts rather than as paper. [^4] The state exam-and-jobs complex — the largest interaction most Indians have with government — now routes identity and credentials through one document rail. That is genuine de-duplication — verify once, reuse everywhere — but it also makes DigiLocker's uptime, issuer data quality and grievance redressal consumer-protection infrastructure. The week's troubleshooting guides are written by coaching sites, not by NeGD; that gap is the story.

**The cross-layer angle:** when a Layer 3 mandate fails, the harm lands in Layer 1 (Aadhaar data correction) and Layer 6 (grievance redressal). Neither has a published SLA for "my GATE form is stuck because my name is spelled differently in two government databases." Compulsion without a redressal SLA is a policy choice, not a technical inevitability.

## 2. Tamil Nadu Flips the Default: Same-Day Digital DL and RC

On September 2, Tamil Nadu's Chief Minister announced in the Assembly that from **September 15**, new drivers and vehicle owners can **download their driving licence and registration certificate digitally the same day** they clear the test or complete registration — no waiting for the physical smart card. The state is simultaneously moving toward **"anywhere RTO"** services: registration and licensing transactions at any Regional Transport Office, not just the one covering your address. [^5]

The policy significance is that this converts an exception into a default. Digital DL and RC have been legally valid in DigiLocker or mParivahan for years — central rule amendments settled that argument long ago. What remained was a two-track system in which the paper smart card was the real credential, keeping alive the waiting period, the courier and, at the margins, the speed money that blurry delivery timelines invite. Same-day issuance inverts that: the state registry record, synced to Sarathi and Vahan and renderable in your DigiLocker, *is* the licence. The physical card becomes a souvenir.

The consumer math is real — the same-day part removes the window where an applicant holds a receipt instead of a credential and depends on intermediaries to expedite it. The open question is the second promise: "anywhere RTO" runs into jurisdiction-bound processes like address-change NOCs and enforcement histories that live in the original RTO's ledger. Interoperability of *processes*, not just documents, is where citizens will feel friction or relief.

**The cross-layer angle:** this is Layer 3 consuming its own upstream — the state transport registry feeding national document rails — with Layer 6 accountable for whether "anywhere" survives contact with jurisdictional rules. It is also a quiet fiscal story: every citizen who stops needing the physical card weakens a printing-and-logistics dependency that states have licensed out for years.

## 3. Punjab School Education Board Exits the Photocopy Economy

On September 4, the **Punjab School Education Board (PSEB) became the first education board in India to onboard UIDAI's Offline Verification Seeking Entity (OVSE) framework**, enabling consent-based, paperless Aadhaar verification for admissions and examinations. [^6] Under OVSE, an authorised entity verifies **Aadhaar Verifiable Credentials** that the holder shares via the Aadhaar App — fully or selectively, with explicit consent — and crucially, verification happens **locally on the device**, without querying UIDAI's central identities database. The Aadhaar App's 5 crore downloads give the framework a plausible installed base. [^6] [^7]

The photocopy deserves to be named as the adversary here, because it is the actual leak vector of Indian document infrastructure. Every admission counter that keeps a photocopy of a child's Aadhaar creates an uncontrolled replica — untracked, undated, impossible to revoke — in a file that will sit in a school office for a decade. OVSE replaces that with a cryptographic presentation of a claim the school can verify without ever holding the number it shouldn't hold, and selective disclosure lets an exam board confirm identity without collecting the full demographic sheet.

Two caveats keep this from being a pure win. First, consent at a school admission counter is coerced consent in practice — a parent who declines VC sharing will be asked to explain why, and the fallback may be the same old photocopy. Second, offline verification systems shift trust to client-side attestation, which has its own fraud surface. Neither caveat argues against the move; both argue for watching whether OVSE becomes an option or a new mandate with the consent architecture as decoration.

**The cross-layer angle:** this is Layer 1 technology (verifiable credentials, offline verification) deployed specifically to shrink Layer 3's data footprint — with Layer 7's DPDP purpose-limitation principles as the standard against which "consent" should be measured.

## 4. KYC Documents Become Real-Time Rails: CKYCRR 2.0 Goes Live as the Consent Clock Ticks

The quietest big story of the week is the maturation of **CKYCRR 2.0** — the Central KYC Records Registry rebuild, operated by CERSAI through Protean eGov Technologies. **Phase 1 went live on August 1, 2026, covering banks and insurers** (mutual funds, pension funds and brokerages follow in a later phase), and September's compliance analysis is blunt: institutions have moved from periodic batch uploads of scanned KYC documents to **near real-time API-based record exchange**, with each record carrying a **confidence score** for how recently and reliably it was verified. [^8]

The consumer-facing design is what makes this an L3 story. Under the 2.0 architecture, every access to your KYC record is **gated by OTP-based consent**, and — for the first time since the registry launched in 2017 — **citizens get view access to their own records**, including seeing which entities uploaded, updated or downloaded them, with notifications on each such event and a direct complaint channel for unauthorised access. [^9] Documents submitted by reporting entities are authenticated against issuing authorities — including through DigiLocker — in real time rather than stored as unverifiable scans. [^8]

Now the clock. Under the DPDP Rules, **Consent Managers must register with the Data Protection Board by November 13, 2026** — but the Board itself is not yet operational, leaving regulated entities to build to a standard enforced by a regulator that doesn't exist yet. [^8] [^10] Compliance lawyers have begun calling Phase 1 entities "non-compliant" rather than "pre-compliant," which is the correct reading: the API rail is live, the consent layer's enforcement mechanism is not.

**The cross-layer angle:** the KYC registry is becoming the financial half of Layer 3 — the document-and-data exchange rail for every regulated entity — and its notification-plus-complaint design is the closest thing India's data ecosystem has to a working consent audit trail. The DPDP deadline collides with it in November; watch whether the Board exists by then, because a consent gate without a regulator is a turnstile.

## 5. The Mirror in Louisiana: What Document Verification Costs Without an Issuer Model

The week's darkest gift to Indian policy debate came from the United States. On September 2, Brian Krebs reported that a new dark-web identity-theft service, **Nexus**, was selling scans of **more than 153 million driver's licences** from the US and Canada — plus 10 million ID cards, 3 million travel documents and roughly 579,000 medical cards — sourced from a breach at IDScan.net, a Louisiana-based identity-verification company whose customers include Fortune 500 firms. [^11] [^12] Krebs verified the data by locating his own licence; listings grew by hundreds of thousands per day, indicating the breach was likely still ongoing. [^11] By week's end the FBI was investigating and **at least four class-action lawsuits** had been filed in the Eastern District of Louisiana. [^13] [^14]

The architectural contrast with India is the point. IDScan.net's business is the **collector-of-scans** model: bars, dispensaries and car-rental counters scan the front and back of your licence, and the images pool in a private company's systems. India's document layer runs on the opposite premise — **issuer-into-vault**: the document is issued directly into DigiLocker, presented as a verifiable credential, and shared on consent, with no scanning intermediary accumulating images of every counter transaction. The OVSE rollout in Punjab is the same philosophy pushed further: verify without collecting at all.

But the honest reading cuts both ways, because India's model concentrates what America scatters. DigiLocker's own counters list **8.1 billion issued documents across roughly 2,900 issuers** on one national platform. [^15] A systemic compromise of that platform — or of its requester ecosystem — would be a national event, which is precisely why CERT-In audit obligations and DPDP breach-notification duties matter more here, not less. The US breach is a stress-test of the model India avoided; read in Delhi, it is an argument for the audit regime the model India chose requires.

**The cross-layer angle:** this is Layer 7 evidence landing on Layer 3 design. The DPDP Act's breach-notification and penalty provisions are written for exactly this failure class; the IDScan saga is the case study to cite when someone asks why consent-based, issuer-anchored sharing is worth the integration cost.

## The Week's Frame: The Compulsion Curve

Run the week's stories together and Layer 3's trajectory is visible: **compulsion is arriving faster than redressal.** GATE 2027 makes the document rail mandatory and its failures are handled by coaching-site FAQ pages. Tamil Nadu makes the digital credential the default and the open question is process interoperability. PSEB makes verification consent-based and the open question is whether consent is real. CKYCRR 2.0 makes document exchange real-time and consent-gated, and the open question is the missing regulator. The layer itself is healthy — uptime good, issuance scaling, KYC API-isation genuinely well-designed. What lags is the accountability wrapper: grievance SLAs for stuck documents, a live Data Protection Board for consent disputes, a published path for the citizen a compulsory system fails. That is this layer's consumer-protection frontier, and it is running two phases behind the infrastructure.

One forward note: the **Global Fintech Fest opened in Mumbai this week** (September 9–11, inaugurated by the Prime Minister), and the document layer is on the export menu — India Stack Global already pitches DigiLocker and API Setu among its 18 platforms to the 23 countries signed to DPI cooperation MoUs. [^16] [^17] Domestically the same week, NeGD took DigiLocker, UMANG, API Setu and Meri Pehchaan to a state consultation workshop in Sikkim. [^18] Compulsory at home, exportable abroad — and in both directions, the credibility of the pitch now rests on how the layer handles its failures, not its features.

[^1]: https://www.shiksha.com/engineering/articles/digilocker-verification-failed-for-gate-blogId-240945
[^2]: https://www.shiksha.com/engineering/articles/gate-digilocker-login-issues-blogId-240813
[^3]: https://indianexpress.com/article/education/india-post-gds-recruitment-2026-registrations-begin-indiapost-gov-in-applications-released-september-2-10856697
[^4]: https://www.pw.live/news/uptet-certificate-2026-released-download-link-upessc-up-gov-in
[^5]: https://www.threads.com/@the_hindu/post/DcyENFWEQyQ
[^6]: https://www.newindianexpress.com/india/2026/Sep/04/pseb-becomes-first-education-board-in-india-to-adopt-uidais-paperless-identity-verification-framework
[^7]: https://www.facebook.com/IBEFIndia/posts/1395498329433878
[^8]: https://www.dpdpindia.in/monthly-briefing-2026-09.html
[^9]: https://www.tradingview.com/news/moneycontrol:17e75d70f094b:0-cersai-to-rebuild-kyc-repository-citizens-to-be-allowed-to-access-details-flag-identity-frauds
[^10]: https://www.sansalegal.com/post/how-to-register-and-operate-as-a-consent-manager-under-india-s-dpdp-act-2023-and-dpdp-rules-2025
[^11]: https://krebsonsecurity.com/2026/09/fbi-probes-service-selling-153m-drivers-licenses/
[^12]: https://techcrunch.com/2026/09/02/it-sure-looks-like-hackers-breached-a-major-id-card-verification-service/
[^13]: https://www.infosecurity-magazine.com/news/multiple-class-action-lawsuits/
[^14]: https://www.securityweek.com/153-million-driver-license-images-offered-on-dark-web/
[^15]: https://dic.gov.in/digilocker
[^16]: https://www.pib.gov.in/PressReleaseDetail.aspx?PRID=2307982&reg=48&lang=1
[^17]: https://egov.eletsonline.com/2026/02/india-signs-mous-with-23-countries-to-promote-digital-public-infrastructure-upi-goes-live-in-over-eight-nations
[^18]: https://www.facebook.com/OfficialDigitalIndia/posts/the-digital-india-state-consultation-workshop-in-gangtok-brought-together-the-go/1529782082522754
