import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card';

import {
  CalendarIcon,
  MessageSquareIcon,
  UserPlus2,
  Users2Icon,
} from 'lucide-react';
import React from 'react';

const statsData = [
  {
    title: 'Total Messages',
    value: '712.96k',
    icon: MessageSquareIcon,
    change: '+12% from last week',
  },
  {
    title: 'Total Users',
    value: '1993',
    icon: Users2Icon,
    change: '+62% from last week',
  },
  {
    title: 'New Users',
    value: '856',
    icon: CalendarIcon,
    change: 'New users this month',
  },
];

function ChatStatsRow() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {statsData.map((stat, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardDescription>{stat.title}</CardDescription>
              <stat.icon size={16} />
            </div>
            <CardTitle className="text-2xl">{stat.value}</CardTitle>
            <p className="text-xs text-gray-500">{stat.change}</p>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default ChatStatsRow;
