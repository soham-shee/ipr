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
                TRADEMARK REGISTRATION – PROTECT YOUR BRAND IDENTITY
              </h4>
              <p className="mt-6 text-xl/8 text-gray-300">
                What is a Trademark?
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
                A Trademark is a unique identity that sets your business apart from competitors. It can be a name, logo, tagline, symbol, design, sound, or even a combination of these elements that represents your brand.
                In today’s competitive market, your brand is one of your most valuable assets—and a trademark ensures that asset is legally protected.
                <p className='font-semibold text-slate-100'>Examples of trademarks include:</p>

              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-400">
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    Brand names (e.g., business or product names) 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    Logos and symbols 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    Taglines or slogans 
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    Unique packaging styles 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                   Sounds or jingles
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-xl/8 text-gray-300 font-semibold">
                Why is Trademark Registration Important?
              </p>

              <p className="mt-8">
                Registering your trademark is not just a legal formality—it’s a strategic business decision.
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-400">
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    <strong className="font-semibold text-white">Legal Protection</strong> <br></br>
                    A registered trademark gives you <span className='font-semibold text-slate-100'>exclusive rights</span> to use your brand name or logo and prevents others from copying or misusing it.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    <strong className="font-semibold text-white">Brand Recognition</strong> <br></br>
                    It helps customers identify your products or services instantly, building <span className='font-semibold text-slate-100'>trust and credibility</span> in the market.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    <strong className="font-semibold text-white">Business Asset Creation</strong> <br></br>
                    A trademark becomes an <span className='font-semibold text-slate-100'>intangible asset</span> that can be sold, licensed, or franchised.

                  </span>
                </li>

                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                    <strong className="font-semibold text-white">Legal Advantage</strong> <br></br>
                    In case of disputes, a registered trademark gives you a <span className='font-semibold text-slate-100'>strong legal position</span> to enforce your rights.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                   <strong className="font-semibold text-white">Nationwide Protection</strong> <br></br>
                    Once registered in India, your trademark is protected across the country.

                  </span>
                </li>
              </ul>

              <p className="mt-6 text-xl/8 text-gray-300 font-semibold">
                Step-by-Step Trademark Registration Process
              </p>

              <p className="mt-8">
                We simplify the entire trademark journey for you. Here’s how the process works:
              </p>

              <ul role="list" className="mt-8 space-y-10 text-gray-400">

                {/* Step 1 */}
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon className="mt-1 size-5 text-indigo-400" />
                  <span>
                    <strong className="text-white">1. Trademark Search (Availability Check)</strong><br />
                    Before filing an application, it is crucial to ensure that your chosen trademark is unique. <br/>
                    ✔ We conduct a comprehensive search in the trademark database <br />
                    ✔ Identify similar or conflicting marks<br />
                    ✔ Suggest improvements if required<br />
                    <span className="text-indigo-300 font-light">This step reduces the chances of rejection.</span>
                  </span>
                </li>

                {/* Step 2 */}
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon className="mt-1 size-5 text-indigo-400" />
                  <span>
                    <strong className="text-white">2. Trademark Application Filing</strong><br />
                    Once your trademark is finalized:<br />
                    ✔ We prepare and file your application<br />
                    ✔ Select the appropriate <span className="text-slate-100 font-semibold">class/category</span> (based on your business type)<br />
                    ✔ Provide you with an <span className="text-slate-100 font-semibold">acknowledgement receipt (TM number)</span><br />
                    <span className="text-indigo-300">After filing, you can start using the <span className="font-semibold">™ symbol</span>.</span>
                  </span>
                </li>

                {/* Step 3 */}
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon className="mt-1 size-5 text-indigo-400" />
                  <span>
                    <strong className="text-white">3. Examination by Trademark Office</strong><br />
                    The Trademark Registrar reviews your application:<br />
                    ✔ Verifies compliance with legal rules<br />
                    ✔ Checks for similarities with existing trademarks<br />
                    ✔ May raise objections (if any issues are found)<br />
                    <span className="text-indigo-300">Don’t worry—we handle objections professionally with proper legal replies.</span>
                  </span>
                </li>

                {/* Step 4 */}
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon className="mt-1 size-5 text-indigo-400" />
                  <span>
                    <strong className="text-white">4. Publication in Trademark Journal</strong><br />
                    Once accepted, your trademark is published in the <span className="text-slate-100 font-semibold">Trademark Journal</span>.<br />
                    ✔ This allows the public to review your trademark<br />
                    ✔ Any third party can file an opposition within 4 months
                  </span>
                </li>

                {/* Step 5 */}
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon className="mt-1 size-5 text-indigo-400" />
                  <span>
                    <strong className="text-white">5. Opposition (If Filed)</strong><br />
                    If someone objects:<br />
                    ✔ A legal proceeding is initiated<br />
                    ✔ Both parties present arguments and evidence<br />
                    ✔ The registrar decides the outcome<br />
                    <span className="text-indigo-300">With proper handling, most cases are resolved successfully.</span>
                  </span>
                </li>

                {/* Step 6 */}
                <li className="flex gap-x-3">
                  <ChevronDoubleRightIcon className="mt-1 size-5 text-indigo-400" />
                  <span>
                    <strong className="text-white">6. Trademark Registration Certificate</strong><br />
                    If no opposition is filed—or if the case is resolved in your favor:<br />
                    ✔ Your trademark is officially registered<br />
                    ✔ You receive the <span className="text-slate-100 font-semibold">Registration Certificate</span><br />
                    ✔ You can now use the <span className="text-slate-100 font-semibold">® symbol</span><br />
                    <span className="text-indigo-300">Brand fully protected</span>
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
