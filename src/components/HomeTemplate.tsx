import * as React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

type HomeTemplateProps = { 
    disclaimer: string; 
    heroImage: {
        image: object | string;
        description: string;
      };
};

const HomeTemplate = ({disclaimer, heroImage}: HomeTemplateProps) => {
    const imageData = getImage(heroImage.image);

    return (
        <>
            {imageData && <GatsbyImage
                image={imageData}
                alt={heroImage.description}
            />}

            <h1>Title</h1>
            <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h2>Subtitle</h2>
            <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h2>Subtitle2</h2>
            <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            {imageData && <div className="text-center text-xs mt-10 mb-10 font-semibold">
                <MDXRenderer>
                    {disclaimer}
                </MDXRenderer>
            </div>}
            
        </>
    )
};

export default HomeTemplate;