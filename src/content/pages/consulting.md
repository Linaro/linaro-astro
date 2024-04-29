---
layout: ../../layouts/Flow.astro
slug: services/consulting
title: Consulting
description: |
  ONELab revolutionizes edge and IoT device interoperability testing. We help Silicon Vendors and Device Makers to conduct continuous interoperability tests among different Operating Systems and Cloud Services.
hero:
  title: >
    We help you build, test, deploy and maintain great products on Arm
  background_image: linaro-website/graphics/developer
  description: |
    We guide you through every step of this journey, ensuring fast time to market, exceptional quality, security, and cost-effective long-term maintenance.
  button:
    text: Learn more
    url: /
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-center
    background_container: ml-[10%]
flow:
  - row: container_row
    styles:
      outer: purple-gradient-container
    sections:
      - component: cards
        styles:
          container: mx-auto justify-around gap-28 max-w-6xl
          card: w-[35ch]
        cards:
          - title: Leverage our Arm expertise
            text: As part of Linaro, Developer Services has some of the world’s leading Arm Software experts. All of this expertise and experience is made available to you for your project.
            icon: zoom_out_map
          - title: Secure your product
            text: Specialists in security and Trusted Execution Environment (TEE) on Arm, we leverage open source to ensure you benefit from the latest upstream features and security fixes.
            icon: key
          - title: Maintain quality cost-effectively
            text: We offer continuous integration (CI) and automated validation for your product software, ensuring the highest possible quality. We upstream code to reduce the cost and effort needed to maintain your product.
            icon: shield_person
          - title: Build, Test and deploy faster
            text: We support every aspect of product delivery, from building secure board support packages (BSPs), product validation and long-term maintenance - we help get your products to market faster.
            icon: rocket_launch
  - row: container_row
    title: Your Device Software Lifecycle Partner
    sections:
      - component: graphic
        src: linaro-website/graphics/content/consultancy-lifecycle
        mobile:
          src: linaro-website/graphics/content/artboard-consulting
          width: 1000
          height: 1000
        alt: diagram explaining how Linaro what consultancy services Linaro can provide at each stage of the software lifecycle
        width: 2000
        height: 2000
        accessible_version: |
          <ol>
            <li>
              <h3>Research</h3>
              <ul>
                <li>Feasibility Study</li>
                <li>Architectural Design</li>
                <li>Gap Analysis</li>
                <li>Prototyping</li>
              </ul>
            </li>
            <li>
              <h3>Devleop</h3>
              <ul>
                <li>SoC and BSP</li>
                <li>Board Bring-Up</li>
                <li>Customer Applications</li>
                <li>Operating System Image</li>
              </ul>
            </li>
            <li>
              <h3>Test</h3>
              <ul>
                <li>Code Hosting</li>
                <li>CI/CD Setup</li>
                <li>Automated Device Testing</li>
                <li>Functional Regression, Performance</li>
              </ul>
            </li>
            <li>
              <h3>Comply</h3>
              <ul>
                <li>Certification Artifacts</li>
                <li>CVEs Report</li>
                <li>IP Compliance and SBOMs</li>
                <li>3rd Party Notice File</li>
              </ul>
            </li>
            <li>
              <h3>Deploy</h3>
              <ul>
                <li>OTA Infrastructure</li>
                <li>SW Signature</li>
                <li>Monolithic to Granular Updates</li>
                <li>Fault Tolerant</li>
              </ul>
            </li>
            <li>
              <h3>Maintain</h3>
              <ul>
                <li>Basic and Comprehensive Long Term Support</li>
                <li>Single Integration Partner</li>
                <li>Maintenance</li>
              </ul>
            </li>
          </ol>
  - row: container_row
    title: Focus on What is Important to You
    sections:
      - component: two_column
        container_styles: items-center border-grey border-[0.25px] rounded-xl px-2 sm:px-8
        columns:
          - type: text
            text_content: We deliver and maintain Yocto Project based distros and BSPs
            styles: w-full lg:w-1/2 text-2xl sm:text-3xl lg:px-24 font-bold
          - type: image
            image:
              src: linaro-website/graphics/content/consultancy-expertise
              alt: |
                Your expertise: your application. Our expertise: 3rd Party & System Libraries, Operation System and Toolchain.
              height: 1000
              width: 1000
            styles: w-full lg:w-1/2
---
