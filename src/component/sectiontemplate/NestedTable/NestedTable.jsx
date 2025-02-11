import React, { useState } from 'react';
import './nestedtable.scss';  // Import the SCSS file
import 'font-awesome/css/font-awesome.min.css';  // Import FontAwesome icons

const NestedTables = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  //  const data =  [
  //     {
  //       "name": "Gross Profit",
  //       "ttm": 17450,
  //       "year2024": 17450,
  //       "year2023": 17660,
  //       "year2022": 20853,
  //       "year2021": 13606,
  //       "year2020": 6630,
  //       "otherData": [
  //         {
  //           "name": "Total Revenue",
  //           "ttm": 17450,
  //           "year2024": 17450,
  //           "year2023": 17660,
  //           "year2022": 20853,
  //           "year2021": 13606,
  //           "year2020": 6630
  //         },
  //         {
  //           "name": "Cost of Revenue",
  //           "ttm": 17450,
  //           "year2024": 17450,
  //           "year2023": 17660,
  //           "year2022": 20853,
  //           "year2021": 13606,
  //           "year2020": 6630
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Operating Income / Expenses",
  //       "ttm": -9690,
  //       "year2024": -9960,
  //       "year2023": -8769,
  //       "year2022": null,
  //       "year2021": 13606,
  //       "year2020": 6630
  //     },
  //     {
  //       "name": "Total Operating Profit/Loss",
  //       "ttm": 7760,
  //       "year2024": 7760,
  //       "year2023": 8891,
  //       "year2022": 13832,
  //       "year2021": 6496,
  //       "year2020": 1994
  //     },
  //     {
  //       "name": "Non-Operating Income/Expense, Total",
  //       "ttm": 1230,
  //       "year2024": 1230,
  //       "year2023": 1082,
  //       "year2022": -113,
  //       "year2021": -153,
  //       "year2020": -840
  //     },
  //     {
  //       "name": "Pretax Income",
  //       "ttm": 8990,
  //       "year2024": 8990,
  //       "year2023": 9973,
  //       "year2022": 13719,
  //       "year2021": 6343,
  //       "year2020": 1154
  //     },
  //     {
  //       "name": "Provision for Income Tax",
  //       "ttm": -1837,
  //       "year2024": -1837,
  //       "year2023": -1132,
  //       "year2022": -699,
  //       "year2021": -292,
  //       "year2020": -113
  //     },
  //     {
  //       "name": "Net Income before Extraordinary Items and Discontinued Operations",
  //       "ttm": 7153,
  //       "year2024": 7153,
  //       "year2023": 14974,
  //       "year2022": 12587,
  //       "year2021": 5644,
  //       "year2020": 862
  //     },
  //     {
  //       "name": "Net Income after Extraordinary Items and Discontinued Operations",
  //       "ttm": 7153,
  //       "year2024": 7153,
  //       "year2023": 14974,
  //       "year2022": 12587,
  //       "year2021": 5644,
  //       "year2020": 862
  //     },
  //     {
  //       "name": "Non-Controlling/Minority Interests",
  //       "ttm": -230,
  //       "year2024": -230,
  //       "year2023": -4000,
  //       "year2022": 25000,
  //       "year2021": -23000,
  //       "year2020": -172
  //     },
  //     {
  //       "name": "Net Income after Non-Controlling/Minority Interests",
  //       "ttm": 7130,
  //       "year2024": 7130,
  //       "year2023": 14999,
  //       "year2022": 12583,
  //       "year2021": 5519,
  //       "year2020": 690
  //     },
  //     {
  //       "name": "Net Income Available to Common Stockholders",
  //       "ttm": 7130,
  //       "year2024": 7130,
  //       "year2023": 14999,
  //       "year2022": 12583,
  //       "year2021": 5524,
  //       "year2020": 690
  //     },
  //     {
  //       "name": "Dilution to Earnings",
  //       "ttm": null,
  //       "year2024": null,
  //       "year2023": 1000000,
  //       "year2022": 1000000,
  //       "year2021": null,
  //       "year2020": null
  //     },
  //     {
  //       "name": "Diluted Net Income Available to Common Stockholders",
  //       "ttm": 7130,
  //       "year2024": 7130,
  //       "year2023": 14999,
  //       "year2022": 12584,
  //       "year2021": 5533,
  //       "year2020": 690
  //     }
  //     // {
  //     //   "name": "Total Revenue as Reported, Supplemental",
  //     //   "ttm": 97690,
  //     //   "year2024": 97690,
  //     //   "year2023": 96773,
  //     //   "year2022": 81462,
  //     //   "year2021": 53823,
  //     //   "year2020": 31536
  //     // },
  //     // {
  //     //   "name": "Reported Operating Expense",
  //     //   "ttm": -10374,
  //     //   "year2024": -10374,
  //     //   "year2023": -8769,
  //     //   "year2022": -7197,
  //     //   "year2021": -7083,
  //     //   "year2020": -4636
  //     // },
  //     // {
  //     //   "name": "Reported Total Operating Profit/Loss",
  //     //   "ttm": 7076,
  //     //   "year2024": 7076,
  //     //   "year2023": 8891,
  //     //   "year2022": 13832,
  //     //   "year2021": 6496,
  //     //   "year2020": 1994
  //     // },
  //     // {
  //     //   "name": "Reported Normalized Income",
  //     //   "ttm": 8419,
  //     //   "year2024": 8419,
  //     //   "year2023": 8419,
  //     //   "year2022": null,
  //     //   "year2021": null,
  //     //   "year2020": null
  //     // },
  //     // {
  //     //   "name": "Reported Effective Tax Rate",
  //     //   "ttm": 0.2,
  //     //   "year2024": 0.2,
  //     //   "year2023": 0.2,
  //     //   "year2022": 0.2,
  //     //   "year2021": 0.25,
  //     //   "year2020": 0.2
  //     // }
  //     // {
  //     //   "name": "Reported Normalized EBITDA",
  //     //   "ttm": 16645,
  //     //   "year2024": 16645,
  //     //   "year2023": 16645,
  //     //   "year2022": null,
  //     //   "year2021": null,
  //     //   "year2020": null
  //     // },
  //     // {
  //     //   "name": "Other Adjustments to Net Income Available to Common Stockholders",
  //     //   "ttm": 42,
  //     //   "year2024": 42,
  //     //   "year2023": null,
  //     //   "year2022": null,
  //     //   "year2021": null,
  //     //   "year2020": null
  //     // },
  //     // {
  //     //   "name": "Basic EPS",
  //     //   "ttm": 2.23,
  //     //   "year2024": 2.23,
  //     //   "year2023": 2.23,
  //     //   "year2022": 4.73,
  //     //   "year2021": 4.02,
  //     //   "year2020": 1.87
  //     // },
  //     // {
  //     //   "name": "Diluted EPS",
  //     //   "ttm": 2.04,
  //     //   "year2024": 2.04,
  //     //   "year2023": 2.04,
  //     //   "year2022": 4.3,
  //     //   "year2021": 3.62,
  //     //   "year2020": 1.63
  //     // },

  //   ]

  const toggleRow = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(prevRows => prevRows.filter((i) => i !== index));
    } else {
      setExpandedRows(prevRows => [...prevRows, index]);
    }
  };

  const handleIconClick = (index) => {
    toggleRow(index);
    setSelectedRow(index === selectedRow ? null : index); // Toggle the selected row
  };

  return (
    <div className="table-wrapper">

      <br />
      <table className="table table-condensed">
        <thead>
          <tr className='table_row_sapcing'>
            <td></td>
            <th>Name</th>
            <th>TTM</th>
            <th>Year 2024</th>
            <th>Year 2023</th>
            <th>Year 2022</th>
            <th>Year 2021</th>
            <th>Year 2020</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr className='table_row_sapcing'>
                <td>
                {item.otherData &&  <span
                    className={`fa fa-chevron-right fa-fw ${expandedRows.includes(index) ? 'fa-rotate-90' : ''}`}
                    onClick={() => handleIconClick(index)}
                  ></span>} 
                </td>
                <td >{item.name || "N/A"}</td>
                <td>{item.ttm || "N/A"}</td>
                <td>{item.year2024 || "N/A"}</td>
                <td>{item.year2023 || "N/A"}</td>
                <td>{item.year2022 || "N/A"}</td>
                <td>{item.year2021 || "N/A"}</td>
                <td>{item.year2020 || "N/A"}</td>
              </tr>

              {expandedRows.includes(index) && (
                <tr className="tr-detail">
                  <td></td>
                  <td colSpan="4">
                    <div className="detail-content">
                      <ul>
                        {item.otherData.map((item, idx) => (
                          <li key={idx}>
                            <div className="detail"></div>
                            <div className="detail detail-main">

                              <div>
                                <table className="table table-condensed">
                                  <thead>
                                    <tr className='table_row_sapcing'>
                                      <td></td>
                                      <th>Name</th>
                                      <th>TTM</th>
                                      <th>Year 2024</th>
                                      <th>Year 2023</th>
                                      <th>Year 2022</th>
                                      <th>Year 2021</th>
                                      <th>Year 2020</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className='table_row_sapcing'>
                                      <td>
                                        {item.otherData &&  <span
                    className={`fa fa-chevron-right fa-fw ${expandedRows.includes(index) ? 'fa-rotate-90' : ''}`}
                    onClick={() => handleIconClick(index)}
                  ></span>} 
                                      </td>
                                      <td >{item.name || "N/A"}</td>
                                      <td>{item.ttm || "N/A"}</td>
                                      <td>{item.year2024 || "N/A"}</td>
                                      <td>{item.year2023 || "N/A"}</td>
                                      <td>{item.year2022 || "N/A"}</td>
                                      <td>{item.year2021 || "N/A"}</td>
                                      <td>{item.year2020 || "N/A"}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// const data = [
// {
//  "name": "Gross Profit ",
//  "ttm" : 17450,
//  "year2024": "17450",
//  "year2023": "17660",
//  "year2022": "20853",
//  "year2021": "13606",
//  "year2020": "6,630",
//  "otherData": [
//   {
//     "name": "Total Revenue",
//  "ttm" : 17450,
//  "year2024": "17450",
//  "year2023": "17660",
//  "year2022": "20853",
//  "year2021": "13606",
//  "year2020": "6,630",
//   },{
//   "name": "Cost of Revenue",
//  "ttm" : 17450,
//  "year2024": "17450",
//  "year2023": "17660",
//  "year2022": "20853",
//  "year2021": "13606",
//  "year2020": "6,630"}
//  ]
// }, {
//   "name": "Operating Income / Expenses",
//  "ttm" : "-9,690",
//  "year2024": "-9,960",
//  "year2023": "-8.769",
//  "year2022": "",
//  "year2021": "13606",
//  "year2020": "6,630",
// }

// ]

export default NestedTables;
