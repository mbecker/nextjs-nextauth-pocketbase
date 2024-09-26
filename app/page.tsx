import PageBody from "@/components/auth/PageBody";
import PageHeader from "@/components/auth/PageHeader";
import DefaultLayout from "./(default)/layout";

export default async function Home() {
  return (
    <DefaultLayout>
      <PageHeader pageName="Home" subtitle="Nextjs NextAuth Pocketbase" />

      <PageBody>
        <p className="mt-6 text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
        </p>
      </PageBody>
    </DefaultLayout>
  );
}
