"use client";

import Link from "next/link";

export default function Komponent() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Utforsk din personlighet med vår test
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Oppdag hvordan vår personlighetstest kan gi deg innsikt i dine styrker og svakheter.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <StartIcon className="flex-shrink-0 w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">
                  Steg 1: Start testen
                </h3>
                <p className="text-muted-foreground">
                  Klikk på "Start test"-knappen for å begynne med vår omfattende personlighetstest.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <SvarIcon className="flex-shrink-0 w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">
                  Steg 2: Svar på spørsmålene
                </h3>
                <p className="text-muted-foreground">
                  Fullfør testen ved å svare på en rekke spørsmål som dekker forskjellige aspekter av din personlighet.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ResultIcon className="flex-shrink-0 w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">
                  Steg 3: Få resultatene
                </h3>
                <p className="text-muted-foreground">
                  Etter å ha fullført testen, vil du få en detaljert rapport som beskriver din personlighetstype.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FlagIcon className="flex-shrink-0 w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">Oppdag fordelene</h3>
                <p className="text-muted-foreground">
                  Vår personlighetstest kan hjelpe deg med å:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    Forstå dine naturlige styrker og svakheter
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    Forbedre dine personlige og profesjonelle forhold
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-primary" />
                    Få innsikt i karrieremuligheter som passer din personlighet
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckIcon className="flex-shrink-0 w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">
                  Nøyaktige resultater
                </h3>
                <p className="text-muted-foreground">
                  Vår test er utviklet av eksperter og basert på vitenskapelige prinsipper, noe som sikrer nøyaktige og pålitelige resultater.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/test"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Start testen
          </Link>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ResultIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function SvarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
  );
}

function StartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 16 16 12 12 8"></polyline>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );
}
