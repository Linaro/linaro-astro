---
layout: ../../layouts/Flow.astro
slug: connect/sponsorship
title: Connect
description: Linaro Connect is a series of events that brings together the Arm Ecosystem. This is the ONLY place where developers, maintainers of both hardware and software can collaborate and discuss common problems
connectHero:
  child_page: true
  background: linaro-website/images/events/connect-hero-bg_kudeso.png
  inner_image: linaro-website/graphics/connect-logo_u9lscd.svg
flow:
  - row: container_row
    animation: none
    no_border: true
    styles:
      inner: py-0
      outer: mb-0
    sections:
      - component: title
        title_content:
          text: <span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">Sponsorship</span>
          size: h1
        style: text-center
      - component: text
        text_content: Linaro <span class="text-linaro-yellow">Connect</span> 2025 is where Arm excellence comes together to discuss how best to implement, leverage and foster Arm solutions.
        style: text-center text-3xl mx-56
      - component: two_column
        container_styles: flex align-center mb-24
        columns:
          - type: text
            text_content: |
              <span class="text-linaro-yellow">Why sponsor?</span>
              - Engage with the industry's top developers, end users, and vendors
              - Inform and educate the ecosystem about your organization's best practices, use cases, open source strategies and directions.
              - Meet with your peers, from developers and operations experts to corporate developers and senior technology executives.
              - Associate your brand with one of the fastest-growing ecosystems
            styles: lg:w-1/2 text-md lg:px-24 pt-24
          - type: image
            image:
              src: linaro-website/images/events/connect_spons_bubble_img_bt1ao3.png
              alt: |
                linaro connect crowd image
              inferSize: true
            styles: not-prose lg:w-1/2
  - row: container_row
    animation: none
    title: Sponsorship Packages
    styles:
      inner: py-0
      outer: mb-0
    sections:
      - component: image_cards
        styles:
          container: flex mx-auto justify-center flex
          card: flex items-center
          image: w-2/3 mx-auto
        cards:
          - image:
              src: linaro-website/images/events/connect_sponsorship_table_tvmiye.png
              alt: test
              width: 1600
              height: 1600
      - component: cards
        divider: true
        styles:
          content: text-center text-linaro-yellow !text-2xl
          container: flex mx-auto p-0 justify-center mb-16 w-full grow-0
          card: flex flex-1 flex-col items-center w-1/7 gap-0
          card_title: text-center text-wrap !text-2xl
        cards:
          - title: Add-ons
            icon: placeholder
          - title: Lanyards
            icon: lanyard
            text: $6k
          - title: Session Recording
            icon: record
            text: $5k
          - title: Hacking Room Coffee Bar
            icon: coffee
            text: $8k
          - title: Game Lounge
            icon: gaming
            text: Quote on request
  - row: container_row
    animation: none
    styles:
      inner: py-0 flex flex-col gap-16
      outer: mb-0
    sections:
      - component: two_column
        container_styles: pt-16
        columns:
          - type: text
            text_content: |
              <span class="text-linaro-yellow text-3xl">University & Academy</span>

              <span class="text-xl">Be part of a global platform where academia meets industry to shape the future of open source technology:
                - Host a hacking session, challenge, or course in a dedicated meeting room, designed to inspire collaboration and hands-on innovation.
                - Gain access to specialized training sessions, equipping students and faculty with cutting-edge technical expertise.
                - Enjoy discounted single tickets and bulk purchase options tailored to your needs.

              <span class="text-linaro-yellow">Reach out to our Events Team to learn more events@linaro.org</span>
            styles: w-full lg:w-1/2 text-md lg:px-24
          - type: image
            imgContainer: true
            image:
              src: linaro-website/images/events/connect_uni_img_rjtzml.png
              alt: linaro connect crowd image
              inferSize: true
            styles: not-prose
      - component: two_column
        columns:
          - type: image
            imgContainer: true
            image:
              src: linaro-website/images/events/connect_training_img_abtzhm.png
              alt: linaro connect crowd image
              inferSize: true
            styles: not-prose
          - type: text
            text_content: |
              <span class="text-linaro-yellow text-3xl">Training</span>

              <span class="text-xl">Take your expertise to the next level with specialized training sessions at Linaro Connect 2025!</span>
                - <span class="text-linaro-yellow">Single-Day Training:</span> Attend a high-impact training session during Linaro Connect (The course will require a minimum number of 8 participants to take place)
                - <span class="text-linaro-yellow">Exclusive Corporate Training:</span> Companies can leverage dedicated training sessions in private meeting rooms, tailored to their teams
                - Enjoy discounted single tickets and bulk purchase options tailored to your needs.

              Whether you're an individual looking to upskill or a company aiming to empower your workforce, Linaro Connect provides the tools and environment for growth.

              <span class="text-linaro-yellow">Get in touch with our Training Team today and prepare for Linaro Connect! events@linaro.org</span>
            styles: w-full lg:w-1/2 text-md lg:px-24
      - component: two_column
        columns:
          - type: text
            text_content: |
              <span class="text-linaro-yellow text-3xl">Focus Tracks</span>

              <span class="text-xl">Host you Focus Track at Linaro Connect 2025</span>

              Showcase your expertise and bring your community together by organizing a Focus Track at Linaro Connect 2025! This exclusive opportunity allows you to host a specialized micro-conference alongside the main event.

              Your Focus Track Package includes:
                - Full-day access to a meeting room, set up with a screen, projector, and stationary.
                - Two coffee breaks to keep your attendees energized and engaged.
                - Promotion across Linaro's social media channels and on the official Linaro Connect website.
                - End-to-end registration management for a seamless experience.

              <span class="text-linaro-yellow">Choose your set up today with out Events experts events@linaro.org</span>
            styles: w-full lg:w-1/2 text-md lg:px-24
          - type: image
            imgContainer: true
            image:
              src: linaro-website/images/events/connect_focus_tracks_img_owpr1b.png
              alt: linaro connect crowd image
              inferSize: true
            styles: not-prose
      - component: buttons
        buttons:
          - text: Enquire about sponsorship
            url: mailto:events@linaro.org
            style: linaro-gradient-button my-12
  - row: container_row
    animation: none
    no_border: true
    full_width: true
    styles:
      inner: py-8
    sections:
      - component: large_image
        src: /linaro-website/images/events/connect-audience_bnhnll.png
        alt: Connect audience footer
        style: w-full
---
