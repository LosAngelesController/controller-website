'use client';

import { motion } from 'framer-motion';
import React from 'react';

import ExpandableText from './ExpandableText'; // ← update path if needed

type Finding = {
  summary: string;
  details: React.ReactNode;
};

const findings: Finding[] = [
  {
    summary:
      'LAPD requires a patrol-first, armed response in mental health calls for service.',
    details: (
      <>
        We found that despite being called a “co-responder” model, the LAPD
        still designates patrol officers as the primary responders in mental
        health calls. Although these patrol officers may have not yet received
        the LAPD’s mental health training, it is the patrol officers who
        determine whether the SMART units, and the mental health professionals
        on the SMART units, are allowed to engage with the person who is the
        subject of the call for service. With patrol being the primary
        decisionmakers on scene, SMART’s role as the secondary unit severely
        limits the mental health professional’s ability to intervene and improve
        outcomes for the person in need or in crisis.
      </>
    ),
  },
  {
    summary:
      'The LAPD places an emphasis on 5150 hold applications as the main tool for its mental evaluation practice.',
    details: (
      <>
        In California, a 5150 hold refers to the initial 72-hour involuntary
        detention of a person for further mental evaluation. We found that even
        when SMART is allowed to engage in mental health calls for service, the
        SMART team’s primary role is to secure 5150 holds. In 2023, SMART
        handled 5,134 calls for service and 86% of the calls that SMART handled
        resulted in a 5150 involuntary hold.
      </>
    ),
  },
  {
    summary:
      'Despite designating MEU / SMART officers as “specially trained,” MEU / SMART officers do not receive specialized training.',
    details: (
      <>
        We found that LAPD’s MEU officers (including SMART officers) do not
        receive specialized training. Instead, MEU officers participate in the
        department’s 36-hour Mental Health Intervention Training (MHIT), which
        is available to all LAPD personnel and is not a specialized training
        course.
      </>
    ),
  },
  {
    summary:
      'LAPD’s “Mental Health Intervention Training” has little impact on use of force and outcomes.',
    details: (
      <>
        LAPD classifies reportable uses of force as “Categorical Use of Force”
        (CUOF) and “Non-Categorical Use of Force” (NCUOF). CUOF includes
        officer-involved shootings, deaths in police custody, any use of force
        that results in hospitalization, deliberate strikes to the head with a
        weapon, and neck restraints. NCUOF is an incident where an LAPD officer
        uses physical force or a control device to achieve a specific goal. We
        found that instances of use of force remain at similar levels whether
        MHIT trained officers are involved or not. MHIT-trained officers had a
        Categorical Use Of Force (CUOF) in 0.15% of mental health-related
        incidents, compared to non-trained officers who had a CUOF in 0.20% of
        incidents. MHIT-trained officers had a Non-Categorical Use of Force
        (NCUOF) in 2.44% of mental health-related incidents versus 2.25% for
        non-trained officers.
      </>
    ),
  },
  {
    summary:
      'Our review of MEU incident reports revealed concerning trends about use of force.',
    details: (
      <ul className='ml-5 mt-2 list-[circle] text-base'>
        <li className='mb-2 pl-3'>
          We found that when there was a <strong>use of force</strong>, only
          less than half or 47% of the incident report narratives{' '}
          <strong>
            included descriptions of the person’s mental health crisis
          </strong>
          .
        </li>
        <li className='mb-2 pl-3'>
          We found that when LAPD officers encounter individuals believed to be
          suffering from a mental health issue, the LAPD is{' '}
          <strong>
            more likely to document the mental health issue or concerning
            behavior when the subject’s ethnicity is white
          </strong>
          . Across all of the case summaries we reviewed, 70% of cases involving
          white individuals clearly documented the behavior indicating potential
          mental illness or the mental health crisis leading to MEU’s
          involvement in the case. In contrast, the cases document this
          information 49% and 50% of the time when the individual is Black or
          Hispanic, respectively.
        </li>
        <li className='mb-2 pl-3'>
          We found that{' '}
          <strong>
            only 6% of the incident report narratives describe an attempt to
            de-escalate by the responding officers and/or SMART
          </strong>
          ; 61% include no description of an attempt to de-escalate, and 33%
          describe no need for de-escalation.
        </li>
      </ul>
    ),
  },
  {
    summary:
      'LAPD fails to track or measure the impact MEU has on incidents and on use of force.',
    details: (
      <>
        At the time of our assessment, we made requests for any information,
        including reports, assessments or memoranda previously created that
        generally measure MEU’s impact on LAPD’s use of force. We found that the
        LAPD did not have any of the requested documentation. We also found that
        SMART’s performance is only measured by how quickly SMART relieves
        patrol officers from on-scene duties. This means the LAPD has not
        developed a metric tailored to SMART’s impact on decreasing use of
        force, de-escalating situations between patrol and people involved in
        mental health crises, or how SMART provides help for mental health
        crises. With the LAPD providing no metrics to show how SMART achieves
        MEU’s goals or contributes to de-escalating high-risk mental health
        calls for service, there is no way to determine SMART’s impact on
        mitigating use of force and deadly outcomes.
      </>
    ),
  },
  {
    summary:
      "LAPD's policies lack in providing robust guidance to patrol response in mental health calls.",
    details: (
      <>
        We found that while the LAPD’s policy acknowledges potential contacts
        with people with mental illness, it does little to provide specific
        direction on how to interact with and evaluate people with mental
        illness. Further, it is LAPD practice to handcuff a person during a
        mental health call for service–an act that can be escalating and
        triggering–before the MEU SMART unit conducts its mental health
        assessment.
      </>
    ),
  },
  {
    summary: 'The City spends $12.8 million in MEU staffing alone.',
    details: (
      <>
        This $12.8 million reflects only the direct payroll costs for nearly 80
        staff. The Controller team requested MEU budget information including
        adopted budgets and total funded amounts for personnel, equipment and
        fleet, contracting and procurement, and training for FY 2022 - 2025.
        According to the LAPD, they could only provide staffing payroll costs as
        they do not track the other costs at the program level.
      </>
    ),
  },
];

const KeyFindings: React.FC = () => {
  return (
    <section className='bg-[#41ffca] py-20'>
      <div className='container mx-auto max-w-7xl px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='mb-12 text-4xl font-bold text-black sm:text-5xl'>
            KEY FINDINGS
          </h2>

          <div className='grid grid-cols-1 items-stretch gap-x-20 lg:grid-cols-2'>
            {/* Left column: Expandables */}
            <div className='space-y-6 text-xl font-semibold text-black'>
              {findings.map((f, i) => (
                <ExpandableText
                  key={i}
                  summary={f.summary}
                  details={f.details}
                />
              ))}
            </div>

            {/* Right column: Stats card stack */}
            <div className='mt-12 rounded-lg bg-teal-100/80 md:mx-12 lg:mt-0'>
              <div className='p-8'>
                <div className='mb-2 text-5xl font-extrabold text-black md:text-6xl'>
                  35%
                </div>
                <div className='text-base font-extrabold uppercase text-black md:text-lg'>
                  of lapd officer-involved shootings involved people
                  experiencing a mental health crisis in 2023.
                </div>
              </div>

              <div className='p-8'>
                <div className='mb-2 text-5xl font-extrabold text-black md:text-6xl'>
                  86%
                </div>
                <div className='text-base font-extrabold uppercase text-black md:text-lg'>
                  of the calls that smart handled resulted in a 5150 involuntary
                  hold in 2023.
                </div>
              </div>

              <div className='p-8'>
                <div className='mb-2 text-5xl font-extrabold text-black md:text-6xl'>
                  6%
                </div>
                <div className='text-base font-extrabold uppercase text-black md:text-lg'>
                  of the incident report narratives describe an attempt to
                  de-escalate by the responding officers and/or smart.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFindings;
