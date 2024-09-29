import { cn } from "@/lib/utils";

interface PageHeader {
  title: string;
  subtitle: string;
  className?: string;
  children?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  className,
  children,
}: PageHeader) {
  return (
    <section
      className={cn(
        "mb-0 flex items-center justify-between",
        className
      )}
    >
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        <p className="hidden lg:flex text-base text-muted-foreground sm:text-sm">{subtitle}</p>
      </div>
      {children && children}
    </section>
  );
}
