---
slug: services/testing-automation
title: Testing & Automation Services
description: |
  Eliminating the complexity of embedded device testing and ensuring your hardware just works.
hero:
  title: >
    Eliminate the Complexity of Embedded Device Testing
  background_image: linaro-website/graphics/testingandautomation-bg
  description: |
    Prove your hardware just works, from early silicon bring-up to global upstream validation. Linaro runs the automation stack behind KernelCI, LKFT and ONELab, and we can run it for you.
  button:
    text: Book a Discovery Call
    url: /contact
    cta_id: cicd.hero.discovery-call
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top xl:bg-right
    background_container: p-[5%] md:ml-[5%]
flow:
  # TODO-BENCLAUDE: verify stat figures before publication
  - row: container_row
    styles:
      outer: bg-background
      inner: py-16 md:py-20
    sections:
      - component: stat_grid
        stats:
          - value: 400
            label: different devices supported by LAVA
          - value: 7
            label: Linux distributions ONELab boots on your platform
          - value: 40000
            label: kernels built per month across Linaro CI

  - row: container_row
    title: The True Cost of Hardware Validation
    styles:
      inner: py-24 md:px-24
      outer: mb-20
    sections:
      - component: text
        text_content: "In modern embedded systems, shipping the hardware is only half the battle. Proving your devices work reliably across software ecosystems is where the money goes."
        style: text-center text-2xl mb-24 md:mx-24 mt-12
      - component: cards
        styles:
          card: max-w-[20em]
          container: justify-center gap-x-16 md:mx-24
          card_title: bg-linaro-gradient text-transparent bg-clip-text
        cards:
          - title: The Duplication Tax
            text: |
              You fix the same bugs over and over across different hardware implementations. Every board variant repeats work your team has already done once.
          - title: Engineering Overhead
            text: |
              Private labs and bespoke software forks slow you down. Senior engineers lose 15 to 25% of their time to lab plumbing rather than product work.
          - title: Compliance Pressure
            text: |
              The EU Cyber Resilience Act and its peers demand verified, up-to-date security out of the box, across your whole stack and continuously, not once at launch.

  - row: container_row
    no_border: true
    styles:
      inner: justify-around border-2 border-[#6B6B6B] rounded-3xl py-10 w-3/4 mx-auto mb-20 px-4
    sections:
      - component: cta_block
        heading: Recognise any of these in your own CI?
        heading_highlight: your own CI
        subtext: Most teams know exactly which of the four is costing them most. A 30 minute conversation is usually enough to size the problem and tell you whether automation is the answer.
        button_text: Arrange a Discussion About Optimising Your CI/CD
        button_url: /contact
        cta_id: cicd.challenge.optimise-discussion

  - row: container_row
    title: The Year of Regressions
    styles:
      outer: purple-gradient-container-no-padding
    sections:
      - component: text
        text_content: A bug caught in CI costs a developer an afternoon. The same bug caught in a release costs a support case, a respin and a customer's confidence. Managed automation moves the catch to the cheap end.
        style: text-center text-2xl mx-auto font-bold mb-12 md:mx-32
      - component: buttons
        buttons:
          - text: How We Catch Silent CI Failures
            url: /blog/eliminating-silent-failures-in-ci-cd-expected-test-cases-in-lava
            style: linaro-gradient-button
            cta_id: cicd.regressions.blog-silent-failures

  - row: container_row
    title: The Unified Linaro Automation Stack
    styles:
      outer: purple-gradient-container-no-padding
    sections:
      - component: text
        text_content: A seamlessly integrated remote lab solution that combines hardware appliances with cloud orchestration and deep ecosystem integration.
        style: text-center text-2xl mx-auto font-bold mb-16 md:mx-32
      - component: large_card
        styles:
          container: justify-center gap-x-16 md:mx-32
          card: max-w-[1/2]
          card_text: text-lg
          card_title: text-2xl w-full
        cards:
          - title: Linaro Automation Appliance (LAA)
            text: |
              An all-in-one embedded device testing harness that hosts your Devices Under Test for remote testing, replacing the cable clutter, USB hubs and programmable PDUs.

              ### Zero-touch validation

              Ships pre-registered and ready to connect. No local software installation.

              ### Egress-only security

              A zero-trust model requiring only outbound HTTPS. No inbound firewall rules, so your lab network stays closed.

              ### Private DUT network

              Fully isolated dual Ethernet networks to connect your target devices safely.
            icon: settings
            secondIcon: linaro-website/graphics/circle-gradient-border
            button:
              text: Read the LAA Documentation
              url: https://hub.linaro.com/library/laa/laa
              cta_id: cicd.stack.laa-docs
          - title: LAVA Managed Services and the Linaro Hub
            text: |
              Our cloud-based technology for embedded integration and test orchestration, accessible through the Linaro Solutions Hub.

              ### Global fleet management

              Manage fleets of LAAs across sites and regions from one place.

              ### Identity and access

              Orchestrate users through SPIRE identity management, and switch appliance roles without touching the hardware.
            icon: workspaces
            secondIcon: linaro-website/graphics/circle-gradient-border
            flip_image: true
            button:
              text: Explore the Linaro Solutions Hub
              url: https://hub.linaro.com
              cta_id: cicd.stack.hub-lms
          - title: "ONELab: Continuous Interoperability"
            text: |
              ONELab removes the complexity of SystemReady certification by proving your platform boots generic, off-the-shelf kernels from more than seven major distributions, including Debian, Ubuntu, Fedora and Alpine.

              ### Automatic re-verification

              Integrated with the LAA, ONELab re-checks your platform against each new OS and firmware release rather than at a single point in time.
            icon: check_circle
            secondIcon: linaro-website/graphics/circle-gradient-border
            button:
              text: See What ONELab Verifies
              url: /solutions/onelab
              cta_id: cicd.stack.onelab

  - row: container_row
    title: What Teams Actually Use It For
    styles:
      inner: py-16 md:px-16
    sections:
      - component: cards
        styles:
          container: mx-auto justify-around gap-10 max-w-6xl
          card: md:w-[45ch] flex flex-col
          card_title: text-2xl
        cards:
          - title: GitLab Runner Integration
            style: text-white border border-grey rounded-3xl p-10 bg-darker
            text: Put your board directly into a GitLab pipeline. Push code, open a merge request, and it is tested on the real device automatically.
            button:
              text: See How Teams Wire This Up
              url: https://hub.linaro.com
              cta_id: cicd.usecase.gitlab-runner
          - title: KernelCI Pull-Labs
            style: text-white border border-grey rounded-3xl p-10 bg-darker
            text: Continuous upstream kernel testing with no infrastructure to manage. kci-runner boots and tests kernels on your hardware and reports to the KernelCI dashboard.
            button:
              text: Get Your Hardware Into Upstream CI
              url: https://hub.linaro.com/pull-labs
              cta_id: cicd.usecase.kernelci-pull-labs
          - title: LAVA Worker Expansion
            style: text-white border border-grey rounded-3xl p-10 bg-darker
            text: Add a device to any LAVA instance. Connect it, configure it in LAVA Managed Services, and start submitting jobs.
            button:
              text: Read the LAVA Documentation
              url: https://lava.readthedocs.io/en/latest/
              cta_id: cicd.usecase.lava-worker
          - title: Secure Remote Access
            style: text-white border border-grey rounded-3xl p-10 bg-darker
            text: Host your device anywhere, in a lab, on a desk or on customer premises, and grant encrypted, permission-gated console access to developers or customers anywhere in the world.
            button:
              text: Give Your Customers a Virtual Lab
              url: /contact
              cta_id: cicd.usecase.remote-access

  - row: container_row
    no_border: true
    styles:
      inner: justify-around border-2 border-[#6B6B6B] rounded-3xl py-10 w-3/4 mx-auto mb-20 px-4
    sections:
      - component: cta_block
        heading: Let your customers test on your silicon without shipping a board
        heading_highlight: without shipping a board
        subtext: Remote lab access turns your hardware into something a customer can evaluate the same day, instead of six weeks after the courier.
        button_text: Engage Your Customers With a Virtual Lab
        button_url: /contact
        cta_id: cicd.usecase.virtual-lab-discussion

  - row: container_row
    title: Plans & Pricing
    styles:
      inner: py-16 md:px-16
      outer: bg-background
    sections:
      - component: text
        text_content: Scalable paths from a single desk to a global fleet. Start where the pain is and grow into the rest.
        style: text-center text-2xl mb-16 md:mx-24
      - component: cards
        styles:
          container: mx-auto justify-around gap-10 max-w-6xl
          card: md:w-[32ch] flex flex-col
          card_title: text-2xl
        cards:
          - title: The Gateway
            style: text-white border border-grey rounded-3xl p-10 bg-darker
            text: The LAA hardware appliance for localised, hands-off automation. One box, your devices, no lab rebuild.
            button:
              text: Start With One Appliance
              url: /contact
              cta_id: cicd.tier.gateway
          - title: The Orchestrator
            style: text-white border border-grey rounded-3xl p-10 bg-darker
            text: Managed LAVA Managed Services, giving your teams full fleet management and test scheduling across sites.
            button:
              text: Discuss Fleet Management
              url: /contact
              cta_id: cicd.tier.orchestrator
          - title: The Enterprise Fleet
            style: text-white border border-grey rounded-3xl p-10 bg-darker
            text: A dedicated LAVA Managed Services setup for full-scale hardware integration across global deployments.
            button:
              text: Talk About a Global Deployment
              url: /contact
              cta_id: cicd.tier.enterprise-fleet

  - row: container_row
    no_border: true
    styles:
      inner: justify-around border-2 border-[#6B6B6B] rounded-3xl py-10 w-3/4 mx-auto mb-16 px-4
    sections:
      - component: text
        text_content: Partner with Linaro for Your Testing and Automation
        style: text-center bg-linaro-gradient text-transparent bg-clip-text mx-auto text-4xl py-1 font-bold
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button
            cta_id: cicd.footer.contact
---
