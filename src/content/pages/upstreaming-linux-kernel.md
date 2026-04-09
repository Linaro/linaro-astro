---
slug: services/upstreaming-linux-kernel
title: Upstreaming Linux On Arm
description: |
  Product software quality issues feed into longer software update cycles, higher software support costs and now an increasing regulatory burden. An increased support load can further impact development resourcing leading to a spiral of technical debt to be maintained. Yet it can be hard to explain to business decision makers how the organisation can escape this spiral of support cost and delay in fixes and updates especially to driver and BSP code.
hero:
  title: >
    Upstreaming Linux On Arm
  description: |
    Linux on Arm-based platforms are about long-term sustainability, ecosystem alignment, security updates and commercial viability.
  button:
    text: Reach out to our Experts
    url: /contact
  bottom_fade: true
  background_image: linaro-website/graphics/freepik__computer-code-dramatic-layered-brackets-and-symbol__58091_1_wajxcr.png
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
    no_border: true
    styles:
      inner: py-12 md:py-16
      outer: bg-background pt-16 md:pt-24
    sections:
      - component: text
        text_content: Built it right - Keep it Upstream
        style: text-center not-prose text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-bold max-w-[52rem] mx-auto px-4 !text-linaro-yellow mb-10 md:mb-14
      - component: cards
        styles:
          container: flex flex-row flex-wrap justify-center gap-5 md:gap-6 lg:gap-7 w-full max-w-7xl mx-auto px-2 md:px-4
          card: not-prose flex flex-col items-center justify-start gap-4 rounded-lg bg-[#D9D9D9] px-4 py-8 md:py-10 min-h-[13rem] sm:min-h-[14.5rem] md:min-h-[16rem] w-44 sm:w-48 md:w-52 shrink-0 border-0 shadow-none
          icon: "!w-14 !h-14 shrink-0 text-[#6715E8]"
          content: text-center text-base sm:text-lg leading-snug font-medium !text-black [&_p]:!text-black !my-0 max-w-[13.5rem] mx-auto
        cards:
          - icon: zoom_in_map
            text: Included in Mainline Linux
          - icon: zoom_out_map
            text: Maintained for future releases
          - icon: thumb_up
            text: Recognized by major maintainers
          - icon: gamepad
            text: Aligned with Open Source best practices
          - icon: done_outline
            text: Ready for Long-Term Stability and Success
  - row: container_row
    show_title_line: true
    animation: none
    styles:
      inner: py-16 md:py-24
      outer: bg-background
    sections:
      - component: text
        text_content: |
          We Bring Decades of Hands-On Experience Working Directly in the Linux Kernel and Arm Ecosystem
        style: text-center not-prose text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-bold max-w-[52rem] mx-auto px-4 !text-white mb-10 md:mb-14
      - component: stat_grid
        stats:
          - value: 41969
            label: of contributions to the linux kernel release
          - value: 68
            label: of open source sw maintainers
          - value: 47000
            label: of patches submitted to upstream projects in the past 2 years
  - row: container_row
    show_title_line: true
    animation: none
    styles:
      inner: py-16 md:py-20
      outer: section-gradient-neutral z-0
    sections:
      - component: text
        text_content: We Help You Move From
        style: text-center not-prose text-2xl md:text-3xl lg:text-4xl font-bold !text-linaro-yellow mb-10 md:mb-14 px-4
      - component: large_image
        src: linaro-website/graphics/We_help_you_move_from_1_jzqr27
        alt: |
          Flow from vendor fork through upstream development, subsystem alignment, upstream submission, to long-term maintenance strategy
        style: w-full max-w-6xl mx-auto px-4 h-auto object-contain

  - row: container_row
    styles:
      outer: bg-background
    sections:
      - component: text
        text_content: |
          Upstreaming is NOT a Cost<br />
          <span class="linaro-gradient-text not-italic">It's a Cost-Reduction Strategy</span>
        style: text-center not-prose text-3xl max-w-[54ch] mx-auto font-bold mb-24
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button
---
