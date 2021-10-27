import React from 'react'
import HomeTemplate from '../components/HomeTemplate'
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import '../styles/global.css';


export default function HomePreview({ entry, getAsset, widgetFor }: PreviewTemplateComponentProps) {
    const data = entry.getIn(['data']).toJS();
    console.log(widgetFor('disclaimer'));
  
    return <HomeTemplate disclaimer={data.disclaimer} heroImage={{...data.heroImage, image: getAsset(data.heroImage.image)}} />;
  }