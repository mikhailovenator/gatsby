import React from 'react'
import HeaderTemplate from '../components/HeaderTemplate'
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import '../styles/global.css';


export default function HeaderPreview({ entry, getAsset }: PreviewTemplateComponentProps) {
    const data = entry.getIn(['data']).toJS();

    if (data) {
      return <HeaderTemplate logo={{...data.logo, image: getAsset(data.logo.image)}} menuItems={data.menuItems} />;
    } else {
      return <div>Loading...</div>
    }
  }