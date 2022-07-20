import { useLayoutEffect, useState } from "react";

const queries = [
  "(max-width: 766px)",
  "(min-width: 767px) and (max-width: 1199px)",
  "(min-width: 1200px)"
];

export function useMedia() {
  const mediaQLists = queries.map((q) => matchMedia(q));

  const getMedias = () => mediaQLists.map((mql) => mql.matches);

  const [medias, setMedias] = useState(getMedias);

  useLayoutEffect(() => {
    const handler = () => setMedias(getMedias);

    mediaQLists.forEach((mql) => mql.addEventListener("change", handler));

    return () =>
      mediaQLists.forEach((mql) => mql.removeEventListener("change", handler));
  }, []);

  return ["isMobile", "isTablet", "isDesktop"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: medias[index],
    }),
    {}
  );
}
