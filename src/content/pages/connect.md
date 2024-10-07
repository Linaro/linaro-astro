---
layout: ../../layouts/Flow.astro
slug: connect
title: Connect
description: Linaro Connect is a series of events that brings together the Arm Ecosystem. This is the ONLY place where developers, maintainers of both hardware and software can collaborate and discuss common problems
connectHero:
  background: https://static-linaro-org.s3.amazonaws.com/videos/connect-bg-video.mp4
  inner_image: linaro-website/graphics/connect-logo_u9lscd.svg
  description: The next Linaro Connect will be in Lisbon, Portugal
  dates: Tuesday 13 May - Friday 16 May 2025
flow:
  - row: container_row
    styles:
      outer: mt-8 mb-4
      inner: py-8
    no_border: true
    sections:
      - component: date_countdown
        countdownDate: 05/13/2025 09:00 AM
  - row: container_row
    styles:
      inner: py-6
    no_border: true
    sections:
      - component: faded_line
  - row: container_row
    styles:
      inner: flex justify-center
      outer: flex justify-center
    no_border: true
    sections:
      - component: connect_slogan
        style: text-4xl flex justify-center pt-0
  - row: container_row
    no_border: true
    full_width: true
    styles:
      inner: flex flex-col items-center overflow-hidden h-auto
    sections:
      - component: large_image
        src: /linaro-website/images/events/connect-bubbles_td2quo.png
        alt: ""
        style: h-[115vh]
      - component: text
        style: absolute w-1/4 text-[white] text-4xl text-center left-[38%] bottom-[0%]
        text_content: Linaro Connect is where Arm excellence gathers and gets together every year for a full immersion about how to best implement, leverage, and foster the Arm solutions. Don't miss our keynotes, sessions, live demos and don't miss to talk to our experts!
  - row: container_row
    no_border: true
    styles:
      outer: purple-gradient-container
      inner: pt-0
    sections:
      - component: cards
        styles:
          card: w-[35ch] flex items-center flex-col text-center gap-2
          container: justify-around gap-x-28 mb-40
        cards:
          - text: Gain valuable insight from industry-leaders through keynotes and technical sessions.
            icon: handshake
          - text: Get hands on experience at our training or hacking sessions, working alongside the world's leading Arm software experts.
            icon: bulb
          - text: Network with hundreds of other like-minded professionals who are all working to move the Arm ecosystem forward
            icon: diversity
      - component: connect_save
        style: mb-16 flex flex-col
      - component: faded_line
        styles: mt-8
  - row: container_row
    no_border: true
    sections:
      - component: image_cards
        styles:
          card: max-w-[22em] p-8 flex flex-col bg-dark border-white border rounded-3xl border-solid
          container: flex justify-center gap-x-8
          card_title: text-2xl
          image: m-0
          text: text-grey text-md leading-10
        button_cards: true
        cards:
          - title: About
            text: Registration<br>Accomadation<br>Code of Conduct
            # text: Accommodation & travel
            # text: Code of Conduct
            image:
              src: linaro-website/images/events/connect-about-img_mwdtyg.png
              alt: "about-thumbnail-image"
            url: "/connect/about"
          - title: Program
            text: <span class="text-linaro-yellow">COMING SOON!</span>
            image:
              src: linaro-website/images/events/connect-program-img_wpot8h.png
              alt: "program-thumbnail-image"

          - title: Sponsorship
            text: <span class="text-linaro-yellow">COMING SOON!</span>
            image:
              src: linaro-website/images/events/connect-sponsership-img_wwsncn.png
              alt: "sponsorship-thumbnail-image"
  - row: container_row
    no_border: true
    full_width: true
    styles:
      inner: py-8 h-auto overflow-hidden
    sections:
      - component: large_image
        src: /linaro-website/images/events/connect-audience_bnhnll.png
        alt: Connect audience footer
        style: w-full h-[500px] overflow-hidden
---
