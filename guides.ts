type Guide = {
  title: string;
  slug: string;
};

const guides: Guide[] = [];

export const getGuides = (first: number) => {
  if (first) {
    return guides.slice(0, first);
  }

  return guides;
};
