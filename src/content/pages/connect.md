---
layout: ../../layouts/Flow.astro
slug: connect
title: Connect
description: Linaro Connect is a series of events that brings together the Arm Ecosystem. This is the ONLY place where developers, maintainers of both hardware and software can collaborate and discuss common problems
connectHero:
  background: linaro-website/images/events/connect-bg-video_exgfka.mp4
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
    sections:
      - component: graphic
        src: /linaro-website/images/events/connect-bubble_tv0jqa.png
        alt: test
        width: 2500
        height: 4000
  - row: container_row
    no_border: true
    sections:
      - component: cards
        styles:
          card: w-[35ch]
          container: justify-around gap-x-28 gap-y-20
        cards:
          - text: Gain valuable insight from industry-leaders through keynotes and technical sessions.
            icon: bulb
          - text: Get hands on experience at our training or hacking sessions, working alongside the world's leading Arm software experts.
            icon: handshake
          - text: Network with hundreds of other like-minded professionals who are all working to move the Arm ecosystem forward
            icon: diversity
  - row: container_row
    no_border: true
    sections:
      - component: connect_save
        style: mb-16 flex flex-col
      - component: faded_line
        styles: mt-8
  # - row: container_row
  #   sections:
  #     - component: image_cards
  #       styles:
  #         card: w-[35ch]
  #         container: justify-around gap-x-28 gap-y-20
  #         card_title: lg:min-h-[4ch] max-w-[10ch]
  #       cards:
  #         - title: About
  #           text: Registration
  #           text: Accommodation & travel
  #           text: Code of Conduct
  #           image: linaro-website/images/events/connect-about-img_mwdtyg.png
  #         - title: Program
  #           text: COMING SOON!
  #           image: linaro-website/images/events/connect-program-img_wpot8h.png
  #         - title: Sponsorship
  #           text: COMING SOON!
  #           image: linaro-website/images/events/connect-sponsership-img_wwsncn.png
  # - row: container_row
  #   sections:
  #     - component: image
  # src: /linaro-website/images/events/connect-audience_bnhnll.png
---
