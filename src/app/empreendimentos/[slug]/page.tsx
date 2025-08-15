interface PageProps {
  params: Promise<{ slug: string }>;
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