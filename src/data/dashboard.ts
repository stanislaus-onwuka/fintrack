import { DashboardSummary } from "@/types/dashboard";
import { Character } from "@/types/shared/avatar";
import { Tab } from "@/types/shared/tabs";

// Switched to using /api
export const dashboardSampleData: DashboardSummary = {
    totalBalance: 12345,
    totalCredits: 7890,
    totalDebits: 4455,
    transactionCount: 150,
    balanceChange: 5,
    creditsChange: 3,
    debitsChange: -2,
    transactionChange: 10
}

export const dashboardTabs: Tab[] = [
    {
        name: 'Overview',
        value: 'overview'
    },
    {
        name: 'Transactions',
        value: 'transactions'
    }
] 

export const characterList: Character[] = [
    {
        name: "Ava",
        imgUrl: "/assets/images/people/man_i.png"
    },
    {
        name: "Liam",
        imgUrl: "/assets/images/people/woman_ii.png"
    },
    {
        name: "Noah",
        imgUrl: "/assets/images/people/woman_i.png"

    },
    {
        name: "John",
        imgUrl: "/assets/images/user-avi.png"

    },
    {
        name: "Mark",
        imgUrl: "/assets/images/people/woman_i.png"
    },
    {
        name: "Ava",
        imgUrl: "/assets/images/people/woman_i.png"
    },
    {
        name: "Ava",
        imgUrl: "/assets/images/people/man_i.png"
    },
    {
        name: "Ava",
        imgUrl: "/assets/images/user-avi.png"
    },
    {
        name: "Ava",
        imgUrl: "/assets/images/people/man_i.png"
    },
    {
        name: "Ava",
        imgUrl: "/assets/images/user-avi.png"
    },
    {
        name: "Ava",
        imgUrl: "/assets/images/user-avi.png"
    },
    {
        name: "Ava",
        imgUrl: "/assets/images/user-avi.png"
    },
    {
        name: "Ava",
        imgUrl: "/assets/images/user-avi.png"
    },
    {
        name: "Ava",
        imgUrl: "/assets/images/user-avi.png"
    },
    {
        name: "Ava",
        imgUrl: "/assets/images/user-avi.png"
    }
]