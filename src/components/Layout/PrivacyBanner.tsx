import React from 'react';

const PrivacyBanner = () => {
  return (
    <div className="xl:pb-[143px] xs:pb-[100px]">
      <div className=" xl:gap-96 xs:gap-24">
        <div className="text-[40px] leading-[58px] text-[#455CFF]">Privacy Policy</div>
        <div className="font-tahoma lg:text-[26px] xs:text-[24px] lg:leading-[35px] xs:leading-[34px] pt-5">
          <div className='font-tahoma text-[12px] leading-[20px] pt-12'>Effective Date: October 15th, 2024</div>
          <div className='font-tahoma text-[12px] leading-[20px]] pt-4'>
            Mana’o Pili ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="http://manaopili.com" className="underline">http://manaopili.com</a> (the "Site"). By using our Site, you consent to the practices described in this policy.
          </div>

          <div className='font-tahoma text-[12px] leading-[20px] font-semibold pt-4'>Information We Collect</div>
          <div className='font-tahoma text-[12px] leading-[20px] pt-4'>We may collect personal information that you provide directly to us, such as:</div>
          <ul className='list-disc pl-9 font-tahoma text-[12px] leading-[20px] pt-4 '>
            <li>Contact Information: Name, email address, phone number, etc.</li>
            <li>Communication Data: Any messages you send us, including feedback and support inquiries.</li>
          </ul>
          <div className='font-tahoma text-[12px] leading-[20px] pt-4'>We may also automatically collect certain information about your device and usage, such as:</div>
          <ul className='list-disc pl-9 font-tahoma text-[12px] leading-[20px] pt-4 '>
            <li>IP Address</li>
            <li>Browser Type</li>
            <li>Operating System</li>
            <li>Pages Viewed</li>
            <li>Time Spent on Pages</li>
            <li>Referring URL</li>
          </ul>

          <div className="font-tahoma text-[12px] leading-[20px] font-semibold pt-4">How We Use Your Information</div>
          <div className='font-tahoma text-[12px] leading-[20px] pt-4'>We may use the information we collect for various purposes, including:</div>
          <ul className='list-disc pl-9 font-tahoma text-[12px] leading-[20px] pt-4 '>
            <li>To provide, operate, and maintain our Site.</li>
            <li>To improve, personalize, and expand our Site.</li>
            <li>To process your transactions and send you related information.</li>
            <li>To communicate with you, including responding to your comments and questions.</li>
            <li>To send you marketing and promotional communications, if you opt in.</li>
            <li>To detect, prevent, and address technical issues.</li>
          </ul>

          <div className="font-tahoma text-[12px] leading-[20px] font-semibold pt-4">Disclosure of Your Information</div>
          <div className='font-tahoma text-[12px] leading-[20px] pt-4'>We may share your information in the following situations:</div>
          <ul className='list-disc pl-9 font-tahoma text-[12px] leading-[20px] pt-4 '>
            <li>With Service Providers: We may share your information with third-party vendors and service providers to perform functions on our behalf (e.g., payment processing, email delivery).</li>
            <li>For Legal Reasons: We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            <li>Business Transfers: If we are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.</li>
          </ul>

          <div className="font-tahoma text-[12px] leading-[20px] font-semibold pt-4">Your Rights</div>
          <div className='font-tahoma text-[12px] leading-[20px] pt-4'>You have certain rights regarding your personal information, including:</div>
          <ul className='list-disc pl-9 font-tahoma text-[12px] leading-[20px] pt-4 '>
            <li>The right to access, correct, or delete your personal data.</li>
            <li>The right to object to or restrict the processing of your personal data.</li>
            <li>The right to withdraw your consent at any time, where we rely on your consent to process your information.</li>
          </ul>
          <div className='font-tahoma text-[12px] leading-[20px] pt-4'>To exercise these rights, please contact us using the information below.</div>

          <div className="font-tahoma text-[12px] leading-[20px] font-semibold pt-4">Security of Your Information</div>
          <div className='font-tahoma text-[12px] leading-[20px] pt-4'>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.</div>

          <div className="font-tahoma text-[12px] leading-[20px] font-semibold pt-4">Changes to This Privacy Policy</div>
          <div className='font-tahoma text-[12px] leading-[20px] pt-4'>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this policy periodically for any updates.</div>

          <div className="font-tahoma text-[12px] leading-[20px] font-semibold pt-4">Contact Us</div>
          <div className='font-tahoma text-[12px] leading-[20px] pt-4'>If you have any questions or concerns about this Privacy Policy, please contact us at:</div>
          <ul className='list-disc pl-9 font-tahoma text-[12px] leading-[20px] pt-4 '>
            <li>By email: <a href="mailto:info@manaopili.com" className="underline">info@manaopili.com</a></li>
            <li>By visiting this page on our website: <a href="http://manaopili.com" className="underline">http://manaopili.com</a></li>

          </ul>

        </div>
      </div>
    </div>
  );
}

export default PrivacyBanner;
