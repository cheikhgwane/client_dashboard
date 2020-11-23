const menu = [
    {
        label: "Home",
        icon: "home",
        name: "home",
        path: '/'
    },
    {
        label: "Cards",
        icon: "credit card",
        name: "cards",
        path: '/cards'
    },
    {
        label: "Movements",
        icon: "retweet",
        name: "movements",
        path: '/movements',
        subMenu: [
            {
                label: "Transfer",
                icon: "exchange",
                name: "transfer",
                path: '/transfers'
            },
            {
                label: "Deposit - Withdrawl",
                icon: "money bill alternate outline",
                name: "deposit_withdraw",
                path: '/deposit_withdraw'
            }
        ]
    },
    {
        label: "Phone Recharge",
        icon: "mobile alternate",
        name: "mobile",
        path: '/mobile'
    },
    {
        label: "Pay Services",
        icon: "cloud",
        name: "services",
        path: '/services'
    },
    {
        label: "Report",
        icon: "history",
        name: "report",
        path: '/history'
    },
    {
        label: "Support",
        icon: "help",
        name: "support",
        path: '/support'
    },


]

export default menu