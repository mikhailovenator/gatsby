import * as React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/Layout"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
query GetPage($id: String!) {
    file(id: {eq: $id}) {
      childMdx {
        frontmatter {
          sections {
            content
            contentKey
            type
            image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
            }
            description
          }
        }
      }
    }
  }
`;

export default function Index({ data }) {
    const sections = data.file.childMdx.frontmatter.sections;

    return (
        <Layout>
            {sections.map((x, i) => {
                if (x.contentKey === "heroImage") return (<PreviewCompatibleImage key={i} imageInfo={{ image: x.image, alt: x.description }} />);
                if (x.contentKey === "markup") return (
                    <MDXRenderer key={i}>
                        {x.content}
                    </MDXRenderer>
                );
                return null;
            })}
        </Layout>
    )
}