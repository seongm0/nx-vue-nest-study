import { Injectable } from '@nestjs/common';

import { ArticleModel } from './article.model';

@Injectable()
export class ArticleService {
  private readonly articles: ArticleModel[] = [
    {
      id: 1,
      title: 'Article 1',
      content: 'Content 1',
      authorId: 1,
      isRocked: true,
    },
    {
      id: 2,
      title: 'Article 2',
      content: 'Content 2',
      authorId: 2,
      isRocked: true,
    },
    {
      id: 3,
      title: 'Article 3',
      content: 'Content 3',
      authorId: 3,
      isRocked: false,
    },
  ];
}
