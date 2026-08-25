import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth/auth-button";
import { hasEnvVars } from "@/lib/utils";
import {
  ArrowRight,
  Bot,
  Braces,
  Check,
  FileText,
  MessageSquareText,
  Palette,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  UserRoundPlus,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const workflow = [
    {
      icon: UploadCloud,
      title: "Upload the source material",
      copy: "Add the documents and notes that explain your business. ConvertDesk stores them as searchable context for the bot.",
    },
    {
      icon: Bot,
      title: "Tune the assistant",
      copy: "Set the company name, greeting, starter questions, placement, size, colors, and whether the chat should collect leads.",
    },
    {
      icon: Braces,
      title: "Deploy with an embed",
      copy: "Use the widget script or API route to place the assistant where customers already ask questions.",
    },
  ];

  const features = [
    "RAG answers from your own knowledge base",
    "OpenAI embeddings with Supabase vector search",
    "Custom welcome messages and starter prompts",
    "Brand color, chat color, size, and placement controls",
    "Lead capture for name and email inside the conversation",
    "Embeddable widget plus query and appearance API routes",
  ];

  const proofCards = [
    {
      label: "Knowledge",
      title: "Files become retrievable context",
      copy: "Uploaded .txt and .docx files are processed into chunks so answers stay tied to the material you provided.",
      icon: FileText,
    },
    {
      label: "Experience",
      title: "A branded chat that still feels native",
      copy: "Preview the assistant while you adjust company details, colors, greeting copy, default messages, size, and placement.",
      icon: Palette,
    },
    {
      label: "Pipeline",
      title: "Helpful answers can turn into leads",
      copy: "When a visitor is ready for contact, the assistant collects their name and email and saves the lead against the bot.",
      icon: UserRoundPlus,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f9ff] text-slate-950">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-[radial-gradient(circle_at_68%_20%,rgba(93,180,255,0.28),transparent_34%),linear-gradient(135deg,#eaf2ff_0%,#f8fbff_46%,#e7fff6_100%)]" />

        <nav className="w-full border-b border-slate-200/80 bg-white/85 backdrop-blur">
          <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 text-sm sm:px-8">
            <Link href="/" className="flex items-center gap-3 font-semibold">
              <span className="grid size-9 place-items-center rounded-lg bg-slate-950 text-white">
                <MessageSquareText className="size-4" aria-hidden="true" />
              </span>
              <span>ConvertDesk</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="hidden rounded-full px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 sm:inline-flex"
              >
                Dashboard
              </Link>
              {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
            </div>
          </div>
        </nav>

        <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-sm font-medium text-sky-950">
              <Sparkles className="size-4 text-sky-600" aria-hidden="true" />
              AI front desk for your own knowledge base
            </div>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.035em] text-slate-950 sm:text-6xl lg:text-7xl">
              Turn company docs into a chatbot that answers and captures leads.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-700">
              ConvertDesk helps you launch a branded website assistant from your files. Upload knowledge, preview the chat experience, embed it on your site, and let the bot handle relevant questions with a clear path to contact.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/sign-up"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
              >
                Create your first bot
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
              >
                View dashboard
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[28px] bg-sky-200/45 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-rose-400" />
                  <span className="size-3 rounded-full bg-amber-300" />
                  <span className="size-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-medium text-slate-500">Preview assistant</span>
              </div>
              <div className="grid min-h-[520px] bg-slate-950 p-4 sm:grid-cols-[0.9fr_1.1fr] sm:p-5">
                <div className="hidden border-r border-white/10 pr-5 sm:block">
                  <div className="mb-5 text-sm font-semibold text-white">Bot setup</div>
                  {[
                    ["Company", "Northstar Dental"],
                    ["Placement", "Bottom right"],
                    ["Lead capture", "Enabled"],
                    ["Knowledge", "FAQ.docx"],
                  ].map(([label, value]) => (
                    <div key={label} className="mb-4 rounded-lg bg-white/7 p-3">
                      <div className="text-xs text-slate-400">{label}</div>
                      <div className="mt-1 text-sm font-medium text-white">{value}</div>
                    </div>
                  ))}
                  <div className="mt-6 rounded-lg bg-emerald-300 p-3 text-sm font-semibold text-emerald-950">
                    5 matching chunks ready for answers
                  </div>
                </div>
                <div className="flex flex-col justify-end gap-3 sm:pl-5">
                  <div className="mr-8 rounded-xl rounded-bl-sm bg-white p-4 text-sm leading-6 text-slate-800">
                    Hi, I am the Northstar assistant. Ask me about appointments, services, pricing, or insurance.
                  </div>
                  <div className="ml-12 rounded-xl rounded-br-sm bg-sky-400 p-4 text-sm font-medium leading-6 text-sky-950">
                    Do you offer same-week cleanings?
                  </div>
                  <div className="mr-8 rounded-xl rounded-bl-sm bg-white p-4 text-sm leading-6 text-slate-800">
                    Yes. The office keeps a few same-week hygiene slots open. Would you like the team to contact you?
                  </div>
                  <div className="rounded-xl border border-white/12 bg-white/7 p-4">
                    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                      <ShieldCheck className="size-4 text-emerald-300" aria-hidden="true" />
                      Lead details
                    </div>
                    <div className="grid gap-2">
                      <div className="rounded-md bg-white px-3 py-2 text-sm text-slate-500">Name</div>
                      <div className="rounded-md bg-white px-3 py-2 text-sm text-slate-500">Email</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold text-sky-700">Workflow</p>
            <h2 className="mt-3 max-w-xl text-balance text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              From business files to live assistant in one dashboard.
            </h2>
          </div>
          <div className="grid gap-4">
            {workflow.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-slate-950 text-white">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-pretty text-sm leading-6 text-slate-700">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-emerald-300">What is inside</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              The parts you need to make the bot useful on day one.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-300">
              ConvertDesk is not just a chat bubble. It brings retrieval, appearance controls, lead collection, and embed endpoints into the same build path.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-lg bg-white/7 p-4">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-300" aria-hidden="true" />
                <span className="text-sm leading-6 text-slate-100">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9ff] py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-sky-700">Built around the conversation</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Answer first. Capture the lead when the moment is right.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {proofCards.map((card) => (
              <div key={card.title} className="rounded-xl bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-800">{card.label}</span>
                  <card.icon className="size-5 text-slate-500" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-6 text-slate-700">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-sky-700">Embed-ready</p>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Ship the same assistant through a widget or API.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-700">
              The app exposes routes for bot appearance, visitor questions, and lead submission, so the assistant can live on your site while staying connected to the bot you manage in ConvertDesk.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-950 p-5 text-sm text-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
            <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-4 text-slate-400">
              <span className="size-3 rounded-full bg-rose-400" />
              <span className="size-3 rounded-full bg-amber-300" />
              <span className="size-3 rounded-full bg-emerald-400" />
            </div>
            <pre className="overflow-x-auto rounded-lg bg-black p-4 leading-7 text-slate-100">
              <code>{`<script
  src="/my-widget.js"
  data-bot-id="your-bot-id">
</script>

POST /api/query
{
  "botId": "your-bot-id",
  "question": "Do you offer onboarding?"
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="bg-sky-500 px-5 py-16 text-sky-950 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Put a better front desk on your website.
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-7">
              Start with one bot, one knowledge base, and one embedded assistant that can answer questions and collect qualified contacts.
            </p>
          </div>
          <Link
            href="/auth/sign-up"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 focus:ring-offset-sky-500"
          >
            Get started
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-semibold text-white">
            ConvertDesk
          </Link>
          <div className="flex gap-4">
            <Link href="/dashboard" className="hover:text-white">
              Dashboard
            </Link>
            <Link href="/auth/login" className="hover:text-white">
              Login
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
