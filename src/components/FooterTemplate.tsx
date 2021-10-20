import * as React from "react"

type FooterTemplateProps = { copyright: string; };

const FooterTemplate = ({copyright}: FooterTemplateProps) => {
    return (
        <footer className="text-center px-4 py-3 max-w-2xl mx-auto lg:max-w-6xl bg-primary">
            {copyright}
        </footer>
    )
};

export default FooterTemplate;