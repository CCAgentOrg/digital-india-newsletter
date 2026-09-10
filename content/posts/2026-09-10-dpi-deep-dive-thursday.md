---
title: "DPI Deep Dive — Thursday | September 10, 2026"
date: 2026-09-10T08:30:00+05:30
draft: false
tags: ["DPI", "Deep Dive", "Layer: Thursday"]
categories: ["DPI Deep Dive"]
description: "Weekly analysis of Thursday layer in India's Digital Public Infrastructure"
---

# DPI Deep Dive — Thursday | September 10, 2026

Layer 4 — Commerce & Logistics — spent September 3–10 answering the identity question every government-built network eventually faces: is it a marketplace that happens to have public money, or infrastructure that happens to have public purpose? ONDC picked the second, formally. The week produced the clearest articulation yet of an "ONDC 2.0" that retreats from consumer-retail growth-at-any-cost toward logistics, mobility and farmer supply — while the same network quietly shipped its first credit cards, and a legal copy of the model was incorporated in Jakarta. GeM, the procurement sibling, marked its first decade with a five-point roadmap that reads like an AI upgrade order. The through-line: India's commerce DPI is repositioning from competing with platforms to being the rails platforms cannot easily replace.

---

## 1. ONDC 2.0: The Retreat From Retail Is Now Official Strategy

The week's defining story came via Mint's September 9 reporting on ONDC's internal recalibration. The network is shifting focus to **logistics, mobility and transport**, with a "more targeted approach to retail," according to three people familiar with the strategy. The new retail play — internally branded "ONDC 2.0" — rests on three initiatives: DigiDukaan, DigiHaat and DigiBazaar, plus a supply-side bet on farmers. The stated fear driving the pivot is candid and overdue: "Over the past four years, the fear was that ONDC was trying to become another e-commerce platform. The opportunity is to use interoperability to solve problems that individual platforms cannot solve efficiently." [^1]

The numbers behind the pivot show both the ambition and the gap. The Amazing India programme now works with eight aggregators covering 1,500 farmer-producer organisations and over 50,000 farmers; farmers, artisans and rural producers recorded an **11-fold increase in order volumes** in FY26 through network-based models. DigiDukaan has reached 18,000-plus retailers across Hyderabad, Jaipur and Mumbai — against the 14 million kirana stores ONDC itself estimates India has. On logistics, more than 30 small and micro fleet operators on FleetConnect now contribute over 22% of network orders, and more than 80,000 merchants use ONDC logistics. Mobility is the quiet outperformer: the FY26 annual report claims **over 500,000 metro and bus journeys daily**, roughly 30% of all online public-transport transactions, carried across 40-plus consumer apps. [^1]

The organisational context matters as much as the strategy deck. Vibhor Jain took over as MD and CEO from T. Koshy in April, Manoj Thakur joined as CTO in February, and the network raised **₹430 crore** from strategic investors including Zoho, Uber, Paytm, NSE, BSE Technologies, Amul, SBI and Punjab National Bank — a cap table that reads like a who's-who of entities that both compete with and depend on open rails. Meanwhile Flipkart has begun accepting food orders on the network in a closed user group, with wider rollout expected before Big Billion Days — the first time a large incumbent has treated ONDC as demand infrastructure rather than a policy checkbox. [^1]

The open question is the one industry executives are already asking: whether the new approach can produce sufficient volumes and sustainable economics for smaller operators at scale. [^1] Retail momentum had already cooled after ONDC capped incentives — the monthly cap fell from ₹3 crore in mid-2024 to roughly ₹30 lakh — so a protocol that stops paying for demand must find demand that has no other home. Farmer aggregation, fragmented fleet supply and public-transport ticketing are exactly such homes: no single platform can profitably aggregate 1,500 FPOs or unify a city's buses, metros and autos. That is the honest version of the interoperability thesis. The week's news is that ONDC is finally running the experiment on its own terms.

**The cross-layer angle:** the 500,000 daily transit journeys are Layer 4 consuming Layer 2 (payments) and producing Layer 6 outcomes (governance service delivery); the farmer-supply bet runs directly on Layer 5's AgriStack. And the Flipkart food integration means quick-commerce prices, fees and data flows for millions of orders now transit a public protocol — making ONDC's network policy choices a consumer-protection matter, not just a startup story.

## 2. The First Credit Card on an Open Commerce Network

While the strategy press was running, ONDC hit a quieter product milestone: the **HDFC Bank credit card went live on the network through the HDFC Bank × Bajaj Markets partnership** — announced by ONDC as "a new milestone for digital credit" in the first week of September, and confirmed in ONDC's monthly financial-services update, which also recorded mutual-fund purchase transactions up 62.6% month-on-month. [^2] [^3] The pairing debuted personal loans on ONDC at Global Fintech Fest 2025; a year later, at GFF 2026 in Mumbai (September 8–11), credit cards became the newest product to ride a commerce protocol originally built for groceries and auto rides. [^4]

Why it matters: India's open commerce network is becoming a financial-services distribution rail, and the direction of travel is unmistakable — loans at GFF 2025, cards at GFF 2026, with insurance and investments already on the network. The architecture argument is real: a credit offer embedded at the point of a transaction, underwritten against network order history, reaches borrowers that branch networks and card DSA channels do not. A kirana retailer's two-year ONDC logistics order history is a better credit signal than any KYC document pile.

But distribution-by-protocol changes the consumer-protection surface. A credit card offered inside a checkout flow is impulse credit — the same behavioural terrain regulators spent a decade fencing off in lending apps, now repackaged inside a government-branded network. Which consent architecture governs the sharing of purchase history for underwriting? DPDP rules will apply, but the network's own data-sharing contracts between buyer apps, seller apps and financial service providers are the operative fine print, and they are not public documents. The credit-on-ONDC experiment deserves the same scrutiny as UPI's P2P lending wave — before scale, not after.

**The cross-layer angle:** this is Layer 4 and Layer 2 fusing — commerce rails carrying financial products — with Layer 7's consent framework as the only guardrail between "embedded finance" and "surveillance-priced credit." Watch whether ONDC publishes standardised consent and disclosure flows for financial products, or leaves each app to improvise.

## 3. ION Indonesia: The ONDC Model Gets a Legal Entity Abroad

On September 4, at the APINDO office in Jakarta, **PT Indonesia Open Network (ION) was formally incorporated** — a company deed signed to develop digital public infrastructure for Indonesian MSMEs, explicitly modelled on India's ONDC. The structure is a study in transplanting governance: authorised capital of IDR 10 billion, paid-up capital of IDR 2.5 billion, 2.5 million Series A shares initially held by PT Chairos International Ventures, and **one golden share held by the ION Teknologi Indonesia Foundation** to "safeguard the company's vision and mission" and keep it oriented to the public interest. ION is targeting roughly **US$100 million in initial investment from at least 20 companies at about US$5 million each**, deliberately structured so no single shareholder can dominate. [^5]

The lineage is diplomatic as much as technical: ION grew out of the India–Indonesia MoU on digital development signed during the Prabowo–Modi meeting in January 2025, and was launched conceptually at the Indonesia Economic Forum in February 2026, where India's Ambassador called it "the most advanced adaptation of India's open commerce model." [^6] [^7] Fourteen months from MoU to incorporated company is fast for DPI transfer — faster than most Indian state e-commerce initiatives move.

The comparative governance story is the interesting one. ONDC is a Section 8 non-profit seeded by DPIIT; ION is a private limited company with a golden-share guardrail and dispersed commercial ownership. Both answer the same question — who owns a public protocol — differently: India embeds public interest in the founding charter, Indonesia in a veto share and investment caps. The test for both is identical and unsolved: whether small-merchant economics actually improve, or whether the open network simply becomes a cheaper acquisition channel that platforms colonise in a group.

**The cross-layer angle:** DPI export has moved from slide decks to incorporation deeds. Every layer India exports now carries its governance assumptions with it — ION's golden share is doing the work that UIDAI's statutory anchoring does at home. For Layer 4 specifically, an Indonesian open network is also a future interoperability question: will Beckn/ONDC specs converge globally enough that cross-border commerce discovery becomes possible, or will each national network fork its own stack?

## 4. GeM at Ten: A Procurement Monolith Picks Its Second-Decade Battles

GeM's decadal numbers, recirculated widely this week as the marketplace's 10-year milestone content made the rounds, are worth restating in their official form: **cumulative procurement above ₹20 lakh crore across more than 3.78 crore orders**, over 25 lakh registered sellers and service providers, more than 1.37 lakh buyer organisations. Within that, 12.28 lakh MSEs have fulfilled over ₹9 lakh crore in orders — 45.6% of cumulative GMV — while 2.24 lakh women-led MSEs have crossed ₹1 lakh crore and 42,242 startups have secured orders worth over ₹65,633 crore. [^8]

The second-decade roadmap Commerce Minister Piyush Goyal laid out at the Foundation Day reads like a list of the platform's known weak points, promoted to strategy: **last-mile access** via Suvidha Kendras in the districts; **AI for price intelligence, price sanity and marketplace integrity**; **integration** of states, public enterprises, panchayats and cooperatives into one national procurement ecosystem; **credit**, by scaling GeM Sahay lending and TReDS linkages; and university outreach to seed new buyers. GeM also activated a nationwide five-digit short code — **14550** — for its helpdesk. [^8] [^9]

Two of these deserve scepticism as policy rather than celebration. First, AI "price sanity" on a marketplace where MSE quotas are binding means algorithms will increasingly arbitrate who wins government orders and at what price — an audit surface the platform has not yet opened to public scrutiny, and a collusive-bidding countermeasure whose false-positive rate will decide real businesses' fortunes. Second, the state-and-panchayat integration priority concedes that a decade in, the platform's depth is still central-government-weighted; CPSEs dominate GMV, and the municipal procurement long tail — where most citizen-facing spending happens — remains the frontier. The Ernst & Young six-state study GeM's CEO cites (30–60 day turnarounds, 5+ average bidders) suggests the model works where rules align; the roadmap's bet is that it can be made to work everywhere. [^10]

**The cross-layer angle:** GeM Sahay's lending linkage is the Layer 2 financial rail meeting Layer 4 procurement data — the same purchase-order-as-credit-signal thesis as ONDC's credit push, applied to government demand. And AI price intelligence will lean on the Layer 1 identity stack for seller verification, making GeM one of the largest real-world deployments of DPI-layer interdependence in government.

## 5. Agentic Commerce Comes for the Open Network

The week's forward-looking thread arrived from two directions. Domestic commentary flagged what many have suspected since the protocol was designed: India's early investment in open commerce discovery is a structural head start for **agentic shopping**, because an AI agent that buys on a consumer's behalf needs exactly the machine-readable, platform-neutral catalogue and order APIs ONDC standardized — while closed platforms must retrofit agent access onto APIs built to serve their own apps. [^11] Globally, the trust layer for that future started forming: on September 9, Ant International, Mastercard and Visa announced a collaboration on **interoperable Know-Your-Agent (KYA) frameworks**, so that merchants, wallets and issuers can recognise trusted agents, verify that actions reflect user intent, and preserve accountability across payment ecosystems. [^12]

Put together, the shape of the next fight is visible. When the buyer is a bot, the "buyer app" concept inverts: discovery happens in model space, not app space, and the network-level question becomes who authenticates the agent, which consent it carries, and whose liability rules apply when it transacts badly. ONDC's protocol — with its unbundled discovery, logistics and payment participants — is closer to agent-native than any single marketplace. But that cuts both ways: an agent negotiating directly with seller APIs could commoditise buyer apps overnight, collapsing the retail distribution layer ONDC spent four years subsidising into the 2.0 pivot's new targets.

India's opportunity is to define the KYA layer before others do — stitching agent identity into Aadhaar-anchored verification and DPDP consent, the way UPI defined mobile payments before the card networks caught up — rather than watch Mastercard, Visa and Ant standardise agent trust globally and negotiate compatibility later. The KYA announcement is, in effect, Layer 1 (identity) being drafted to serve Layer 4 (commerce) at global scale — and India's commerce DPI should be at that table, not reading the minutes.

**The cross-layer angle:** agentic commerce is the first native merger of all seven DPI layers — identity (who is the agent), payments (who guarantees it), documents (what it may share), commerce (where it shops), and trust frameworks (who is accountable). The standards set in the next twelve months will decide whether India's open networks inherit the agent economy or interoperate with someone else's.

---

*The week's ledger: one strategy pivot, one credit card, one incorporation deed, one decadal roadmap, one global trust standard. Commerce DPI in India is no longer asking whether open networks work — it is asking what they are for. That is progress of the uncomfortable kind.*

[^1]: https://www.livemint.com/companies/news/ondc-open-network-for-digital-commerce-ondc-2-0-digital-commerce-e-commerce-open-network-digital-public-infrastructure-11788851439655.html
[^2]: https://www.facebook.com/100076520217598/posts/a-new-milestone-for-digital-credit-on-the-ondc-network-the-hdfc-bank-credit-card/1088567543703909
[^3]: https://www.linkedin.com/posts/hrushikesh-mehta-88564b8_ondc-fintech-gff2026-activity-7501992299682390016-V-ER
[^4]: https://www.linkedin.com/posts/bajaj-markets_bajajmarkets-hdfcbank-ondc-activity-7381703210178248705-ZsxV
[^5]: https://kadin.id/en/kabar/resmi-berdiri-ion-bidik-investasi-100-juta-dolar-as-untuk-infrastruktur-digital
[^6]: https://www.businessworld.in/article/indonesia-unveils-ondc-inspired-open-digital-network-for-msmes-592597
[^7]: https://www.indonesiaeconomicforum.com/indonesia-advances-open-digital-commerce-with-new-national-network-initiative
[^8]: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2297421
[^9]: https://www.moneycontrol.com/news/business/gem-turns-10-piyush-goyal-unveils-ai-led-roadmap-eyes-wider-integration-of-states-panchayats-14000679.html
[^10]: https://www.bignewsnetwork.com/news/278599949/gem-releases-detailed-vigilance-week-guide-to-strengthen-transparency-in-procurement
[^11]: https://dailypioneer.com/news/slug-lite/add-to-cart-courtesy-ai?year=2026
[^12]: https://markets.ft.com/data/announce/detail?dockey=600-202609092100BIZWIRE_USPRX____20260909_BW003891-1
