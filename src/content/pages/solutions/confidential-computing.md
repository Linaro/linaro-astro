---
title: Confidential Computing with Linaro
description: |
  Secure cloud solutions for a trusted future with confidential computing on Arm, delivered by Linaro.
hero:
  title: "Confidential Computing<br />with Linaro"
  description: |
    Secure Cloud Solutions for a Trusted Future
  background_image: linaro-website/images/solutions/freepik__create-an-abstract-and-dynamic-image-of-running-co__73757_1_b5dnni
  styles:
    main_container: "h-[55vh] min-h-[420px] max-h-[680px] overflow-hidden"
    text_container: max-w-6xl
    title: "max-w-3xl mb-6"
    description: "text-xl max-w-2xl mb-0 text-white/90"
    background: "bg-no-repeat bg-contain bg-right-top"
    background_container: "pl-0 sm:pl-[20%] lg:pl-[10%]"
flow:
  - row: container_row
    no_border: true
    full_width: true
    title: 'Why Choose Linaro for<br /><span class="linaro-gradient-text">Your Confidential Computing Needs?</span>'
    styles:
      outer: bg-background
      inner: "py-16 lg:py-24 px-4 md:px-8"
    sections:
      - component: cards
        styles:
          container: "flex flex-col gap-[17px] w-full -mx-4 md:-mx-8 items-stretch"
          card: "w-full py-[35px] px-6 lg:px-12 flex flex-col items-center text-center"
          card_title: "text-xl font-bold text-white mb-2"
        cards:
          - number: 1
            title: Unmatched Expertise
            text: |
              With a legacy of innovation and Arm-based solutions, Linaro combines
              technical expertise with a commitment to open source.
            style: "bg-[linear-gradient(180deg,#222025_0%,#222025_40%,#420d90_100%)]"
          - number: 2
            title: Simplified Development
            text: |
              We remove the complexity of researching and implementing
              confidential computing solutions, enabling rapid deployment.
            style: "bg-[linear-gradient(180deg,#222025_0%,#222025_40%,#420d90_100%)]"
          - number: 3
            title: End-to-End Support
            text: |
              From hardware integration to software verification, Linaro provides
              comprehensive solutions to help you meet your confidential computing
              goals.
            style: "bg-[linear-gradient(180deg,#222025_0%,#222025_40%,#420d90_100%)]"
  - row: container_row
    styles:
      outer: bg-background
      inner: "pt-8 lg:pt-12 pb-16 lg:pb-24"
    sections:
      - component: text
        style: "rounded-2xl bg-[#2a2730] border border-white/10 p-8 lg:p-10 text-center max-w-4xl mx-auto prose-invert overflow-hidden"
        text_content: |
          <div class="mb-6">
            <p class="text-lg lg:text-xl text-white/90 italic mb-6">
             “This collaboration with Linaro allows Fujitsu to significantly accelerate the development of our Confidential Computing solutions on the FUJITSU-MONAKA processor, ensuring robust security and innovation for our end customers.”
            </p>
            <footer class="text-linaro-yellow font-medium italic">
              Kouichi Hirai<br />
              Head of Software Development Unit,<br />
              Fujitsu
            </footer>
          </div>
  - row: container_row
    show_title_line: true
    styles:
      outer: bg-background
      inner: "py-12 lg:py-16"
    sections:
      - component: image_cards
        styles:
          container: "grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto mt-12 px-6 lg:px-8 justify-items-center md:justify-items-stretch"
          card_title: "text-xl lg:text-2xl font-semibold text-white/90 text-center mt-5 not-prose"
          imageWrapper: "aspect-[3/4] rounded-2xl overflow-hidden"
          image: "object-cover object-center"
        cards:
          - title: 'Confidently <span class="linaro-gradient-text">deploy</span> sensitive workloads'
            image:
              src: linaro-website/graphics/Rectangle_5_3_tqbgig.png
              alt: Confidently deploy sensitive workloads

          - title: 'Protect intellectual <span class="linaro-gradient-text">property and safeguard data</span>'
            image:
              src: linaro-website/graphics/Image_-_African_American_Data_Engineer_Close_Up_1_jlopdt.png
              alt: Protect intellectual property and safeguard data

          - title: 'Safeguard <span class="linaro-gradient-text">data</span> against modern threats.'
            image:
              src: linaro-website/graphics/Image_-_Blue_futuristic_stream_Data_Communication_flying_into_digital_technologic_animation_3D_rendering_1_zwjykp.png
              alt: Safeguard data against modern threats

  - row: container_row
    show_title_line: true
    styles:
      outer: purple-gradient-container
      inner: "py-16 lg:py-24"
    sections:
      - component: title
        style: "text-center text-white text-3xl lg:text-5xl font-bold max-w-4xl mx-auto !py-0 [&_h2]:!text-3xl [&_h2]:!lg:text-5xl [&_h2]:!my-0"
        title_content:
          text: '<span class="whitespace-nowrap">Linaro Neutrum</span><br /><span class="linaro-gradient-text">End-to-End Confidential Computing</span><br /><span class="text-white">for Arm Platforms</span>'
          size: h2
      - component: cards
        styles:
          container: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mt-12 justify-items-center md:justify-items-stretch"
          card: "bg-white/95 rounded-2xl p-8 flex flex-col items-center text-center text-background"
          card_title: "text-xl font-bold text-background mb-4"
          icon: "mx-auto"
          content: "text-base text-background/90 prose-invert prose-p:my-2 text-center"
        cards:
          - title: Open Source Excellence
            icon: rocket_launch
            text: |
              Built entirely on open-source components, Neutrum ensures transparency,
              collaboration and continuous improvement.
          - title: Industry Standards Compliance
            icon: workspaces
            text: |
              Neutrum adheres to widely established TEE standards, ensuring seamless
              integration in multi-vendor environments.
          - title: Flexible Integration
            icon: diversity
            text: |
              Use the Neutrum reference stack as a foundation for your products, or
              optionally integrate its components into existing software stacks.

  - row: container_row
    styles:
      outer: neutrum-gradient-background py-8 lg:py-12
      inner: "pt-4 pb-8 lg:pt-6 lg:pb-10"
    sections:
      - component: neutrum_evidence_cta
        diagram_image:
          src: linaro-website/graphics/Linaro_Diagramma_20250415_Comp_2_2025-04-15_14.13.06_1_3_pjehyx.png
          alt: Neutrum evidence flow - Verifier, Software Stack, and Hardware
          width: 580
          height: 620
        items:
          - title: Evidence Generation
            description: The Neutrum reference stack provides secure virtual machines with the infrastructure needed to produce evidence claims of their trustworthiness.
          - title: Verification
            description: The Neutrum verifier compares evidence claims with trusted reference values, generating an attestation token to confirm the platform's integrity.
          - title: Integration with Relying Parties
            description: The attestation token is shared with entities responsible for determining if the trustworthiness of the secure virtual machines meet their requirements.

  - row: container_row
    show_title_line: true
    styles:
      outer: bg-background
      inner: "pt-4 pb-12 lg:pt-6 lg:pb-16"
    sections:
      - component: cta_block
        heading: "Accelerate Your Confidential Computing Strategy with Linaro"
        heading_highlight: "Confidential Computing Strategy"
        subtext: "Contact us today to learn more about how we can transform your approach to secure cloud computing."
        styles:
          subtext: text-linaro-yellow
        button_text: Contact Us
        button_url: /contact
---
