export const metadata = {
  title: 'Contact — Mekanova',
  description: 'Hire Mekano for AI transformation consulting, team training, or hands-on implementation.',
};

const ways = [
  {
    label: 'Email',
    value: 'mekanovaagency@gmail.com',
    href: 'mailto:mekanovaagency@gmail.com',
    description: 'Best for project inquiries and consulting conversations.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/emekaakano',
    href: 'https://linkedin.com/in/emekaakano',
    description: 'Connect professionally, follow the journey.',
  },
  {
    label: 'GitHub',
    value: 'github.com/emekaakano',
    href: 'https://github.com/emekaakano',
    description: 'See the code behind every project.',
  },
];

const services = [
  {
    title: 'AI Strategy & Roadmapping',
    desc: 'Cut through vendor noise. Get a clear, practical roadmap for where AI can actually move the needle in your organization.',
  },
  {
    title: 'Team AI Literacy Training',
    desc: 'Hands-on workshops that teach your team to work with AI tools — not just use them, but integrate them into daily processes.',
  },
  {
    title: 'Process Transformation',
    desc: 'Identify high-value processes ripe for AI augmentation, then implement the changes and measure the impact.',
  },
  {
    title: 'AI-Assisted Development',
    desc: 'Need a prototype or internal tool built fast? I build with AI, which means faster delivery and lower cost without sacrificing quality.',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-slate-900">Work With Me</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            I&apos;m available for consulting engagements, team training, and employment
            conversations. If you&apos;re trying to figure out how AI actually fits into
            your organization — I&apos;d like to talk.
          </p>
        </div>

        {/* Services */}
        <div className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">What I Offer</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="mb-2 font-semibold text-slate-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact options */}
        <div className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Reach Out</h2>
          <div className="space-y-4">
            {ways.map((w) => (
              <a
                key={w.label}
                href={w.href}
                target={w.href.startsWith('http') ? '_blank' : undefined}
                rel={w.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-md"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-sm font-bold text-violet-600">
                  {w.label[0]}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{w.label}</p>
                  <p className="text-sm text-violet-600">{w.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{w.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Availability note */}
        <div className="rounded-2xl bg-violet-50 p-6 text-sm text-violet-800">
          <strong>Currently available</strong> for new consulting engagements and open to
          employment conversations for Digital Transformation and AI Strategy roles.
          Response time: within 48 hours.
        </div>
      </div>
    </div>
  );
}
