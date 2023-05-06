type postType = {
  content: string;
  created_datetime: string;
  id: number;
  title: string;
  username: string;
};

type responseType = {
  count: number;
  next: string;
  previous: null;
  results: pokemonType[];
};
