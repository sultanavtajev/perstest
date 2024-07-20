import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Glemtpass() {
  return (
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Glemt passord?
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Skriv inn e-postadressen tilknyttet kontoen din, så sender vi deg en
            lenke for å tilbakestille passordet ditt.
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label htmlFor="email" className="sr-only">
              E-postadresse
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="E-postadresse"
            />
          </div>
          <Button type="submit" className="w-full">
            Tilbakestill passord
          </Button>
        </form>
        <div className="flex justify-center">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Tilbake til innlogging
          </Link>
        </div>
      </div>
  );
}
