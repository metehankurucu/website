import { useEffect, useState } from "react"
import { useStaticQuery } from "gatsby"

const imagesQuery = graphql`
  {
    allFile(filter: { absolutePath: { regex: "//projects//" } }) {
      edges {
        node {
          id
          name
          relativeDirectory
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const useProjectImages = () => {
  const [images, setImages] = useState({})
  const data = useStaticQuery(imagesQuery)

  useEffect(() => {
    if (data?.allFile?.edges) {
      const img = {}

      data.allFile.edges.map(({ node }) => {
        const project = node.relativeDirectory.split("/")[1]

        if (img[project]) img[project].push({ ...node })
        else img[project] = [{ ...node }]
      })

      setImages(img)
    }
  }, [data])

  return images
}

export default useProjectImages
