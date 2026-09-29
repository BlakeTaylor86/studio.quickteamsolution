import { useEffect } from "react";
import { Shell } from "../components/Shell";
import { Logo } from "../components/Logo";

const shots = [
  {
    src: "/shots/menu.png",
    alt: "Pixel Boom main menu with Start, Survival, and Options",
    caption: "Campaign or survival",
  },
  {
    src: "/shots/map.png",
    alt: "Pixel Boom zone map showing ten stations in Zone 2",
    caption: "Eight zones, ten stations each",
  },
  {
    src: "/shots/fight.png",
    alt: "Pixel Boom gameplay with a wide beam weapon in Zone 8",
    caption: "Guns that fill the screen",
  },
];

const systems = [
  {
    label: "Move",
    color: "text-yellow",
    body: "Run, jump, and dash. WASD to move, mouse to aim and shoot, right click for your perk. Keyboard, mouse, and gamepad.",
  },
  {
    label: "Arm",
    color: "text-orange",
    body: "Credits buy guns and looks. Pickups turn a starter pistol into spread, rapid, gatling, storm, and beam weapons. Some of them home in.",
  },
  {
    label: "Hunt",
    color: "text-mint",
    body: "Every level has challenges. Hidden arenas sit off the main path. Survival is there when you want a run that does not end at the exit.",
  },
];

export function Home() {
  useEffect(() => {
    document.title = "Quick Team Studios";
  }, []);

  return (
    <Shell>
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Logo className="mb-6 h-28 w-28 sm:h-36 sm:w-36" />
            <p className="font-pixel text-[10px] text-sky sm:text-xs">PIXEL GAMES</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-yellow sm:text-6xl">
              Run. Jump.
              <span className="block text-orange">Shoot. Boom.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/90">
              Quick Team Studios makes chunky 2D action games. Pixel Boom is the
              first one out: a run-and-gun through eight zones, with shops,
              perks, and secret arenas off the main path.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="pixel-btn pixel-btn-yellow"
                href="https://quickteamstudios.itch.io/pixel-boom"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play on itch.io
              </a>
              <a className="pixel-btn pixel-btn-ghost" href="#games">
                See Pixel Boom
              </a>
            </div>
          </div>
          <div className="pixel-frame bg-panel p-3">
            <img
              src="/cover.png"
              alt="Pixel Boom cover art. A pixel character fires at an explosion under a dripping yellow and orange title."
              className="pixelated h-auto w-full bg-[#07101f]"
            />
          </div>
        </section>

        <section id="games" className="border-t border-line bg-black/25">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <p className="font-pixel text-[10px] text-orange sm:text-xs">NOW PLAYING</p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-4xl text-paper sm:text-5xl">Pixel Boom</h2>
              <p className="font-pixel text-[10px] leading-6 text-muted">
                8 ZONES
                <span className="mx-3 text-line">/</span>
                10 LEVELS EACH
                <span className="mx-3 text-line">/</span>
                1 PLAYER
              </p>
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper/90">
              You run, jump, dash, and shoot. Levels end in a louder fight than
              the one before them. Between runs, credits buy guns and looks.
              Perks change how you move and how you kill. Die, learn the tell,
              and go again.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {shots.map((shot) => (
                <figure key={shot.src} className="border-4 border-line bg-panel">
                  <img src={shot.src} alt={shot.alt} className="pixelated aspect-video w-full object-cover" />
                  <figcaption className="px-3 py-3 font-pixel text-[10px] leading-5 text-yellow">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {systems.map((item) => (
                <article key={item.label} className="border-4 border-line bg-panel p-5">
                  <h3 className={`font-pixel text-xs ${item.color}`}>{item.label}</h3>
                  <p className="mt-4 leading-relaxed text-paper/90">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid items-center gap-8 border-4 border-line bg-panel p-4 lg:grid-cols-[1.2fr_0.8fr] lg:p-6">
              <video
                className="pixelated w-full bg-black"
                controls
                playsInline
                preload="metadata"
                poster="/shots/fight.png"
              >
                <source src="/video/pixel-boom-short.mp4" type="video/mp4" />
              </video>
              <div>
                <h3 className="font-display text-3xl text-yellow">A short run</h3>
                <p className="mt-4 leading-relaxed text-paper/90">
                  Pixel Boom is played on your device. It does not ask you to
                  make an account with us. Progress stays on the machine you
                  play on.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Some Pixel Boom graphics and sounds were made with AI
                  assistance. Windows is on itch.io today. An Android build is
                  in closed testing on Google Play.
                </p>
                <a
                  className="pixel-btn pixel-btn-yellow mt-6"
                  href="https://quickteamstudios.itch.io/pixel-boom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Pixel Boom
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
