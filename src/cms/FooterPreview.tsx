import React from 'react'
import FooterTemplate from '../components/FooterTemplate'
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import '../styles/global.css';


export default function FooterPreview({ entry }: PreviewTemplateComponentProps) {
    const copyright = entry.getIn(['data', 'copyright']);
  
    return <FooterTemplate copyright={copyright} />;
  }