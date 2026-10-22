import { Eye, Factory, Target } from 'lucide-react';
import SEO from '../components/SEO';
import { CTASection, PageHero, SectionHeading } from '../components/UI';

const customers = [
  'Plywood and laminate manufacturing industries',
  'Manufacturing plants and factories',
  'Engineering and fabrication workshops',
  'Maintenance departments',
  'Mechanical and electrical contractors',
  'Industrial service providers',
  'Commercial establishments requiring industrial supplies',
];

const approach = [
  'Wide product variety',
  'Competitive and transparent pricing',
  'Requirement-based sourcing',
  'Timely coordination and delivery',
  'Reliable communication',
  'Long-term customer relationships',
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Accura Industrial Supplies and our approach to industrial procurement in Perumbavoor, Kerala."
      />
      <PageHero
        eyebrow="About us"
        title="Focused on making industrial purchasing easier."
        copy="A requirement-led trading business serving the maintenance and operational needs of industrial customers."
      />
      <section className="py-20">
        <div className="container-site grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading eyebrow="Who we are" title="Your local industrial sourcing contact" />
          <div className="space-y-5 text-lg leading-8">
            <p>
              ACCURA INDUSTRIAL SUPPLIES is an industrial products and maintenance supplies
              trading company based in Perumbavoor, Ernakulam, Kerala, India. We aim to provide
              reliable industrial products and essential maintenance materials to manufacturing
              industries, factories, workshops, and other industrial establishments.
            </p>
            <p>
              Our goal is to simplify industrial procurement by providing a wide range of quality
              products through a single point of contact. We focus on understanding our customers’
              requirements, sourcing suitable products, offering competitive pricing, and ensuring
              dependable customer support.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="How we work"
            title="Our business approach"
            copy="We aim to procure products from suitable manufacturers, authorised distributors, and reliable suppliers according to customer specifications and requirements."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map((item, index) => (
              <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5" key={item}>
                <span className="text-sm font-black text-safety">0{index + 1}</span>
                <b className="text-ink">{item}</b>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we serve" title="Target customers" />
            <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {customers.map((customer) => (
                <li className="flex gap-3 py-4" key={customer}>
                  <Factory size={19} className="shrink-0 text-safety" />
                  {customer}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5">
            <article className="rounded-xl bg-ink p-8 text-white">
              <Eye className="text-safety" />
              <h3 className="mt-5 text-2xl font-bold text-white">Our Vision</h3>
              <p className="mt-3 leading-7 text-slate-300">
                To become a trusted industrial supply partner by providing a broad range of
                industrial products, dependable sourcing, competitive pricing, and professional
                customer service.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 p-8">
              <Target className="text-safety" />
              <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 leading-7">
                To make industrial purchasing easier by connecting customers with the products
                they need for machinery maintenance, plant operations, and industrial applications.
              </p>
            </article>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
