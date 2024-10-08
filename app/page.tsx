import React from 'react';

import { useTranslations } from 'next-intl';

function Page() {
  const t = useTranslations('HomePage');
  return <div>{t('title')}</div>;
}

export default Page;
