"use client";

import React from 'react';

type LinkProps = React.ComponentPropsWithoutRef<'a'>;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, target, rel, onClick, ...props }, ref) => {
    const isExternal = typeof href === 'string' && /^https?:\/\//i.test(href);
    const opensNewTab = target === '_blank';
    const isInternalPath =
      typeof href === 'string' &&
      href.startsWith('/') &&
      !href.startsWith('//');

    const computedRel = rel ?? (isExternal || opensNewTab ? 'noopener noreferrer' : undefined);

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      if (!isInternalPath) return;
      if (isExternal || opensNewTab) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;

      e.preventDefault();
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    };

    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={computedRel}
        onClick={handleClick}
        {...props}
      />
    );
  }
);

Link.displayName = 'Link';

export default Link;
