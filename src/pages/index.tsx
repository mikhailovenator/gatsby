import * as React from "react"
import Layout from "../components/Layout"
import HomeTemplate from '../components/HomeTemplate'
import { useLocalization } from "gatsby-theme-i18n"
import { useStaticHomeQueryEs } from "../hooks/useStaticHomeQueryEs";
import { useStaticHomeQueryEn } from "../hooks/useStaticHomeQueryEn";

export default function Index() {
    const { locale, config, defaultLang } = useLocalization()
    const data = locale === defaultLang ? useStaticHomeQueryEn() : useStaticHomeQueryEs();
    const frontmatter = data.allFile.edges[0].node.childMdx.frontmatter;

    return (
        <Layout>
            <HomeTemplate disclaimer={frontmatter.disclaimer} heroImage={frontmatter.heroImage} />
        </Layout>
    )
}