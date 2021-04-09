import React, { useContext, useState } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import cn from "classnames"

import styles from "./projects.module.css"

import useWindowSize from "../../hooks/useWindowSize"
import useProjectImages from "../../hooks/useProjectImages"

import Rodal from "rodal"
import "rodal/lib/rodal.css"

import PROJECTS from "../../data/projects"
import ThemeContext from "../../store/ThemeContext"
import themes from "../../styles/themes"
import { modalImgRatio } from "../../styles"

const ProjectsList = () => {
  const size = useWindowSize()
  let { theme } = useContext(ThemeContext)
  const images = useProjectImages()

  const [modal, setModal] = useState({ visible: false, img: "" })

  const modalImgMaxWidth = modalImgRatio * size.width
  const modalImgMaxHeight = modalImgRatio * size.height

  if (!theme || !theme.primary) {
    theme = themes.dark
  }

  return (
    <div>
      {PROJECTS.map(({ title, description, items }, index) => {
        return (
          <div key={index}>
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
            <VerticalTimeline layout="2-columns">
              {items.map(
                (
                  {
                    name,
                    date = "",
                    url,
                    key,
                    description,
                    company = "",
                    icon = null,
                  },
                  index
                ) => {
                  const projectImages = images?.[key] || []
                  return (
                    <VerticalTimelineElement
                      key={"project-" + name}
                      className="vertical-timeline-element--work text-primary"
                      date={date}
                      contentStyle={{ background: theme.navbar }}
                      contentArrowStyle={{ borderRightColor: theme.navbar }}
                      iconClassName="bg-secondary text-primary"
                      icon={icon}
                    >
                      <h3 className="vertical-timeline-element-title ">
                        {name}
                      </h3>
                      {company && <p style={{ margin: 0 }}>{company}</p>}
                      {url && (
                        <a href={url} target="__blank" className={styles.url}>
                          {url.replace(/https?:\/\//g, "")}
                        </a>
                      )}
                      <p className={cn("text-white", styles.description)}>
                        {description}
                      </p>
                      <div className={cn(styles.imageContainer)}>
                        {projectImages.map((node, index) => {
                          const { src } = node.childImageSharp.fluid
                          return (
                            <img
                              onClick={e => {
                                setModal({
                                  visible: true,
                                  img: src,
                                })
                              }}
                              className={cn(styles.projectImage)}
                              key={index.toString()}
                              src={src}
                              alt="Project Image"
                            />
                          )
                        })}
                      </div>
                    </VerticalTimelineElement>
                  )
                }
              )}
            </VerticalTimeline>
          </div>
        )
      })}
      <Rodal
        customStyles={{
          display: "flex",
          justifyContent: "center",
          boxShadow: "0px 0px 0px ",
          backgroundColor: "transparent",
        }}
        height={modalImgMaxHeight}
        width={modalImgMaxWidth}
        className={styles.modal}
        visible={modal.visible}
        onClose={() => setModal({ ...modal, visible: false })}
      >
        <img
          style={{
            height: modalImgMaxHeight,
            width: modalImgMaxWidth,
            alignSelf: "center",
            objectFit: "contain",
          }}
          src={modal.img}
          alt="Project Image Zoom"
        />
      </Rodal>
    </div>
  )
}

export default ProjectsList
