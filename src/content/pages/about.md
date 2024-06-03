---
layout: ../../layouts/Flow.astro
slug: about
title: About
description: |
  At Linaro, we represent a global community of engineers, developers, and technology enthusiasts dedicated to pushing the boundaries of what's possible with Arm-based technologies. 
  Since 2010, we have played a pivotal role in shaping the Arm ecosystem, fostering collaboration, standardization, and optimization to drive innovation and accelerate product deployment.
flow:
  - row: container_row
    no_border: true
    styles:
      inner: py-8
    sections:
      - component: video_hero
        src: https://static.linaro.org/videos/linaro.mp4
        type: video/mp4
  - row: container_row
    styles:
      outer: purple-gradient-container-no-padding py-24
      inner: pt-12 pb-24
    title: About Linaro
    sections:
      - component: cards
        styles:
          container: flex justify-around gap-12 prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline prose-p:text-2xl
          card: max-w-[60ch]
          card_title: text-linaro-yellow
        cards:
          - text: |
              At Linaro, we represent a global community of engineers, developers, and technology enthusiasts dedicated to pushing the boundaries of what's possible with Arm-based technologies. 

              Since 2010, we have played a pivotal role in shaping the Arm ecosystem, fostering collaboration, standardization, and optimization to drive innovation and accelerate product deployment.
          - title: Collaboration lies at the heart of everything we do at Linaro.
            text: We work closely with industry leaders, open-source communities, and technology partners to co-create, standardize, and optimize solutions that drive innovation and enable seamless integration across diverse platforms and environments.
  - row: container_row
    styles:
      inner: max-w-5xl mx-auto
    sections:
      - component: cards
        cards:
          - text: |
              ### *Linaro is about*
        styles:
          card: prose-em:linaro-gradient-text prose-em:font-bold prose-em:not-italic prose-p:text-3xl prose-headings:text-5xl
          container: flex justify-center
      - component: graphic
        src: linaro-website/graphics/content/linaro-is-about
        alt: "Linaro is about joining together expertise, innovation, open standards and community"
        width: 2000
        height: 2000
        svg: false
        mobile:
          src: linaro-website/graphics/content/linaro-is-about-mobile
          width: 1000
          height: 1000
  - row: container_row
    sections:
      - component: team
        id: bod
        title: Board of Directors
        members:
          - li_gong
          - rob_booth
          - mark_hambleton
          - jonathan_cameron
          - sandeep_singhai
          - todd_kjos
      - component: team
        id: exec
        title: The Executive Team
        members:
          - li_gong
          - rob_booth
          - grant_likely
          - tim_benton
  - row: container_row
    sections:
      - component: cards
        styles:
          container: flex justify-center
          card_title: text-linaro-yellow
          card: text-center
        cards:
          - title: Ready to embark on a journey of innovation and collaboration with Linaro?
            text: Contact us today to learn more about our services, solutions, and how we can help you achieve your technology goals. Together, let's shape the future of technology and drive positive change in the Arm ecosystem.
      - component: contact
        form_id: "7"
        styles:
          card: flex justify-center
---
