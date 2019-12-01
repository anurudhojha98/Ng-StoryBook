import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {MatCardModule} from '@angular/material'
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CardComponent } from '../../projects/neosights/src/app/card/card.component';

storiesOf('Card Component', module)
  .addDecorator(
    moduleMetadata({
      imports: [ MatCardModule ]
    }),
  )
  .add('with title', () => ({
    component: CardComponent,
    props: {
      title:"Shiba Inu"
    }
  }))
  .add('Jane', () => ({
    component: CardComponent,
    props: {
      name: 'Jane',
      myEvent: action('Hello Jane!')
    }
  }))