import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  /*
    a11y: when true, appends a visually hidden "(opens in new tab)" hint
    so screen-reader users know the link will change context.
    Defaults to true for external links (matches the visual cursor-newtab
    affordance). Set to false when the caller supplies its own aria-label
    that already communicates this.
  */
  announceNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

/*
  a11y notes:
  - Adds a default focus-visible ring so keyboard users can always see
    where they are, even when consumers forget to style focus (2.4.7).
    Consumers can override by passing their own focus styles.
  - External links get target='_blank' + rel='noopener noreferrer'
    and a screen-reader-only "(opens in new tab)" hint unless opted out.
  - Refs are forwarded so Headless UI patterns keep working.
*/

const defaultFocusClasses =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm';

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  (
    {
      children,
      href,
      openNewTab,
      announceNewTab,
      className,
      nextLinkProps,
      ...rest
    },
    ref
  ) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    // Announce by default for new-tab links. If the caller passes their
    // own aria-label, assume they've handled it and skip the hint.
    const hasExplicitLabel =
      'aria-label' in rest && rest['aria-label'] !== undefined;
    const shouldAnnounceNewTab =
      isNewTab &&
      (announceNewTab === undefined ? !hasExplicitLabel : announceNewTab);

    const mergedClassName = clsxm(defaultFocusClasses, className);

    if (!isNewTab) {
      return (
        <Link
          href={href}
          ref={ref}
          className={mergedClassName}
          {...rest}
          {...nextLinkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={clsxm('cursor-newtab', defaultFocusClasses, className)}
      >
        {children}
        {shouldAnnounceNewTab && (
          <span className='sr-only'> (opens in new tab)</span>
        )}
      </a>
    );
  }
);

UnstyledLink.displayName = 'UnstyledLink';

export default UnstyledLink;
