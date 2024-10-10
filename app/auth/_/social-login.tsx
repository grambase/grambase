import { Button } from '#/components/ui/button';

import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { signInWithGithub } from '../login/action';

function SocialLogin() {
  const [logginInWith, setLoggingInWith] = useState<'google' | 'github'>();

  return (
    <div className="flex flex-col w-full gap-2">
      <Button variant="outline" className="w-full" disabled>
        <FcGoogle className="w-4 h-4 mr-2" />
        Continue with Google
      </Button>
      <Button
        variant="outline"
        isLoading={logginInWith === 'github'}
        onClick={async () => {
          setLoggingInWith('github');
          await signInWithGithub();
        }}
        className="w-full"
      >
        <FaGithub className="w-4 h-4 mr-2" />
        Continue with Github
      </Button>
    </div>
  );
}

export default SocialLogin;
