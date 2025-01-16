
export type Review = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: any;
  comment: string;
}

export type ReviewsBlock = {
  reviewsCount?: number;
  reviews: Review[];
}
