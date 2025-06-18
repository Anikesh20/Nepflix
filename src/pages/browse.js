import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  
  console.log('Series data:', series);
  console.log('Films data:', films);
  
  const slides = selectionFilter({ series, films });
  console.log('Processed slides:', slides);

  return <BrowseContainer slides={slides} />;
}
