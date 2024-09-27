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
        "mb-4 flex items-center justify-between md:mb-8 lg:mb-12",
        className
      )}
    >
      <div className="space-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        <p className="text-base text-muted-foreground sm:text-sm">{subtitle}</p>
      </div>
      {children && children}
    </section>
  );
}
