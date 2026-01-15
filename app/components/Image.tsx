import React from 'react';

type FetchPriority = 'high' | 'low' | 'auto';

type ImageProps = Omit<React.ComponentPropsWithoutRef<'img'>, 'fetchPriority'> & {
  fetchPriority?: FetchPriority;
};

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ loading, decoding, fetchPriority, ...props }, ref) => {
    return (
      <img
        ref={ref}
        loading={loading ?? 'lazy'}
        decoding={decoding ?? 'async'}
        {...(fetchPriority ? ({ fetchPriority } as unknown as Record<string, unknown>) : {})}
        {...props}
      />
    );
  }
);

Image.displayName = 'Image';

export default Image;
