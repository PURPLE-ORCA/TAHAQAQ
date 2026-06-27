"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { DashboardCard } from "./dashboard-card";

const performanceData = [
  { name: "Pending Queue", value: 24, color: "#F2C94C" },
  { name: "Avg Verify Time", value: 18, color: "#006020" },
  { name: "Resolution Rate", value: 43, color: "#00A040" },
  { name: "System Status", value: 15, color: "#E0C080" },
];

export function DashboardPerformanceChart() {
  return (
    <DashboardCard title="System Performance" hasGoldAccent>
      <div className="h-[240px] w-full text-card-foreground">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              formatter={(value) => [`${value}%`, "Share"]}
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "8px",
                fontSize: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            />
            <Pie
              data={performanceData}
              cx="50%"
              cy="45%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {performanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                fontSize: "11px",
                fontFamily: "monospace",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}
