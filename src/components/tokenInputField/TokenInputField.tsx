import { InputField } from 'components/inputField/InputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import 'components/tokenInputField/TokenInputField.css';

interface TokenInputFieldProps {
  label: string;
  balance: number;
  balanceUsd: number;
  dualInput?: boolean;
  bgGrey?: boolean;
}

export const TokenInputField = ({
  label,
  balance,
  balanceUsd,
  bgGrey,
}: TokenInputFieldProps) => {
  const placeholder = 'Enter token amount';

  return (
    <div>
      <div className="flex justify-between pr-10">
        <span className="font-medium">{label}</span>
        <span className="text-12">
          Balance: {balance}{' '}
          <span className="text-primary">(~${balanceUsd})</span>
        </span>
      </div>

      <div className="flex items-center">
        <div className="flex items-center mr-24">
          <div className="bg-grey-2 rounded-full h-24 w-24">&#8203;</div>
          <span className="text-20 mx-6">BNT</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <InputField format placeholder={placeholder} bgGrey={bgGrey} />
      </div>
    </div>
  );
};
