import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'en';

  try {
    return {
      locale,
      messages: (await import(`../locales/${locale}.json`)).default,
    };
  } catch {
    return {
      locale,
      messages: (await import(`../locales/en.json`)).default,
    };
  }
});
