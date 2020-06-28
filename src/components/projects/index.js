import React, { useContext, useState } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import styles from "./projects.module.css"

import useWindowSize from "../../hooks/useWindowSize"
import useProjectImages from "../../hooks/useProjectImages"

import Rodal from "rodal"
import "rodal/lib/rodal.css"

import PROJECTS from "../../data/projects"
import ThemeContext from "../../store/ThemeContext"
import themes from "../../styles/themes"

const ProjectsList = () => {
  const size = useWindowSize()
  let { theme } = useContext(ThemeContext)

  if (!theme || !theme.primary) {
    theme = themes.dark
  }

  const images = useProjectImages()

  const [modal, setModal] = useState({ visible: false, img: "" })

  return (
    <VerticalTimeline layout="2-columns">
      {PROJECTS.map(
        (
          { name, date = "", url, key, description, company = "", icon = null },
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
              <h3 className="vertical-timeline-element-title ">{name}</h3>
              {company && company !== "" && (
                <p style={{ margin: 0 }}>{company}</p>
              )}
              <p className="text-white">{description}</p>
              <div
                style={{
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                {projectImages.map((node, index) => {
                  return (
                    <img
                      onClick={e => {
                        setModal({
                          visible: true,
                          img: node.childImageSharp.fluid.src,
                        })
                      }}
                      style={{
                        cursor: "pointer",
                        margin: 5,
                        maxWidth: 200,
                        maxHeight: 200,
                        alignSelf: "center",
                        objectFit: "contain",
                        borderRadius: 8,
                      }}
                      key={index.toString()}
                      src={node.childImageSharp.fluid.src}
                      alt="Project Image"
                    />
                  )
                })}
              </div>
            </VerticalTimelineElement>
          )
        }
      )}

      <Rodal
        customStyles={{
          display: "flex",
          justifyContent: "center",
          boxShadow: "0px 0px 0px ",
          backgroundColor: "transparent",
        }}
        height={(size.height * 2) / 3}
        width={(size.width * 2) / 3}
        className={styles.modal}
        visible={modal.visible}
        onClose={() => setModal({ ...modal, visible: false })}
      >
        <img
          style={{
            height: (size.height * 2) / 3,
            width: (size.width * 2) / 3,
            alignSelf: "center",
            objectFit: "contain",
          }}
          src={modal.img}
          alt="Project Image Zoom"
        />
      </Rodal>
    </VerticalTimeline>
  )
}

export default ProjectsList
