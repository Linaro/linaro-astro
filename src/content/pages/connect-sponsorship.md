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
        text_content: Linaro <span class="text-linaro-yellow">Connect</span> 2025 is where Arm excellence gathers and gets together for 3 full days of how best to implement, leverage and foster the Arm solutions.
        style: text-center text-3xl mx-56
      #   - component: connect_content
      #     type: textAndImage
      #     styles:
      #       title: bg-linaro-gradient text-transparent bg-clip-text
      #       description: m-8
      #       content: items-center columns-1 md:columns-2 w-3/5 gap-12
      #     text_content: |
      #       <span class="text-linaro-yellow">Why sponsor?</span>
      #         - Engage with the industry's top developers, end users, and vendors
      #         - Inform and educate the ecosystem about your organization's best practices, use cases, open source strategies and directions.
      #         - Meet with your peers, from developers and operations experts to corporate developers and senior technology executives.
      #         - Associate your brand with one of the fastest-growing ecosystems
      #     image:
      #       url: linaro-website/images/events/connect_spons_bubble_img_bt1ao3.png
      #       alt: linaro connect crowd image
      - component: two_column
        columns:
          - type: text
            text_content: |
              <span class="text-linaro-yellow">Why sponsor?</span>
              - Engage with the industry's top developers, end users, and vendors
              - Inform and educate the ecosystem about your organization's best practices, use cases, open source strategies and directions.
              - Meet with your peers, from developers and operations experts to corporate developers and senior technology executives.
              - Associate your brand with one of the fastest-growing ecosystems
            styles: w-full lg:w-1/2 text-md lg:px-24
          - type: image
            image:
              src: linaro-website/images/events/connect_spons_bubble_img_bt1ao3.png
              alt: |
                linaro connect crowd image
              height: 1000
              width: 1000
            styles: w-full lg:w-1/2 not-prose
  - row: container_row
    animation: none
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
          content: text-center text-linaro-yellow text-4xl
          container: flex mx-auto p-0 justify-center mb-16 w-full grow-0
          card: flex flex-1 flex-col items-center w-1/7
          card_title: text-center text-wrap text-2xl
        cards:
          - title: Add-ons
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
      inner: py-0
      outer: mb-0
    sections:
      - component: two_column
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
            image:
              src: linaro-website/images/events/connect_uni_img_rjtzml.png
              alt: linaro connect crowd image
              height: 800
              width: 800
            styles: w-full lg:w-1/2 not-prose h-auto
      - component: two_column
        columns:
          - type: image
            image:
              src: linaro-website/images/events/connect_training_img_abtzhm.png
              alt: linaro connect crowd image
              height: 800
              width: 800
            styles: w-full lg:w-1/2 not-prose h-auto
          - type: text
            text_content: |
              <span class="text-linaro-yellow text-3xl">Training</span>

              <span class="text-xl">Take your expertise to the net level with specialized training sessions at Linaro Connect 2025!</span>
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
                - Two coffee breaks o keep your attendees energized and engaged.
                - Promotion across Linaro's social media channels and on the official Linaro Connect website.
                - End-to-end registration management for a seamless experience.

              <span class="text-linaro-yellow">Choose your set up today with out Events experts events@linaro.org</span>
            styles: w-full lg:w-1/2 text-md lg:px-24
          - type: image
            image:
              src: linaro-website/images/events/connect_focus_tracks_img_owpr1b.png
              alt: linaro connect crowd image
              height: 800
              width: 800
            styles: w-full lg:w-1/2 not-prose h-auto
      - component: buttons
        buttons:
          - text: Enquire about sponsorship
            url: events@linaro.org
            style: linaro-gradient-button my-12

  #       - component: cards
  #         styles:
  #           description: m-8
  #           content: not-prose leading-loose
  #           container: mx-auto justify-center gap-4 m-24 not-prose w-full
  #           card: text-center w-1/8
  #         divider: true
  #         cards:
  #           - text: One Day<br><span class="text-linaro-yellow">12 Nov 2024 - 12 May 2025</span><br><span class="text-4xl">£450</span>
  #           - text: Early Bird<br><span class="text-linaro-yellow">12 Nov 2024 - 15 Apr 2025</span><br><span class="text-4xl">£750</span>
  #           - text: Standard<br><span class="text-linaro-yellow">16 Apr 2025 - 12 May 2025</span><br><span class="text-4xl">£1,120</span>
  #           - text: Virtual<br><span class="text-linaro-yellow">12 Nov 2024 - 12 May 2025</span><br><span class="text-4xl">£30</span>
  #       - component: buttons
  #         buttons:
  #           - text: REGISTER NOW
  #             url: https://www.kitefor.events/events/linaro-connect-2025/register
  #             style: linaro-gradient-button mt-4
  #       - component: text
  #         text_content: 'Note: Speakers that get their talks accepted will receive a complimentary speaker pass. For more information on how to submit a talk, <a class="text-linaro-yellow no-underline" href="/connect/call-for-proposals">click here</a>.'
  #         style: text-center mx-56 leading-loose mt-12 text-xl font-light
  #   - row: container_row
  #     animation: none
  #     no_border: true
  #     sections:
  #       - component: faded_line
  #       - component: text
  #         text_content: One Day, Early Bird and Standard - What is included?
  #         style: text-center text-4xl mx-56 mt-24 mb-16
  #       - component: cards
  #         styles:
  #           title: my-8 text-xl
  #           description: m-4
  #           content: text-center
  #           container: flex mx-auto p-0 justify-center gap-x-16 mb-16
  #           card: flex flex-col items-center w-2/5
  #           card_title: text-linaro-yellow text-center
  #         cards:
  #           - title: Full Event Access
  #             text: Get complete access to Linaro Connect 2025, including keynotes, sessions, BoFs, private meetings, and more.
  #             icon: full-event-access-1
  #           - title: Conference T-Shirt
  #             icon: conference-t-shirt-1
  #             text: Receive an exclusive Linaro Connect 2025 conference t-shirt as a token of participation.
  #           - title: Networking Opportunities
  #             icon: networking-opportunities-1
  #             text: Connect with industry professionals through Birds of a Feather (BoFs) sessions, discussions, and collaboration activities.
  #           - title: Social Evening
  #             icon: social-evening-1
  #             text: Unwind, connect, and enjoy a relaxed atmosphere with casual conversations and activities.
  #           - title: Customizable Schedule
  #             icon: customizable-schedule-1
  #             text: Tailor your experience by creating a personalized agenda, prioritizing sessions aligned with your interests.
  #           - title: Hacking Room Access
  #             icon: hacking-room-access-1
  #             text: Collaborate, code, and engage in hands-on sessions in a dedicated hacking room.
  #           - title: Participant Resources
  #             icon: participant-resources-1
  #             text: Access event materials, documentation, and shared resources to enhance understanding.
  #           - title: Live Demos
  #             icon: live-demos-1
  #             text: Immerse yourself in live demonstrations of the latest technologies, innovations, and projects.
  #           - title: Daily Refreshments
  #             icon: daily-refreshments-1
  #             text: Enjoy lunch coffee, and snacks from Wednesday to Friday to stay energized.
  #           - title: Private Meeting Room Booking
  #             icon: private-meeting-room-bookings-1
  #             text: Book secure meeting rooms for exclusive discussions, collaboration, or networking.
  #       - component: faded_line
  #       - component: text
  #         text_content: Virtual - What is included?
  #         style: text-center text-4xl mx-56 my-16
  #       - component: cards
  #         styles:
  #           title: my-8 text-xl
  #           description: m-4
  #           content: text-center
  #           container: flex mx-auto p-0 justify-center gap-x-16
  #           card: flex flex-col items-center w-2/5
  #           card_title: text-linaro-yellow text-center
  #         cards:
  #           - title: Access to all keynotes and technical sessions
  #             text: Live-stream keynotes, sessions, BoFs, and more.
  #             icon: virtual-access-1
  #           - title: Participant Resources
  #             icon: participant-resources-1
  #             text: Access event materials, documentation, and shared resources to enhance understanding.
  #           - title: Customizable Schedule
  #             icon: customizable-schedule-1
  #             text: Tailor your experience by creating a personalized agenda, prioritizing sessions aligned with your interests.
  #   - row: container_row
  #     animation: none
  #     styles:
  #       inner: m-0
  #     no_border: true
  #     sections:
  #       - component: faded_line
  #   - row: container_row
  #     animation: none
  #     no_border: true
  #     sections:
  #       - component: connect_content
  #         title: Accommodation & Travel
  #         description: The next Linaro Connect will be held in Lisbon, Portugal, <br>Wednesday 14 - Friday 16 May 2025 at the Corinthia Lisbon.
  #         styles:
  #           title: bg-linaro-gradient text-transparent bg-clip-text
  #           description: m-8
  #           content: items-center columns-2 w-1/2 gap-12
  #         text_content: |
  #           Attendees can book a room at the Corinthia Lisbon via this <a class="text-linaro-yellow no-underline" href="https://www.kitefor.events/events/linaro-connect-2025/register">link</a>

  #           The preferred rate is available for the dates 11-17 May for a limited time upon availability - we recommend you book your room as soon as possible.

  #           Please contact connect@linaro.org if you have any issue with booking your accommodation.

  #           <span class="text-linaro-yellow">Visa & Business Letter - </span> If you require a visa and need a business invitation letter and/or visa support letter, please register for Linaro Connect and follow the instructions on Kite.events.
  #   - row: container_row
  #     no_border: true
  #     styles:
  #       inner: justify-around border-2 border-[#6B6B6B] rounded-3xl w-4/5 mx-auto mb-16 px-8 py-8
  #     sections:
  #       - component: connect_content
  #         title: |
  #           How to get from Lisbon Airport to the

  #           Corinthia Lisbon Hotel
  #         text_content: |
  #           1. <span class="text-linaro-yellow">Metro</span>
  #               - Route: Take the Red Line (Linha Vermelha) from the airport station to Saldanha station.
  #               - Transfer: At Saldanha, switch to the Yellow Line (Linha Amarela) heading towards Rato and get off at Sete Rios station, which is a short walk from the Corinthia Lisbon.
  #               - Time: Approximately 25-30 minutes.
  #               - Cost: Around €1.50 per person, plus €0.50 for the Viva Viagem card (if you don't already have one).
  #           2. <span class="text-linaro-yellow">Taxi or Rideshare (Uber, Bolt)</span>
  #               - Route: Direct from the airport to the Corinthia Lisbon Hotel.
  #               - Time: Approximately 15–20 minutes, depending on traffic.
  #               - Cost: Around €10–€15.
  #           3. <span class="text-linaro-yellow">Aerobus</span>
  #               - Route: Take the Aerobus Line 2 (financial center route) from the airport and get off at the Sete Rios stop, close to the Corinthia Hotel.
  #               - Time: About 25–30 minutes.
  #               - Cost: Around €4 per person.
  #           4. <span class="text-linaro-yellow">Private Airport Transfer</span>
  #               - Book a private transfer for a direct and comfortable ride, especially if you have a lot of luggage.
  #               - Cost: Typically €20–€30 depending on the provider.
  #         styles:
  #           title: text-center mx-32 text-3xl font-light
  #           description: m-8
  #           content: items-center columns-2 gap-12 mx-8
  #   - row: container_row
  #     animation: none
  #     styles:
  #       inner: m-0
  #     no_border: true
  #     sections:
  #       - component: faded_line
  #   - row: container_row
  #     animation: none
  #     no_border: true
  #     sections:
  #       - component: connect_content
  #         title: Code of Conduct
  #         type: accordion
  #         styles:
  #           title: md:min-w-[15ch] bg-linaro-gradient text-transparent bg-clip-text
  #           content: items-center columns-2 gap-12 w-2/3 mt-6 text-pretty break-words
  #         text_content: |
  #           Linaro Ltd, as host for Linaro Connect, is dedicated to providing a harassment-free experience for participants at all of our events. Linaro events are working conferences intended for professional networking and collaboration in the Linux community. They exist to encourage the open exchange of ideas and expression and require an environment that recognizes the inherent worth of every person and group. While at Linaro events or related ancillary or social events, any participants, including speakers, attendees, volunteers, sponsors, exhibitors, booth staff and anyone else, should not engage in harassment in any form of communication or media including email, texting and social media.

  #           All event participants are expected to behave in accordance with professional standards, with both the Linaro Connect Code of Conduct as well as their respective employer’s policies governing appropriate workplace behavior, and applicable laws.

  #           Harassment will not be tolerated in any form, including but not limited to harassment based on gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion or any other status protected by laws in which the conference or program is being held. Harassment includes the use of abusive, offensive or degrading language, intimidation, stalking, harassing photography or recording, inappropriate physical contact, sexual imagery and unwelcome sexual advances or requests for sexual favors.. Any report of harassment at one of our events will be addressed immediately. Participants asked to stop any harassing behavior are expected to comply immediately. Anyone who witnesses or is subjected to unacceptable behavior should notify a conference organizer at once.

  #           Exhibitors should not use sexualized images, activities, or other material in their booths and must refrain from the use of sexualized clothing/uniforms/costumes, or otherwise creating a sexualized environment. Speakers should not use sexual language, images, or any language or images that would constitute harassment as defined above in their talks.

  #           If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, ranging from issuance of a warning to the offending individual to expulsion from the conference with no refund, depending on the circumstances. Linaro reserves the right to exclude any participant found to be engaging in harassing behavior from participating in any further Linaro events, trainings or other activities.

  #           If you are being harassed, notice that someone else is being harassed, or have any other concerns relating to harassment, please contact a member of conference staff immediately. Conference staff can be identified by t-shirts/staff badges onsite; and an organizer can be found at the event registration counter at any time. You are also encouraged to contact Diane Cheshire, Group HR Director at diane.cheshire@linaro.org

  #           Conference staff will be happy to provide support to participants, including contacting hotel/venue security or local law enforcement, when appropriate, providing escorts, or otherwise assisting those experiencing harassment to ensure that they feel safe for the duration of the conference.
  #           We value your attendance.

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
