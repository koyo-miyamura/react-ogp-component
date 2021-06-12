import Layout from '../components/Layout'
import ProfileCard from '../components/ProfileCard'
import useSWR from 'swr'

type OgpData = {
  title: string,
  image: string,
  description: string,
}

const IndexPage = () => {
  const url = "https://github.com/koyo-miyamura"
  const {data} = useSWR<OgpData>(`/api/ogp?url=${url}`)

  console.log(data)

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <ProfileCard title={data?.title} imageUrl={data?.image} content={data?.description} />
    </Layout>
  )
}

export default IndexPage
