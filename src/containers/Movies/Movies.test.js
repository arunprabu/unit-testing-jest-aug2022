import { fireEvent, render, screen } from "@testing-library/react";
import Movies from "./Movies";

describe('Movies Component', () => { 

  const movieInfo = {
    id: 2342134,
    title: 'The Jungle Book',
    url: 'https://www.imdb.com/title/tt3040964/'
  }

  // test spec
  it('should have heading with Welcome to Movie Portal', () => {
    render(<Movies />);
    const headingEl = screen.getByTestId('heading');
    expect(headingEl).toHaveTextContent('Welcome to Movie Portal');
  });

  it('receives movie title', () => {
    render(<Movies info={movieInfo}/>);
    const linkEl = screen.getByTestId('movieLink');
    expect(linkEl).toHaveTextContent('Know more about The Jungle Book');
  });

  it('will call handleSubscription', () => {
    render(<Movies />);
    const subscriptionBtnEl = screen.getByTestId('subscriptionBtn');
    fireEvent.click(subscriptionBtnEl);
    expect(subscriptionBtnEl.textContent).toBe('Unsubscribe');

    fireEvent.click(subscriptionBtnEl);
    expect(subscriptionBtnEl.textContent).toBe('Subscribe');
  });
});
