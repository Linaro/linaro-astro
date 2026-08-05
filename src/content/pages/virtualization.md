---
slug: services/virtualization
title: Virtualization
description: |
  Work with the Experts Who Build and Maintain Open Source Virtualization
hero:
  title: >
    Work with the Experts Who Build and Maintain Open Source Virtualization
  background_image: linaro-website/graphics/testingandautomation-bg.png
  description: |
    Whether you need to develop software before silicon exists, scale your CI without a hardware farm, or ship standardized virtual devices that let guest VMs run unchanged across multiple platforms, Linaro can help you unlock the full potential of virtualization on Arm.
  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top xl:bg-right
    background_container: p-[5%] md:ml-[5%]
flow:
  - row: container_row
    title: Why Choose Linaro for Virtualization?
    styles:
      inner: py24 md:px-24
      outer: mb-20
    sections:
      - component: text
        text_content: "Linaro does not just use open source virtualization — our engineers are responsible for the core arm architecture and maintain a significant portion of the virtualization ecosystem."
        style: text-center text-2xl mb-4 md:mx-24 mt-24
      - component: text
        text_content: "That upstream position lets us combine deep Arm architecture knowledge with day-to-day ownership of the code your product depends on, helping your business to:"
        style: text-center text-2xl mb-24 md:mx-24 mt-0
      - component: cards
        styles:
          card: max-w-[20em]
          container: justify-center gap-x-16 md:mx-24
          card_title: bg-linaro-gradient text-transparent bg-clip-text
        cards:
          - title: Develop Before the Silicon Exists
            text: |
              Model your SoC, validate your IP and bring up firmware and BSPs against an accurately emulated platform, so software work starts long before tape-out rather than after it.
          - title: Test at Scale Without a Hardware Farm
            text: |
              Emulation makes CI/CD cheap and repeatable. Run your full test matrix across product variants and architecture revisions in parallel, without buying, racking and maintaining boards for every configuration.
          - title: Avoid Software and Hardware Lock-In
            text: |
              Standardized virtual interfaces mean guest VMs run unmodified across platforms. Your software stack stays portable, and you stay independent of any single SoC or software vendor.
          - title: Ship Code That Stays Maintainable
            text: |
              We have a proven record of upstreamable, maintainable code. Landing your enablement work in the upstream projects removes the long-term cost of carrying out-of-tree patches and keeps you aligned with the ecosystem.
          - title: Verify Standards Compliance
            text: |
              From OASIS VirtIO specification conformance to architecture feature verification, we help you demonstrate that your implementation does what the standard says it does.
  - row: container_row
    title: See Virtualization on Arm in Action
    sections:
      - component: videos
        styles:
          container: flex justify-center mt-0 mb-12 pt-2
          card: max-w-5xl w-full
          video: rounded-xl
        videos:
          - src: https://static.linaro.org/videos/virtualization_with_timelines.mp4
  - row: container_row
    title: Linaro’s Expertise Across the Virtualization Stack
    styles:
      outer: purple-gradient-container-no-padding
    sections:
      - component: text
        text_content: Our engineers work across the entire stack — from the dynamic translation engine and device models up through the standardized virtual interfaces that guest operating systems actually talk to.
        style: text-center text-2xl mx-auto font-bold mb-16 md:mx-32
      - component: large_card
        styles:
          container: justify-center gap-x-16 md:mx-32
          card: max-w-[1/2]
          card_text: text-lg
          card_title: text-2xl w-full
        cards:
          - title: QEMU Emulation and Virtualization
            text: |
              ### Arm architecture emulation

              Deep understanding of the Arm architecture and its future roadmap, including emulation of existing and upcoming architecture features before hardware is available.

              ### Custom device emulation

              Device modelling for your IP, so silicon providers and their customers can develop and validate software against a faithful model of the real device.

              ### Core platform work

              The TCG dynamic-translation engine, the standard virt machine, and the platform foundations the rest of the ecosystem builds on.

              ### Rust in QEMU

              Early work enabling the Rust-in-QEMU effort, giving you memory-safe options for new device implementations.
            icon: settings
            secondIcon: linaro-website/graphics/circle-gradient-border
          - title: VirtIO and Standardized Virtual Interfaces
            text: |
              ### OASIS specification design

              We author and implement new specifications, including virtio-msg and virtio-wifi, and can drive your requirements through the standards process.

              ### Device and backend implementation

              The virtio and vhost-user device layer: virtio-gpu, virtio-snd, and vhost-user-rng, -gpio, -snd and -rtc, among others.

              ### Kernel and userspace

              Deep knowledge of the whole VirtIO ecosystem, from guest kernel drivers to userspace backends, with maintenance of key components such as vhost-user in both rust-vmm and QEMU.

              ### Rust and C implementations

              Expertise in both languages gives you a genuine choice of implementation strategy rather than a default.
            icon: workspaces
            secondIcon: linaro-website/graphics/circle-gradient-border
            flip_image: true
          - title: Pre-Silicon Development and CI/CD
            text: |
              ### Pre-silicon device validation

              Validate your IP and prepare the Arm ecosystem for your new devices before tape-out.

              ### Firmware and BSP bring-up

              Develop and test firmware and board support packages against emulated platforms, in parallel with hardware development.

              ### Test infrastructure

              Emulation-backed CI/CD that scales across product variants, integrated with the Linaro ONELab automated test framework for regression and quality control across your SDLC.
            icon: check_circle
            secondIcon: linaro-website/graphics/circle-gradient-border
          - title: Compliance, Upstreaming and Long-Term Support
            text: |
              ### Compliance testing enablement

              Test suites and infrastructure that demonstrate conformance to the VirtIO specification and to architecture requirements.

              ### Code upstreaming

              We take your enablement work through upstream review and get it merged, so it is maintained by the community rather than by you alone.

              ### Performance optimization

              Profiling and tuning of emulation and virtual device paths where throughput and latency matter.

              ### Project stewardship

              We contribute to QEMU’s governance, developer guides, CI infrastructure and general administration — the unglamorous work that keeps the project healthy.
            icon: handshake
            secondIcon: linaro-website/graphics/circle-gradient-border
            flip_image: true
  - row: container_row
    title: Proof Points
    sections:
      - component: cards
        styles:
          container: mx-auto flex justify-around my-24 prose-a:break-all border-2 border-grey rounded-3xl p-6 gap-16
          card: w-full text-left
          card_title: text-2xl
        cards:
          - title: "Linaro's involvement in these projects is structural, not incidental:"
            text: |
              * Linaro engineers are named across more than 70 subsystems in QEMU’s upstream MAINTAINERS file, including the platform’s foundations and its most critical subsystems.
              * Linaro has contributed the vast majority (> 90%) of CPU emulation features for the Arm Architecture.
              * Our maintainers not only write code but set the strategic technical direction of the project.
              * Linaro has contributed — authored or reviewed — more than 80% of Arm-related patches and over 50% of overall QEMU patches over the past five years.
              * Responsible for the project's own governance, developer guides, CI infrastructure, and general administration.
              * Our engineers implement new OASIS VirtIO specifications, including virtio-msg and virtio-wifi.
              * We help maintain key components such as vhost-user in both rust-vmm and QEMU, alongside the corresponding kernel drivers.
              * We collaborate across adjacent areas including specification compliance and CI/CD.
  - row: container_row
    title: Commercial Offerings
    sections:
      - component: cards
        styles:
          container: mx-auto flex justify-around my-24 prose-a:break-all border-2 border-grey rounded-3xl p-6 gap-16
          card: w-[50ch] text-left
          card_title: text-2xl
        cards:
          - text: |
              * QEMU emulation and virtualization consulting
              * Custom device emulation
              * VirtIO and vhost-user development services
              * OASIS specification design
              * Compliance testing enablement
              * Performance optimization
              * Code upstreaming
  - row: container_row
    no_border: true
    styles:
      inner: justify-around border-2 border-[#6B6B6B] rounded-3xl py-10 w-3/4 mx-auto mb-16 px-4
    sections:
      - component: text
        text_content: Partner with Linaro for Your Virtualization Projects
        style: text-center bg-linaro-gradient text-transparent bg-clip-text mx-auto text-4xl py-1 font-bold
      - component: buttons
        buttons:
          - text: Contact Us
            url: /contact
            style: linaro-gradient-button
---
