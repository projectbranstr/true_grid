import React, { useState , useEffect, useRef } from 'react'
import './analysesection.scss'
import SankeyDiagram from '../../molecule/SankeyDiagram/SankeyDiagram';
import StockChart from '../StockChart/StockChart';
import NestedTable from '../NestedTable/NestedTable';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const  AnalyseSection = () =>{
    // Data for tabs and their content
    const data1 =  [
        {
          "name": "Gross Profit",
          "ttm": 17450,
          "year2024": 17450,
          "year2023": 17660,
          "year2022": 20853,
          "year2021": 13606,
          "year2020": 6630,
          "otherData": [
            {
              "name": "Total Revenue",
              "ttm": 17450,
              "year2024": 17450,
              "year2023": 17660,
              "year2022": 20853,
              "year2021": 13606,
              "year2020": 6630
            },
            {
              "name": "Cost of Revenue",
              "ttm": 17450,
              "year2024": 17450,
              "year2023": 17660,
              "year2022": 20853,
              "year2021": 13606,
              "year2020": 6630
            }
          ]
        },
        {
          "name": "Operating Income / Expenses",
          "ttm": -9690,
          "year2024": -9960,
          "year2023": -8769,
          "year2022": null,
          "year2021": 13606,
          "year2020": 6630
        },
        {
          "name": "Total Operating Profit/Loss",
          "ttm": 7760,
          "year2024": 7760,
          "year2023": 8891,
          "year2022": 13832,
          "year2021": 6496,
          "year2020": 1994
        },
        {
          "name": "Non-Operating Income/Expense, Total",
          "ttm": 1230,
          "year2024": 1230,
          "year2023": 1082,
          "year2022": -113,
          "year2021": -153,
          "year2020": -840
        },
        {
          "name": "Pretax Income",
          "ttm": 8990,
          "year2024": 8990,
          "year2023": 9973,
          "year2022": 13719,
          "year2021": 6343,
          "year2020": 1154,
          "otherData": [
            {
              "name": "Total Revenue",
              "ttm": 17450,
              "year2024": 17450,
              "year2023": 17660,
              "year2022": 20853,
              "year2021": 13606,
              "year2020": 6630
            },
            {
              "name": "Cost of Revenue",
              "ttm": 17450,
              "year2024": 17450,
              "year2023": 17660,
              "year2022": 20853,
              "year2021": 13606,
              "year2020": 6630
            },
            {
                "name": "Total Revenue",
                "ttm": 17450,
                "year2024": 17450,
                "year2023": 17660,
                "year2022": 20853,
                "year2021": 13606,
                "year2020": 6630
              },
              {
                "name": "Cost of Revenue",
                "ttm": 17450,
                "year2024": 17450,
                "year2023": 17660,
                "year2022": 20853,
                "year2021": 13606,
                "year2020": 6630
              }
          ]
        },
        {
          "name": "Provision for Income Tax",
          "ttm": -1837,
          "year2024": -1837,
          "year2023": -1132,
          "year2022": -699,
          "year2021": -292,
          "year2020": -113
        },
        {
          "name": "Net Income before Extraordinary Items and Discontinued Operations",
          "ttm": 7153,
          "year2024": 7153,
          "year2023": 14974,
          "year2022": 12587,
          "year2021": 5644,
          "year2020": 862,
          "otherData": [
            {
              "name": "Total Revenue",
              "ttm": 17450,
              "year2024": 17450,
              "year2023": 17660,
              "year2022": 20853,
              "year2021": 13606,
              "year2020": 6630
            },
            {
              "name": "Cost of Revenue",
              "ttm": 17450,
              "year2024": 17450,
              "year2023": 17660,
              "year2022": 20853,
              "year2021": 13606,
              "year2020": 6630
            },
              {
                "name": "Cost of Revenue",
                "ttm": 17450,
                "year2024": 17450,
                "year2023": 17660,
                "year2022": 20853,
                "year2021": 13606,
                "year2020": 6630
              }
          ]
        },
        {
          "name": "Net Income after Extraordinary Items and Discontinued Operations",
          "ttm": 7153,
          "year2024": 7153,
          "year2023": 14974,
          "year2022": 12587,
          "year2021": 5644,
          "year2020": 862,
          "otherData": [
            {
              "name": "Total Revenue",
              "ttm": 17450,
              "year2024": 17450,
              "year2023": 17660,
              "year2022": 20853,
              "year2021": 13606,
              "year2020": 6630
            },
            {
              "name": "Cost of Revenue",
              "ttm": 17450,
              "year2024": 17450,
              "year2023": 17660,
              "year2022": 20853,
              "year2021": 13606,
              "year2020": 6630
            },
              {
                "name": "Cost of Revenue",
                "ttm": 17450,
                "year2024": 17450,
                "year2023": 17660,
                "year2022": 20853,
                "year2021": 13606,
                "year2020": 6630
              },
              {
                "name": "Total Revenue",
                "ttm": 17450,
                "year2024": 17450,
                "year2023": 17660,
                "year2022": 20853,
                "year2021": 13606,
                "year2020": 6630
              },
              {
                "name": "Cost of Revenue",
                "ttm": 17450,
                "year2024": 17450,
                "year2023": 17660,
                "year2022": 20853,
                "year2021": 13606,
                "year2020": 6630
              },
                {
                  "name": "Cost of Revenue",
                  "ttm": 17450,
                  "year2024": 17450,
                  "year2023": 17660,
                  "year2022": 20853,
                  "year2021": 13606,
                  "year2020": 6630
                }
          ]
        },
        {
          "name": "Non-Controlling/Minority Interests",
          "ttm": -230,
          "year2024": -230,
          "year2023": -4000,
          "year2022": 25000,
          "year2021": -23000,
          "year2020": -172
        },
        {
          "name": "Net Income after Non-Controlling/Minority Interests",
          "ttm": 7130,
          "year2024": 7130,
          "year2023": 14999,
          "year2022": 12583,
          "year2021": 5519,
          "year2020": 690,
          "otherData": [
            {
              "name": "Total Revenue",
              "ttm": 17450,
              "year2024": 17450,
              "year2023": 17660,
              "year2022": 20853,
              "year2021": 13606,
              "year2020": 6630
            },
            {
              "name": "Cost of Revenue",
              "ttm": 17450,
              "year2024": 17450,
              "year2023": 17660,
              "year2022": 20853,
              "year2021": 13606,
              "year2020": 6630
            },
              {
                "name": "Cost of Revenue",
                "ttm": 17450,
                "year2024": 17450,
                "year2023": 17660,
                "year2022": 20853,
                "year2021": 13606,
                "year2020": 6630
              }
          ]
        },
        {
          "name": "Net Income Available to Common Stockholders",
          "ttm": 7130,
          "year2024": 7130,
          "year2023": 14999,
          "year2022": 12583,
          "year2021": 5524,
          "year2020": 690
        },
        {
          "name": "Dilution to Earnings",
          "ttm": null,
          "year2024": null,
          "year2023": 1000000,
          "year2022": 1000000,
          "year2021": null,
          "year2020": null
        },
        {
          "name": "Diluted Net Income Available to Common Stockholders",
          "ttm": 7130,
          "year2024": 7130,
          "year2023": 14999,
          "year2022": 12584,
          "year2021": 5533,
          "year2020": 690
        }
        // {
        //   "name": "Total Revenue as Reported, Supplemental",
        //   "ttm": 97690,
        //   "year2024": 97690,
        //   "year2023": 96773,
        //   "year2022": 81462,
        //   "year2021": 53823,
        //   "year2020": 31536
        // },
        // {
        //   "name": "Reported Operating Expense",
        //   "ttm": -10374,
        //   "year2024": -10374,
        //   "year2023": -8769,
        //   "year2022": -7197,
        //   "year2021": -7083,
        //   "year2020": -4636
        // },
        // {
        //   "name": "Reported Total Operating Profit/Loss",
        //   "ttm": 7076,
        //   "year2024": 7076,
        //   "year2023": 8891,
        //   "year2022": 13832,
        //   "year2021": 6496,
        //   "year2020": 1994
        // },
        // {
        //   "name": "Reported Normalized Income",
        //   "ttm": 8419,
        //   "year2024": 8419,
        //   "year2023": 8419,
        //   "year2022": null,
        //   "year2021": null,
        //   "year2020": null
        // },
        // {
        //   "name": "Reported Effective Tax Rate",
        //   "ttm": 0.2,
        //   "year2024": 0.2,
        //   "year2023": 0.2,
        //   "year2022": 0.2,
        //   "year2021": 0.25,
        //   "year2020": 0.2
        // }
        // {
        //   "name": "Reported Normalized EBITDA",
        //   "ttm": 16645,
        //   "year2024": 16645,
        //   "year2023": 16645,
        //   "year2022": null,
        //   "year2021": null,
        //   "year2020": null
        // },
        // {
        //   "name": "Other Adjustments to Net Income Available to Common Stockholders",
        //   "ttm": 42,
        //   "year2024": 42,
        //   "year2023": null,
        //   "year2022": null,
        //   "year2021": null,
        //   "year2020": null
        // },
        // {
        //   "name": "Basic EPS",
        //   "ttm": 2.23,
        //   "year2024": 2.23,
        //   "year2023": 2.23,
        //   "year2022": 4.73,
        //   "year2021": 4.02,
        //   "year2020": 1.87
        // },
        // {
        //   "name": "Diluted EPS",
        //   "ttm": 2.04,
        //   "year2024": 2.04,
        //   "year2023": 2.04,
        //   "year2022": 4.3,
        //   "year2021": 3.62,
        //   "year2020": 1.63
        // },
        
      ]
    const data = {
        tabs: [
            { id: '1', label: 'Revenue & Expenses Breakdown', content: <SankeyDiagram />},
            { id: 'Tab 2', label: 'Financial Statement', content: <NestedTable data={data1}/> },
            { id: 'Tab 3', label: 'Fundamental Analysis', content: <StockChart /> },
        ],
        qtyOptions: ['10', '20', '30'],
        dateOptions: ['2025-02-08', '2025-02-09', '2025-02-10']
    }

    const [activeTab, setActiveTab] = useState(data.tabs[0].id); // Initial tab is the first one
    const [qty, setQty] = useState(''); // State for 'Qty' dropdown
    const [date, setDate] = useState(''); // State for 'Date' dropdown

    // Handle Tab Change
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    }

    // Handle 'Qty' change
    const handleQtyChange = (e) => {
        setQty(e.target.value);
    }

    // Handle 'Date' change
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    // Get content for the active tab
    const renderTabContent = () => {
        const activeTabData = data.tabs.find(tab => tab.id === activeTab);
        return <div>{activeTabData ? activeTabData.content : 'No content available'}</div>;
    }
    const container = useRef();
 useEffect(() => {
    // const line = SplitType.create('#h_1');
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.current,
            start: "top+=30 bottom",
            end: "bottom",
        },
    });
    tl.fromTo(
        ".heading_animate",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
        "0")
    .fromTo
        (
            ".js_analyse_tab_button",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2}, "0.3").fromTo(".js_analyse_tab_select",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2}, "0.3")

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());

}, []);
    return (
        <div className='js_analyse_main_container js_section_spacing'>
            <div className="js_main_container" ref={container}>
                <h1 className="js_section_secondary_heading heading_animate">Analyse and Expense</h1>
                <div className="js_analyse_tab_container">
                    <div className="js_analyse_tab">
                        <div className="js_analyse_tabs">
                            {data.tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`js_analyse_tab_button ${activeTab === tab.id ? 'js_analyse_tab_active' : ''}`}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="js_analyse_dropdowns">
                            <select
                                className="js_analyse_tab_select"
                                value={qty}
                                onChange={handleQtyChange}
                            >
                                <option value="">Qty</option>
                                {data.qtyOptions.map((qtyOption, index) => (
                                    <option key={index} value={qtyOption}>
                                        {qtyOption}
                                    </option>
                                ))}
                            </select>

                            <select
                                className="js_analyse_tab_select"
                                value={date}
                                onChange={handleDateChange}
                            >
                                <option value="">Date</option>
                                {data.dateOptions.map((dateOption, index) => (
                                    <option key={index} value={dateOption}>
                                        {dateOption}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="js_analyse_tab_content">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyseSection;
