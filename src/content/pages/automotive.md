---
slug: industries/automotive
title: Automotive
description: |
  The future of transportation lies in connected and autonomous vehicles. We actively work on technologies that enable seamless connectivity, such as V2X (Vehicle-to-Everything) communication, 5G integration, and edge computing.
hero:
  title: >
    Changing gears with Linaro:<br>Shifting to software-first in Automotive on Arm
  background_image: linaro-website/graphics/automotive-3_n5bp21.png
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top xl:bg-right
    background_container: md:ml-[5%]
    main_container: h-[calc(75vh)]
flow:
  - row: container_row
    animation: none
    styles:
      inner: py-0
    sections:
      - component: two_column
        container_styles: flex align-center w-full mb-24 gap-24 mx-auto item-center justify-center
        animation: none
        bottom_fade: true
        columns:
          - type: image
            image:
              src: linaro-website/graphics/automation-transport-concept_1_pclcnl.png
              alt: |
                automation transport concept
              inferSize: true
            styles: not-prose lg:w-1/2 h-auto object-contain
          - type: text
            title: Automotive manufacturers operate in a highly challenging landscape.
            text_content: |
              The technology powering connected and autonomous vehicles is becoming increasingly more complex. The proliferation of proprietary auto software stacks adds further complexity, locking vendors in and making it difficult for them to integrate components which are not compatible with one another. What’s more, vendors are legally required to maintain their solutions throughout their lifecycle and ensure secure over-the-air updates. 

              Auto makers are constantly tackling how to meet customer demands while protecting their data and ensuring the vehicle is safe. How can open source be leveraged as a sustainable and flexible alternative to proprietary software to achieve this?
            styles: lg:w-1/2 text-lg
  - row: container_row
    title: Accelerate your Automotive Development with Linaro
    no_border: true
    styles:
      outer: purple-gradient-container
    sections:
      - component: expandingcards
        cards:
          - id: 1
            title: |
              ADAS/AD Workload Use Case: Find the balance between lock-in solution and OSS
            description: |
              We help you find the right balance by embracing Open Source Software (OSS) with confidence.
            longDescription: |
              We help you find the right balance by embracing Open Source Software (OSS) with confidence. Our role is to provide the quantitative evidence you need to make the best architectural decisions. 

              Our independent benchmarking services compare the real-time performance of your options: 
                - Proprietary RTOS (your current or considered solution
                - Real-Time Automotive Grade Linux (RT/AGL)
                - Android Automotive.

              Make well-informed design decisions based on data, not just vendor claims. Drive your ADAS/AD strategy with confidence and control.
            image: linaro-website/graphics/electric-car-virtual-reality-graphic-road-fast-speed-ev-charging-station-green-energy-eco-power-produced-from-sustainable-source-supply-station-order-reduce-co2_1_tbb2fj.png
          - id: 2
            title: |
              Achieving Performance and Efficiency through Compact Linux and MRAM
            description: |
              Safety critical and time sensitive requirements in automotive systems demand an operating system that can satisfy hard real time constraints.
            longDescription: |
              Safety critical and time sensitive requirements in automotive systems demand an operating system that can satisfy hard real time constraints. Linaro has a long track record of working with the Linux kernel and as such, knows how best to leverage linux for automotive use cases where there are regulatory safety requirements. 

              We believe integrating Magnetoresistive random-access memory (MRAM) into the SoC is the most powerful way to enhance performance and energy efficiency (by establishing a near-memory computing structure in AUTOSAR’s classic or adaptive compute platforms). MRAM, as non-volatile memory, provides fast read and write speeds (comparable to SRAM in read operation), low power consumption and the ability to retain data even when power is lost.
            image: |
              linaro-website/graphics/blurred-motion-shiny-luxury-illuminated-night-drive-generative-ai_2_c8fund.png
          - id: 3
            title: |
              Cyber Security for Automotive: OS Long-Term Support for Compliance
            description: |
              New global regulations have turned software maintenance from a 'best practice' into a legal requirement.
            longDescription: |
              New global regulations have turned software maintenance from a 'best practice' into a legal requirement. Regulations like UNECE WP.29 R155/R156 (for cybersecurity and software updates) and the EU Cyber Resilience Act (CRA) mandate that automakers must be able to provide security updates for the entire lifecycle of the vehicle (10 ~ 15 years). 

              Unsupported Automotive OS (eg. AAOS and AGL kernel, and other OSS components) with EOL (end-of-life) makes it extremely difficult and legally risky to comply with these mandates. Automakers must prove to regulators that they have a robust process for managing vulnerabilities for many years, which is nearly impossible without a long-term supported foundation. 

              With decades of experience in kernel upstream and kernel functional testing (LKFT), Linaro has been trusted by the world's leading semiconductor companies as their LTS (long-term support) and OSS “All-In-Upstream Strategy” partner in the Arm open-source ecosystem. 

              Working with Linaro enables automakers to: Maintain a Hardened LTS Kernel:  

                - Provide a stable, secure, and continuously updated Linux kernel specifically for automotive use cases. 
                - Maintain the Core AOSP Userspace: Backport critical security and stability fixes to the core Android components long after Google's official support ends. 
                - Access proactive CVE Monitoring to help them meet their regulatory obligations : Actively monitoring security databases for vulnerabilities relevant to the automaker's software stack.
                - Validate Patches:  Develop, test, and provide high-quality patches for the LTS kernel and AAOS, leveraging Linaro’s world-class CI/CD highly scalable infrastructure (LAVA & ONELab) - ensuring that every update is robust and reliable. 
                - Access Compliance Artifacts: Provide the documentation and evidence needed to demonstrate compliance with UNECE R155/R156 and the CRA."
            image: |
              linaro-website/graphics/smart-car-security-unlock-via-smartphone-digital-remix_1_i4tdmh.png
          - id: 4
            title: |
              Unlocking the True Power of Automotive HPC: Bridge Performance Gaps with OSS software Stacks on HPC
            description: |
              Linaro focuses on software and architecture optimization to fully exploit and utilize the capabilities of your HPC automotive hardware.
            longDescription: |
              Linaro focuses on software and architecture optimization to fully exploit and utilize the capabilities of your HPC automotive hardware. Working with Linaro allows you to: 

                - Maximize Performance: Tune your software stack to extract every ounce of power from your silicon. 
                - Run Mixed-Criticality Safely:  Efficiently and safely combine IVI infotainment and safety-critical functions (ASIL) on a single HPC or chiplet. 
                - Guarantee Freedom From Interference(FFI): Implement robust, certifiable isolation using hypervisors, containers, or discrete safety islands to meet the strictest standards.
            image: |
              linaro-website/graphics/futuristic-vehicle-graphical-user-interface-intelligent-car-connected-car-internet-things_1_myz2il.png
          - id: 5
            title: |
              Standardizing device access through Virtio
            description: |
              How do you enable virtualized components to communicate to one another without standard interfaces? This is the challenge Linaro intends to solve through VirtIO
            longDescription: >
              How do you enable virtualized components to communicate to one another without standard interfaces? This is the challenge Linaro intends to solve through VirtIO. 
              <br>
              <br>
              VirtIO is an OASIS specification which describes how hardware devices are discovered, managed and accessed in virtual environments. Those hardware devices are then presented to guest operating systems as virtual devices, also known as virtio-devices. 
              <br>
              <br>
              The benefit of following the virtio-device specification is that it stops you from being locked in with a vendor, giving you the possibility to write driver implementations that are independent of architecture and operating system.
            image: linaro-website/graphics/creative-visual-technology-network_1_yn1dy0.png
          - id: 6
            title: |
              Delivering standardized solutions with SOAFEE Lab
            description: |
              Linaro is at the forefront of driving innovation in the Arm-based automotive industry.
            longDescription: |
              Linaro is at the forefront of driving innovation in the Arm-based automotive industry. Our Automotive and SOAFEE (Standardized Open Architecture for Embedded Edge) Lab is dedicated to advancing the development of cutting-edge technologies and solutions for the automotive sector. 

              By defining common interfaces, APIs, and frameworks, we enable interoperability between hardware and software components, facilitating seamless integration and compatibility across different automotive platforms. 

              This standardization promotes modularity, scalability, and reusability, allowing automotive manufacturers to build flexible and future-proof systems. 

              Our lab actively contributes to various open-source projects and communities, collaborating with industry leaders, automakers, and technology providers to develop robust and secure automotive software stacks. By leveraging open-source technologies, we enable faster time-to-market, reduced development costs, and increased transparency in the automotive ecosystem.

              <a href="https://www.soafee.io/community/integration-lab/" class="text-linaro-yellow underline" target="_blank">GO TO SOAFEE LAB</a>
            image: |
              linaro-website/graphics/shield-security-protection-safety-technology-icon-symbol-cyberspace-checkmark-illustration_1_qjfkvy.png
  - row: container_row
    styles:
      outer: bg-linaro-purple mb-12
    sections:
      - component: two_column
        container_styles: flex align-center w-full gap-24 mx-auto item-center justify-center
        animation: none
        columns:
          - type: text
            title: Leverage our Arm Software Expertise to enhance your Automotive solution
            text_content: |
              To accelerate innovation on Arm-based automotive solutions; standardization, security and open source are key. Linaro has fifteen years of experience bringing industry and the open source community together to enable emerging technologies (mobile and servers to name a few).  With our expertise in open-source software and collaborative engineering, we are shaping the future of automotive systems and enabling the next generation of connected and autonomous vehicles. 

              Working with Linaro gives you access to some of the leading Arm Software Experts in the world whose experience working with the Linux kernel, virtualization and power management are all crucial to enabling connected and autonomous vehicles.

            styles: lg:w-1/2 text-lg
          - type: image
            image:
              src: linaro-website/graphics/computer-screen-display-concept-modern-car-design-hologram-latest-model-process-background-wallpaper-ai-generated-image_1_xvrk8b.png
              alt: |
                computer-screen-display-concept
              inferSize: true
            styles: not-prose lg:w-1/2 rounded-3xl h-auto object-contain
  - row: container_row
    sections:
      - component: contact
        form_id: "7"
        formName: "solutions"
        content: |
          Developing Automotive Solutions on Arm?<br>

          <span class="text-linaro-yellow">Talk to Linaro!</span>
        description: |
          Linaro’s well-proven track record in power management and virtualization on Arm make us the perfect choice for anyone looking to optimize performance while maintaining safety in an automotive environment. 

          <p class="text-linaro-yellow text-2xl text-left">Partner with our Services team to take your automotive solution to the next level!</p>
        styles:
          card: w-4/5 prose-em:linaro-gradient-text prose-em:not-italic prose-headings:text-5xl prose-headings:my-3 prose-ul:text-xl prose-headings:leading-tight prose-p:text-3xl flex flex-col mx-auto justify-center w-full not-prose text-center
          form: rounded-3xl p-8 w-4/5 bg-[#222025] border-gray-500 border-[1px] text-sm max-w-full
          description: font-normal text-2xl text-left
          content: text-5xl leading-loose
---
