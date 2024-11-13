---
layout: ../../layouts/Flow.astro
slug: connect/call-for-proposals
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
          text: <span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">Call for Proposals</span>
          size: h1
        style: text-center
      - component: text
        text_content: Ready to showcase your expertise at the forefront of Arm technology?
        style: text-center text-3xl mx-56
      - component: buttons
        buttons:
          - text: Submit your proposal
            url: /
            style: linaro-gradient-button mt-12
      - component: connect_content
        styles:
          title: bg-linaro-gradient text-transparent bg-clip-text
          description: m-8
          content: items-center columns-2 w-1/2 gap-12
        text_content: |
          The Linaro Connect 2025 event is calling for your proposals! Share your insights, innovations, and experiences with a global audience of tech enthusiasts, developers, and industry leaders.

          <span class="text-linaro-yellow">Why present at Linaro Connect?</span>
              - Engage with a diverse community of Arm experts.
              - Showcase your work to a global audience.
              - Foster collaboration and exchange ideas.

          <span class="text-linaro-yellow">When submitting your proposal, you have the following options to choose from:</span>
              - Technical presentation - 30 minutes (including Q&A)
              - Panel Discussion - 40 minutes 
              - Tutorial - 60 minutes
              - Training - 60 minutes 
              - Demo presentation at Demo Friday*
      - component: text
        style: text-sm
        text_content: |
          *Demo Friday is a Linaro Connect staple where attendees get to see a wide range of innovative Arm-based demos over lunch on the last day of the event.

          To submit your demo, select “Demo” in the “Session Type” section. Demos are allocated a table of size 1.8m wide by 0.5m deep. Please fill in this form to request equipment such as monitors.
  - row: container_row
    animation: none
    no_border: true
    sections:
      - component: faded_line
      - component: cards
        styles:
          description: m-8
          content: not-prose leading-loose
          container: mx-auto justify-center gap-16 flex-stretch mt-24 not-prose
          card: text-center
        divider: true
        cards:
          - text: Early Bird<br><span class="text-linaro-yellow">12 Nov 2024 - 15 Apr 2025</span><br><span class="text-4xl">£750</span>
          - text: Standard<br><span class="text-linaro-yellow">16 Apr 2024 - 12 May 2025</span><br><span class="text-4xl">£1,120</span>
          - text: Virtual<br><span class="text-linaro-yellow">12 Nov 2024 - 15 Apr 2025</span><br><span class="text-4xl">£30</span>
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
