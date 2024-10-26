import { X } from 'lucide-react';
import { bool } from 'prop-types';

function Checkbox({ checked }) {
  return(
    <div
      className={`
        w-9 h-9 grid place-items-center border border-x-social-gray
        rounded cursor-pointer ${checked ? 'bg-social-brand' : ''}
      `}
    >
      {checked && <X className="text-social-white" />}
    </div>
  );
}

Checkbox.propTypes = {
  checked: bool.isRequired
};

export { Checkbox };