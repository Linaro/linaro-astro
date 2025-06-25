---
layout: ../../layouts/Flow.astro
slug: connect
title: Connect
description: Linaro Connect is a series of events that brings together the Arm Ecosystem. This is the ONLY place where developers, maintainers of both hardware and software can collaborate and discuss common problems
connectHero:
  background: https://static.linaro.org/videos/Connect+25+banner.mp4
  inner_image: linaro-website/graphics/connect-logo_u9lscd.svg
  description: >
    <span class="text-linaro-yellow text-7xl" style="display: inline-block; margin-bottom: 1.5rem;">Thank You!</span><br>Thanks for attending Linaro Connect 2025 in Lisbon, it was<br>great to see you!
flow:
  - row: container_row
    animation: none
    no_border: true
    styles:
      inner: py-4
    sections:
      - component: text
        text_content: Thanks again to our great Sponsors
        style: bg-linaro-gradient text-transparent bg-clip-text h-auto text-xl lg:text-4xl text-center mb-4 p-4
      - component: two_column
        container_styles: w-full justify-center gap-16 items-center h-[100px]
        columns:
          - type: image
            image:
              src: linaro-website/logos/arm.svg
              alt: |
                arm logo
              width: 400
            styles: not-prose h-full w-auto object-contain
          - type: image
            image:
              src: linaro-website/logos/qualcomm_rti8c6.svg
              alt: |
                qualcomm logo
              width: 450
            styles: not-prose h-full w-auto object-contain
          - type: image
            image:
              src: linaro-website/logos/cix.svg
              alt: |
                cix logo
              width: 400
            styles: not-prose h-full w-auto object-contain
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
    styles:
      outer: purple-gradient-container-no-padding py-0
      inner: py-4 mx-auto
    sections:
      - component: text
        style: bg-linaro-gradient text-transparent bg-clip-text h-auto text-xl text-center lg:text-4xl
        text_content: Watch our keynotes from 2025
      - component: image_cards
        button_cards: true
        styles:
          container: not-prose grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 gap-4 mx-auto justify-center
          card: grid grid-cols-[1fr_2fr] border rounded-2xl border-linaro-yellow bg-background w-full p-4 gap-4 relative
          image: object-cover
          textContainer: flex flex-col h-full justify-between
          card_title: text-2xl text-linaro-yellow
          text: text-md
        cards:
          - title: Boosting the Next Wave of Arm Innovation
            url: https://www.youtube.com/watch?v=HdRk0Ecgwqg&list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK&index=2&t=54s
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Grant Likely</span><br><span class="text-linaro-yellow">Chief Technical Officer</span><br>Linaro
            image:
              src: linaro-website/images/events/grant_likely_jbpih0.jpg
              alt: Grant Likely
              width: 400
              height: 400
          - title: Arm Edge AI Strategy
            url: https://www.youtube.com/playlist?list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">John Thompson</span><br><span class="text-linaro-yellow">Senior Director, Software & Ecosystems</span><br>Arm
            image:
              src: linaro-website/images/events/e56c5482-28bc-4f48-aca6-d17adc21d9ce_aspujh.png
              alt: John Thompson
              width: 400
              height: 400
          - title: Arm Adoption in the Cloud
            url: https://www.youtube.com/playlist?list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Bhumik Patel</span><br><span class="text-linaro-yellow">Director Cloud Software Ecosystem</span><br>Arm
            image:
              src: linaro-website/images/events/BP_ProfilePic_dxjfuz.jpg
              alt: Bhumik Patel
              width: 400
              height: 400
          - title: Open-Source A Catalyst for Innovation. Qualcomm's Developer-First Journey Continues.
            url: https://www.youtube.com/watch?v=Sg-G2NA6SHw&list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK&index=63
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Leendert van Doorn</span><br><span class="text-linaro-yellow">SVP Engineering</span><br>Qualcomm
            image:
              src: linaro-website/images/events/Leendert_van_Doom_rvc3m0.jpg
              alt: Leendert van Doorn
              width: 400
              height: 400
          - title: The Cyber Resilience Act and Embedded
            url: https://www.youtube.com/watch?v=QftiYi70kmg&list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK&index=22
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Marta Rybczyńska</span><br><span class="text-linaro-yellow">Founder</span><br>Ygreky
            image:
              src: linaro-website/images/events/Marta_Rybczynska_1_eu9rvh.png
              alt: Marta Rybczyńska
              width: 400
              height: 400
          - title: Windows on Arm Keynote
            url: https://www.youtube.com/watch?v=dbMj54_eD24&list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK&index=106
            text: >
              <div class="columns-2">
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Pedro Teixeira</span><br><span class="text-linaro-yellow">Partner Software Engineer</span><br>Microsoft
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Marcus Perryman</span><br><span class="text-linaro-yellow">Principle Software Engineer</span><br>Microsoft
              </div>
            image:
              src: linaro-website/images/events/pedro_and_marcus_profile_uccalz.png
              alt: Pedro Teixeira and Marcus Perryman
              width: 400
              height: 400
          - title: openEuler Ignite Intelligence Everywhere
            url: https://www.youtube.com/watch?v=dbMj54_eD24&list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK&index=106
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Dr Xiong</span><br><span class="text-linaro-yellow">Chairperson of openEuler Committee</span><br>openEuler
            image:
              src: linaro-website/images/events/Xiong_Wei_mczztp.jpg
              alt: Dr Xiong
              width: 400
              height: 400
          - title: "Safety Certification of Open Source Components: Are we there yet?"
            url: https://www.youtube.com/watch?v=S7efzEePMQA&list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK&index=105
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Kate Stewart</span><br><span class="text-linaro-yellow">Vice President of Dependable Embedded Systems</span><br>Linux Foundation
            image:
              src: linaro-website/images/events/Kate_Stewart_yok3or.jpg
              alt: Kate Stewart
              width: 400
              height: 400
          - title: "ONELab and SystemReady: Simplifying OS support on Arm in the Embedded Market"
            url: https://www.youtube.com/watch?v=raj0zH7FNcI&list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK&index=60
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Henk van Bremen</span><br><span class="text-linaro-yellow">Vice President Development</span><br>ADlink
            image:
              src: linaro-website/images/events/l7bnGvnsPiyQ2nvk_ughxd7.png
              alt: Henk van Bremen
              width: 400
              height: 400
          - title: The Energy Transition in Portugal
            url: https://www.youtube.com/watch?v=-SQ3Gr3VPwY&list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK&index=62
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Pedro Matos</span><br><span class="text-linaro-yellow">Business Development Manager</span><br>Siemens Energy
            image:
              src: linaro-website/images/events/Pedro_Matos_mj7rgl.jpg
              alt: Pedro Matos
              width: 400
              height: 400
          - title: Introducing the FIDO DEvice Onboard specification
            url: https://www.youtube.com/watch?v=pXKLmLr_wmw&list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK&index=61
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Richard Kerslake</span><br><span class="text-linaro-yellow">Market Development Manager</span><br>FIDO Alliance
            image:
              src: linaro-website/images/events/AB30D8A3-1B43-4677-83F6-8D365CFA9AE7_lz70dw.jpg
              alt: Richard Kerslake
              width: 400
              height: 400
          - title: Confidential Computing - the new tool in your Arm-oury
            url: https://www.youtube.com/watch?v=_xD_STse7Oo&list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK&index=21
            text: >
              <span class="text-2xl" style="display: inline-block; margin-bottom: 1rem;">Mike Bursell</span><br><span class="text-linaro-yellow">Executive director</span><br>Confidential Computing Consortium
            image:
              src: linaro-website/images/events/Mike_Bursell_Feb_06_2024_87-lo_nrrtur.jpg
              alt: Mike Bursell
              width: 400
              height: 400
      - component: buttons
        buttons:
          - text: Watch all Linaro Connect 2025 sessions
            url: https://www.youtube.com/playlist?list=PLKZSArYQptsODycGiE0XZdVovzAwYNwtK
            style: linaro-gradient-button
        style: gap-16
  - row: container_row
    animation: none
    no_border: true
    full_width: true
    styles:
      inner: flex flex-col items-center h-auto w-[110vw] relative overflow-x-hidden inset-0 -left-[5%]
      outer: h-auto px-auto overflow-x-hidden
    sections:
      - component: large_image
        src: /linaro-website/images/events/6f0c8d76e8065dd074c587e745b7965176b3ef16_kblyvs.png
        alt: ""
        style: h-auto
      - component: text
        style: absolute w-1/2 bg-linaro-gradient text-transparent bg-clip-text h-auto text-lg text-center bottom-[100px] md:bottom-[50px] lg:text-7xl lg:w-1/4 -translate-x-2/4 left-2/4
        text_content: Linaro Connect 2025<br>is a Wrap!
      - component: buttons
        buttons:
          - text: Read our 2025 Announcement
            url: /news/linaro-connect-2025-celebrating-16-years-of-arm-innovation-and-charting-the-future/
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
    styles:
      outer: purple-gradient-container-no-padding py-0
      inner: py-4 mx-auto
    sections:
      - component: text
        style: text-xl md:text-4xl lg:text-6xl text-linaro-yellow text-center
        text_content: What our customers say about Linaro
      - component: videos
        styles:
          container: flex md:flex-row flex-col gap-4
          card: max-w-[40ch] border-[0.5px] border-linaro-yellow rounded-xl p-4
          video: rounded-lg
        videos:
          - src: https://www.youtube.com/watch?v=cgYSoFcuWYM
          - src: https://www.youtube.com/watch?v=CspjFv66of8
          - src: https://www.youtube.com/watch?v=0z6ZPYGPnQs
          - src: https://www.youtube.com/watch?v=RfvwhTDs_ak
  - row: container_row
    animation: none
    styles:
      inner: mt-8 py-8
    no_border: true
    sections:
      - component: faded_line
  - row: container_row
    no_border: true
    animation: none
    styles:
      outer: bg-transparent z-0
      inner: pt-16 mx-auto
    sections:
      - component: more_info
        styles:
          container: justify-around border-2 border-grey rounded-3xl
          card: text-center border-[0.5px] border-linaro-yellow rounded-xl text-md
        innerTitle: What is Linaro Connect?
        subtitle: Linaro Connect is where Arm excellence gathers.
        more_info:
          - title: See a quick overview of the event
            icon: playButton
            url: https://www.youtube.com/shorts/P4OrEeAdOLw
          - title: See what our attendees think of Connect
            icon: playButton
            url: https://www.youtube.com/shorts/16oRMCRV62c
      - component: contact_buttons
        styles:
          card: max-w-[30ch]  mx-auto flex flex-col justify-center items-center
          container: justify-around gap-x-5 gap-y-20 mt-16
          button: mt-8 pt-16
          card_title: text-[2rem] text-center
        buttons:
          - button_text: Stay Connected
            type: insight
            formName: newsletter
  - row: container_row
    animation: none
    no_border: true
    full_width: true
    styles:
      outer: purple-gradient-container
      inner: py-8 h-[500px] overflow-hidden
    sections:
      - component: large_image
        src: /linaro-website/images/events/0d6150ab4ee55eb3c764d9c790bceb528d35c824_h7viam.jpg
        alt: Connect audience footer
        style: w-full object-cover object-center h-full
---
