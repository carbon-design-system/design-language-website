/* eslint-disable no-restricted-globals */
import React from 'react';
import { Search, Loading } from 'carbon-components-react';

const sizes = ['16', '20', '24', '32', 'Glyph'];

/**
 * Takes a flat object where the keys are icon names and transforms them into an
 * object where each key is a size and the value is an array of icons at that
 * size.
 */
function groupIconsBySize(icons) {
  return Object.keys(icons).reduce((acc, iconName) => {
    const [group] = sizes.filter(size => iconName.indexOf(size) !== -1);
    const friendlyName = iconName.replace(group, '');
    const details = {
      name: iconName,
      friendlyName,
      group,
      Component: icons[iconName],
    };

    if (acc[group]) {
      return {
        ...acc,
        [group]: acc[group].concat(details),
      };
    }

    return {
      ...acc,
      [group]: [details],
    };
  }, {});
}

/**
 * Renders an individual icon
 */
function renderIcon(icon) {
  return (
    <div
      key={icon.name}
      className="icon bx--col-no-gutter bx--col-lg-2 bx--col-md-2 bx--col-sm-1">
      <div className="bx--aspect-ratio bx--aspect-ratio--1x1">
        <div className="bx--aspect-ratio--object">
          <div className="icon__card">
            <icon.Component />
          </div>
          <h5 className="icon__card-title" title={icon.friendlyName}>
            {icon.friendlyName}
          </h5>
          <span className="icon__card-details" title={icon.name} />
        </div>
      </div>
    </div>
  );
}

/**
 * Creates all the sections for the icons but filters by what icons are
 * available in filteredIcons. We use this method as part of our state
 * transformations above, instead of in the render method, because including
 * this in render causes noticeable jank in the UI. If we instead perform work
 * after the state transition for the search bar, then we get less noticeable
 * lag on the input.
 */
function createIconSections(icons, filteredIcons) {
  const groups = groupIconsBySize(icons);
  return Object.keys(groups)
    .filter(size => {
      if (!Array.isArray(groups[size])) {
        return false;
      }
      return groups[size].length !== 0;
    })
    .map(size => (
      <section key={size} className="icon-size">
        <header>
          <h2 className="icon-h2">{isNaN(size) ? size : `${size}x${size}`}</h2>
        </header>
        <div className="bx--row">
          {groups[size]
            .filter(icon => filteredIcons.indexOf(icon.name) !== -1)
            .map(renderIcon)}
        </div>
      </section>
    ));
}

/**
 * Provides support for our experimental icon library, `@carbon/icons-react`,
 * at the /experimental/iconography/library route
 */
export default class IconLibrary extends React.Component {
  state = {
    /**
     * The error if an error occurs while loading icons
     */
    errorLoadingIcons: null,

    /**
     * Icon data that we load from `@carbon/icons-react`
     */
    icons: null,

    /**
     * Initialize as loading by default since we need to fetch all the icons
     */
    isLoading: true,

    /**
     * Initialize with empty string value for search
     */
    searchValue: '',
  };

  /**
   * When our component mounts, we need to fetch the icon data from
   * `@carbon/react`
   */
  componentDidMount() {
    import('@carbon/icons-react')
      .then(icons => {
        const filteredIcons = Object.keys(icons);
        this.setState({
          icons,
          filteredIcons,
          sections: createIconSections(icons, filteredIcons),
          isLoading: false,
          errorLoadingIcons: null,
        });
      })
      .catch(error => {
        this.setState({
          errorLoadingIcons: error,
          isLoading: false,
          icons: null,
        });
      });
  }

  /**
   * Filter the current icon set by the given search value. Will shortcircuit if
   * searchValue is an empty string as all icons will be visible with that
   * query.
   */
  filterIcons = () => {
    this.setState(state => {
      const { icons, searchValue } = state;
      const filteredIcons = Object.keys(icons).filter(
        icon =>
          searchValue === '' || icon.toLowerCase().indexOf(searchValue) !== -1
      );
      return {
        filteredIcons,
        sections: createIconSections(icons, filteredIcons),
      };
    });
  };

  /**
   * Handle the `onChange` event from the Search component. We take the value of
   * the event and set it as the searchValue, we then defer an update with
   * `filterIcons` after the state has changed.
   */
  handleOnChange = event => {
    const searchValue = event.target.value.trim().toLowerCase();
    this.setState(
      {
        searchValue,
      },
      () => {
        this.filterIcons();
      }
    );
  };

  render() {
    const {
      errorLoadingIcons,
      filteredIcons,
      isLoading,
      sections,
    } = this.state;

    const search = (
      <Search
        small
        className="icon-search"
        onChange={this.handleOnChange}
        placeHolderText="Search by descriptors like “add”, or “check”"
        aria-label="Icon library search"
        value={this.state.searchValue}
        labelText="Icon library search"
      />
    );

    if (isLoading) {
      return (
        <div className="icon-library">
          {search}
          {isLoading && <Loading />}
        </div>
      );
    }

    if (errorLoadingIcons) {
      console.error(errorLoadingIcons); // eslint-disable-line no-console
      return (
        <div className="icon-library">
          <h3>Yikes! Looks like something went wrong.</h3>
          <p>
            We're still working out some problems in our experimental website.
            If you can, we'd appreciate it if you could make an issue on{' '}
            <a
              href="https://github.com/carbon-design-system/carbon-website-gatsby"
              rel="noopener noreferrer"
              target="_blank">
              our repo
            </a>{' '}
            to make sure that this gets fixed!
          </p>
        </div>
      );
    }

    if (filteredIcons.length === 0) {
      return (
        <div className="icon-library bx--row">
          <div className="bx--col-lg-8">{search}</div>
          <div className="bx--col-lg-12 bx--col-no-gutter`">
            <h3>No results found.</h3>
            <p>
              It appears we don't have an icon that matches your search. Try
              different search terms or give us a hand -{' '}
              <a href="https://github.com/carbon-design-system/carbon/tree/master/packages/icons">
                submit your own icon
              </a>{' '}
              to the library.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="icon-library">
        <div className="bx--row">
          <div className="bx--col-lg-8">{search}</div>
        </div>
        {sections}
      </div>
    );
  }
}
