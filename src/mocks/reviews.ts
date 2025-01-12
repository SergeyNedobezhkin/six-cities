

export type Reviews = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: any;
  comment: string;
}

export type ReviewsSection = {
  reviewsCount: number;
  reviews: Reviews[];
}

export const reviewsSection = {
  reviewsCount: 1,
  reviews:
    [
      {
        id: 1,
        name: 'John Smith',
        avatar: 'img/avatar-max.jpg',
        rating: 4,
        date: new Date(),
        comment: 'I like itdsfgfdgdgdfgdfgdfhhfdshg !'
      },
      {
        id: 2,
        name: 'Bob',
        avatar: 'img/avatar-max.jpg',
        rating: 5,
        date: new Date(),
        comment: `I like itfdhdfhd
        I like itfdhdfhdfjhdf Lorem sda sfasasfas fasfdasgnfgn
        fjhdf Lorem sda sfasasfas fasfdasgnfgn!`
      },
      {
        id: 3,
        name: 'Alexey',
        avatar: 'img/avatar-max.jpg',
        rating: 5,
        date: new Date(),
        comment: 'I like it!'
      },
      {
        id: 4,
        name: 'Alexey',
        avatar: 'img/avatar-max.jpg',
        rating: 5,
        date: new Date(),
        comment: `I like itfdhdfhd
       sdfsdfsdfsdfsdfds Isdfsdfsdlike itfdhdfhdsdfsdffjhdf Lorem sda sfasasfas fasfdasgnfgn
        fjhdf Lorem sda sfasasfas fasfdasgnfgsdfsdfsdfn!`
      }
    ]
}
