/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Checkbox from './Checkbox';
import checklist from './checklist';

class MotionChecklist extends React.Component {
  state = {
    checkedItems: [],
    listItems: 0,
  };

  componentDidMount() {
    this.setState({ listItems: checklist.length });
  }

  handleCheckboxChange = e => {
    const { target } = e;
    const id = target.className;
    const checkedItemsState = this.state.checkedItems;

    if (target.checked) {
      checkedItemsState.push(id);
      this.setState({ checkedItems: checkedItemsState });
    } else {
      const index = checkedItemsState.indexOf(id);
      checkedItemsState.splice(index, 1);
      this.setState({ checkedItems: checkedItemsState });
    }
  };

  getTotalScore = () =>
    (this.state.checkedItems.length / this.state.listItems) * 100;

  render() {
    return (
      <div className="bx--row motion-checklist">
        <div className="bx--col-lg-8 bx--col-md-5">
          {checklist.map((item, i) => (
            <div key={i}>
              <label className="motion-checklist__item">
                <input
                  className="motion-checklist__input"
                  type="checkbox"
                  onChange={this.handleCheckboxChange}
                />
                <Checkbox />
                <div>
                  <p className="bx--type-heading-02">{item.question}</p>

                  {item.options.map((option, optionKey) => (
                    <p key={optionKey} className="bx--type-body-long-02">
                      {option}
                    </p>
                  ))}
                </div>
              </label>
            </div>
          ))}
        </div>
        <div className="bx--col-lg-3 bx--col-md-3">
          <aside>
            <p className="bx--type-body-short-01">Total Score:</p>
            <p className="motion-checklist__score bx--type-expressive-heading-04">
              {this.getTotalScore()}%
            </p>
            <p className="bx--type-body-long-02">
              This is a great start! Making sure UI motion is unobtrusive is
              necessary to keep users engaged for long periods of time. Check
              Choreography for helpful tips.
            </p>
          </aside>
        </div>
      </div>
    );
  }
}

export default MotionChecklist;
