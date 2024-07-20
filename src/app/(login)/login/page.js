import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Logg inn</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Logg inn på kontoen din for å fortsette.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-post</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Passord</Label>
              <Link
                href="/glemtpass"
                className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
                prefetch={false}
              >
                Glemt passord?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Logg inn
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Har du ikke en konto?{" "}
          <Link
            href="/regdeg"
            className="font-medium text-gray-900 hover:underline dark:text-gray-50"
            prefetch={false}
          >
            Registrer deg
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Tilbake til hovedside
          </Link>
        </div>
      </div>
  );
}
