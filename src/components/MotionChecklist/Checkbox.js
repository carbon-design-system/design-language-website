import React from 'react';
import { Checkbox as CheckboxIcon, CheckboxCheckedFilled } from '@carbon/icons-react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  handleOnClick = () => {
    this.setState(prevState => ({ checked: !prevState.checked }));
  };

  handleKeyPress = e => {
    if (e.charCode === 32) {
      e.preventDefault();
      this.setState(prevState => ({ checked: !prevState.checked }));
    }
  };

  render() {
    return (
      <div
        role="checkbox"
        onKeyPress={this.handleKeyPress}
        tabIndex={0}
        aria-checked={this.state.checked}
        onClick={this.handleOnClick}
        className="motion-checklist__checkbox">
        {this.state.checked ? <CheckboxCheckedFilled size={20} /> : <CheckboxIcon size={20} />}
      </div>
    );
  }
}

export default Checkbox;
