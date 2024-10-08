import Providers from '#/providers';

import './globals.css';

export const metadata = {
  title: 'snazzybot',
  description:
    'Open-source platform for Telegram moderation with an intuitive dashboard.',
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
