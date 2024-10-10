import { Button } from '#/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card';

import React from 'react';

const users = [
  {
    id: 237521314,
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/74.jpg',
  },
  {
    id: 237521315,
    name: 'Jane Doe',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    id: 237521316,
    name: 'Alice Smith',
    avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
  },
  {
    id: 237521317,
    name: 'Bob Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
  {
    id: 237521318,
    name: 'Charlie Brown',
    avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
  },
  {
    id: 237521319,
    name: 'Diana Prince',
    avatar: 'https://randomuser.me/api/portraits/women/76.jpg',
  },
  {
    id: 237521320,
    name: 'Eve Adams',
    avatar: 'https://randomuser.me/api/portraits/women/77.jpg',
  },
  {
    id: 237521319,
    name: 'Diana Prince',
    avatar: 'https://randomuser.me/api/portraits/women/76.jpg',
  },
  {
    id: 237521320,
    name: 'Eve Adams',
    avatar: 'https://randomuser.me/api/portraits/women/77.jpg',
  },
  {
    id: 237521320,
    name: 'Eve Adams',
    avatar: 'https://randomuser.me/api/portraits/women/77.jpg',
  },
  {
    id: 237521319,
    name: 'Diana Prince',
    avatar: 'https://randomuser.me/api/portraits/women/76.jpg',
  },
  {
    id: 237521320,
    name: 'Eve Adams',
    avatar: 'https://randomuser.me/api/portraits/women/77.jpg',
  },
];

function ChatUserList() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Active users in the chat</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 h-[25rem] overflow-auto">
          {users.map((user) => (
            <div key={user.id} className="flex items-center space-x-2">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p>{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.id}</p>
              </div>

              <div className="flex-1" />

              <Button size="sm" variant={'outline'}>
                View
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ChatUserList;
