import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ZineViewer } from '@/components/archive/ZineViewer';
import { zineArchive } from '@/data/archive';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return zineArchive.map((zine) => ({ slug: zine.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const zine = zineArchive.find((z) => z.slug === slug);
  if (!zine) return {};
  return {
    title: `Issue ${zine.issue}: ${zine.title} — CITYZINE Archive`,
    description: zine.description,
  };
}

export default async function ZineArchivePage({ params }: Props) {
  const { slug } = await params;
  const zine = zineArchive.find((z) => z.slug === slug);
  if (!zine) notFound();

  return <ZineViewer zine={zine} />;
}
