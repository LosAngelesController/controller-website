import jquerylib from 'jquery';
import jsdom from 'jsdom';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { titleCase } from 'true-case';

import { cleanthehtml } from '@/components/cleanthehtmlforprevpages';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import financeexport from './../../financeexport.json';

interface eachaudit {
  name: string;
  year: number | string;
  dept: string;
  link: string;
  pdflink: string;
  description?: string;
  textofpage: string;
  htmlofpage: string;
}

interface auditinterface {
  report: eachaudit;
}

export default function Report(props: auditinterface) {
  const removeloadingissuesontableau = () => {
    document
      .querySelectorAll(
        "[style='position:absolute;top:0;left:0;right:0;bottom:0;border:0;padding:0;margin:0']"
      )
      .forEach((eachElement) => {
        if (eachElement.parentElement) {
          if (eachElement.parentElement.querySelector('iframe[src]')) {
            eachElement.remove();
          }
        }
      });

    document.querySelectorAll('iframe:not([src])').forEach((eachElement) => {
      if (eachElement.parentElement) {
        if (eachElement.parentElement.querySelector('iframe[src]')) {
          eachElement.remove();
        }
      }
    });
  };

  React.useEffect(() => {
    removeloadingissuesontableau();

    setInterval(() => {
      removeloadingissuesontableau();
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <link rel='stylesheet' href='/legacywp.css' />
      </Head>
      <Navbar />
      <Layout>
        <Seo
          title={props.report.name}
          description={
            props.report.description
              ? props.report.description
              : `Financial Report for ${props.report.year}`
          }
        />
        <main className=' dark:bg-zinc-900'>
          {props.report && (
            <div className=' container mx-4 px-4 pb-3 pt-5  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
              <h1 className='font-sm'>{props.report.name}</h1>
              <div className='text-2xl font-semibold'>
                <span className='font-normal'>{props.report.year} </span>
                {props.report.dept && (
                  <span>
                    {' '}
                    {titleCase(props.report.dept).replace(
                      /( )?department/gi,
                      ''
                    )}
                  </span>
                )}
              </div>
              <div className='flex flex-row gap-x-2 mt-3'>
                <Link legacyBehavior href={props.report.pdflink}>
                  <a className='rounded-full bg-black px-3 py-1 font-semibold text-white'>
                    View PDF
                  </a>
                </Link>
                <Link legacyBehavior href={props.report.pdflink}>
                  <a
                    download
                    className='rounded-full bg-black p-1.5 text-white md:p-2'
                    aria-label='Download PDF'
                  >
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      className='l-4 h-4'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z'
                      />
                    </svg>
                  </a>
                </Link>
              </div>

              <div className='legacycontentgal mt-3'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.report.htmlofpage,
                  }}
                ></div>
              </div>
            </div>
          )}
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const reporturl = context.params.reporturl;

  //illegally cast to any type because nextjs doesnt recognize it
  const reportfullbroken: any = financeexport;

  //pull the url
  const returnedreport: any = reportfullbroken[reporturl];

  delete returnedreport.textofpage;

  const dom = new jsdom.JSDOM(returnedreport.htmlofpage);

  const $: any = jquerylib(dom.window);

  $('img[data-lazy-src]').each((elementindex: number, element: any) => {
    console.log(element);

    $(element).attr('src', $(element).attr('data-lazy-src'));

    $(element).attr('srcset', $(element).attr('data-lazy-srcset'));
  });

  const cleanedhtml = dom.serialize();

  const returnedreportcleaned = {
    ...returnedreport,
    htmlofpage: cleanthehtml(cleanedhtml),
  };

  if (returnedreport == undefined) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        report: returnedreportcleaned,
      },
    };
  }
}
