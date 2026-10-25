import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scene Scout Privacy Policy | Agile Lens',
  description:
    'Privacy policy for Agile Lens Scene Scout, a film-planning and Gaussian-splat app for Meta Quest from Agile Lens, LLC.',
};

const sections = [
  {
    heading: 'The short version',
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Scene Scout has no accounts, no ads, no analytics and no in-app purchases.</li>
        <li>
          Head, hand and controller tracking is processed on your headset to run the app. We do not
          receive it.
        </li>
        <li>
          Scene Scout does not collect, store or sell personal data, and does not send personal data
          from your headset to Agile Lens or to third parties.
        </li>
        <li>
          Images you capture with the in-app camera stay on your headset in the app&apos;s private
          storage and are removed when you uninstall the app.
        </li>
      </ul>
    ),
  },
  {
    heading: 'What the app stores on your device',
    body: (
      <p>
        Scene Scout saves your settings (comfort and quality options) and the stills you take with the
        film-kit camera. This information is stored locally on your headset, in storage that other apps
        cannot read, and is not uploaded by the app.
      </p>
    ),
  },
  {
    heading: 'Permissions',
    body: (
      <p>
        Hand tracking is used only to let you interact with the app using your hands. Tracking data is
        processed on the headset while the app runs. The app also works with controllers if you decline
        the permission.
      </p>
    ),
  },
  {
    heading: 'Third parties',
    body: (
      <p>
        Scene Scout is built with Unreal Engine from Epic Games. Meta&apos;s Horizon OS and the Meta
        Horizon Store handle your Meta account, purchases and platform data under Meta&apos;s own
        policies. We do not receive that data.
      </p>
    ),
  },
  {
    heading: 'Children',
    body: (
      <p>
        Scene Scout is not directed at children under 13. Because the app collects no personal
        information from anyone, it does not knowingly collect information from children.
      </p>
    ),
  },
  {
    heading: 'Deletion and your choices',
    body: (
      <p>
        Because we hold no personal data about you, there is nothing for us to delete. Uninstalling
        Scene Scout removes its settings and captured images from your headset.
      </p>
    ),
  },
  {
    heading: 'Changes to this policy',
    body: (
      <p>
        If the app&apos;s data practices change, we will update this page and the effective date above
        before the change reaches users.
      </p>
    ),
  },
  {
    heading: 'Contact',
    body: (
      <p>
        Questions about this policy can go to{' '}
        <a href="mailto:info@agilelens.com" className="text-pink hover:underline">
          info@agilelens.com
        </a>
        .
      </p>
    ),
  },
];

export default function SceneScoutPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-black mb-4">Agile Lens Scene Scout Privacy Policy</h1>
      <p className="text-muted mb-2">Effective date: [EFFECTIVE DATE]</p>
      <p className="text-muted mb-12">
        Publisher: Agile Lens, LLC, 22 West 19th Street, 6th Floor, New York, NY 10011. Scene Scout is
        a film-planning and Gaussian-splat app for Meta Quest.
      </p>

      <div className="space-y-10">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-2xl font-bold mb-3">{s.heading}</h2>
            <div className="text-muted leading-relaxed">{s.body}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
