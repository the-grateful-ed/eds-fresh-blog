import NextHead from "next/head";
import { useRouter } from "next/router";

/**
 * Constants & Helpers
 */
export const WEBSITE_HOST_URL = "https://edndacomputer.netlify.app/";

/**
 * Prop Types
 */
export interface MetaProps {
  description?: string;
  image?: string;
  title: string;
  type?: string;
}

/**
 * Component
 */
export const Head = ({
  customMeta,
}: {
  customMeta?: MetaProps;
}): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: "edndacomputer | official blog and portfolio",
    description:
      "Welcome to the official bolg and portfolio of edndacomputer. This personal website is here to display work done by ed and articles on how to be a web3 development boss!",
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: "website",
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta
        content={meta.description}
        name="description"
      />
      <meta
        property="og:url"
        content={`${WEBSITE_HOST_URL}${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`${WEBSITE_HOST_URL}${router.asPath}`}
      />
      <meta
        property="og:type"
        content={meta.type}
      />
      <meta
        property="og:site_name"
        content="Nedndacomputer | official blog and portfolio"
      />
      <meta
        property="og:description"
        content={meta.description}
      />
      <meta
        property="og:title"
        content={meta.title}
      />
      <meta
        property="og:image"
        content={meta.image}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        content="@edndacomputer"
      />
      <meta
        name="twitter:title"
        content={meta.title}
      />
      <meta
        name="twitter:description"
        content={meta.description}
      />
      <meta
        name="twitter:image"
        content={meta.image}
      />
    </NextHead>
  );
};
