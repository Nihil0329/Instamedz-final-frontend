import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./About.css"
function About() {
  const [popup,setPopup]=useState(false)

  return (

    <section className="about">
      <Navbar/>
      <div class="about-hero">
        <h4 style={{ color: "rgba(20, 73, 113, 0.8)" }}>Instamedz a virtual primary health care platform founded in 2020 aims to provide expert diagnostics and health check-up services that can be accessed from the convenience of home/work/from anywhere. 
The primary objective of Instamedz is to make high-quality healthcare accessible and affordable to all Indians.
We are committed to provide our users with extremely precise, holistic, and expertly considered care so that they can make better healthcare decisions.</h4>
        <img src={require("../../assets/about/a1.png")} alt="" />

      </div>

      <div class="about-product ">
        <div class="ap-text">
          <h2 style={{ color: "rgba(20, 73, 113)" }}>Our Product</h2>
          <p style={{ color: "rgba(20, 73, 113, 0.8)" }}>Impulse-12 Portable 12 channel ECG device which  comes with digital report generation and auto interpretation.
          </p>
        </div>
        <img src={require("../../assets/about/a2.png")} alt="girlbag" />
      </div>

      <div class="about-campaign">
        <h2 style={{ color: "rgba(20, 73, 113)" }}>Our Campaign</h2>
        <div class="ab-container1">
          <img src={require("../../assets/about/heart.png")} alt="" />
          <div class="abc1-text-container">
            <h3 style={{ color: "rgba(20, 73, 113)" }}>Cardio Care Campaign</h3>
            <p style={{ color: "rgba(20, 73, 113,0.8)" }}>C3 is an initiative, under our Heart care program which stands for C3 – Cardio Care Campaign. This program focuses on door ECG service along with other basic health care services. Get your heart check up at your doorstep.</p>
          </div>
        </div>
        <div class="ab-container2 ab-container1">
          <img src={require("../../assets/about/plus.png")} alt="" />
          <div class="abc1-text-container">
            <h3 style={{ color: "rgba(20, 73, 113)" }}>Fit Infinity Program</h3>
            <p style={{ color: "rgba(20, 73, 113,0.8)" }}>An effective integrated healthcare programme, Fit Infinity provides a one-stop solution for all of your healthcare and wellness needs.
              It aims on providing Holistic health care and wellness programs as well as telemedicine services via different products and services. Holistic Health is classified health as a whole and comprises several domains.
            </p>
          </div>
        </div>
      </div>
      <h2 style={{ color: "rgba(20, 73, 113)" }}>Our Address</h2>
      <div class="about-address">

        <img src={require("../../assets/about/ad1.png")} alt="ad2" />
        <img src={require("../../assets/about/ad2.png")} alt="ad1" />
      </div>
      <div className="tc">
      <button className='tc-btn' onClick={()=>setPopup(true)}>Terms & Conditions</button> 
      {
        popup &&
        <section class="pop_main">
        <article className='blog'>
        <button type="button"  id="x" onClick={()=>setPopup(false)} class="btn btn-primary">x</button>
      <pre>
       {`Terms and Conditions :
1) Introduction
We, at Instamedz, a partnership firm based out of Indore, Madhya Pradesh, into health care and Telemedicine services ,we focuses on your holistic well being providing a wide range of services .
Our Product- Impulse-12 ECG machine
Telemedicine Services we offer
1. Heart Care
2. Eye Care
3. Soul Care
4. Nutri Care
5. Dental Care
6. Covid Care
7. Child Care
Our Campaigns:
Cardio Care Campaign
Fit Infinity program
· C3 is an initiative under our Heart care program which stands for C3 - Cardio Care Campaign. This program focuses on door ECG service along with other basic health care services.
· Fit Infinity program: It aims on providing Holistic health care and wellness programs as well as telemedicine services via different products and services. Holistic Health is classified health as a whole and comprises several domains.
2) Eligibility
Any person who has attained the age of majority or 18 yrs old can access our services, or a minor under the supervision and guidance of a guardian can access our services.
You should be competent to enter into a contract under the Indian Contract Act 1872, and are eligible to receive our services.
Persons disqualified by law or declared insolvent are not eligible to access our services.
3) Services offered
ECG at doorsteps with a 12 channel, government certified machine. Reporting from intensivist.
Blood Pressure, Pulse and RBS and other vital screenings by professionals.
4)  By consenting to the programme Beneficiary will allow us to store, use, process, transfer, disclose his/her/their personal and medical information to subsidiaries, persons, professionals and companies affiliated, any third parties, etc.
5)  Mandatory beneficiary information.
Persons receiving our services shall provide their Name, Permanent Address, Active Mobile number, Aadhaar or any Government ID.
6)  Beneficiaries shall be governed by the terms and conditions of the Instamedz.
7)  Services of Instamedz can be availed solely at the discretion of Instamedz.
8)  Instamedz reserves the rights to alter, amend, modify and revise these terms and conditions at any time solely at its own (Instamedz') discretion without any prior notice, intimation or permission of accessories.
9)   Any offers or discounts available with the services can be discontinued or withdrawn or may change without prior intimation as per discretion of Instamedz.
The organization will not be liable for any losses occurred due to such withdrawal of offers or discounts.
10) Beneficiary understands and agrees that he/she/they may be denied access to any services of Instamedz on grounds that may not be intimated, solely at the discretion of Instamedz.
11)  Cancellation and Rescheduling policy
12)  Limitation of liability
The beneficiary understands and agrees that Instamedz shall not be liable for any loss or damage caused to beneficiary as a result of any nature disaster, fire, riots, civil disturbance, act of God, action of Government (State and Central), failure to communication, failure of system, technical dysfunction or any other delay, deficiency, or failure caused beyond Instamedz's reasonable control.
13)  Beneficiary understands and agrees that he/she/they can not copy or use any of the Intellectual Property of Instamedz. Violation of this provision may lead to legal actions.
14)  Incase of any dispute out of the program or services of Instamedz shall be governed by laws of India. Any legal action or proceeding against Instamedz shall be subject to the jurisdiction of Indore.
15)  If any one of these terms and conditions is adjudged or believed to be invalid, void, unlawful or unenforceable then that term or condition shall be deemed severable from these terms and conditions and shall not affect the validity and legality of the remainder of terms and conditions.
In case of any grievance, comment, query or suggestions regarding the terms and conditions and services of
 Instamedz then you shall feel free to contact our team through
contact - +91 7415070882
Email – admin@instamedz.com

17) By accepting/consenting to these terms and conditions the beneficiary is bound by Instamedz's policies, privacy policies and such other rules, guidelines, policies, terms and conditions relevant and applicable or any amendment, modification or change in existing policies of Instamedz.

For Doctors:
Guidelines for practice of Telemedicine in India –

Scope of telemedicine –
These guidelines provide a map and norms and standards to aid the RMPs in their service of healthcare to remotely located patients, and vulnerable section of the society
Telemedicine includes all channels of communication to patients be it information technology platform, using video, audio, text and digital data exchange.
These guidelines should be used in conjunction with the other national laws, rules, Regulations, clinical standards, protocols, policies and procedures.

Exception –
Telemedicine doesn’t include use of technology to perform surgical procedures remotely.
It also doesn’t include research and evaluation and continuing education of health- care workers.

Who can practice Telemedicine? –
Registered Medical Practitioners from any part of India can provide telemedicine services.
RMPs delivering their services shall maintain the same level of professional and ethical norms and standards as in person.
RMPs who wish to practice Telemedicine should be made familiar with these guidelines and the procedure & limitations of telemedicine.
These RMPs shall undergo CPD training in telemedicine as per these guidelines.
In case of any complaint of misconduct against any RMP, the said complaint shall be filed with the SMC of the state the RMP is operating from.

How should Telemedicine be practiced ?
RMPs should exercise professional judgement to determine whether telemedicine consultation would be appropriate in a given situation or an in-person consultation would be a better option.
RMPs should choose the mode of communication and technology available for Telemedicine according to the strengths and limitations of the said mode before proceeding with the health education or counseling.
In case of complexity of a patient’s health condition, RMP shall uphold the same level of standard of care as they would have in-person consultation.
In case of complexity of patient’s location and connectivity, the RMP shall choose the mode of communication keeping in mind the quality of connectivity available with the patient.


Identification of patient and the RMP –

Telemedicine consultation should not be anonymous, both the patient and the RMP shall establish their identities.
Language of communication used by the RMP shall be such that is fully comprehensible to the patients.
In the beginning of the consultation the RMP shall introduce themselves with their names, qualifications, specialization if any, location and the hospital or institution they are affiliated with.
The RMPs should verify and confirm the patient's identity, name, age, address, email, phone number and a registered ID (Aadhar/Voter ID) or any other identification document. They shall also document these details for the purpose of records.
There should also be a mechanism for the patients to verify the RMPs identity and credentials.
While prescribing medicines, the RMPs shall verify the age of the patient. In case of minors RMP shall confirm the patient's age and ensure that the minor is accompanied by a guardian. The identity of the guardian should also be verified.
All RMPs shall display their registration number both NMC and SMC numbers on their websites, prescription, e-communications, receipts, etc, that is presented to their patients.

Tools for Telemedicine -
RMPs may use any telemedicine tool suitable for carrying out technology-based consultations with patients / caregivers or colleagues.
Irrespective of the tool of communication used, the core principles of telemedicine practice remain the same.
Telemedicine applications can be classified into four basic types, according to

1) Mode of communication
Video (Telemedicine facility, Apps, Video on chat platforms, Skype/Facetime etc.)
Audio (Phone, VOIP, Apps etc.)
Text Based:
● Telemedicine chat-based applications (specialized telemedicine smartphone Apps, Websites, other internet-based systems etc.)
● General messaging/text/chat platforms (WhatsApp, Google Hangouts, Facebook Messenger etc.)
● Asynchronous (email/ Fax etc.)

2) Timing of the information transmitted
Video, Audio and text tools can be used to provide real-time consultation.
Asynchronous (email, fax, etc.) Transmission of summary of patient complaints and supplementary data including images, lab reports and/or radiological investigations between stakeholders. Such data can be forwarded to different parties at any point of time and thereafter accessed per convenience/need.

3) The purpose of the consultation –

Non-emergency cases –
First consultation with RMP for diagnosis, treatment, health education or counseling.
Follow-up consultation with the same RMP for their ongoing treatment and tele-consultation.

Emergency cases –
Only when there is no in-person facility available, tele-consultation might be helpful in timely care. Telemedical consultation in emergency cases should be restricted to first aid & life saving measures. The RMPs should provide advice best to their judgement in such cases.

4) Interaction between the individuals involved
Telemedicine services may be used to connect
 1) Patients to RMP
2) Caregiver to RMP
3) RMP to RMP
4) Health Worker to RMP

Consent of patients –
An informed and free consent is a mandatory factor of Telemedicine.
RMPs shall ensure that the patient consenting to the procedure is fully informed and aware about the aspects of it.
Consent can be either implied or expressed.
When a patient has initiated or solicited a telemedicine consultation then there’s an implied consent of the patient to the consultation sought.
In case if a RMP, health care worker or caregiver has initiated the consultation then it is the duty of the RMP to ensure that the patient has full consent to the procedure. They shall take in writing or verbal an express consent of the patient and document the same.
Express consent can be recorded through electronic media and communication tools, texts, video, audio, podcasts or an interactive website. The express consent shall be taken from a major and informed patients or legal guardians in case of minors. This consent must be documented and recorded.
In case of a written consent the RMP shall take scanned copy of thumb impression or signature of the patient and then a recording of the patient reading aloud the consent form. In case of an illiterate patient a trusted person appointed by them can complete the above procedure for them.

Types of consultations –

1) First consultation
2) Follow up consultation.

Prescription of drugs –
Prescription of drugs through telemedicine encounters some limitations and restrictions. Telemedicine has its own limitations in terms of examination and diagnosis in comparison to in-person consultation hence, prescription through telemedicine is also restricted to certain limits.

Specific restrictions on drugs include drugs mentioned in Schedule X or the Drugs and Cosmetics rules 1945, substances that are regulated under the Narcotics drugs and psychotropic substances act 1985 and all such drugs that can cause addiction and dependency.

Other approved categories of drugs are updated by the central government from time to time.
The lists of drugs given in this document is only indicative and doesn’t restrict RMPs to prescribe any other medicine that they deem fit for the patients.

Guidelines for RMPs providing services via telemedicine.
RMPs should make sure that the technology platform that they associate with has complied with all the guidelines given by the NMC
.
RMPs should not indulge with a technology platform that publishes ratings of patients, reviews, testimonials, advertisement and promotion of RMPs in any manner. Advertisement of services of RMPs is prohibited.

Guidelines for technology platforms enabling Telemedicine. –
Technology platforms (mobile apps or website) must ensure that the RMPs that are associated with them to provide services are duly registered with the NMC and their respective SMC and comply with their relevant provisions & laws from time to time.

The platform must provide Name, Qualifications (graduate, PG, super-specialty) Registration number, Contact Details (Mobile Number, Email address) of every RMP providing practice through their platform. Although the mobile number of the RMPs should not be made public except for the consulting patients.

It is the duty of the owner of the platform and the administrator to ensure authentication/verification of all the information and the registration of the RMPs listed on their platform.

In case of non-compliance with these guidelines or infringement/violation of any existing laws or any complaints against the technology platform, the NMC shall take appropriate actions including legal action against the platform. EMRB and NMC can also blacklist the platform.

Platforms based on AI, machine learning, Internet of Things, advanced data science-based decision support systems etc are not allowed to prescribe and counsel patients. Although AI, machine learning, Internet of Things, advanced data science-based decision support systems etc can assist RMPs in evaluation, diagnosis and management of patients. Only RMPs are allowed to prescribe, counsel and communicate with patients.

The platform shall also ensure a proper grievance redressal mechanism for its users.

Telemedicine DOs and DON'Ts
DOs

1) Ensure that the associated RMPs are duly registered with NMC and respective SMC.
2) The platform must provide Name, Qualifications (graduate, PG, super-speciality) Registration number, Contact Details (Mobile Number, Email address) of every RMP.
3) Ensure authentication/verification of all the information of the RMPs.
4) Telemedicine consultation should not be anonymous, both the patient and the RMP shall establish their identities.
5) Should verify and confirm the patient’s identity, name, age, address, email, phone number and a registered ID (Aadhar/Voter ID) or any other identification document. They shall also document these details for the purpose of records.
6) There should also be a mechanism for the patients to verify the RMPs identity and credentials.
7) All RMPs shall display their registration number both NMC and SMC numbers on their websites, prescription, e-communications, receipts, etc, that is presented to their patients.
8) While prescribing medicines, the RMPs shall verify the age of the patient in order to determine whether the patient is minor or major.
9) Telemedical consultation in emergency cases should be restricted to first aid & life saving measures.
10) An informed and free consent is a mandatory factor of Telemedicine.
11) AI or machine learning, internet or advanced data science based decision support system technology cannot prescribe and counsel patients.
12) Set up a proper grievance redressal mechanism for patients’ complaints.

DON’Ts
1) Non compliance or violation of these guidelines or any complaints against the platform may lead to legal action against the platform and even blacklisting of the platform by NMC or EMRB.
2) Drugs mentioned in the Schedule X of the Drugs and Cosmetics rules 1945, substances that are regulated under the Narcotics drugs and psychotropic substances act 1985 and all such drugs that can cause addiction and dependency are restricted.
3) Telemedicine shouldn’t be used to perform surgical procedures remotely.

About Us:

Instamedz, a virtual primary healthcare platform founded in 2020, aims to provide expert diagnostics and health check-up services that can be accessed from the convenience of home, work, or from anywhere.
Since its beginnings, Instamedz is into healthcare industry
Our product: Impulse-12 Portable 12 channel ECG device which comes with digital report generation and auto interpretation.

Telemedicine Services we offer:
1) Heart Care
2) Eye Care
3) Dental Care
4) Covid Care
5) Child Care
6) Nutri Care
7) Soul Care

Instamedz has always focused on providing people easily accessible and reliable services in maintaining good health. Users may easily consult doctors online through our platform and receive health checks from anywhere with the help of their mobile phone or Tablet , all with the tap or click of a button.

Our Campaigns:
· Cardio Care Campaign
· Fit Infinity program

Cardio Care Campaign
C3 is an initiative, under our Heart care program which stands for C3 – Cardio Care Campaign. This program focuses on door ECG service along with other basic health care services. Get your heart check up at your doorstep.

Fit Infinity Campaign:
An effective integrated healthcare programme, Fit Infinity provides a one-stop solution for all of your healthcare and wellness needs.
It aims on providing Holistic health care and wellness programs as well as telemedicine services via different products and services. Holistic Health is classified health as a whole and comprises several domains.
Like 1) Dental care
2) Eye Care
3) Emotional care
4) Nutri care
5) Career care
6) Soul care

We not only focused on physical and mental health but also we provide career counselling through this program. Fit infinity program is specially designed for employees ,students and institutions.

Address:
Manbhawan nagar Indore, Madhya Pradesh 452016
Bommanahalli Bangalore, Karnataka 560068`}
        </pre>
      </article>
      </section>
      }
      </div>
      
      <Footer />
    </section>
  )
}

export default About
