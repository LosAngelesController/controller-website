import jquerylib from 'jquery';
import jsdom from 'jsdom';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { titleCase } from 'true-case';

import { cleanthehtml } from '@/components/cleanthehtmlforprevpages';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import auditsfull from '../../auditsfull.json';

interface eachaudit {
  name: string;
  year: number | string;
  dept: string;
  link: string;
  pdflink: string;
  englink: string;
  spanishlink: string;
  description?: string;
  textofpage: string;
  htmlofpage: string;
}

interface auditinterface {
  audit: eachaudit;
}

export default function Audit(props: auditinterface) {
  const isFwa2019 = props.audit?.link?.includes('fwa-2019');
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
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <link rel='stylesheet' href='/legacywp.css' />
      </Head>
      <Navbar />
      <Seo
        title={props.audit.name}
        description={
          props.audit.description
            ? props.audit.description
            : `Audit of ${titleCase(props.audit.dept).replace(
                /( )?department/gi
              )} ${props.audit.year}`
        }
      />
      <main className=' dark:bg-zinc-900'>
        {props.audit && (
          <div className=' container mx-4 px-4 pb-3 pt-5  dark:text-gray-100 lg:mx-auto lg:max-w-7xl'>
            <h1 className='font-sm'>{props.audit.name}</h1>
            <h3>
              <span className='font-normal'>{props.audit.year} </span>
              {props.audit.dept && (
                <span>
                  {' '}
                  {titleCase(props.audit.dept).replace(/( )?department/gi, '')}
                </span>
              )}
            </h3>
            <div className='flex flex-row gap-x-2'>
              <Link href={props.audit.pdflink}>
                <button className='rounded-full bg-black px-3 py-1 font-semibold text-white'>
                  View Full Report
                </button>
              </Link>
            </div>

            <div
              className={`legacycontentgal max-w-3xl${
                isFwa2019 ? ' fwa-2019-report' : ''
              }`}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: props.audit.htmlofpage,
                }}
              ></div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const auditurl = context.params.auditurl;

  //illegally cast to any type because nextjs doesnt recognize it
  const auditsfullbroken: any = auditsfull;
  const returnedaudit: any = auditsfullbroken[auditurl];

  const dom = new jsdom.JSDOM(returnedaudit.htmlofpage);

  const $: any = jquerylib(dom.window);

  $('img[data-lazy-src]').each((elementindex: number, element: any) => {
    console.log(element);

    $(element).attr('src', $(element).attr('data-lazy-src'));

    $(element).attr('srcset', $(element).attr('data-lazy-srcset'));
  });

  const cleanedhtml = dom.serialize();

  const cleanedobject = {
    ...returnedaudit,
    htmlofpage: cleanthehtml(cleanedhtml),
  };

  if (returnedaudit == undefined) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        audit: cleanedobject,
      },
    };
  }
}
