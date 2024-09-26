import PageBody from "@/components/auth/PageBody";
import PageHeader from "@/components/auth/PageHeader";
import UserInfo from "@/components/userinfo";

export default function Home() {
  return (
    <>
      <PageHeader pageName="User Client" subtitle="User Details Client" />

      <PageBody className="flex">
        <UserInfo />
      </PageBody>
    </>
  );
}
