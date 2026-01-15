import './reset.css';
import './style.css';

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params
  const messages = await getMessages(locale)
  const meta = messages?.meta || {}
  const baseUrl = 'https://exemplo.com'

  const title = meta.title || 'EuroByte'
  const description = meta.description || 'EuroByte loja virtual.'
  const image = `${baseUrl}/favicon.png`
  const url = meta.url || `${baseUrl}/${locale}`

  //console.log(meta)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630
        }
      ]
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  }
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params
  const messages = await getMessages(locale)

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
