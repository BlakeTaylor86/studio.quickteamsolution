import { useEffect } from "react";
import { Shell } from "../components/Shell";

const EFFECTIVE_DATE = "September 28, 2026";

export function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Pixel Boom Privacy Policy · Quick Team Studios";
  }, []);

  return (
    <Shell>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="font-pixel text-[10px] text-sky">PIXEL BOOM</p>
        <h1 className="mt-4 font-display text-4xl text-yellow sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-muted">Effective {EFFECTIVE_DATE}</p>

        <div className="mt-10 space-y-10 leading-relaxed text-paper/90">
          <section className="space-y-4">
            <p>
              This policy explains how Quick Team Studios, a label of Quick Team
              Solution ("we", "us"), handles information when you play Pixel
              Boom and when you visit this website. Pixel Boom is a
              single-player 2D run-and-gun.
            </p>
            <p>Pixel Boom does not ask you to create an account with us. We do not sell personal information.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl text-paper">Information stored on your device</h2>
            <p>
              Pixel Boom keeps gameplay on the device you play on. That can
              include progress, settings, and preferences. That information
              stays on your device. We do not receive it, and we do not operate
              a game server that stores it for you.
            </p>
            <p>
              Uninstalling the app removes the copy of that information stored
              with the app, subject to how your device and app store handle
              leftover files and backups.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl text-paper">Information we do not collect</h2>
            <p>Through Pixel Boom itself, we do not collect:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Your name, email address, phone number, or contacts</li>
              <li>Precise location</li>
              <li>Photos, microphone recordings, or camera input</li>
              <li>Advertising identifiers for ads we serve</li>
              <li>An account password or profile with Quick Team Studios</li>
            </ul>
            <p>
              Pixel Boom does not include our own advertising or analytics
              SDKs. We do not share gameplay data with data brokers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl text-paper">Google Play and itch.io</h2>
            <p>
              If you install Pixel Boom from Google Play, Google processes
              information needed to distribute the app. That can include your
              Google account, device details, and store diagnostics. If you
              buy the game on itch.io, itch.io processes that purchase under
              its own policy. We do not receive your store account from those
              services.
            </p>
            <p>
              <a
                className="text-sky underline underline-offset-2 hover:text-yellow"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl text-paper">This website</h2>
            <p>
              studio.quickteamsolution.com does not use analytics cookies and
              does not ask you to make an account. If you visit
              quickteamsolution.com, that site uses Google Analytics and has a
              contact form. Messages you send there are used to reply to you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl text-paper">Children</h2>
            <p>
              Pixel Boom is a run-and-gun action game. It is not directed at
              children under 13, and we do not knowingly collect personal
              information from children.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl text-paper">Retention and deletion</h2>
            <p>
              Because Pixel Boom does not create an account with us, there is
              no Quick Team Studios account to delete. To remove local game
              data, uninstall the game from your device.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl text-paper">Changes</h2>
            <p>
              If Pixel Boom later adds accounts, advertising, or in-app
              analytics, we will update this policy before those features
              collect personal information. The effective date at the top of
              this page will change when we do.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl text-paper">Contact</h2>
            <p>
              Privacy questions can be sent through the contact form at{" "}
              <a className="text-sky underline underline-offset-2 hover:text-yellow" href="https://www.quickteamsolution.com/#contact">
                quickteamsolution.com
              </a>
              . Please mention Pixel Boom in your message.
            </p>
          </section>
        </div>
      </main>
    </Shell>
  );
}
