import React from 'react';
import Card from '../Card/Card';

function Services() {
  return (
    <section className="w-screen m-0 min-h-screen pt-10 pb-20 bg-cover bg-center flex justify-center bg">
      <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-[1400px] w-full">
        <h1 className="text-4xl font-semibold text-slate-800">Our Services</h1>
        <p className="py-5 text-xl font-light text-slate-600">
          We offer a wide range of intellectual property services to help you protect your creations and innovations. Our services include:
        </p>

        {/* Responsive, evenly distributed grid */}
        <div className="my-5 grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-full">
          <Card number="01" title="IPR Consultation" description="We provide expert guidance on protecting and managing your intellectual property, tailored to your business goals and legal needs." redirectTo="emailto:Legalshades26@gmail.com" />
          <Card number="02" title="Trademark Filing" description="Seamless trademark registration services to secure your brand identity and ensure legal protection from the start." redirectTo="/trademark" />
          <Card number="03" title="Trademark Renewal" description="Timely renewal of your trademarks to maintain continuous protection and avoid lapse of rights." redirectTo="/trademark-renewal" />
          <Card number="04" title="Trademark Oppositions" description="Professional assistance in handling trademark disputes, including filing and defending opposition proceedings." redirectTo="/trademark-opposition" />
          <Card number="05" title="Trademark Post Registration Changes" description="Efficient management of post-registration updates such as name, address, or ownership changes in your trademark records." redirectTo="/post-registration-services" />
          <Card number="06" title="Copyright Services" description="Comprehensive copyright registration and advisory services to safeguard your creative works from unauthorized use." redirectTo="/copyright" />
          <Card number="07" title="Design Registration Services" description="Protect the unique visual appearance of your products with expert design registration solutions." redirectTo="/design" />
          <Card number="08" title="Miscellaneous Services" description="We provide a wide range of legal and business support services to cater to the diverse needs of individuals, startups, and established businesses. " redirectTo="/misc" />
        </div>
      </div>
    </section>
  );
}

export default Services;