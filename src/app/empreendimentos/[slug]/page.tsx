import { developments } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Required for static export
export async function generateStaticParams() {
  return developments.map((dev) => ({
    slug: dev.slug,
  }));
}

export default async function DevelopmentPage({ params }: PageProps) {
  const { slug } = await params;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-bamberg-text-primary mb-8">
        Empreendimento: {slug}
      </h1>
      <p className="text-bamberg-text-secondary">
        Detalhes do empreendimento em breve.
      </p>
    </div>
  );
}