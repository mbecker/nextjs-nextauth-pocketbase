import PageBody from "@/components/auth/PageBody";
import PageHeader from "@/components/auth/PageHeader";
import DefaultLayout from "./(default)/layout";

export default async function Home() {
  return (
    <DefaultLayout>
      <PageHeader title="Home" subtitle="Standard page" className="px-4 pt-4 lg:px-6 lg:pt-6" />

      <PageBody>
        <p className="mt-6 text-lg leading-8">
          Nextjs app with nextauh and pocketbase.
        </p>
      </PageBody>
    </DefaultLayout>
  );
}
