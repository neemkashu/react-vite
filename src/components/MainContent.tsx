import { Component } from 'react';
import { Search } from './Search';
import { cards } from '../utils/mocha';
import { CardGrid } from '../layouts/CardGrid';
import { Card } from './Card';

export class MainContent extends Component {
  render() {
    return (
      <div className="flex flex-col items-center gap-2 sm:p-3 p-2">
        <div className="self-center sm:self-start">
          <Search />
        </div>
        <CardGrid>
          {cards.map((card, index) => {
            const key = `${index}-${card.name}-${card.breed}`;
            return (
              <Card
                key={key}
                {...card}
              />
            );
          })}
        </CardGrid>
      </div>
    );
  }
}
