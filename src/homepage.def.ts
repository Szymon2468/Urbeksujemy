export default interface IArticle {
  author: {
    name: string;
  };
  content: Array<any>;
  date: Date;
  mainImage: any;
  place: {
    city: {
      city: string;
      state: {
        state: string;
      };
    };
    coords: number;
    date: Date;
    description: string;
    ourRating: number;
    photos: Array<any>;
    placeName: string;
  };
  seoDesc: string;
  seoKeyWords: Array<string>;
  slug: {
    current: string;
  };
  teaser: string;
  title: string;
}
