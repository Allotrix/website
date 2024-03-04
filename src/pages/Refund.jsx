import React from 'react';

const RefundPolicy = () => {
  return (
    <section className='bg-allotrix-bg text-allotrix-text flex flex-col items-center py-24 md:mt-0 px-6 gap-10 md:items-start text-left md:px-32 md:gap-4 md:pt-48'>
        <div className='font-allotrix-font-secondary w-full text-center mt-16 md:mt-0'>
            <h1 className='font-bold text-3xl md:text-4xl md:mb-10 px-2'>
                Refund Policy
            </h1>
        </div>
        <div className='md:w-[750px] mx-auto font-allotrix-font-secondary flex flex-col gap-6'>
            <h3 className='text-xl font-bold'>Introduction</h3>
            <p>
              This Refund Policy ("Policy") sets forth the conditions and procedures under which refunds are processed by Allotrix Software ("Company", "We", "Us"). This Policy applies to all users ("You", "Your") of the Allotrix Software services and products. By availing of our services, you agree to the terms and conditions stipulated in this Policy.
            </p>
            <ol className='flex flex-col gap-4 list-decimal pl-4'>
              <li>
                <h3 className='font-bold'>Scope and Eligibility for Refund</h3>
                <p>
                  Refund Eligibility: Refunds are strictly subject to the following conditions:
                </p>
                <ul className='list-disc'>
                  <li className='ml-4'>
                    Non-delivery of Service: Failure of the software to be delivered or accessible due to technical issues attributable to the Company.
                  </li>
                  <li className='ml-4'>
                    Service Malfunction: Significant malfunctioning of the software, rendering it unfit for its intended use, provided such malfunction is attributable to the Company.
                  </li>
                </ul>
                <p>
                  Time-Bound Request: Refund requests must be made within a three (3) day period following the date of purchase of the software.
                </p>
              </li>
              <li>
                <h3 className='font-bold'>Procedure for Requesting a Refund</h3>
                <ul className='list-disc'>
                  <li className='ml-4'>
                    Submission of Request: Refund requests must be formally submitted by the customer via electronic mail to allotrixapp@gmail.com, clearly stating the grounds for the request.
                  </li>
                  <li className='ml-4'>
                    Verification and Assessment: Upon receipt, the Company will assess the validity of the claim, including an examination of digital logs, user activity records, and other relevant data.
                  </li>
                  <li className='ml-4'>
                    Decision and Communication: The Company shall, at its sole discretion, determine the validity of the claim and communicate its decision to the customer within a reasonable timeframe.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className='font-bold'>Documentation and Proof of Purchase</h3>
                <ul className='list-disc'>
                  <li className='ml-4'>
                    Requirement of Proof: A valid receipt or proof of purchase is mandatory for the processing of any refund request.
                  </li>
                  <li className='ml-4'>
                    Verification of Purchase: The Company reserves the right to verify the authenticity of the purchase before initiating any refund.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className='font-bold'>Refund Methodology</h3>
                <ul className='list-disc'>
                  <li className='ml-4'>
                    Mode of Refund: Approved refunds will be processed and credited to the customer’s account from which the original payment was made.
                  </li>
                  <li className='ml-4'>
                    No Alternative Refund Methods: The Company shall not provide refunds through any means other than the original method of payment.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className='font-bold'>Conditions for Partial Refunds</h3>
                <p>
                  Partial Refund Circumstances: The Company may, at its discretion, offer a partial refund in scenarios where the software has been partially used, or where the customer has discontinued cooperation in resolving the issue.
                </p>
              </li>
              <li>
                <h3 className='font-bold'>Exclusions from Refund Eligibility</h3>
                <ul className='list-disc'>
                  <li className='ml-4'>
                    Expiry of Refund Period: Services purchased more than three (3) days prior are not eligible for a refund.
                  </li>
                  <li className='ml-4'>
                    Misuse or Unauthorised Use: Claims arising from misuse, unauthorized use, or alteration of the software by the customer.
                  </li>
                </ul>
              </li>
              <li>
                <h3 className='font-bold'>Refund Processing Time</h3>
                <p>
                  Processing Duration: Refunds, once approved, will typically be processed within seven (7) to eight (8) business days.
                </p>
              </li>
              <li>
                <h3 className='font-bold'>Additional Charges and Fees</h3>
                <p>
                  Processing Fees for International Transactions: For refunds involving international transactions, processing fees will be deducted from the refund amount.
                </p>
              </li>
              <li>
                <h3 className='font-bold'>Effect of Subscription Cancellation</h3>
                <p>
                  Non-Refundability: Cancellation of a subscription by the customer does not entitle the customer to a refund under this Policy.
                </p>
              </li>
              <li>
                <h3 className='font-bold'>Compliance with Legal Norms</h3>
                <p>
                  Adherence to Indian Law: The Company's refund practices adhere to the prevailing laws and regulations of the Republic of India and the state of Tamil Nadu.
                </p>
              </li>
              <li>
                <h3 className='font-bold'>Amendments to the Policy</h3>
                <p>
                  Notification of Changes: The Company reserves the right to modify this Policy at any time. Changes to the Policy will be communicated to customers via software notifications and email.
                </p>
              </li>
            </ol>
            <p>
              <strong>Contact for Queries</strong>: For any questions related to this Refund Policy, please reach out to us at allotrixapp@gmail.com.
            </p>
        </div>
    </section>
  )
}

export default RefundPolicy;
