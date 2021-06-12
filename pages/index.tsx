import Layout from '../components/Layout'
import ProfileCard from '../components/ProfileCard'
import useSWR from 'swr'

type OgpData = {
  title: string,
  image: string,
  description: string,
}

const IndexPage = () => {
  const githubUrl = "https://github.com/koyo-miyamura"
  const {data: githubData, error: githubError} = useSWR<OgpData>(`/api/ogp?url=${githubUrl}`)

  const pocketUrl = "https://koshien-pocket.kayac.com/"
  const {data: pocketData, error: pocketError} = useSWR<OgpData>(`/api/ogp?url=${pocketUrl}`)

  if (githubError || pocketError) return <div>failed to load</div>
  if (!githubData || !pocketData) return <div>loading...</div>

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="lg:flex items-center container mx-auto my-auto">
      {[githubData, pocketData].map(
          (data, i) => <ProfileCard key={String(i)} title={data?.title} imageUrl={data?.image} content={data?.description} />
        )
      }
      </div>
    </Layout>
  )
}

export default IndexPage
