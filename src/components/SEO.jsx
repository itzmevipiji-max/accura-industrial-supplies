import { useEffect } from 'react';
export default function SEO({title,description}){useEffect(()=>{document.title=`${title} | ACCURA INDUSTRIAL SUPPLIES`;document.querySelector('meta[name="description"]')?.setAttribute('content',description)},[title,description]);return null}
