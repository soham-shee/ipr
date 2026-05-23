import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import img from "../../assets/trademark.jpg";


export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-400">Trademark</p>
              <h4 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
                TRADEMARK RENEWAL
              </h4>
              <p className="mt-6 text-xl/8 text-gray-300">
                What is a Trademark Renewal?
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={img}
            className="w-3xl max-w-none rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sm:w-228"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
              <p>
                A trademark registration is not valid forever—it must be renewed periodically to maintain protection. In India, a trademark is valid for 10 years from the date of registration and can be renewed indefinitely for successive periods of <span className="font-semibold text-white">10 years</span>.
                <br/>
                Failure to renew your trademark on time may result in its removal from the register, exposing your brand to misuse or registration by others.
                <p className='font-semibold text-slate-100'>Why renewal is important:</p>

              </p>
              <ul role="list" className="mt-8 space-y-5 text-gray-400">
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    Ensures continued legal protection of your brand 
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    Prevents loss of exclusive rights 
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    Avoids costly re-registration processes 
                  </span>
                </li>

                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    Maintains brand value and goodwill 
                  </span>
                </li>
              </ul>
              <br/>
              <p className='font-semibold text-slate-100'>When Should You Renew?</p>

              <ul role="list" className="mt-8 space-y-5 text-gray-400">
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    A renewal application can be filed <span className='font-semibold text-slate-100'>within 1 year before expiry </span>
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    There is also a <span className='font-semibold text-slate-100'>grace period of 6 months after expiry </span>with an additional fee 
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    If not renewed even during the grace period, restoration may be possible (subject to conditions) 
                  </span>
                </li>
              </ul>
              <br/>
              <hr/>
              <br/>
              <p className='font-semibold text-slate-100'>Documents Required for Trademark Renewal</p>

              <ul role="list" className="mt-8 space-y-5 text-gray-400">
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    Applicant’s details (Name, Address, Nationality) 
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    Power of Attorney (if filed through an agent/attorney) 
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-xl/8 text-gray-300 font-semibold">
                POST-REGISTRATION CHANGES IN TRADEMARK
              </p>

              <p className="mt-8">
                After registration, certain details related to a trademark may need to be updated. These changes must be officially recorded with the Trademark Registry to ensure the register reflects accurate and current information.
              </p>
              <br/>
              <hr/>
              <br/>
              <p className='font-semibold text-slate-100'>Types of Post-Registration Changes</p>

              <ul role="list" className="mt-8 space-y-5 text-gray-400">

                {/* Step 1 */}
                <li className="flex gap-x-3">
                  <span>
                    <strong className="text-white">1. Change in Proprietor Name</strong><br />
                    If the owner’s name changes due to legal reasons (e.g., rebranding, marriage, etc.), it must be updated.
                  </span>
                </li>

                {/* Step 2 */}
                <li className="flex gap-x-3">
                  <span>
                    <strong className="text-white">2. Change of Address</strong><br />
                    Any change in the registered address of the trademark owner must be recorded.
                  </span>
                </li>

                {/* Step 3 */}
                <li className="flex gap-x-3">
                  <span>
                    <strong className="text-white">3. Assignment of Trademark</strong><br />
                    Transfer of ownership from one party to another, either with or without goodwill.
                  </span>
                </li>

                {/* Step 4 */}
                <li className="flex gap-x-3">
                  <span>
                    <strong className="text-white">4. Correction of Clerical Errors</strong><br />
                    Minor corrections in the trademark register (e.g., spelling mistakes).
                  </span>
                </li>
              </ul>
              <br/>
              <hr/>
              <br/>
            <p className='font-semibold text-slate-100'>Documents Required for Post-Registration Changes</p>

            <p className='mt-3 text-slate-100'>For Name/Address Change:</p>

              <ul role="list" className="mt-2 space-y-5 text-gray-400">

                {/* Step 1 */}
                <li className="flex gap-x-5">
                  <span>
                    1. Proof of change (e.g., incorporation certificate, affidavit, or legal document) 
                  </span>
                </li>

                {/* Step 2 */}
                <li className="flex gap-x-3">
                  <span>
                    2. Copy of trademark registration certificate 
                  </span>
                </li>

                {/* Step 3 */}
                <li className="flex gap-x-3">
                  <span>
                    3. Power of Attorney (if applicable) 
                  </span>
                </li>
              </ul>

              <br/><hr/><br/>

              <p className='mt-3 text-slate-100'>For Assignment:</p>

              <ul role="list" className="mt-2 space-y-5 text-gray-400">

                {/* Step 1 */}
                <li className="flex gap-x-5">
                  <span>
                    1. Assignment deed (duly executed) 
                  </span>
                </li>

                {/* Step 2 */}
                <li className="flex gap-x-3">
                  <span>
                    2. Identity and address proof of both parties 
                  </span>
                </li>

                {/* Step 3 */}
                <li className="flex gap-x-3">
                  <span>
                    3. Trademark details 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    4. Power of Attorney (if applicable) 
                  </span>
                </li>
              </ul>


              <br/><hr/><br/>

              <p className='mt-3 text-slate-100'>For Corrections:</p>

              <ul role="list" className="mt-2 space-y-5 text-gray-400">

                {/* Step 1 */}
                <li className="flex gap-x-5">
                  <span>
                    1. Supporting documents showing correct details 
                  </span>
                </li>

                {/* Step 2 */}
                <li className="flex gap-x-3">
                  <span>
                    2. Request application
                  </span>
                </li>
              </ul>


              <br/><hr/><br/>

              <p className='mt-3 text-slate-100'>Why Record Changes?</p>

              <ul role="list" className="mt-2 space-y-5 text-gray-400">

                {/* Step 1 */}
                <li className="flex gap-x-5">
                  <span>
                    1. Maintains accurate ownership records 
                  </span>
                </li>

                {/* Step 2 */}
                <li className="flex gap-x-3">
                  <span>
                    2. Ensures enforceability of rights 
                  </span>
                </li>

                {/* Step 3 */}
                <li className="flex gap-x-3">
                  <span>
                    3. Avoids legal disputes 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    4. Required for future transactions (assignment, licensing, etc.) 
                  </span>
                </li>
              </ul>

              <br/><hr/><br/>
              
              <p className="mt-6 text-xl/8 text-gray-300 font-bold">
                How We Can Help
              </p> 
              <p className='font-semibold mt-3 text-slate-100'>We assist with:</p>

              <ul role="list" className="mt-2 space-y-5 text-gray-400">
                <li className="flex gap-x-5">
                  <span>
                    Timely trademark renewal filings 
                  </span>
                </li>
                <li className="flex gap-x-5">
                  <span>
                    Handling late renewals and restorations 
                  </span>
                </li>
                <li className="flex gap-x-5">
                  <span>
                    Recording all post-registration changes  
                  </span>
                </li>
                <li className="flex gap-x-5">
                  <span>
                    Drafting assignment and licensing agreements 
                  </span>
                </li>
                <li className="flex gap-x-5">
                  <span>
                    End-to-end compliance with Trademark Registry requirements 
                  </span>
                </li>
              </ul>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
