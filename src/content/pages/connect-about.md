---
layout: ../../layouts/Flow.astro
slug: connect/registration
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
          text: <span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">Registration</span>
          size: h1
        style: text-center
      - component: text
        text_content: Register for Linaro Connect and join <span class="text-linaro-yellow">hundreds</span> of the world’s leading Arm Open Source technical experts.
        style: text-center text-3xl mx-auto
      - component: cards
        styles:
          description: m-8
          content: not-prose leading-loose
          container: flex-col md:flex-row mx-auto justify-center gap-4 m-24 not-prose w-full items-center
          card: text-center w-1/8
        divider: true
        cards:
          - text: One Day<br><span class="text-linaro-yellow">12 Nov 2024 - 12 May 2025</span><br><span class="text-4xl">€540</span>
          - text: Early Bird<br><span class="text-linaro-yellow">12 Nov 2024 - 15 Apr 2025</span><br><span class="text-4xl">€900</span>
          - text: Standard<br><span class="text-linaro-yellow">16 Apr 2025 - 12 May 2025</span><br><span class="text-4xl">€1,350</span>
          - text: Virtual<br><span class="text-linaro-yellow">12 Nov 2024 - 12 May 2025</span><br><span class="text-4xl">€36</span>
      - component: buttons
        buttons:
          - text: Buy a ticket
            url: http://linaroconnect.bymeoblueticket.pt/
            style: linaro-gradient-button mt-4
          - text: Register with a code
            url: https://www.kitefor.events/events/linaro-connect-2025/register
            style: linaro-gradient-button mt-4
      - component: text
        text_content: 'Note: Speakers that get their talks accepted will receive a complimentary speaker pass (one free pass per talk). For more information on how to submit a talk, <a class="text-linaro-yellow no-underline" href="/connect/call-for-proposals">click here</a>.'
        style: text-center mx-auto leading-loose mt-12 text-xl font-light
  - row: container_row
    animation: none
    no_border: true
    sections:
      - component: faded_line
      - component: image_cards
        styles:
          container: flex mx-auto justify-center flex
          card: flex items-center
          image: w-full mx-auto
        cards:
          - image:
              src: linaro-website/images/events/Connect_25_Draft_agenda_graphic_pclvpy.png
              alt: test
              height: 1600
              width: 1600
      - component: text
        text_content: One Day, Early Bird and Standard - What is included?
        style: text-center text-4xl mx-auto mt-24 mb-16
      - component: cards
        styles:
          title: my-8 text-xl
          description: m-4
          content: text-center
          container: flex mx-auto p-0 justify-center gap-x-16 mb-16
          card: flex flex-col items-center w-2/5
          card_title: text-linaro-yellow text-center
        cards:
          - title: Full Event Access
            text: Get complete access to Linaro Connect 2025, including keynotes, sessions, BoFs, private meetings, and more.
            icon: full-event-access-1
          - title: Conference T-Shirt
            icon: conference-t-shirt-1
            text: Receive an exclusive Linaro Connect 2025 conference t-shirt as a token of participation.
          - title: Networking Opportunities
            icon: networking-opportunities-1
            text: Connect with industry professionals through Birds of a Feather (BoFs) sessions, discussions, and collaboration activities.
          - title: Social Evening
            icon: social-evening-1
            text: Unwind, connect, and enjoy a relaxed atmosphere with casual conversations and activities.
          - title: Customizable Schedule
            icon: customizable-schedule-1
            text: Tailor your experience by creating a personalized agenda, prioritizing sessions aligned with your interests.
          - title: Hacking Room Access
            icon: hacking-room-access-1
            text: Collaborate, code, and engage in hands-on sessions in a dedicated hacking room.
          - title: Participant Resources
            icon: participant-resources-1
            text: Access event materials, documentation, and shared resources to enhance understanding.
          - title: Live Demos
            icon: live-demos-1
            text: Immerse yourself in live demonstrations of the latest technologies, innovations, and projects.
          - title: Daily Refreshments
            icon: daily-refreshments-1
            text: Enjoy lunch, coffee, and snacks from Wednesday to Friday to stay energized.
          - title: Private Meeting Room Booking
            icon: private-meeting-room-bookings-1
            text: Book secure meeting rooms for exclusive discussions, collaboration, or networking.
      - component: faded_line
      - component: text
        text_content: Virtual - What is included?
        style: text-center text-4xl mx-auto my-16
      - component: cards
        styles:
          title: my-8 text-xl
          description: m-4
          content: text-center
          container: flex mx-auto p-0 justify-center gap-x-16
          card: flex flex-col items-center w-2/5
          card_title: text-linaro-yellow text-center
        cards:
          - title: Access to all keynotes and technical sessions
            text: Live-stream keynotes, sessions, BoFs, and more.
            icon: virtual-access-1
          - title: Participant Resources
            icon: participant-resources-1
            text: Access event materials, documentation, and shared resources to enhance understanding.
          - title: Customizable Schedule
            icon: customizable-schedule-1
            text: Tailor your experience by creating a personalized agenda, prioritizing sessions aligned with your interests.
  - row: container_row
    animation: none
    styles:
      inner: m-0
    no_border: true
    sections:
      - component: faded_line
  - row: container_row
    animation: none
    no_border: true
    sections:
      - component: connect_content
        title: Accommodation & Travel
        description: The next Linaro Connect will be held in Lisbon, Portugal, <br>Wednesday 14 - Friday 16 May 2025 at the Corinthia Lisbon.
        styles:
          title: bg-linaro-gradient text-transparent bg-clip-text
          description: m-8
          content: items-center md:columns-2 w-1/2 gap-12
        text_content: |
          Attendees can book a room at the Corinthia Lisbon via this <a class="text-linaro-yellow no-underline" href="https://reservations.corinthia.com/?adult=1&arrive=2025-05-12&chain=10210&child=0&currency=EUR&depart=2025-05-15&group=LINARO25CL&hotel=28705&level=hotel&locale=en-US&productcurrency=EUR&rooms=1">link</a>

          The preferred rate is available for the dates 11-17 May for a limited time upon availability - we recommend you book your room as soon as possible.

          Please contact connect@linaro.org if you have any issue with booking your accommodation.

          <span class="text-linaro-yellow">Visa & Business Invitation Letter - </span> If you require a visa support letter and/or need a business invitation letter, you can request these on KITE, Linaro’s event platform. Once you have registered, log in to KITE and follow the instructions to request these documents.
  - row: container_row
    no_border: true
    styles:
      inner: justify-around border-2 border-[#6B6B6B] rounded-3xl w-4/5 mx-auto mb-16 px-8 py-8
    sections:
      - component: connect_content
        title: |
          How to get from Lisbon Airport to the

          Corinthia Lisbon Hotel
        text_content: |
          1. <span class="text-linaro-yellow">Metro</span>
              - Route: Take the Red Line (Linha Vermelha) from the airport station to Saldanha station.
              - Transfer: At Saldanha, switch to the Yellow Line (Linha Amarela) heading towards Rato and get off at Sete Rios station, which is a short walk from the Corinthia Lisbon. 
              - Time: Approximately 25-30 minutes.
              - Cost: Around €1.50 per person, plus €0.50 for the Viva Viagem card (if you don't already have one).
          2. <span class="text-linaro-yellow">Taxi or Rideshare (Uber, Bolt)</span>
              - Route: Direct from the airport to the Corinthia Lisbon Hotel. 
              - Time: Approximately 15–20 minutes, depending on traffic. 
              - Cost: Around €10–€15.
          3. <span class="text-linaro-yellow">Aerobus</span>
              - Route: Take the Aerobus Line 2 (financial center route) from the airport and get off at the Sete Rios stop, close to the Corinthia Hotel. 
              - Time: About 25–30 minutes. 
              - Cost: Around €4 per person. 
          4. <span class="text-linaro-yellow">Private Airport Transfer</span>
              - Book a private transfer for a direct and comfortable ride, especially if you have a lot of luggage. 
              - Cost: Typically €20–€30 depending on the provider.
        styles:
          title: text-center mx-32 text-3xl font-light
          description: m-8
          content: items-center md:columns-2 gap-12 mx-8
  - row: container_row
    animation: none
    styles:
      inner: m-0
    no_border: true
    sections:
      - component: faded_line
  - row: container_row
    animation: none
    no_border: true
    sections:
      - component: connect_content
        title: Code of Conduct
        type: accordion
        styles:
          title: md:min-w-[15ch] bg-linaro-gradient text-transparent bg-clip-text
          content: items-center columns-1 md:columns-2 gap-12 w-2/3 mt-6 text-pretty break-words
        text_content: |
          Linaro Ltd, as host for Linaro Connect, is dedicated to providing a harassment-free experience for participants at all of our events. Linaro events are working conferences intended for professional networking and collaboration in the Linux community. They exist to encourage the open exchange of ideas and expression and require an environment that recognizes the inherent worth of every person and group. While at Linaro events or related ancillary or social events, any participants, including speakers, attendees, volunteers, sponsors, exhibitors, booth staff and anyone else, should not engage in harassment in any form of communication or media including email, texting and social media.

          All event participants are expected to behave in accordance with professional standards, with both the Linaro Connect Code of Conduct as well as their respective employer’s policies governing appropriate workplace behavior, and applicable laws.

          Harassment will not be tolerated in any form, including but not limited to harassment based on gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion or any other status protected by laws in which the conference or program is being held. Harassment includes the use of abusive, offensive or degrading language, intimidation, stalking, harassing photography or recording, inappropriate physical contact, sexual imagery and unwelcome sexual advances or requests for sexual favors.. Any report of harassment at one of our events will be addressed immediately. Participants asked to stop any harassing behavior are expected to comply immediately. Anyone who witnesses or is subjected to unacceptable behavior should notify a conference organizer at once.

          Exhibitors should not use sexualized images, activities, or other material in their booths and must refrain from the use of sexualized clothing/uniforms/costumes, or otherwise creating a sexualized environment. Speakers should not use sexual language, images, or any language or images that would constitute harassment as defined above in their talks.

          If a participant engages in harassing behavior, the conference organizers may take any action they deem appropriate, ranging from issuance of a warning to the offending individual to expulsion from the conference with no refund, depending on the circumstances. Linaro reserves the right to exclude any participant found to be engaging in harassing behavior from participating in any further Linaro events, trainings or other activities.

          If you are being harassed, notice that someone else is being harassed, or have any other concerns relating to harassment, please contact a member of conference staff immediately. Conference staff can be identified by t-shirts/staff badges onsite; and an organizer can be found at the event registration counter at any time. You are also encouraged to contact Diane Cheshire, Group HR Director at diane.cheshire@linaro.org

          Conference staff will be happy to provide support to participants, including contacting hotel/venue security or local law enforcement, when appropriate, providing escorts, or otherwise assisting those experiencing harassment to ensure that they feel safe for the duration of the conference.
          We value your attendance.

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
