import React, { useState } from 'react'
import './companybanner.scss'
import SankeyDiagram from '../../molecule/SankeyDiagram/SankeyDiagram';
import StockChart from '../StockChart/StockChart';

function CompanyBanner() {
    // Data for tabs and their content
    const data = {
        tabs: [
            { id: '1', label: 'Revenue & Expenses Breakdown', content: <SankeyDiagram />},
            { id: 'Tab 2', label: 'Financial Statement', content: 'Content for Tab 2' },
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

    return (
        <div className='js_analyse_main_container js_section_spacing'>
            <div className="js_main_container">
                <h1 className="js_section_secondary_heading">Analyse and Expense</h1>

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

export default CompanyBanner;
