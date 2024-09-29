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

        <section id="documents-header-count"><div><div className="mb-2 flex items-center gap-x-2 pt-5"><p className="flex items-center gap-x-1 text-sm text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file h-5 w-5"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg><span>32 documents</span></p></div></div></section>


        <Separator className="mb-5 bg-gray-200 dark:bg-gray-800" />
        
      </div>

      <PageBody>
        <div className="space-y-4">
          {/* <ul className="space-y-4">
            {[...Array(100).keys()].map((x) => (
              <TableItem key={x} />
            ))}
          </ul> */}
          <ul className="space-y-4">{items}</ul>
        </div>
      </PageBody>
    </>
  );
}
