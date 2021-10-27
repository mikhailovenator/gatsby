import CMS from 'netlify-cms-app';
import FooterPreview from './FooterPreview';
import HeaderPreview from './HeaderPreview';
import HomePreview from './HomePreview';

CMS.registerPreviewTemplate('footer', FooterPreview);
CMS.registerPreviewTemplate('header', HeaderPreview);
CMS.registerPreviewTemplate('home', HomePreview);