---
layout: ../../layouts/Flow.astro
slug: vdp
title: Security Incident Handling Process
description: |
  Information about Linaro's Security Incident Handling Process.
hero:
  title: >
    Security Incident Handling Process
  description: ""
  styles:
    text_container: text-center w-full
    title: w-full text-center
    background: bg-right-top md:bg-top opacity-50
    description: text-md sm:text-lg
    main_container: max-h-[20rem] min-h-[20ch] h-[20vh]
flow:
  - row: container_row
    sections:
      - component: text
        text_content: |
            ## Reporting

            If you think you have found a security vulnerability in any Linaro products or in our infrastructure, then please send an email to the Linaro Product Security Incident Team (PSIRT) at psirt@linaro.org. The PSIRT is referred to from now on as “us/we/our”. We will do our best to respond and fix any issues as soon as possible.

            As with any bug, the more information you provide, the easier it is to diagnose and fix. Any exploit code is very helpful, please include it with your report if available.

            Please let us know your disclosure plans if you have any. This may affect our disclosure plan as described in the next section.

            Please indicate any sensitive information you do not wish us to share. We reserve the right to share any information you provide with trusted third parties and eventually the public unless you request otherwise.

            If we consider the bug not to be a security vulnerability, we will inform you and direct the bug to the normal support process.

            ## Process

            The Linaro PSIRT adheres to the following process:
      - component: graphic
        src: linaro-website/graphics/779f08d9-425d-401b-8c95-3a82c9f408f7.png
        alt: "Linaro Security Incident Handling Process"
        width: 931
        height: 201
      - component: text
        text_content: |
            ### Triage

            When a potential vulnerability report is received by us, we will assess it to understand the potential product impact:

            1. If we can reproduce the potential vulnerability, then we carry out the remaining process through to disclosure.

            2. If we can not reproduce the vulnerability, we will inform you and close the report.

            3. If we consider the report not to be a security vulnerability, we will inform you and direct the bug to the normal support process.

            ### Risk Assessment

            We will make a risk-based decision as to whether the vulnerability will be remediated in the product or if the vulnerability will be addressed through other means, for example risk acceptance or transference (such as configuration changes).

            ### Temporary Remediation

            We will determine if and how the vulnerability can be temporarily mitigated, before providing a permanent solution.

            ### Permanent Solution

            If we decided in the risk assessment that the vulnerability will be remediated in the product, we will fix the vulnerability as soon as possible. We will work with you if the fix can be provided as a hotfix, in a monthly support release or due the impact/risk, in a major release.

            ### Disclosure

            We will communicate vulnerability information as appropriate, for example by notifying affected customers only or by publishing a public security advisory.

            We will also perform retrospective work and incorporated learnings from any vulnerability in our processes and products.

            ## Frequently asked questions

            ### 1. Do you have a bug bounty program?

            We currently don’t have any bug bounty program.

            ### 2. Your DMARC records aren’t properly configured

            We are aware of this and believe we have sufficient settings in place. However, if you find that this still is exploitable, please don’t hesitate to reach out to us.

            ### 3. Unauthenticated Jenkins Server

            The domains listed below are available to unauthenticated users. This is deliberate and poses no security issues. There are no privileged builds with confidential information logged. Jenkins is configured to hide secrets from output and logs. If you still come across non-open source content or other content that you believe is sensitive, please let us know what that content is and why you believe it’s sensitive and then we will investigate further.

            Domains:

            https://ci.trustedfirmware.org

            https://ci.staging.trustedfirmware.org
---
