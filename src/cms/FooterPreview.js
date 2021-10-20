import React from 'react'
import FooterTemplate from '../components/FooterTemplate'

import '../styles/global.css';


export default function FooterPreview({ entry }) {
    const copyright = entry.getIn(['data', 'copyright']);
  
    return <FooterTemplate copyright={copyright} />;
  }