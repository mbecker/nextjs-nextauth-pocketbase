import { cn } from "@/lib/utils";

interface PageBody {
  className?: string;
  children: React.ReactNode;
}
export default function PageBody({ className, children }: PageBody) {
  return <div className={cn("mt-4 lg:mt-6", className)}>{children}</div>;
}
