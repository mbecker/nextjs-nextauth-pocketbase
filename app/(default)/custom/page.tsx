// app/default/page.tsx

import PageBody from "@/components/auth/PageBody";
import PageHeader from "@/components/auth/PageHeader";

export default function DefaultPage() {
  return (
    <>
      <PageHeader pageName="Default" subtitle="Only Default" />

      <PageBody className="">
        <p>Default page</p>
      </PageBody>
    </>
  );
}
