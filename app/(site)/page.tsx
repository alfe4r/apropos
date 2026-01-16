import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
import BulletList from "@/components/BulletList";
import Callout from "@/components/Callout";
import { getContentBySlug } from "@/lib/content";

const components = {
  ContentSection,
  BulletList,
  Callout
};

export function generateMetadata(): Metadata {
  const { title, description } = getContentBySlug("home");
  return {
    title,
    description,
    openGraph: {
      title,
      description
    }
  };
}

export default function HomePage() {
  const { title, description, content } = getContentBySlug("home");

  return (
    <div className="space-y-10">
      <PageHeader title={title} description={description} />
      <ContentSection>
        <MDXRemote source={content} components={components} />
      </ContentSection>
    </div>
  );
}
