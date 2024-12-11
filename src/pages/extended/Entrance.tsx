import React from 'react';
import SharedForm from '../../components/SharedForm';
import {
  HASHED_EXTENDED_1,
  HASHED_EXTENDED_2,
  HASHED_EXTENDED_3,
  HASHED_EXTENDED_SECRET,
} from '../../config/constants';

const ExtendedLogin: React.FC = () => {
  const PASSWORD_MAP: Record<string, string> = {
    [HASHED_EXTENDED_1]: '/extended/notes',
    [HASHED_EXTENDED_2]: '/extended/secundus',
    [HASHED_EXTENDED_3]: '/extended/development',
    [HASHED_EXTENDED_SECRET]: '/extended/XXXXXX',
  };
  return (
    <SharedForm
      buttonColor="warning"
      textFieldColor='warning'
      labelText='Passphrase'
      helperText="Do you even try to come to the secret room?"
      buttonText="ENTER TO EXTENDED"
      alertMessage="これ以上は進めせさません。どうかお引き取りを。"
      passwordMap={PASSWORD_MAP}
      setHint={
        <div
          className="Hint"
          dangerouslySetInnerHTML={{ __html: "<!-- ヒントは全て使ったか、と訊いている。いつの呟きか分かればいい。あとは数字が導いてくれる。 -->" }}
        />
      }
    />
  );
};

export default ExtendedLogin;
