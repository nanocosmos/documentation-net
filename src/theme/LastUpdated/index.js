import React from 'react';
import LastUpdated from '@theme-original/LastUpdated';

// Development and review builds (`docusaurus start`, `docusaurus build --dev`)
// show a simulated date plus "(Simulated during dev for better perf)".
// Hide the line there; production builds show the real last-updated date.
export default function LastUpdatedWrapper(props) {
  if (process.env.NODE_ENV === 'development') return null;
  return <LastUpdated {...props} />;
}
