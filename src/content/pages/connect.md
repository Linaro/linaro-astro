---
layout: ../../layouts/Flow.astro
slug: connect
title: Connect
description: Linaro Connect is a series of events that brings together the Arm Ecosystem. This is the ONLY place where developers, maintainers of both hardware and software can collaborate and discuss common problems
connectHero:
  background: https://static-linaro-org.s3.amazonaws.com/videos/connect-bg-video.mp4
  inner_image: linaro-website/graphics/connect-logo_u9lscd.svg
  description: Linaro Connect 2025<br><span class="text-linaro-yellow">Wednesday 14 May - Friday 16 May 2025</span><br>Lisbon, Portugal
flow:
  - row: container_row
    animation: none
    styles:
      outer: mt-8 mb-4
      inner: py-8
    no_border: true
    sections:
      - component: text
        text_content: <span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">Linaro Connect is where Arm excellence gathers</span>
        style: bg-linaro-gradient text-transparent bg-clip-text h-auto text-xl lg:text-4xl text-center
      - component: date_countdown
        countdownDate: 05/14/2025 09:00 AM
  - row: container_row
    animation: none
    styles:
      inner: flex flex-col items-center justify-center
      outer: flex justify-center
    no_border: true
    sections:
      - component: text
        text_content: Calling all Speakers!
        style: text-xl
      # - component: connect_save
      #   btnId: top-btn-save-date
      - component: buttons
        buttons:
          - text: Submit your Proposal
            url: /connect/call-for-proposals
            style: linaro-gradient-button
  - row: container_row
    animation: none
    styles:
      inner: mt-8 py-8
    no_border: true
    sections:
      - component: faded_line
  - row: container_row
    animation: none
    no_border: true
    full_width: true
    styles:
      inner: flex flex-col items-center h-auto w-[110vw] relative overflow-x-hidden inset-0 -left-[5%]
      outer: h-auto px-auto overflow-x-hidden
    sections:
      - component: large_image
        src: /linaro-website/images/events/connect-bubbles_td2quo.png
        alt: ""
        style: h-auto
      - component: text
        style: absolute w-1/2 text-[white] text-xs text-center bottom-[20px] lg:text-2xl lg:w-1/4 -translate-x-2/4 left-2/4
        text_content: Fully immerse yourself on how to best implement, leverage and foster Arm solutions. Don’t miss our keynotes, sessions, live demos and the opportunity to talk to our Arm software experts!
  - row: container_row
    animation: none
    no_border: true
    styles:
      outer: purple-gradient-container
      inner: pt-0
    sections:
      - component: cards
        styles:
          card: w-[35ch] flex items-center flex-col text-center gap-2
          container: justify-around gap-x-28 mb-40 not-prose gap-y-8
        cards:
          - text: Meet Arm Excellence and it’s Industry Leaders
            icon: handshake
          - text: Keep Up-To-Speed with Our Training Sessions
            icon: bulb
          - text: Collaborate with your Peers and connect with the Arm Network
            icon: diversity
      - component: text
        # text_content: Mark Your Agenda for Lisbon May 13th-17th
        text_content: Call for Proposals now open
        style: text-linaro-yellow text-center text-2xl
      # - component: connect_save
      #   style: mb-16 flex flex-col
      #   btnId: bottom-btn-save-date
      - component: buttons
        buttons:
          - text: Submit proposal here
            url: /connect/call-for-proposals
            style: linaro-gradient-button mb-16
      - component: faded_line
        styles: mt-8
  - row: container_row
    animation: none
    no_border: true
    sections:
      - component: image_cards
        styles:
          card: max-w-[22em] p-8 flex flex-col bg-dark border-white border rounded-3xl border-solid
          container: flex justify-center gap-x-8 flex-wrap
          card_title: text-2xl
          image: m-0
          text: text-grey text-md leading-10
        button_cards: true
        cards:
          - title: About
            # text: Registration<br>Accommodation<br>Code of Conduct
            text: <span class="text-linaro-yellow">COMING SOON!</span>
            image:
              src: linaro-website/images/events/connect-about-img_mwdtyg.png
              alt: "about-thumbnail-image"
            # url: "/connect/registration"
          - title: Program
            text: Call for Proposals<br>Topics of Interest
            image:
              src: linaro-website/images/events/connect-program-img_wpot8h.png
              alt: "program-thumbnail-image"
            url: "/connect/call-for-proposals"
          - title: Sponsorship
            text: Sponsorship Packages
            image:
              src: linaro-website/images/events/connect-sponsership-img_wwsncn.png
              alt: "sponsorship-thumbnail-image"
            url: "/connect/sponsorship"
  - row: container_row
    animation: none
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
