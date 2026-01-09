---
# hidden - not used
layout: ../../layouts/Flow.astro
slug: solutions/codelinaro
title: CodeLinaro
description: |
  CodeLinaro helps you navigate the complexities of the embedded software development life cycle.
hero:
  title: >
    Revolutionize Your Embedded Software Development with *CodeLinaro*.
  description: CodeLinaro helps you navigate the complexities of the embedded software development life cycle.
  button:
    text: View Public Projects
    url: https://www.codelinaro.org/projects/?page=1
  styles:
    text_container: max-w-full mx-auto text-center flex flex-col items-center
    title: text-center max-w-5xl
    button: mx-auto
    background: bg-right-top
    main_container: h-[calc(40vh)] min-h-[600px] max-h-[1200px] lg:mb-[-5rem]
flow:
  - row: container_row
    no_border: true
    styles:
      outer: purple-gradient-container
      inner: pt-0 pb-36
    sections:
      - component: cards
        styles:
          container: max-w-5xl mx-auto justify-center gap-x-28 gap-y-20
          card: w-[35ch] lg:flex lg:flex-col lg:justify-start lg:odd:items-end lg:odd:text-right
          card_title: max-w-[12ch]
        cards:
          - title: Source Code Management
            text: Securely share code across teams and organizations with encrypted Git services, customizable workflows and auditability.
            icon: rocket_launch

          - title: Continuous Integration
            text: Continuously build and test on a wide range of hardware, ensuring software quality, performance and compliance.
            icon: flash_on

          - title: Secure Delivery
            text: Document, version and share releases for a solid customer experience.
            icon: shield_person

          - title: Collaborative Engineering
            text: Collaborate with your customers, partners and community for high quality, secure distribution all in one place.
            icon: diversity
  - row: container_row
    title: Choose CodeLinaro CI
    styles:
      outer: bg-transparent z-0
      inner: pt-8 pb-24
    sections:
      - component: text
        text_content: ensure your CI practices remain *secure, reliable & scalable*.
        style: prose prose-em:linaro-gradient-text text-2xl text-center max-w-full mb-36
      - component: cards
        styles:
          container: mx-auto gap-16 max-w-7xl  mx-auto justify-center lg:justify-between
          card: max-w-[35ch]
          card_title: linaro-gradient-text mb-0 pb-2 min-h-[4ch]
        cards:
          - title: Built on GitLab CI & AWS
            text: CodeLinaro CI guarantees optimal performance, scalability and reliability in every build and deployment. Enable GPU support in CodeLinaro CI to boost efficiency and costs for compute-intensive tasks.
          - title: Docker-in-Docker Support
            text: CodeLinaro CI elevates containerization with Docker-in-Docker support for flexible, efficient build, testing and deployment.
          - title: Arm Architecture Support
            text: CodeLinaro CI accelerates Arm and x86-based builds, optimizing development cycles and enhancing the user experience of building and deploying applications.
          - title: Flexible Billing
            text: CodeLinaro CI sets itself apart with granular expense allocation to specific projects, ensuring financial flexibility and precise budget control to your entire organization.
          - title: Persistent Storage for projects
            text: CodeLinaro CI integrates persistent storage for data integrity and streamlined workflows, reducing costs and improving the overall development process.
          - title: Intuitive Dashboard
            text: CodeLinaro CI’s dashboard provides at glance job monitoring and quick access to analytics for informed decisions.
  - row: container_row
    styles:
      outer: purple-gradient-container
    sections:
      - component: cards
        styles:
          container: justify-start gap-y-0 xl:justify-center xl:flex-row flex-col mx-auto items-center xl:items-stretch
          card_title: bg-black text-linaro-yellow text-center w-full py-4 mx-auto text-5xl font-bold
          card: px-0 max-w-[35ch] overflow-hidden prose-headings:my-0  border border-grey first:rounded-t-3xl xl:first:rounded-tr-none xl:first:rounded-l-3xl last:rounded-b-3xl xl:last:rounded-bl-none xl:last:rounded-r-3xl prose-p:p-8 my-0
        cards:
          - title: "1"
            text: Get access to an expanding repository of versatile CI job templates, designed to streamline integration across various project pipelines.
          - title: "2"
            text: Find ready-to-use solutions to make your development process more efficient and less complex.
          - title: "3"
            text: Utilize our plug-and-play solutions with the flexibility to customize as needed, enhancing pipeline efficiency while reducing setup time and complexity.
      - component: buttons
        buttons:
          - text: Request Demo Now
            url: https://www.codelinaro.org/contact/
            style: linaro-gradient-button
---
