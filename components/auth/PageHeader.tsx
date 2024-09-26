interface PageHeader {
  pageName: string;
  subtitle: string;
}

export default function PageHeader({ pageName, subtitle }: PageHeader) {
  return (
    <div>
      <h2 className="text-base font-semibold leading-7">{pageName}</h2>
      <p className="-mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {subtitle}
      </p>
    </div>
  );
}
