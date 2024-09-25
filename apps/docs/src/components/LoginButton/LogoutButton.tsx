'use client';

import { logout } from '@/services/AuthService';
import { Button } from '@acme/design-system';

export default function LogoutButton() {
  'use client';
  return (
    <Button className="w-28" onClick={logout}>
      Logout
    </Button>
  );
}
