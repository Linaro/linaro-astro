---
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
          container: flex justify-around gap-12 prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline prose-p:text-2xl pl-0
          card: max-w-[90ch]
          card_title: text-linaro-yellow
        cards:
          - text: |
              In 2010, Linaro was formed to unify a fragmented Arm software ecosystem. Our mission was clear: consolidate the code base to drive innovation on Arm. Today, that vision is a global reality. From Linus Torvalds releasing the kernel on Arm64 hardware to every cloud vendor having an Arm offering, the foundational challenges we set out to tackle have been solved.

              As the industry matured, so did we. Linaro has evolved into a Services provider, leveraging our unrivaled Arm expertise to help customers build high-performing, compliant, and sustainable products. 

              While the way we collaborate has changed, our commitment to the open-source community remains the same. We continue to invest upstream and maintain critical projects, ensuring that every solution we build for our clients also strengthens the broader ecosystem.
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
          container: flex justify-center pl-0
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
          - tim_benton
  - row: container_row
    sections:
      - component: cards
        styles:
          container: flex justify-center pl-0
          card_title: text-linaro-yellow
          card: text-center
        cards:
          - title: Ready to embark on a journey of innovation and collaboration with Linaro?
            text: Contact us today to learn more about our services, solutions, and how we can help you achieve your technology goals. Together, let's shape the future of technology and drive positive change in the Arm ecosystem.
      - component: contact
        form_id: "7"
        formName: "sales_contact"
        styles:
          card: flex flex-col justify-center pl-0 w-full mx-auto
---
