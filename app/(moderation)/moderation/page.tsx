'use client';

import MessageAnalytics from '#/components/analytics/messages';
import ChatStatsRow from '#/components/chat-stats-row';
import ChatUserList from '#/components/chat-users-list';

import React from 'react';

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
