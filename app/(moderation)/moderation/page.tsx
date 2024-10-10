'use client';

import MessageAnalytics from '#/app/components/analytics/messages';
import ChatStatsRow from '#/app/components/chat-stats-row';
import ChatUserList from '#/app/components/chat-users-list';

import React, { useRef } from 'react';

export const description = 'A stacked area chart';

function Page() {
  return (
    <div className="p-4 space-y-4 container">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <ChatStatsRow />
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <MessageAnalytics />
        </div>
        <div className="col-span-2">
          <ChatUserList />
        </div>
      </div>
    </div>
  );
}

export default Page;
