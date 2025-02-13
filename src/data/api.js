export const popularBlogs = {
    title: "Popular Blogs",
    data: [
        {
            img: "/blog1.png",
            tag: "Technology",
            date: "2025-02-07",
            title: "Charted:Average Workers per U.S Startup (1994-2023)",
            des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
        },
        {
            img: "/blog2.png",
            tag: "Health",
            date: "2025-01-15",
            title: "Healthy Living Tips",
            des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",

        },
        {
            img: "/tesla2.png",
            tag: "Travel",
            date: "2024-12-20",
            title: "Top Travel Destinations",
            des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",

        }, 
        {
            img: "/tesla4.png",
            tag: "Health",
            date: "2025-01-15",
            title: "Healthy Living Tips",
            des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",

        },
        {
            img: "/tesla1.png",
            tag: "Travel",
            date: "2024-12-20",
            title: "Top Travel Destinations",
            des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",

        }
    ]
}

export const latestNews = {
    title: "Popular Blogs",
    data: [
        {
            img: "/car1.png",
            tag: "Technology",
            date: "2025-02-07",
            title: "Charted:Average Workers per U.S Startup (1994-2023)",
            des: "Startups are famous for starting small.",
        },
        {
            img: "/elon.png",
            tag: "Health",
            date: "2025-01-15",
            title: "Healthy Living Tips",
            des: "Tips and tricks for maintaining a healthy lifestyle.",
        },
        {
            img: "/tesla1.png",
            tag: "Travel",
            date: "2024-12-20",
            title: "Top Travel Destinations",
            des: "A guide to the top travel destinations for 2025.",
        }, {
            img: "/tesla2.png",
            tag: "Health",
            date: "2025-01-15",
            title: "Healthy Living Tips",
            des: "Tips and tricks for maintaining a healthy lifestyle.",
        },
        {
            img: "/tesla3.png",
            tag: "Travel",
            date: "2024-12-20",
            title: "Top Travel Destinations",
            des: "A guide to the top travel destinations for 2025.",
        },
        {
            img: "/tesla4.png",
            tag: "Travel",
            date: "2024-12-20",
            title: "Top Travel Destinations",
            des: "A guide to the top travel destinations for 2025.",
        }
    ],
    data2: [
        {
            img: "/blog1.png",
            tag: "Technology",
            date: "2025-02-07",
            title: "Charted:Average Workers per U.S Startup (1994-2023)",
            des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
        },
        {
            img: "/blog2.png",
            tag: "Health",
            date: "2025-01-15",
            title: "Healthy Living Tips",
            des: "Tips and tricks for maintaining a healthy lifestyle.",
        },
        {
            img: "/blog3.png",
            tag: "Travel",
            date: "2024-12-20",
            title: "Top Travel Destinations",
            des: "A guide to the top travel destinations for 2025.",
        }, {
            img: "/blog2.png",
            tag: "Health",
            date: "2025-01-15",
            title: "Healthy Living Tips",
            des: "Tips and tricks for maintaining a healthy lifestyle.",
        },
        {
            img: "/blog3.png",
            tag: "Travel",
            date: "2024-12-20",
            title: "Top Travel Destinations",
            des: "A guide to the top travel destinations for 2025.",
        }
    ]
}

export const companyOverview = {

    title: "Company Overview",
    des: ["Tesla Inc., founded by Martin Eberhard and Marc Tarpenning in 2003 and later significantly shaped by Elon Musk, represents a transformative force in the automotive and energy sectors. What began as a niche startup, with an ambitious vision of creating electric cars accessible to the masses, has evolved into a multinational powerhouse. Tesla's key to success lies in its vertically integrated business model, which distinguishes it from traditional automakers. By keeping design, manufacturing, and even parts production largely in-house, Tesla not only reduces costs but also rapidly innovates. This model facilitates swift adaptation to new technological advancements and market demands, effectively condensing the typical automotive industry's lethargic timelines. Tesla's operations span across designing and producing electric vehicles—such as the Model S, Model 3, Model X, and Model Y—along with energy solutions including solar panels and energy storage products like the Powerwall and Powerpack.",

        "Tesla's financial engine is driven primarily by its automotive sales, but it bolsters this with diverse revenue streams. In addition to selling vehicles outright, they offer leasing options, yielding recurring revenue. Another cornerstone is their software prowess, particularly in autonomous driving technology and vehicle connectivity, which continually attracts consumer interest and corporate partnerships. Tesla's Supercharger network"

    ],
    img: "/teslatown.png",
    buttons: [
        {
            icon: "/flag.png",
            title: "United States of America",
            url: "/company"
        },{
            icon: "/flag.png",

            title: "IPO",
            url: "/Industry"
        },{    
            icon: "/flag.png",
            title: "Industry",
            url: "/company"
        }
    ]
}

export const discoverMore = {

    title: "Discover More",
    data: [
        {
            img: "/chart1.png",
            title: "Ford Motors",
            des: "Ford Motor Co. engages in the manufacture, distribution, and sale of automobiles.",
        },
        {
            img: "/chart1.png",

            title: "Ford Motors",
            des: "Ford Motor Co. engages in the manufacture, distribution, and sale of automobiles.",
        },
        {
            img: "/chart1.png",

            title: "Ford Motors",
            des: "Ford Motor Co. engages in the manufacture, distribution, and sale of automobiles.",
        }
    ]

}

export const companies = [
    { id: '1', name: 'Tech Corp' },
    { id: '2', name: 'Health Solutions' },
    { id: '3', name: 'Eco Innovations' },
  ];
  
  // Dummy data for departments
  export const departments = [
    { id: '1', name: 'Development', company: { id: '1', name: 'Tech Corp' } },
    { id: '2', name: 'Marketing', company: { id: '1', name: 'Tech Corp' } },
    { id: '3', name: 'R&D', company: { id: '2', name: 'Health Solutions' } },
    { id: '4', name: 'Sales', company: { id: '3', name: 'Eco Innovations' } },
  ];
  
  // Dummy data for employees
  export const employees = [
    { id: '1', firstName: 'John', lastName: 'Doe', birthDate: '1990-02-01', department: { id: '1', name: 'Development' } },
    { id: '2', firstName: 'Jane', lastName: 'Smith', birthDate: '1985-08-15', department: { id: '2', name: 'Marketing' } },
    { id: '3', firstName: 'Tom', lastName: 'Brown', birthDate: '1992-05-22', department: { id: '3', name: 'R&D' } },
    { id: '4', firstName: 'Lucy', lastName: 'Green', birthDate: '1988-12-09', department: { id: '4', name: 'Sales' } },
    { id: '5', firstName: 'Alice', lastName: 'Johnson', birthDate: '1980-03-10', department: { id: '1', name: 'Development' } },
    { id: '6', firstName: 'Bob', lastName: 'White', birthDate: '1993-07-20', department: { id: '2', name: 'Marketing' } },
    { id: '7', firstName: 'Charlie', lastName: 'Black', birthDate: '1987-11-30', department: { id: '3', name: 'R&D' } },
    { id: '8', firstName: 'David', lastName: 'Blue', birthDate: '1995-06-18', department: { id: '4', name: 'Sales' } },
  ];

  export const storyCard = {
    title: "Top Story",
    data: [
        {
            img: "/img/story1.png",
            tag: "Technology",
            date: "2025-02-07",
            title: "Charted:Average Workers per U.S Startup (1994-2023)",
            des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
        },
        {
            img: "/img/story2.png",

            tag: "Health",
            date: "2025-01-15",
            title: "Healthy Living Tips",
                       des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",

        },
        {
            img: "/img/story3.png",

            tag: "Travel",
            date: "2024-12-20",
            title: "Top Travel Destinations",
                       des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",

        }, 
       
    ]}

    export const mobileArticle = {
        title: "Articles",
        data: [
            {
                img: "/img/article12.png",
                tag: "Technology",
                date: "2025-02-07",
                title: "Charted:Average Workers per U.S Startup (1994-2023)",
                des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
            },
            {
                img: "/img/story2.png",
    
                tag: "Health",
                date: "2025-01-15",
                title: "Healthy Living Tips",
                des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
            },
            {
                img: "/img/story3.png",
    
                tag: "Travel",
                date: "2024-12-20",
                title: "Top Travel Destinations",
                des: "Startups are famous for starting small, but they’re starting even smaller compared to the 1990s. We look at the trends.",
            }, 
           
        ]}
        export const Treedata = [
            {
                id: 1,
                priority: 1,
                from: 'reacttreetable@simple.com',
                subject: 'Lorem Ipsum is simply dummy text of the printing',
                sentDate: '01/01/2019'
            },
            {
                id: 2,
                priority: 2,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 1
            },
            {
                id: 3,
                priority: 3,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 1
            },
            {
                id: 4,
                priority: 4,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 3
            },
            {
                id: 5,
                priority: 5,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019'
            },
            {
                id: 6,
                priority: 6,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019'
            },
            {
                id: 7,
                priority: 7,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 3
            },
            {
                id: 8,
                priority: 8,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 3
            },
            {
                id: 9,
                priority: 9,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 3
            },
            {
                id: 10,
                priority: 10,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 8
            },
            {
                id: 11,
                priority: 11,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 8
            },
            {
                id: 12,
                priority: 12,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 10
            },
            {
                id: 13,
                priority: 13,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 5
            },
            {
                id: 17,
                priority: 13,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 13
            },
            {
                id: 18,
                priority: 13,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 13
            },
            {
                id: 19,
                priority: 13,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 13
            },
            {
                id: 14,
                priority: 14,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 5
            },
            {
                id: 15,
                priority: 14,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 5
            },{
                id: 16,
                priority: 14,
                from: 'reacttreetable@simple.com',
                subject: 'It is a long established fact that a reader will be distracted',
                sentDate: '01/01/2019',
                parentId: 5
            }];