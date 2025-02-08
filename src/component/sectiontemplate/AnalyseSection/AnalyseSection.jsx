import React from 'react'

const AnalyseSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Tab names and their content
    const tabs = [
      { name: 'Tab 1', content: 'Content for Tab 1' },
      { name: 'Tab 2', content: 'Content for Tab 2' },
      { name: 'Tab 3', content: 'Content for Tab 3' },
    ];
    return (
        <div className='js_analyse_container'>
            <div className='js_main_container'>
                <h1 className='js_section_secondary_heading'>Analyse and Expense</h1>
                {/* <div className='js_analyse_tab_container'>
                    <div className="analyse_tabs">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`analyse-tab-button ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    <div className="analyse-tab-content">
                        <p>{tabs[activeTab].content}</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default AnalyseSection;