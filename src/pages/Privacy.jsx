import React from 'react';

const Privacy = () => {
  return (
    <section className='bg-allotrix-bg text-allotrix-text flex flex-col items-center py-24 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4 md:pt-48'>
        <div className='font-allotrix-font-secondary w-full text-center mt-16 md:mt-0'>
            <h1 className='font-bold text-3xl md:text-4xl md:mb-10 px-2'>
                Privacy Policy
            </h1>
        </div>
        <div className='md:w-[750px] mx-auto font-allotrix-font-secondary flex flex-col gap-6'>
            <p>
              To assist you in drafting a Privacy Policy for your business, I'll need to gather some additional information about how your business handles user data. Here are some key questions to consider:
            </p>
            <ol className='flex flex-col gap-4 list-decimal pl-4'>
              <li>
                Data Collection:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    we collect personal information, their registration preferences, their identity proofs documents and payment screenshots. We can also see if the organisation using our product chooses to get more information from their participants
                  </li>
                </ul>
              </li>
              <li>
                Data Use:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    we use this data, primarily, to automate the organization’s allotments. We also use the collected data to target our sales emails and updates. The user is however allowed to cancel this email targeting by clicking on “unsubscribe”
                  </li>
                </ul>
              </li>
              <li>
                Data Sharing:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    We do not share user data with any third parties (e.g., partners, affiliates)?
                  </li>
                </ul>
              </li>
              <li>
                User Consent:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    at the end of google forms there is a consent field where they have to agree inorder for their data to get automated by our platform
                  </li>
                  <li className='ml-4'>
                    yes the user can opt out from this anytime
                  </li>
                </ul>
              </li>
              <li>
                Data Storage and Security:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    the storage of the data is handled by the organization. We only have access to it. We, however store a part of their data like email, full name, profile pic in our database.
                  </li>
                  <li className='ml-4'>
                    we do not store sensitive data, but as long as their password is concerned, it is encrypted.
                  </li>
                </ul>
              </li>
              <li>
                Data Retention:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    user data is retained as long as they opt out
                  </li>
                  <li className='ml-4'>
                    Is there a policy for data deletion upon user request or after a certain period? YES
                  </li>
                </ul>
              </li>
              <li>
                Children's Privacy:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    Does your website cater to children under a certain age? (e.g., under 13 years) YES
                  </li>
                  <li className='ml-4'>
                    Our website is child safe, we do not show anything that might possibly affect a minor.
                  </li>
                </ul>
              </li>
              <li>
                User Rights:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    What rights do users have regarding their data? (e.g., right to access, right to delete, right to correct information) The rights are only given to the organizatiion that is using our product
                  </li>
                </ul>
              </li>
              <li>
                Cross-Border Data Transfer:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    We do not transfer any data.
                  </li>
                </ul>
              </li>
              <li>
                Policy Updates:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    They will receive an email
                  </li>
                </ul>
              </li>
              <li>
                Contact Information:
                <ul className='list-disc'>
                  <li className='ml-4'>
                    What is the contact information if users have privacy-related questions or concerns? the email allotrixapp@gmail.com
                  </li>
                </ul>
              </li>
            </ol>
        </div>
    </section>
  )
}

export default Privacy;
