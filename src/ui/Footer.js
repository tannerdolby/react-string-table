const navLinkData = [
  {
    url: 'https://github.com/tannerdolby/react-string-table',
    ariaLabel: 'Link to repository on GitHub',
    iconTooltip: 'Github icon button',
    iconClass: 'fa-github',
  },
  {
    url: 'https://twitter.com/tannerdolby',
    ariaLabel: 'Link to my Twitter',
    iconTooltip: 'Twitter icon button',
    iconClass: 'fa-twitter',
  },
  {
    url: 'https://codepen.io/tannerdolby',
    ariaLabel: 'Link to my CodePen',
    iconTooltip: 'CodePen icon button',
    iconClass: 'fa-codepen'
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <h2>Built with React and hosted on Netlify</h2>
      <div className="navbar">
        <ul>
          {navLinkData.map((item, i) => {
          return (
            <Item
              key={i}
              url={item.url}
              ariaLabel={item.ariaLabel}
              iconTooltip={item.iconTooltip}
              iconClass={item.iconClass}
            /> 
          )
          })}
        </ul>
      </div>
    </div>
  );
}

const Item = ({url, ariaLabel, iconClass, iconTooltip}) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        <i
          className={`fa ${iconClass}`}
          aria-hidden="false"
          title={iconTooltip}
        />
      </a>
    </li>
  )
}

export default Footer;
