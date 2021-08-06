// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getReadBooks } from '../../lib/notion'

export default async function books (req, res) {
  const books = await getReadBooks(5)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  )

  return res.status(200).json(books)
}
