import React from 'react';

import { Checkbox20, CheckboxCheckedFilled20 } from '@carbon/icons-react';

const checklist = [
  {
    question: 'Is your motion purposeful?',
    options: [
      'What problem is motion solving?',
      'Does it enhance the user experience?',
    ],
  },
  {
    question: 'Is your motion responsive?',
    options: [
      "Do user actions receive immediate feedback that's seen and felt?",
      'Do my micro-interactions use ease-out on user input?',
      'Do my micro-interactions fall within a static duration ranging from 60 - 100ms?',
      'If there are large, or full screen, transitions in your product, are some elements continuous to guide the user?',
    ],
  },
  {
    question: 'Is your motion meticulous?',
    options: [
      'Did you use the appropriate easing curves?',
      'Is each motion individually considered and choreographed across elements?',
      'Are larger elements and motions on smaller screens taking more time than on larger screens?',
    ],
  },
  {
    question: 'Is your motion unobtrusive?',
    options: [
      'The best interface motion may go unnoticed, because it often keeps users engaged with their tasks. Is your motion frequently noticed by the average users? If so consider removing it, or minimizing it.',
    ],
  },
  {
    question: 'Is your motion responsive?',
    options: [
      "Check your motion on different screens. In general, the smaller the screen is, the longer the animation should take - this ensures the motion will be perceivable to the user's eye.",
    ],
  },
];

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  handleOnClick = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div onClick={this.handleOnClick}>
        {this.state.checked ? <CheckboxCheckedFilled20 /> : <Checkbox20 />}
      </div>
    );
  }
}

class MotionChecklist extends React.Component {
  state = {
    checkedItems: [],
    listItems: 0,
  };

  componentDidMount() {
    this.setState({ listItems: checklist.length });
  }

  handleCheckboxChange = e => {
    const target = e.target;
    const id = target.className;
    let checkedItemsState = this.state.checkedItems;

    if (target.checked) {
      checkedItemsState.push(id);
      this.setState({ checkedItems: checkedItemsState });
    } else {
      const index = checkedItemsState.indexOf(id);
      checkedItemsState.splice(index, 1);
      this.setState({ checkedItems: checkedItemsState });
    }
  };

  getTotalScore = () => {
    return (this.state.checkedItems.length / this.state.listItems) * 100;
  };

  render() {
    return (
      <div className="bx--row">
        <div className="bx--col-lg-8">
          {checklist.map((item, i) => (
            <div key={i}>
              <label>
                <input
                  type="checkbox"
                  onChange={this.handleCheckboxChange}
                  style={{ visibility: 'hidden', position: 'absolute' }}
                />
                <Checkbox />
                <p className="bx--type-heading-02">{item.question}</p>
              </label>
              {item.options.map((option, i) => (
                <div key={i}>
                  <p className="bx--type-body-long-02">{option}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="bx--col-lg-4">
          <p className="bx--type-body-short-01">Total Score:</p>
          <p className="bx--type-expressive-heading-04">
            {this.getTotalScore()}%
          </p>
          <p>
            This is a great start! Making sure UI motion is unobtrusive is
            necessary to keep users engaged for long periods of time. Check
            Choreography for helpful tips.
          </p>
        </div>
      </div>
    );
  }
}

export default MotionChecklist;
