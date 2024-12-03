import { node, string } from 'prop-types';

function Box({ children, className }) {
  return (
    <div
      className={`
        bg-social-white rounded shadow-default max-w-6xl inline-block
        dark:bg-dark-social-background dark:text-dark-social-white
        dark: shadow-dark-social-white
        ${className}
      `}
    >
      {children}
    </div>
  );
}

Box.propTypes = {
  children: node.isRequired,
  className: string
};

export { Box };
