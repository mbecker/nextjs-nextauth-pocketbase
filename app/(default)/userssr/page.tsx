import PageBody from "@/components/auth/PageBody";
import PageHeader from "@/components/auth/PageHeader";
import { authOptions } from "@/lib/authoptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <PageHeader pageName="User SSR" subtitle="User Details" />

      <PageBody className="flex">
        {session !== null && (
          <code className="max-w-screen-lg block whitespace-pre overflow-x-scroll text-xs font-mono bg-gray-200 p-2 rounded-sm">
            <pre>
              <pre>{JSON.stringify(session, undefined, 2)}</pre>
            </pre>
          </code>
        )}
      </PageBody>
    </>
  );
}
