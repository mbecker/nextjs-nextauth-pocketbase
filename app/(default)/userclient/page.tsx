import PageBody from "@/components/auth/PageBody";
import PageHeader from "@/components/auth/PageHeader";
import UserInfo from "@/components/userinfo";

export default function Home() {
  return (
    <>
      <PageHeader title="User Client" subtitle="useSession" className="px-4 pt-4 lg:px-6 lg:pt-6"/>

      <PageBody className="flex">
        <UserInfo />
      </PageBody>
    </>
  );
}
