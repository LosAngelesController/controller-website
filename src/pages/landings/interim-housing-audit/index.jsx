import React from 'react';

import Navbar from '@/components/Navbar';

export default function InterimHousing() {
  const buttonStyle = {
    backgroundColor: '#41ffca',
    color: 'black',
    padding: '10px 0',
    margin: '0 20px',
    textDecoration: 'none',
    border: '1.5px solid black',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '170px',
    height: '70px',
    textAlign: 'center',
  };

  return (
    <>
      <Navbar />
      <main className='md:max-w container mx-auto px-4 sm:max-w-4xl lg:max-w-6xl xl:max-w-7xl'>
        <center>
          <div className='mt-6'>
            <h1 className="sr-only">Homelessness Audit: Interim Housing &amp; Shelter Bed Data</h1>
            <img
              src='/images/homelessaudit-sheltercover-site2.png'
              alt=''
            />
          </div>
          <div className='mt-7 mb-7 dark:text-white'>
            <iframe
              className='w-full sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2'
              height='400'
              src='https://www.youtube.com/embed/_58JJb-3E5I?si=pFS8tXLpU3JWP-96'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
          <div className='mb-7 flex flex-row justify-center'>
            <a
              href='https://firebasestorage.googleapis.com/v0/b/lacontroller-2b7de.appspot.com/o/homelessnessaudit-interimhousing.pdf?alt=media&token=9c88b2c7-fd89-4613-be66-b0b4cca9b61a'
              className='text-base sm:text-base md:text-lg lg:text-lg xl:text-lg'
              style={buttonStyle}
            >
              Full Report
            </a>
            <a
              href='https://shelterbeds.lacontroller.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-base sm:text-base md:text-lg lg:text-lg xl:text-lg'
              style={buttonStyle}
            >
              Shelter Bed Map<br></br>(Demo)
            </a>
          </div>
          <div>
            <p className='mt-4 mb-5 text-left dark:text-white'>
              December 5, 2023
            </p>
            <p className='mb-5 text-left dark:text-white'>
              Honorable Karen Bass, Mayor<br></br>Honorable Hydee Feldstein
              Soto, City Attorney<br></br>Honorable Members of the Los Angeles
              City Council
            </p>
            <p className='mb-5 text-left dark:text-white'>
              RE: Interim Housing Bed Availability Data
            </p>
            <p className='mb-5 text-left dark:text-white'>
              The results of the 2023 Greater Los Angeles Homeless count
              revealed that an estimated 46,260 people in the City were
              experiencing either sheltered or unsheltered homelessness, a
              figure exceeding the number of interim housing beds by nearly
              three times (16,100 beds). In December of 2022, Mayor Karen Bass
              declared a warranted State of Emergency around the homelessness
              crisis. Yet the woefully inadequate amount of both interim and
              permanent housing resources, as well as the antiquated and
              inefficient methods of data collection and housing referral
              processes, significantly inhibit efforts by the City to respond to
              the crisis with the urgency that it requires.{' '}
            </p>
            <p className='mb-5 text-left dark:text-white'>
              In this audit, our office worked to analyze and review current
              methods used to gather, use, and improve interim housing data. Due
              to the extremely limited amount of interim housing beds within
              city limits, it is vital that we maximize their use and ensure
              that providers know, on an up-to-date and day-to-day basis, when
              beds become available. Achieving this requires good quality data
              and a high level of coordination between outreach workers, program
              operators, and others to place participants into a shelter.{' '}
            </p>
            <p className='mb-5 text-left dark:text-white'>
              Right now, as documented by our Office’s audit, the systems and
              data are lacking. We found:
            </p>
            <ul className='mb-5 ml-10 text-left dark:text-white'>
              <li>
                &bull; Data entry issues related to participant enrollments and
                exits, and bed attendance data
              </li>
              <li>
                &bull; LAHSA did not follow up with interim housing providers on
                their point-in-time sheltered homeless count data, despite red
                flags indicating potential data quality issues.
              </li>
              <li>
                &bull; A significant number of shelters have recently reported
                low bed utilization rates, increasing the risk that the number
                of sheltered homeless is being undercounted and that available
                beds may not be used efficiently.
              </li>
              <li>
                &bull; LAHSA attempted to develop a public facing shelter bed
                availability system (Find-a-Shelter) in the past, but low
                participation rates by providers and inaccurate data limited the
                usefulness of the system.
              </li>
              <li>
                &bull; LAHSA’s current system for tracking bed availability (Bed
                Reservation System) is so unreliable that LAHSA relies on daily
                census emails to track bed availability, rather than the
                reservation system.
              </li>
            </ul>
            <p className='mb-5 text-left dark:text-white'>
              These data quality issues make it next to impossible for the City
              to have an accurate picture of how many beds we actually have
              available, and how many are being utilized in the City at any
              given time. When this information is considered alongside laws
              like Los Angeles Municipal Code section 41.18 - which prohibits
              unhoused individuals from sitting, sleeping, or lying in
              designated areas, having reliable information about shelter bed
              availability is crucial to assessing the City's adherence to the
              Constitutional rights of unhoused individuals. Under a federal
              court's decision in the case of Martin v. Boise, the City of Los
              Angeles and other local jurisdictions in several western states
              cannot enforce local laws restricting camping in public spaces if
              they do not have sufficient shelter beds available for their
              homeless population.
            </p>
            <p className='mb-5 text-left dark:text-white'>
              We recommend that the City collaborate with LAHSA to take new
              steps to create a functioning shelter bed availability system, and
              improve the data quality that supports the existing shelter
              system. Changes are necessary not only because of the work LAHSA
              has carried out over the recent years, but because of its
              expanding responsibility in newer City efforts, like Inside Safe.
              Specifically, LAHSA should:
            </p>
            <ul className='mb-5 ml-10 text-left dark:text-white'>
              <li>
                &bull; Re-evaluate its information requirements and redesign a
                shelter bed availability system that is publicly accessible to
                facilitate referrals to all LAHSA-funded shelters;
              </li>
              <li>
                &bull; Develop and implement a plan to monitor, evaluate, and
                enforce its requirements on shelter program operators to enter
                bed availability and bed attendance data in a complete,
                accurate, and timely manner; and
              </li>
              <li>
                &bull; Follow up with all shelter program operators
                participating in the Annual Homeless Count that report bed
                utilization rates below 65% or more than 105%, and require them
                to correct their count of people experiencing homelessness in
                their shelter, or provide an explanation for low or high bed
                utilization rates.
              </li>
            </ul>
            <p className='mb-5 text-left dark:text-white'>
              As this audit reveals, the City currently lacks a centralized
              database that tracks interim housing availability and criteria for
              entry for interim housing sites.{' '}
            </p>
            <p className='mb-5 text-left dark:text-white'>
              To illustrate what our City needs, our team is launching an
              interim housing bed availability map that, while incomplete,
              serves as an example of what we could accomplish with more
              coordinated efforts across relevant stakeholders. The goal of this
              project is to centralize data on interim housing to make the
              landscape of resources more accessible and easier to understand.
              To date, our team has attempted to contact more than 350 interim
              housing sites in the City. We have collected information on
              population(s) served, requirements for entry, referral processes,
              current bed availability, and daily reporting practices for all
              sites.
            </p>
            <p className='mb-5 text-left dark:text-white'>
              With the work we have done thus far, we believe that a system like
              this is possible. We invite all necessary stakeholders (including
              LAHSA and the service providers that it works with) to join
              efforts and make an achievable dream a reality: the people of Los
              Angeles, including all of its unhoused neighbors, should know how
              many interim shelter beds are available on any given night.{' '}
            </p>
            <p className='mb-5 text-left dark:text-white'>
              Respectfully submitted,
            </p>
            <div>
              <img
                src='/images/sig-light.png'
                className='float-left mb-5 mr-4 h-auto w-40'
                alt='Signature of Kenneth Mejia, City Controller'
              />
            </div>
              <p className='mb-5 text-left dark:text-white clear-left'>
                KENNETH MEJIA<br></br>City Controller
              </p>
          </div>
        </center>
      </main>
    </>
  );
}
