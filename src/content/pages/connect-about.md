---
layout: ../../layouts/Flow.astro
slug: connect/about
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
    sections:
      - component: title
        title_content:
          text: <span class="bg-linaro-gradient text-transparent bg-clip-text h-auto">Registration</span>
          size: h1
        style: text-center
      - component: text
        text_content: Register for Linaro Connect and join <span class="text-linaro-yellow">hundreds</span> of the world’s leading Arm Open Source technical experts.
        style: text-center text-2xl mx-56
      - component: cards
        styles:
          description: m-8
          content: not-prose leading-loose
          container: mx-auto justify-center gap-16 pl-0
          card: text-center
          card_title: text-xl mb-2
        cards:
          - title: Early Bird
            text: <span class="text-linaro-yellow">12 Nov 2024 - 15 Apr 2025</span><br><span class="text-4xl">£750</span>
          - title: Standard
            text: <span class="text-linaro-yellow">16 Apr 2024 - 12 May 2025</span><br><span class="text-4xl">£1,120</span>
          - title: Virtual
            text: <span class="text-linaro-yellow">12 Nov 2024 - 15 Apr 2025</span><br><span class="text-4xl">£30</span>
      - component: buttons
        buttons:
          - text: REGISTER NOW
            url: /
            style: linaro-gradient-button mt-12
      - component: text
        text_content: Note -  Speakers that get their talks accepted will receive a complimentary speaker pass. For more information on how to submit a talk, <a class="text-linaro-yellow no-underline" href="/">click here</a>.
        style: text-center mx-56 leading-loose mb-24 mt-12
  - row: container_row
    animation: none
    styles:
      inner: m-0
    no_border: true
    sections:
      - component: faded_line
      - component: connect_content
        styles:
          title: my-16 text-2xl
          description: m-8
          content: items-center columns-2 gap-12 w-2/3
        title: Early Bird and Standard - What is included?
        text_content: |
          - <span class="text-linaro-yellow">Full Event Access:</span> Get complete access to Linaro Connect 2025, including keynotes, sessions, BoFs, private meetings, and more.
          - <span class="text-linaro-yellow">Networking Opportunities:</span> Connect with industry professionals through Birds of a Feather (BoFs) sessions, discussions, and collaboration activities.
          - <span class="text-linaro-yellow">Customizable Schedule:</span> Tailor your experience by creating a personalized agenda, prioritizing sessions aligned with your interests.
          - <span class="text-linaro-yellow">Participant Resources:</span> Access event materials, documentation, and shared resources to enhance understanding.
          - <span class="text-linaro-yellow">Daily Refreshments:</span> Enjoy lunch coffee, and snacks from Wednesday to Friday to stay energized.
          - <span class="text-linaro-yellow">Conference T-Shirt:</span> Receive an exclusive Linaro Connect 2025 conference t-shirt as a token of participation.
          - <span class="text-linaro-yellow">Social Evening:</span> Unwind, connect, and enjoy a relaxed atmosphere with casual conversations and activities.
          - <span class="text-linaro-yellow">Hacking Room Access:</span> Collaborate, code, and engage in hands-on sessions in a dedicated hacking room.
          - <span class="text-linaro-yellow">Live Demos:</span> Immerse yourself in live demonstrations of the latest technologies, innovations, and projects.
          - <span class="text-linaro-yellow">Private Meeting Room Booking:</span> Book secure meeting rooms for exclusive discussions, collaboration, or networking.
      - component: two_column
        container_styles: w-3/4 mx-auto
        columns:
          - type: text
            styles: w-2/5
            text_content: |
              - <span class="text-linaro-yellow">Full Event Access:</span> Get complete access to Linaro Connect 2025, including keynotes, sessions, BoFs, private meetings, and more.
              - <span class="text-linaro-yellow">Networking Opportunities:</span> Connect with industry professionals through Birds of a Feather (BoFs) sessions, discussions, and collaboration activities.
              - <span class="text-linaro-yellow">Customizable Schedule:</span> Tailor your experience by creating a personalized agenda, prioritizing sessions aligned with your interests.
              - <span class="text-linaro-yellow">Participant Resources:</span> Access event materials, documentation, and shared resources to enhance understanding.
              - <span class="text-linaro-yellow">Daily Refreshments:</span> Enjoy lunch coffee, and snacks from Wednesday to Friday to stay energized.
          - type: text
            styles: w-2/5
            text_content: |
              - <span class="text-linaro-yellow">Conference T-Shirt:</span> Receive an exclusive Linaro Connect 2025 conference t-shirt as a token of participation.
              - <span class="text-linaro-yellow">Social Evening:</span> Unwind, connect, and enjoy a relaxed atmosphere with casual conversations and activities.
              - <span class="text-linaro-yellow">Hacking Room Access:</span> Collaborate, code, and engage in hands-on sessions in a dedicated hacking room.
              - <span class="text-linaro-yellow">Live Demos:</span> Immerse yourself in live demonstrations of the latest technologies, innovations, and projects.
              - <span class="text-linaro-yellow">Private Meeting Room Booking:</span> Book secure meeting rooms for exclusive discussions, collaboration, or networking.
      - component: connect_content
        styles:
          container: my-12
          title: m-8
          description: m-8
          content: items-center columns-2 gap-12 w-3/4
        title: Virtual - What is included?
        text_content: |
          - <span class="text-linaro-yellow">Access to all keynotes and technical sessions:</span> Live-stream keynotes, sessions, BoFs, and more.
          - <span class="text-linaro-yellow">Customizable Schedule:</span> Tailor your experience by creating a personalized agenda, prioritizing sessions aligned with your interests.
          - <span class="text-linaro-yellow">Participant Resources:</span> Access event materials, documentation, and shared resources to enhance understanding.
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
        description: The next Linaro Connect will be held in Lisbon, Portugal, <br>Tuesday 13 - Friday 16 May 2025 at the Corinthia Lisbon.
        styles:
          title: bg-linaro-gradient text-transparent bg-clip-text
          description: m-8
          content: items-center columns-2 w-3/4 gap-12 text-pretty break-words
        text_content: |
          Attendees can book a room at the Corinthia Lisbon via this <a class="text-linaro-yellow no-underline" href="/">link</a>.
          The preferred rate is available for the dates 11-17 May for a limited time upon availability - we recommend you book your room as soon as possible.

          Please contact connect@linaro.org if you have any issue with booking your accommodation.

          <span class="text-linaro-yellow">Visa & Business Letter - </span> If you require a visa and need a business invitation letter and/or visa support letter, please register for Linaro Connect and follow the instructions on Kite.events.
  - row: container_row
    no_border: true
    styles:
      inner: justify-around border-2 border-[#6B6B6B] rounded-3xl px-8 w-3/4 mx-auto mb-16
    sections:
      - component: title
        title_content:
          text: How to get from Lisbon Airport to the Corinthia Lisbon Hotel
          size: h2
        style: text-center mx-auto
      - component: text
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
        style: columns-2
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
          content: items-center columns-2 gap-12 w-2/3 mt-6 text-pretty break-words
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
