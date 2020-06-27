import React, { useContext, useState } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import styles from "./projects.module.css"

import useWindowSize from "../hooks/useWindowSize"
import useProjectImages from "../hooks/useProjectImages"

import Rodal from "rodal"
import "rodal/lib/rodal.css"

import PROJECTS from "../data/projects"
import ThemeContext from "../store/ThemeContext"

const ProjectsList = () => {
  const size = useWindowSize()
  const { theme } = useContext(ThemeContext)

  const images = useProjectImages()

  const [modal, setModal] = useState({ visible: false, img: "" })

  return (
    <VerticalTimeline layout="2-columns">
      {PROJECTS.map(
        ({ name, date = "", url, key, description, company = "" }, index) => {
          const projectImages = images?.[key] || []
          return (
            <VerticalTimelineElement
              key={"project-" + name}
              className="vertical-timeline-element--work text-primary"
              date={date}
              contentStyle={{ background: theme.navbar }}
              onTimelineElementClick={() => console.log(name)}
              iconClassName="bg-secondary"
              iconOnClick={() => console.log("hey")}
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
                        console.log((e.currentTarget.className += "img-modal"))
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
                      }}
                      key={index.toString()}
                      src={node.childImageSharp.fluid.src}
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
        />
      </Rodal>
    </VerticalTimeline>
  )
}

export default ProjectsList
