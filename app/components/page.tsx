'use client';

import React from 'react';

type Props = {
  title: string;
  children?: React.ReactNode;
};
function PageLayout(props: Props) {
  return <div>{props.children}</div>;
}

export default PageLayout;
