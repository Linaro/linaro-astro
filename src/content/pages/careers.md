---
layout: ../../layouts/Flow.astro
slug: /careers
title: Careers | Linaro
description: |
  Careers at the cutting-edge of Arm technology
hero:
  title: >
    Careers at the cutting-edge of Arm technology
  background_image: linaro-website/graphics/developer
  description: |
    You will work alongside some of the world’s leading Arm software experts, working on new technologies across the entire industry. We bring industry leading companies and open source communities together to develop software on Arm-based technology. Our work advances the Arm ecosystem as a whole, enabling new markets on Arm Architecture. Ready to develop technology for the future? Check out our positions below:
  button:
    text: See Open Vacancies
    url: https://careers.linaro.org/#jobs
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-center
    background_container: ml-[10%]
flow:
  - row: container_row
    styles: purple-gradient-container
    title: Linaro's Core Values
    sections:
      - component: image_cards
        styles:
          container: mx-auto flex justify-around gap-8
          card: w-[40ch] bg-background px-8 rounded-[1.5rem] border-[1px] border-grey
          card_title: text-4xl m-0
        cards:
          - title: Collaboration
            text: |
              **Stronger as a collective**

              Linaro was created as a collaborative engineering forum. We believe that collaboration is key to driving innovation which benefits the greater good.
            image:
              src: linaro-website/graphics/collaboration
              alt: ""
          - title: Innovation
            text: |
              **Technology for the future**

              We develop technology for the future. We are proud of the role we play in enabling new markets on Arm architecture, technology which benefits the lives of so many.
            image:
              src: linaro-website/graphics/innovation
              alt: ""
          - title: Enthusiasm
            text: |
              **Love what you do**

              The people are what make Linaro special. It is really important to us that our employees feel motivated in their roles and enjoy a good work/life balance.
            image:
              src: linaro-website/graphics/enthusiasm
              alt: ""
  - row: container_row
    no_border: true
    sections:
      - component: cards
        styles:
          container: mx-auto justify-around gap-x-28 gap-y-20
          card: w-[50ch]
        cards:
          - title: Remote, Agile and Flexible Working
            text: Linaro employees are all over the globe, representing 26 countries. 90% of our staff work from home and we do also offer remote, agile and flexible working for our office-based employees. We believe flexible working promotes a better work life balance - greater ability to focus with fewer distractions, more time for family and friends, cost and time savings and as a result, higher levels of motivation. The fact that the majority of our employees work from home also allows us to maintain a smaller carbon footprint.
            icon: zoom_in_map
          - title: Community and Engagement
            text: Linaro is committed to making a meaningful contribution to the communities where we work and live. As part of our corporate social responsibility, we have therefore implemented two paid voluntary days per year for each staff member to go and volunteer in his or her local area. We feel this improves employees’ engagement and well-being, helps to develop individuals’ soft skills and allow employees to feel they are giving something back to the community.
            icon: handshake
---
