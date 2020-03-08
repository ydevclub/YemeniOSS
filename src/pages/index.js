import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import conrtibuters from "../../../conrtibuters.yml" // TODO source data from graphql
import Contributer from "../components/contributer"
import SmallBox from "../components/small-box"

const IndexPage = () => {
  const [seletedTags, setSeletedTags] = useState([])
  const tags = []
  const contributersList = []

  conrtibuters.forEach((conrtibuter) => {
    let projects = []
    conrtibuter.projects.forEach(project => {
      tags.push(project.tags) // collect all projects tags in one array

      project.tags.forEach((tag) => (seletedTags.includes(tag)) && projects.push(project))
    })

    const conrtibuterPrjects = projects.length > 0 ? projects : conrtibuter.projects
    if (projects.length > 0 || seletedTags.length === 0) contributersList.push(<Contributer {...conrtibuter} projects={conrtibuterPrjects} />)
  })

  const tagSelected = (tag) => !!seletedTags.includes(tag)

  const handleSelectTag = (tag) => tagSelected(tag)
    ? setSeletedTags(seletedTags.filter((item) => item !== tag))
    : setSeletedTags([...seletedTags, tag])

  const flatTags = tags ? tags.flat() : []
  const uniqTags = [...new Set(flatTags)]

  const conrtibutersPerThree = contributersList.length / 3
  const columns = [
    ...contributersList.slice(0, conrtibutersPerThree),
    ...contributersList.slice(conrtibutersPerThree, conrtibutersPerThree * 2),
    ...contributersList.slice(conrtibutersPerThree * 2),
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <div style={{ display: "flex", justifyContent: 'center', flexWrap: 'wrap', marginBottom: 50 }}>
          {uniqTags.map((tag) => <SmallBox key={tag} style={{ cursor: 'pointer' }} active={tagSelected(tag)} onClick={() => handleSelectTag(tag)}>{tag}</SmallBox>)}
        </div>
        <div style={{ display: "flex", justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {columns.map((column) => (
            <div style={{ display: "flex", flexDirection: 'column', flex: '0 1 320px' }}>
              {column}
            </div>
          ))}
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
