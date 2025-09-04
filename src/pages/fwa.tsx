import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const kirbybutton =
  'w-content rounded-full bg-black px-4 py-2 font-bold text-white dark:bg-white dark:text-black';

export default function FraudWasteAndAbuse(props: any) {
  return (
    <>
      <Navbar />
      <Layout>
        <Seo
          title='Report Fraud, Waste, and Abuse'
          description='Send a report to the FWA Unit or learn more about types of fraud.'
        />

        <div className='mx-2 flex w-full flex-col px-4 py-2 sm:mx-4 md:px-4 lg:mx-auto lg:max-w-3xl xl:max-w-4xl'>
          <h1 className='pt-4 pb-2 dark:text-white sm:pt-8 text-xl md:text-3xl'>
            Report Fraud, Waste, and Abuse
          </h1>

          <p className='text-wrap pr-4 pb-2 dark:text-gray-100'>
            The City established the Fraud, Waste and Abuse Unit (FWA Unit)
            within the Controller’s Office to identify, prevent and deter losses
            of City funds and resources. Reports of allegations of fraud, waste
            and abuse that relate to or impact City resources can be made to the
            Controller’s Fraud Hotline.
            <br />
            <br />
            Otherwise, report personal fraud, waste or abuse to LAPD at{' '}
            <a
              href='https://lapdonline.org/file-a-police-report/'
              className='text-green-700 underline dark:text-mejito'
            >
              lapdonline.org/file-a-police-report/
            </a>
            <br></br>

            or by phone at{' '}
            <a
              href='tel:+18772755273'
              className='text-green-700 underline dark:text-mejito'
            >
              1-877-ASK-LAPD
            </a>
            .
          </p>

          <div className='mt-1 flex flex-row gap-x-2'>
            <Link href='https://snow.lacity.org/fwa'>
              <div className={kirbybutton}>New Report</div>
            </Link>
            <Link href='https://cityoflaprod.service-now.com/fwa/?id=fwa_login'>
              <div className={kirbybutton}>Follow Up on your Case</div>
            </Link>

          </div>
          <div className='mt-8 dark:text-white'>
            To make an online report please click New Report above. We encourage users to file a report online as you will have the ability to upload documents and information, respond to questions from our unit, and provide additional details if new information becomes available. Otherwise, to make a report by phone during business hours, call <a
              href='tel:+18664281514'
              className='text-green-700 underline dark:text-mejito'
            >(866) 428-1514</a>.
            {/* To make a report by phone, call (866) 428-1514. */}
          </div>
          <div className='mt-8 dark:text-white'>
            {' '}
            <h2>Examples of Types of Fraud, Waste and Abuse</h2>
            <h3 className='mt-4'>Accounting Fraud</h3>
            <p>
              Alteration, destruction, or omission of records in order to
              misstate financial performance or transactions. For example, an
              employee enters false information into a City financial or
              accounting system.
            </p>
            <h3 className='mt-2'>Bribery or Kickbacks</h3>
            <p>
              When a person gives something of value to a public employee in
              order to improperly affect that individual’s official actions and
              receive some type of preferential treatment. For example, paying a
              City employee to obtain a contract with the City.
            </p>
            <h3 className='mt-2'>Contractor Fraud</h3>
            <p>
              Fraud committed by a City contractor where the City is the victim.
              For example, a contractor bills the City for services it never
              provided or inflates the value of its services.
            </p>
            <h3 className='mt-2'>Waste</h3>
            <p>
              The extravagant or excessive expenditure of City funds above and
              beyond the level that is reasonably required to meet the needs of
              the City, or the consumption or use of City resources that is not
              knowingly authorized. For example, wasteful purchasing of items
              that end up unused.
            </p>
            <h3 className='mt-2'>Abuse</h3>
            <p>
              The improper use of City resources in a manner contrary to law or
              City policy, or the improper use of one’s position for private
              gain or advantage for themselves or any other person where not
              otherwise lawful. For example, using City computers to work on
              one’s personal business.
            </p>
            <h3 className='mt-2'>Contractor Selection Concerns</h3>
            <p>
              Allegation of unfair awarding of a contract or selection of a
              contractor. For example, an employee awards a contract without
              following City or departmental contracting policies.
            </p>
            <h3 className='mt-2'>Falsified Records</h3>
            <p>
              Altering records from their original state to a falsified
              condition. For example, an employee submits a falsified invoice in
              order to receive reimbursement.
            </p>
            <h3 className='mt-2'>Payroll Fraud</h3>
            <p>
              Manipulating the time or payroll system to receive payment not
              earned. For example, an employee records overtime not worked in
              order to receive additional pay.
            </p>
            <h3 className='mt-2'>Theft of City Resources</h3>
            <p>
              Taking, using or misappropriating City resources without
              permission. For example, using City equipment for personal use.
            </p>
            <h2 className='mt-4'>Report Other Types of Allegations</h2>
            <p>
              Reports may contain several different types of allegations,
              including allegations within and outside of the Controller’s FWA
              Unit’s jurisdiction. The Controller’s Fraud Hotline can intake
              these other types of allegations, but they may be referred to the
              department with specific jurisdiction over the allegations.
            </p>
            <h3 className='mt-4'>City Ethics Commission</h3>
            <p>
              The Ethics Commission has the authority to investigate violations
              of state and City laws regarding campaign financing, lobbying,
              governmental ethics, misuse of City position and conflicts of
              interest. In addition, the Ethics Commission has jurisdiction to
              investigate whistleblower retaliation. Information about each of
              those areas of law is available at{' '}
              <a
                href='https://ethics.lacity.org'
                className='text-green-700 underline dark:text-mejito'
              >
                ethics.lacity.org
              </a>
              <br />
              To make a report, contact the City Ethics Commission at{' '}
              <a
                href='https://ethics.lacity.org/enforcement/#reportaviolation'
                className='text-green-700 underline dark:text-mejito'
              >
                ethics.lacity.org/enforcement/#reportaviolation
              </a>
            </p>
            <h3 className='mt-2'>Discrimination and Harassment</h3>
            <p>
              The Personnel Department Office of Workplace Equity is responsible
              for investigating violations of the Equitable Workplace Standards
              (discrimination and harassment based on protected categories).
              <br />
              To make a report, contact the Personnel Department via the
              MyVoiceLA website at{' '}
              <a
                href='https://myvoicela.org'
                className='text-green-700 underline dark:text-mejito'
              >
                myvoicela.org
              </a>
              . For additional resources, please visit{' '}
              <a
                href='https://myvoicela.org/resources'
                className='text-green-700 underline dark:text-mejito'
              >
                myvoicela.org/resources
              </a>
              .
            </p>
            <h3 className='mt-2'>Utility Scam</h3>
            <p>
              When scammers pose as utility workers, either over the phone or in
              person, with the goal of swindling money from unsuspecting
              individuals.
              <br />
              To make a report, contact LADWP Security Services at{' '}
              <a
                href='tel:+12133673373'
                className='text-green-700 underline dark:text-mejito'
              >
                (213) 367-3373
              </a>{' '}
              or LAPD at{' '}
              <a
                href='tel:+18772755273'
                className='text-green-700 underline dark:text-mejito'
              >
                (877) 275-5273
              </a>
              .<br />
              <br />
              The Los Angeles Department of Water and Power (LADWP) has notified
              customers of scammers posing as employees and urges customers to
              hang up on any suspicious calls, even if the phone number looks
              familiar, and dial LADWP directly at{' '}
              <a
                href='tel:+18003425397'
                className='text-green-700 underline dark:text-mejito'
              >
                1-800-DIAL-DWP
              </a>{' '}
              (342-5397) to
              ensure you are connected to LADWP’s call center. LADWP will never
              ask customers to make payments with a prepaid debit card, gift
              card or any form of cryptocurrency over the phone to avoid service
              disconnection.
            </p>
            <h3 className='mt-2'>Workers’ Compensation Fraud</h3>
            <p>
              Workers’ compensation fraud involves providing false or misleading
              information to obtain workers’ compensation benefits to which a
              person is not legally entitled. For example, an employee pretends
              to have an injury in order to receive workers’ compensation
              benefits. To make a report, contact L.A. City Attorney’s Office
              Workers’ Compensation Division at{' '}
              <a
                href='tel:+12134739050'
                className='text-green-700 underline dark:text-mejito'
              >
                (213) 473-9050
              </a>
            </p>
            <h3 className='mt-2'>Utility Tampering or Theft</h3>
            <p>
              Stealing or inappropriately tampering with City water or utility
              services. To make a report, contact LADWP at{' '}
              <a
                href='https://www.ladwp.com/ladwp/faces/ladwp/residential/r-customerservices/r-cs-reportaproblem'
                className='text-green-700 underline dark:text-mejito'
              >
                www.ladwp.com/ladwp/faces/ladwp/residential/r-customerservices/r-cs-reportaproblem
              </a>
              .
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
