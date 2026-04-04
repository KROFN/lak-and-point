import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation(
  ref,
  {
    selector = '[data-animate]',
    y = 50,
    stagger = 0.12,
    start = 'top 82%',
    duration = 0.9,
  } = {},
) {
  useLayoutEffect(() => {
    if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      const targets = gsap.utils.toArray(selector, ref.current);

      if (!targets.length) {
        return;
      }

      gsap.fromTo(
        targets,
        {
          autoAlpha: 0,
          y,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start,
            once: true,
          },
        },
      );
    }, ref);

    return () => context.revert();
  }, [duration, ref, selector, stagger, start, y]);
}
