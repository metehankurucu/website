import React from "react"
import { MdComputer } from "react-icons/md"
import { BsPhone } from "react-icons/bs"

const PROJECTS = [
  {
    title: null,
    description: null,
    items: [
      {
        name: "Oral-B Pro Event",
        description:
          "The online event website prepared for the Azerbaijan Oral-B Pro Zirvəsi.",
        key: "oralb",
        url: "",
        company: "",
        icon: <MdComputer />,
      },
      {
        name: "RaffleApp",
        description:
          "A mobile app that offers scattered raffles on social media on a single platform. ",
        key: "raffleapp",
        url: "https://raffleapp.co",
        company: "",
        icon: <BsPhone />,
      },
      {
        name: "Seyyah",
        description:
          " A mobile app that users can view certain historical places on the map, and receive notifications when they get closer to them. By reading the content of that place and answering the questions, they earn points that they can use in bookstore",
        key: "seyyah",
        url: "",
        company: "at Cyber Istanbul",
        icon: <BsPhone />,
      },
      {
        name: "Öğrenci Koçluğu",
        description:
          "A web application for students preparing for the university exam. Students can view the exam result graphics, record the lessons they are studying, and track books and subjects of lessons.",
        key: "ogrencikoclugu",
        url: "",
        icon: <MdComputer />,
      },
      {
        name: "Meeth",
        description:
          "A mobile app that allows people to meet people close to each other by solving questions",
        key: "meeth",
        url: "",
        icon: <BsPhone />,
      },
      {
        name: "Test Avatarı",
        description:
          "A mobile app where primary school students can dress their avatars with the points they earn from the questions they solve and see their rankings.",
        key: "testavatari",
        url: "",
        company: "at Cyber Istanbul",
        icon: <BsPhone />,
      },
      {
        name: "Shift",
        description:
          "A mobile app to make it easier for employees and managers to prepare their weekly schedule.",
        key: "shift",
        url: "",
        icon: <BsPhone />,
      },
      {
        name: "Filexist",
        description:
          "A web app that allows people to easily share files with small or large groups fast.",
        key: "filexist",
        url: "",
        icon: <MdComputer />,
      },
    ],
  },
]

export default PROJECTS
