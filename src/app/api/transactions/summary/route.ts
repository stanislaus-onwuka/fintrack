import { NextResponse } from "next/server";

const dashboardSummary = {
    totalBalance: 12345,
    totalCredits: 7890,
    totalDebits: 4455,
    transactionCount: 150,
    balanceChange: 5,
    creditsChange: 3,
    debitsChange: -2,
    transactionChange: 10
}

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return NextResponse.json(dashboardSummary);
}
