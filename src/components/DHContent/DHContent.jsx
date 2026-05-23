import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import img from "../../assets/design.jpg";


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
              <p className="text-base/7 font-semibold text-indigo-400">Design</p>
              <h4 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
                DESIGN HEARING SERVICE
              </h4>
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
               <span className="font-semibold text-slate-100">Expert Representation Before the Design Office</span>
                <br/>
                When objections persist, hearings may be scheduled. We represent you and present strong arguments to support your design application.
              </p>
              {/* <p className="mt-6 text-xl/8 text-gray-300 font-semibold">
                What We Do
              </p> */}
              {/* <p className="mt-6 text-xl/8 text-gray-300 font-semibold">
                Secure Legal Protection for Your Work
              </p> */}

              {/* <p className="mt-8">
                Copyright protects original literary, artistic, musical, and creative works such as books, software, designs, music, films, and more. While copyright exists upon creation, registration provides <span className='font-semibold text-slate-100'>strong legal evidence of ownership</span> and enhances enforcement rights.
              </p> */}

              <p className="mt-3 font-semibold text-slate-100">What We Do</p>
              <ul role="list" className="mt-5 space-y-5 text-gray-400">
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                  Prepare hearing submissions and arguments 
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                  Advise on legal strategy 
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                  Represent you before the Controller of Designs 
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                  Handle post-hearing compliance and follow-ups 
                  </span>
                </li>
              </ul>
              <br/><hr/><br/>

              <p className="mt-2 font-semibold text-slate-100">Documents Required</p>
              <ul role="list" className="mt-5 space-y-5 text-gray-400">
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                  Hearing notice  
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                  Examination report and reply 
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                  Supporting documents 
                  </span>
                </li>
                <li className="flex gap-x-1">
                  <ChevronDoubleRightIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-400" />
                  <span>
                  Power of Attorney  
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
