'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '#/components/ui/chart';

import { TrendingUp } from 'lucide-react';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

export const description = 'A bar chart';

const chartData = [
  { day: 'Monday', messages: 1500 },
  { day: 'Tuesday', messages: 1200 },
  { day: 'Wednesday', messages: 1800 },
  { day: 'Thursday', messages: 1600 },
  { day: 'Friday', messages: 1400 },
  { day: 'Saturday', messages: 1700 },
  { day: 'Sunday', messages: 1300 },
];

const chartConfig = {
  messages: {
    label: 'Messages',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

function MessageAnalytics() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 h-[25rem] overflow-auto">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="messages" fill="var(--color-messages)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total messages for the last 7 days
        </div>
      </CardFooter>
    </Card>
  );
}

export default MessageAnalytics;
