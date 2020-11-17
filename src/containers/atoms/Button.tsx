import React, { Component } from 'react';
import 'components/atoms/Button.css';

type State = {
  isState: boolean;
};

class ToggleButton extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = { isState: false };
  }

  buttonClick = (): void => {
    this.setState((state) => ({ isState: !state.isState }));
  };

  render() {
    const { isState } = this.state;

    return (
      <>
        <button
          type="button"
          onClick={this.buttonClick}
          className={isState ? 'red' : 'green'}
        >
          <span>{isState ? 'remind' : 'addRemind'}</span>
        </button>
      </>
    );
  }
}
export default ToggleButton;
