// app/default/page.tsx

import PageBody from "@/components/auth/PageBody";
import PageHeader from "@/components/auth/PageHeader";
import TableItem from "@/components/table/TableItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FolderPlusIcon, PlusIcon } from "lucide-react";

export default function DefaultPage() {
  const items: Array<React.ReactNode> = [];
  for (let index = 0; index < 120; index++) {
    items.push(<TableItem key={index} />);
  }
  return (
    <>
      <div className="sticky top-14 lg:top-0  z-50 bg-white dark:bg-gray-900 px-4 pt-4 lg:px-6 lg:pt-6">
        <PageHeader
          title="Files"
          subtitle="Manage all your files."
          className=""
        >
          <div className="hidden lg:flex items-center gap-x-1">
            <Button
              className="group flex flex-1 items-center justify-start gap-x-3 px-3 text-left"
              title="Add New Document"
            >
              <PlusIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>Add New Document</span>
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="border-gray-500 bg-gray-50 hover:bg-gray-200 dark:bg-black hover:dark:bg-muted"
            >
              <FolderPlusIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
            </Button>
          </div>
        </PageHeader>

        <Separator className="mb-5 bg-gray-200 dark:bg-gray-800" />
      </div>

      <PageBody>
        <div className="space-y-4">
          <ul className="space-y-4">
            {[...Array(100).keys()].map((x) => (
              <TableItem key={x} />
            ))}
          </ul>
          <ul className="space-y-4">{items}</ul>
        </div>
      </PageBody>
    </>
  );
}
