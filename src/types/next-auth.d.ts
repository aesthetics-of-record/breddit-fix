import type { Session, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

type UserId = string;

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId;
    username?: string | null;
  }
}

// 이렇게 적어줘야 id, username 타입에러가 안 난다.
declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId;
      username?: string | null;
    };
  }
}
