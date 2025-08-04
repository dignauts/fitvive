'use client';

import { useRowLabel } from '@payloadcms/ui';

export const RowLabelComponent = () => {
  const { data } = useRowLabel<{ label: string }>();

  return <span>{data.label}</span>;
};

export default RowLabelComponent;
