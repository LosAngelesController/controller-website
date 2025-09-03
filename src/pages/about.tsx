import Image from 'next/image';
import * as React from 'react';

import ImportantLinksSection from '@/components/ImportantLinksSection';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { SocialPageSeries } from '@/components/SocialPageSeries';
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

interface profilecardprops {
  name: string;
  title: string;
  subtitle: string;
  picture?: string;
  i18noptions?: any;
  notranslate?: boolean;
}

function ProfileCard(props: profilecardprops) {
  const idNumberForProfileCard = React.useRef(
    String(Math.floor(Math.random() * 1000000000))
  );

  const [lang, setLang] = React.useState('en');
  const intervalRef = React.useRef<any>(null);

  React.useEffect(() => {
    const handleScroll = (event: any) => {
      setLang(getLocaleToUse());
    };

    if (typeof window != 'undefined' && props.i18noptions) {
      window.addEventListener('scroll', handleScroll);
    }

    if (props.i18noptions) {
      intervalRef.current = setInterval(() => {
        setLang(getLocaleToUse());
        const selectedId = document.getElementById(
          idNumberForProfileCard.current
        );

        if (props.i18noptions[getLocaleToUse()]) {
          if (selectedId) {
            selectedId.innerHTML = pickStringToUseForName();
            selectedId.setAttribute('translate', noTranslate());
          }
        }
      }, 300);

      setTimeout(() => {
        setLang(getLocaleToUse());
      }, 1000);
    }

    return () => {
      if (typeof window != 'undefined') {
        window.removeEventListener('scroll', handleScroll);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    };
  });

  const getLocaleToUse = () => {
    if (typeof navigator === 'object') {
      let localeToUse = 'en';

      const browserLocales =
        typeof navigator !== 'undefined'
          ? navigator.languages === undefined
            ? [navigator.language]
            : navigator.languages
          : ['en'];

      if (props.i18noptions) {
        if (props.i18noptions[browserLocales[0]]) {
          localeToUse = browserLocales[0];
        }

        const htmlelem =
          typeof document !== 'undefined' ? document.documentElement : null;

        if (htmlelem) {
          const htmlselectorlang = htmlelem.getAttribute('lang');

          if (htmlselectorlang) {
            if (props.i18noptions[htmlselectorlang]) {
              localeToUse = htmlselectorlang;
            }
          }
        }
      }
      return localeToUse;
    } else {
      return 'en';
    }
  };

  const pickStringToUseForName = () => {
    const localeToUse = getLocaleToUse();

    let stringtouse = props.name;

    if (props.i18noptions) {
      //okay now set the string
      if (props.i18noptions[localeToUse]) {
        stringtouse = props.i18noptions[localeToUse];
      }
    }

    // console.log('rerender string to use', stringtouse, Date.now());

    return stringtouse;
  };

  const noTranslate = () => {
    if (props.notranslate === true) {
      return 'no';
    } else {
      const localeToUse = getLocaleToUse();

      //okay now set the string
      if (props.i18noptions) {
        if (props.i18noptions[localeToUse]) {
          return 'no';
        } else {
          return 'yes';
        }
      } else {
        return 'yes';
      }
    }
  };

  return (
    <div className='flex flex-row rounded-lg border border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-zinc-800'>
      <div className=''>
        {props.picture && (
          <Image
            src={props.picture}
            alt={'Profile picture of ' + props.name}
            width='150'
            height='200'
          />
        )}
      </div>
      <div className='px-3 py-2 '>
        <p
          className='font-semibold text-black dark:text-white'
          translate={noTranslate()}
          id={idNumberForProfileCard.current}
        >
          {pickStringToUseForName()}
        </p>
        <p className='text-black dark:text-white'>{props.title}</p>
        <p className='text-black dark:text-white'>{props.subtitle}</p>
      </div>
    </div>
  );
}

export default function About(props: any) {
  return (
    <>
      <Navbar themeChanger={props.themeChanger} />
      <Layout>
        <Seo
          title='About Our Office & Team'
          description="Meet our team and learn about our office's functions and responsibilities."
        />

        <div className='bgColorHeader relative px-4 pt-8 text-base md:px-32 md:pt-24 md:text-white'>
          <div className='background-1'>
            {/* max-w-2md z-10 mx-auto text-white */}
            <div className='z-10 mx-4 max-w-7xl text-white lg:mx-auto'>
              <div className='mx-auto flex flex-row lg:max-w-3xl'>
                <div className='my-auto'>
                  <h1 className="text-xl md:text-3xl">About Our Office</h1>
                </div>

                <SocialPageSeries />
                <div className='ml-auto'>
                  <Image
                    src='/images/ken-new-blob-big.png'
                    alt='Portrait of Kenneth Mejia'
                    className='w-96 lg:w-[500px]'
                    sizes='(max-width: 1023px) 24rem, 500px'
                    priority={true}
                    unoptimized={true}
                    height={440}
                    width={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='timeline mt-10 px-4 pt-4 dark:text-gray-100'>
          {/* <div className='leftTimeline containerTimeline'> */}
          {/* <div className='contentTimeline'> */}

          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:py-2'>
            Kenneth Mejia is the 20th City Controller, elected in November 2022
            with 513,288 votes. Controller Mejia oversees a team of more than
            160 employees who conduct independent audits and investigations,
            manage the City’s accounting, payroll, and spending, report on the
            City’s finances, and provide transparency on City operations,
            policies, metrics, and data.
          </p>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative'>
            The City Controller is the elected paymaster, auditor and chief
            accounting officer for the City of Los Angeles. Along with the Mayor
            and City Attorney, the Controller is one of three offices elected
            every four years by citywide popular vote.
          </p>

          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative'>
            In 1878, the position was created as the City Auditor, becoming an
            elected office in 1889. The 1925 City Charter changed the name of
            the position to City Controller. In 2000, a City Charter update
            granted the Controller the power to conduct performance audits of
            City departments, allowing an examination of departmental
            effectiveness.
          </p>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative'>
            In order to fulfill the Controller’s Charter-mandated functions, the
            City Controller’s office has three major divisions – Audit Services,
            Accounting Operations, and Financial Reporting and Analysis – in
            addition to Executive Office and Management Services leadership and
            staff.
          </p>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative'>
            The Executive Office supports the Controller with staff dedicated to
            accountability and oversight, financial transparency, research,
            technology and innovation, government affairs, communications, and
            community engagement. Management Services is responsible for all
            aspects of personnel, departmental payroll, budgeting, accounting
            and facility management for the Controller’s office. Below is a
            closer look at Audit Services, Accounting Operations, and Financial
            Reporting and Analysis.
          </p>

          {/* address */}
          <div className='text-left md:relative md:py-4 md:text-center '>
            <p className='content-center break-normal font-bold md:relative md:py-2'>
              200 N. Main Street, Suite 300 Los Angeles, CA 90012
            </p>
            <p className='content-center break-normal font-bold md:relative'>
              Phone: 213.978.7200
            </p>
            <p className='content-center break-normal font-bold md:relative'>
              Fax: 213.978.7211
            </p>
            <p className='content-center break-normal font-bold md:relative'>
              controller.mejia@lacity.org
            </p>
          </div>

          {/*BRUH OKAY THE CONTACTS GO HERE */}

          <h2 className='mb-2 mt-4'>Our Team</h2>
          <div className='mb-4 grid grid-cols-1 gap-x-4 dark:text-gray-100 sm:grid-cols-2 '>
            <div className='flex flex-col gap-y-8'>
              <div className='flex flex-col gap-y-2'>
                <h3 className='text-xl font-normal dark:text-gray-100'>Leadership</h3>
                <ProfileCard
                  name='Kenneth Mejia'
                  title='LA City Controller'
                  subtitle=''
                  picture='/images/staff/KennethMejia.jpg'
                />

                <ProfileCard
                  name='Jane Nguyen'
                  title='Chief of Staff'
                  subtitle=''
                  picture='/images/staff/JaneNguyen-ChiefofStaff.jpg'
                />
                <ProfileCard
                  name='Vincent de Vera'
                  picture='/images/staff/VincentdeVera-ExecAide.jpg'
                  i18noptions={{
                    ja: 'ヴィンセント・デ・ベラ (Vincent de Vera)',
                    'ja-JP': 'ヴィンセント・デ・ベラ (Vincent de Vera)',
                  }}
                  title='Chief Deputy Controller'
                  subtitle='Executive Officer / Aide to Controller Mejia'
                />
                <ProfileCard
                  name='Deborah Mitrenga'
                  title='Chief Assistant Controller'
                  subtitle=''
                  picture='/images/staff/DeborahMitrenga-ChiefAssistantController.jpg'
                />
                <ProfileCard
                  name='Dinah M. Manning'
                  title='Chief of Strategic Initiatives & Senior Advisor'
                  subtitle=''
                  picture='/images/staff/DinahManning-DirectorPublicSafety.jpg'
                />
              </div>
              <div className='flex flex-col gap-y-2'>
                <h3 className='text-xl font-normal'>
                  Financial Analysis and Reporting Division
                </h3>
                <ProfileCard
                  name='Rahoof (Wally) Oyewole'
                  title='Director of Financial Analysis and Reporting'
                  subtitle=''
                  picture='/images/staff/WallyOyewole-CFO.jpg'
                />
              </div>
              <div className='flex flex-col gap-y-2'>
                <h3 className='text-xl font-normal'>Accounting Operations Division</h3>
                <ProfileCard
                  name='James Robinson'
                  title='Chief Operations Officer/Principal Deputy Controller'
                  subtitle=''
                  picture='/images/staff/JamesRobinson-PrincipalDeputyController.jpeg'
                />
              </div>
              <div className='flex flex-col gap-y-2'>
                <h3 className='text-xl font-normal'>Audit Services Division</h3>
                <ProfileCard
                  name='Devang Panchal'
                  title='Director of Auditing'
                  subtitle=''
                  picture='/images/staff/DevangPanchal-DirectorAuditing.jpg'
                />
              </div>
              <div className='flex flex-col gap-y-2'>
                <h3 className='text-xl font-normal'>Management Services Division</h3>
                <ProfileCard
                  name='Shane Min'
                  title='Chief Management Analyst'
                  subtitle=''
                  picture='/images/staff/ShaneMin-ChiefManagementAnalyst.jpg'
                />
              </div>
            </div>
            <div className='flex flex-col gap-y-8'>
              <div className='flex flex-col gap-y-2'>
                <div className='flex flex-col gap-y-2'>
                  <h3 className='text-xl font-normal'>Working Groups</h3>
                  <ProfileCard
                    name='Ashley Bennett'
                    title='Director of Homelessness'
                    subtitle=''
                    picture='/images/staff/AshleyBennett-DirectorHomelessness.jpg'
                  />
                  <ProfileCard
                    name='Maria Rosas'
                    title='Deputy Controller of Finance'
                    subtitle=''
                    picture='/images/staff/MariaRosas-DeputyControllerFinance.JPG'
                  />
                </div>

                <div className='flex flex-col gap-y-2'>
                  <h3 className='text-xl font-normal dark:text-gray-100'>Communications</h3>
                  <ProfileCard
                    name='Diana Chang'
                    title='Director of Communications'
                    subtitle=''
                    picture='/images/staff/DianaChang-DirComms.jpg'
                    i18noptions={{
                      'zh-CN': '张良美 (Diana Chang)',
                      'zh-TW': '張良美 (Diana Chang)',
                      'zh-HK': '張良美 (Diana Chang)',
                      'zh-MO': '張良美 (Diana Chang)',
                      'zh-SG': '张良美 (Diana Chang)',
                      'zh-MY': '张良美 (Diana Chang)',
                      'zh-Hans': '张良美 (Diana Chang)',
                      'zh-Hant': '張良美 (Diana Chang)',
                      zh: '張良美 (Diana Chang)',
                    }}
                  />
                </div>

                <div className='flex flex-col gap-y-2'>
                  <h3 className='text-xl font-normal'>Technology</h3>
                  <ProfileCard
                    name='Vartan Arzumanyan'
                    title='Director of Technology'
                    subtitle=''
                    picture='/images/staff/VartanArzumanyan_TechDeputy.jpg'
                  />
                  <ProfileCard
                    name='Naon Chun'
                    title='Director of Technology'
                    subtitle=''
                    picture='/images/staff/NaonChun-TechDeputy.jpg'
                  />
                </div>
              </div>

              <div className='flex flex-col gap-y-2'>
                <h3 className='text-xl font-normal'>Government Affairs and Research</h3>
                <ProfileCard
                  name='Michael Shear'
                  title='Director of Research & Government Affairs'
                  subtitle=''
                  picture='/images/staff/MikeShear-DirectorOfResearch.jpg'
                />
                <ProfileCard
                  name='Jacky Rodarte'
                  title='Research Analyst'
                  subtitle=''
                  picture='/images/staff/JackyRodarte-ResearchAnalyst.jpg'
                />
              </div>
            </div>
          </div>

          <h2 className='text-2xl md:text-4xl md:py-4'>Audit Services Division</h2>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-2'>
            The Audit Services Division of the Controller’s Office conducts
            scheduled audits, special audits, and audits requested by the City
            Council or City management. Audits determine if existing controls in
            City departments are adequate, gauge whether departments are
            operating efficiently and effectively, and ensure that revenues and
            expenditures are properly recorded in conformance with applicable
            laws and regulations. City auditors recommend improvements that
            promote efficiency and effectiveness of City operations and save
            taxpayer dollars. This division conducts the following types of
            audits:
          </p>
          <h3>Financial and Compliance Audits</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            Financial-related audits determine whether financial information is
            presented in accordance with established or stated criteria, and
            whether the internal control structure over financial reporting and
            safeguarding of assets is suitably designed and implemented to
            achieve its objectives. These audits also include routine payroll
            observations and reviews of departmental bank accounts.
          </p>
          <h3>Performance Audits</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            Performance and operational audits of City departments and programs
            are mandated by the City Charter, and assess whether government
            programs or functions are efficiently and effectively achieving
            their goals.
          </p>
          <h3>Special Analysis and Reviews</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            These are different types of reports that do various things, such as
            tracking the implementation status of audit recommendations as
            asserted by management, follow-up audits to independently ensure
            implementation status, and other special assignments as directed. On
            an as-needed basis, the division also performs information systems
            audits, such as general control reviews, application reviews, and
            post-implementation systems reviews to ensure system functionality
            and data integrity. In addition, the division performs vendor
            reviews for selected contracts.
          </p>
          <h3>Fraud, Waste and Abuse Unit</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-4'>
            The City of Los Angeles aims to be as transparent and efficient as
            possible, going above and beyond to protect taxpayers’ assets and
            preserve government integrity. Critical to these efforts is tracking
            reports of fraud, waste and abuse of City resources, a core function
            of the Controller’s office for 15 years.
          </p>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            Since its creation, the Controller’s Fraud, Waste and Abuse Unit has
            sought to identify, stop and, ultimately, prevent the misuse of City
            resources by employees and others. This is done through a 24-hour
            telephone hotline and web-based complaint form, along with citywide
            education and training programs.
          </p>

          <div className='break-normal'></div>

          <h2 className='text-2xl md:text-4xl'>Accounting Operations Division</h2>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The Accounting Operations Division is responsible for paying
            employees and vendors, budgetary control of all City funds as
            authorized by ordinance, pre- and post-audit approval, and release
            of City funds. This division is comprised of the following sections:
          </p>

          <h3>Fiscal Oversight and Support Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            Fiscal Oversight and Support is responsible for the review and
            approval of demands (payments) against the City Treasury. The
            section establishes Citywide policies and procedures regarding
            receipt of goods and services, payment processing, and disbursement
            of City funds. The section is also responsible for the filing and
            remittance of payroll, sales, and use taxes to federal and State
            agencies. The section also administers the Citywide Travel and
            Purchasing Card programs.
          </p>
          <h3>Payroll Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The Payroll Section is the central payroll-processing unit for the
            City of Los Angeles. It ensures that the City processes its payroll
            and pays its employees in a timely manner and in accordance with the
            City Charter, Administrative Code (Division 4), Civil Service Rules,
            Department Personnel Ordinances, Memorandums of Understandings, and
            state and federal regulations. This section also provides support to
            PaySR, the City’s payroll system and is responsible for system
            enhancements and updates.
          </p>
          <h3>Paymaster Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The Paymaster Section is responsible for the security, control and
            disbursement of all warrants (checks) for City vendors, workers’
            compensation and payroll. This section is also responsible for
            enforcing legal wage garnishments against City employees and
            vendors, and disbursing funds collected through the voluntary child
            and spousal support payroll deduction program.
          </p>

          <div className='break-normal'></div>

          <h2 className='text-2xl md:text-4xl'>Financial Analysis and Reporting Division</h2>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The Financial Analysis and Reporting Division is responsible for
            producing federal, state and local financial compliance reports, and
            providing financial reports and forecasts to the City Council and
            management. The Division also include oversight of the City’s
            Financial System, FMS. The following are the sections of the
            division:
          </p>
          <h3>GAAP Compliance Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            Produces the City’s Annual Financial Report (AFR) in accordance with
            Generally Accepted Accounting Practices (GAAP) and in compliance
            with accounting standards set by the Government Accounting Standards
            Board (GASB). The CAFR is the official financial report of the City
            of Los Angeles. In compiling the AFR, the GAAP section converts
            non-GAAP budgetary basis (cash) financial data to a GAAP format
            (modified and full accrual) for financial statement presentation.
            The section provides GAAP conversion guidelines to all City
            Departments as well as training and guidance.
          </p>
          <h3>General Accounting Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The General Accounting Section tracks, forecasts and reports on City
            receipts, cash flows, debt levels and the status of the Reserve
            Fund. The section prepares the Controller’s annual March 1 revenue
            forecast for the General Fund and the Preliminary Financial Report —
            the first official financial information available on the prior
            fiscal year — and performs the accounting function for the Municipal
            Improvement Corporation of Los Angeles.
          </p>
          <h3>Single Audit Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The Single Audit Section produces the Single Audit in support of
            $426 million in grants awarded to the City each year, in compliance
            with the Federal Single Audit Act of 1984, the Single Audit
            Amendments of 1996 and Office of Management and Budget (OMB)
            Circular A-133.
          </p>
          <h3>Cost Allocation Plan (CAP) Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The Cost Allocation Plan Section produces the City’s
            federally-approved Cost Allocation Plan. The CAP shows how indirect
            costs — pensions and benefits, central services, and department
            administration and support — are allocated across City operations.
            The methodology and resulting rates are audited and approved by the
            federal government, and the rates are used to secure reimbursement
            for these indirect costs associated with grants and other federally
            funded programs. The reimbursements average about $20 million
            annually.
          </p>
          <h3>Check Reconciliation Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            This section reconciles all warrants issued against warrants paid,
            taking into account all adjustments. The Check Reconciliation
            Section protects the City by ensuring that the banks only honor the
            checks that are issued by the City and not fraudulent checks. This
            section is responsible for processing remakes of checks, issuance of
            duplicate and emergency checks and the processing of returned
            checks.
          </p>
          <h3>Financial Management System Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The Financial Management System Section (FMS) is the City’s
            financial system of record and integrated to the business processes
            of virtually all aspects of the Controller’s office. FMS provides
            four major functions and a business intelligence tool for the City
            of Los Angeles.
          </p>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The FMS group provides support, reporting, and troubleshooting for
            approximately 2,000 users, along with project management for FMS
            upgrades and enhancements.
          </p>
          <h3>Funds and Appropriations Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The Funds and Appropriations Section is responsible for budgetary
            control of all City funds authorized by ordinance, the Mayor and
            City Council. The section verifies the availability of funds before
            releasing expenditures for all City departments. This section also
            sets up the budget appropriations within the City’s General Ledger
            in accordance with the approved budget. It reviews, analyzes and
            audits all journal entries to ensure compliance with the City
            Charter, Administrative Code and Generally Accepted Accounting
            Principles.
          </p>
          <h3>Open Data Section</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The Controller’s Open Data section develops, implements, supports
            and maintains Control Panel L.A., and collaborates with other City
            and proprietary departments to publish financial information related
            to audits and reports in a centralized location. Control Panel L.A.
            promotes accessibility and transparency by allowing users to search,
            download and share City financial data and providing an interactive
            experience. It includes Checkbook L.A., Payroll Explorer, Inside
            L.A. City Finances, departmental statistical and metrics, and other
            information.
          </p>

          <div className='break-normal'></div>

          <h2 className='text-2xl md:text-4xl'>Management Services</h2>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            The Management Services Division is responsible for all
            administrative aspects of the Controller’s Office, including all
            departmental personnel, payroll, budgeting, accounting, facilities
            management, and emergency preparedness tasks. The Division also
            provides administrative support to the Executive Office and works
            closely with Office management to accomplish division and
            departmental goals.
          </p>
          <h3>Personnel, Budgeting, Accounting and Procurement</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            Management Services handles all Office personnel matters including
            the hiring and onboarding of new employees, employee development,
            workers’ compensation, labor relations, training, and discipline.
            The division also administers and manages the payroll for Controller
            employees and ensures they are paid correctly. The Division also
            prepares and submits the department’s annual budget request prepared
            through collaboration with Divisions on resources needed to support
            departmental programs, expenditure tracking and control, revenue
            projections, and performance metrics. The Division also oversees
            Controller accounting functions including accounts receivable and
            payable, departmental financial report preparation, and ordering and
            issuing all employee supplies and equipment. Management Services
            facilitates procurement of professional services, technology and
            equipment. Duties include project scoping, RFP/RFQ development,
            RFP/RFQ process administration, contract negotiations, contract
            administration (30+ contracts), procurement recommendations and
            compliance with City procurement policies.{' '}
          </p>
          <h3>Facilities Management, Records and Technical Support</h3>
          <p className='mb-3 font-light text-black dark:text-gray-100 md:relative md:pb-8'>
            Management Services also oversees all technical support services for
            the Controller’s Office including maintenance of the Controller’s
            Internet and Intranet websites, and coordination of computers,
            phones, servers, e-mails, and financial system security for
            department employees. The Division handles all Controller
            facilities-related tasks including maintenance and construction
            requests, contracted facilities services, and coordination with
            building security and General Services Division (GSD) on security
            requests and access control. The division also manages the
            Controller’s records including record storage facilities, retrieval
            of records, and destruction of files based upon retention schedule,
            and the Office’s California Public Records Act (CPRA) requests.
          </p>

          {/* </div> */}
        </div>

        <div className=' container mx-auto mt-4 bg-zinc-50 px-4 py-4 dark:bg-zinc-800'>
          <ImportantLinksSection />
        </div>

        {/* </div> */}
      </Layout>
    </>
  );
}
