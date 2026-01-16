---
layout: ../../layouts/Flow.astro
slug: downloads
title: Downloads
description: |
  ONELab revolutionizes edge and IoT device interoperability testing. We help Silicon Vendors and Device Makers to conduct continuous interoperability tests among different Operating Systems and Cloud Services.
hero:
  title: >
    Builds & Downloads
  background_image: linaro-website/graphics/bg-logo-2
  description: |
    Since 2010, Linaro has played a key role in upstreaming Arm software, with many of its engineers actively maintaining open source projects. This page provides links to downloads currently produced by Linaro’s engineering teams.

  styles:
    text_container: max-w-2xl
    title: max-w-2xl mb-12
    description: max-w-xl text-xl
    background: bg-right-top
    background_container: p-[5%] ml-[5%] xl:ml-0
flow:
  - row: container_row
    title: Linaro's GNU and LLVM Toolchains
    styles:
      outer: bg-transparent z-0
    sections:
      - component: cards
        styles:
          container: flex justify-around gap-12 prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline
          card: max-w-[60ch]
        cards:
          - title: gnu gcc compiler
            text: |
              GNU Toolchain plays an essential role in the development of Linux. Created by the GNU Project, it is a group of programming tools used for developing software applications and operating systems.
              The official Arm releases of the pre-built GNU cross-toolchain for AArch64 and ARM 32-bit A-Profile cores are available on the [Arm Developer website.](https://developer.arm.com/Tools%20and%20Software/GNU%20Toolchain)
          - title: LLVM Toolchain
            text: LLVM is a group of toolchain and compiler technologies.
              The official community releases of the pre-built LLVM native toolchain for AArch64 and ARM 32-bit A-Profile cores are built and tested by Linaro and are now available on [LLVM’s GitHub.](https://github.com/llvm/llvm-project/releases/)

              In addition to the usual Linux-hosted LLVM toolchain, Linaro is now providing [official LLVM Toolchain for Windows on Arm](https://github.com/llvm/llvm-project/releases/download/llvmorg-12.0.0/LLVM-12.0.0-woa64.exe) starting with LLVM 12.0.0 release.

              Interested in Cortex-R and Cortex-M bare-metal targeted toolchains for Arm embedded processors? We’re working with Arm to supply a new release every year (with quarterly updates). Releases are maintained for two years. You can get these directly from [the Arm website.](https://developer.arm.com/Tools%20and%20Software/GNU%20Toolchain)
  - row: container_row
    title: Linaro’s Continuous Integration & Validation Tools
    sections:
      - component: cards
        styles:
          container: flex justify-around mx-auto gap-14 prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline
          card: max-w-[60ch]
        cards:
          - title: Tuxsuite
            text: |
              [TuxSuite](https://tuxsuite.com/) delivers on-demand APIs and tools for building and testing Linux kernels in parallel.
              Created by Linaro, Tuxsuite is the backbone of our testing efforts and is available to anyone
              interested in doing Linux kernel testing faster and on a wider scale.
              You can either [download the TuxSuite client](https://docs.tuxsuite.com/) to use Linaro’s TuxSuite service, or you can download the backend tools to run on your own.

              Tuxmake automates Linux builds across different architectures, configurations, targets, and
              toolchains. Specify your choices, and TuxMake drives the build for you, doing the same steps in the
              same way every time. [Download Tuxmake here.](https://tuxmake.org/#installing-tuxmake)

              Tuxrun automates booting and testing Linux under QEMU. It supports almost all architectures
              supported by TuxMake. [Download Tuxrun here.](https://tuxrun.org/install-pypi/)
          - title: LAVA - Linaro’s Automated Validation
              Architecture
            text: |
              The Linaro Automated Validation Architecture (LAVA) is a test and continuous integration framework that Linaro uses to validate its releases. The source is open so that Linaro member companies and others can create their own instantiations and run proprietary tests within this standard framework.

              The two recommended ways to install Lava is either via DEB or Docker\:

              [Recommended Debian Architectures](https://lava.readthedocs.io/en/latest/admin/basic-tutorials/instance/install/#debian)

              [Administering LAVA using Docker — LAVA documentation](https://lava.readthedocs.io/en/latest/admin/basic-tutorials/instance/install/#docker)

              [Click here to find out more about LAVA.](https://validation.linaro.org/?_gl=1*145svnc*_ga*NzMzMTExNTgyLjE3MTIxMzg2MTM.*_ga_E12E6FXFVK*MTcxMjc1NDc3Ny44LjEuMTcxMjc1NTY4OS4wLjAuMA..)
          - title: SQUAD - Linaro’s Reporting Tool
            text: |
              SQUAD is a web based reporting tool. It was created by Linaro to cover basic test result reporting for Linaro teams. It can collect pass/fail results and benchmarks from direct submissions or from testing tools like LAVA.


              [Click here to download SQUAD](https://pypi.org/project/squad-client/)

              [Click here to find out more about SQUAD](https://squad.readthedocs.io/en/latest/)
---
