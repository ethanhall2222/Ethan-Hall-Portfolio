import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

const breadcrumbItems = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/school", label: "School Projects - WVU" },
  { href: "/projects/school/phishing-detection", label: "Phishing Website Detection" },
];

export const metadata: Metadata = createMetadata({
  title: "Phishing Website Detection",
  description: "Classifying phishing vs. legitimate sites with interpretable machine learning models.",
  path: "/projects/school/phishing-detection",
});

export default function PhishingDetectionPage() {
  return (
    <Section
      title="Phishing Website Detection"
      subtitle="Machine Learning"
      headline="Classifying phishing vs. legitimate websites using interpretable models and tuned decision thresholds."
      contentClassName="space-y-8"
    >
      <Breadcrumbs items={breadcrumbItems} />

      <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">Problem</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-ink">
          Organizations face rising phishing attempts that mimic legitimate domains. False positives create friction for
          users, but missed detections can lead to credential theft. The dataset exhibited moderate class imbalance, so I
          evaluated strategies that balanced recall with precision.
        </p>
      </article>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Data</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            Worked with the UCI phishing website dataset (11,000+ rows). Features included binary flags for URL patterns,
            presence of special characters, HTTPS usage, pop-up behavior, and ordinal measures such as domain age and URL
            length bands. Cleaned missing domain metadata and encoded ordinal features for modeling.
          </p>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Methods</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            Split data 70/30 with stratification, ran 5-fold cross-validation, and compared logistic regression, decision
            tree, and random forest models. Applied class weighting to address imbalance and tuned classification
            thresholds based on business tolerances for false positives vs. false negatives.
          </p>
        </article>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Results</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            Random forest delivered the best ROC-AUC (0.968) with recall of 0.93 and precision of 0.90 at a tuned
            threshold. The confusion matrix showed a manageable false-positive rate, and logistic regression highlighted
            URL length, HTTPS usage, and abnormal anchor tags as top predictors.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-ink">
            <li>Feature importance: URL length bands, having ~ on the URL, requests to external domains.</li>
            <li>Secondary signals: legacy domain age and pages that hide submit buttons.</li>
          </ul>
        </article>

        <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Limitations</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-ink">
            Benchmark datasets may lag behind current phishing tactics, so models risk concept drift. Attackers adapt to
            published signals, making continuous monitoring and retraining essential. Further work could combine URL-level
            features with email metadata or user behavior analytics.
          </p>
        </article>
      </div>

      <article className="card border border-slate-200 bg-white/85 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-ink">Artifacts</h3>
        <a
          href="/assets/reports/phishing-website-detection.pdf"
          aria-label="Download the phishing website detection PDF"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--accent-strong)]/30 bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent-strong)] transition hover:border-[var(--accent-strong)]/60"
        >
          Download report (PDF)
        </a>
      </article>
    </Section>
  );
}
