"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { DashboardCard } from "./dashboard-card";

const verificationData = [
  { day: "Mon", count: 12 },
  { day: "Tue", count: 19 },
  { day: "Wed", count: 15 },
  { day: "Thu", count: 22 },
  { day: "Fri", count: 18 },
  { day: "Sat", count: 8 },
  { day: "Sun", count: 14 },
];

export function DashboardVerificationChart() {
  return (
    <DashboardCard title="Verification Activity" hasGoldAccent>
      <div className="h-[240px] w-full text-card-foreground">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={verificationData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.06)" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              stroke="#888888"
              fontSize={12}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              stroke="#888888"
              fontSize={12}
              tickMargin={8}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 96, 32, 0.03)", radius: 4 }}
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0, 96, 32, 0.1)",
                borderRadius: "8px",
                fontSize: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              }}
              labelStyle={{ fontWeight: "bold", color: "#006020" }}
              itemStyle={{ color: "#333" }}
            />
            <Bar
              dataKey="count"
              name="Verifications"
              fill="#006020"
              radius={[4, 4, 0, 0]}
              background={{ fill: "#eef6ea", radius: 4 }}
              maxBarSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}
