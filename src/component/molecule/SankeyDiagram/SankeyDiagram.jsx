import React, { useEffect, useRef } from 'react';

const SankeyDiagram = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Make sure Highcharts and the Sankey module are available globally
    const scriptHighcharts = document.createElement('script');
    scriptHighcharts.src = "https://code.highcharts.com/highcharts.js";
    scriptHighcharts.async = true;

    const scriptSankey = document.createElement('script');
    scriptSankey.src = "https://code.highcharts.com/modules/sankey.js";
    scriptSankey.async = true;

    document.body.appendChild(scriptHighcharts);
    document.body.appendChild(scriptSankey);

    scriptSankey.onload = () => {
      // Ensure Highcharts is loaded and the chart is created after scripts load
      if (window.Highcharts) {
        window.Highcharts.chart(containerRef.current, {
          chart: {
            backgroundColor: '#020d1b', // Set the background color of the entire chart
          },
          title: {
            text: 'TESLA Q3 Sankey Diagram'
          },
          accessibility: {
            point: {
              valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
            }
          },
          series: [{
            keys: ['from', 'to', 'weight', 'color'],
            data: [
              ['Automotive', 'Revenue', 87.60],
              ['Energy', 'Revenue', 10.6],
              ['Revenue', 'Gross Profit', 17.45],
              ['Revenue', 'Cost of Sales', 80.24],
              ['Gross Profit', 'Earnings', 7.13],
              ['Gross Profit', 'Expenses', 10.32, '#FF8C00'],
              ['Expenses', 'General Admin', 5.5],
              ['Expenses', 'Research & Dev', 4.5],
              ['Expenses', 'Others', 0.12]
            ],
            type: 'sankey',
            nodeWidth: 30,
            nodePadding: 300,
            tooltip: {
              pointFormat: '<b style="color:red">Company - Branstr<b></b></br><b>Name -  Ritesh sir </br> <b>Total expensive - 500 Rupees <b>'
            },
            name: 'TESLA Sankey',
            nodes: [{
              id: 'Automotive',
              color: '#1E90FF'
            }, {
              id: 'Energy',
              color: '#1E90FF'
            }, {
              id: 'Revenue',
              color: '#FFD700'
            }, {
              id: 'Gross Profit',
              color: '#32CD32'
            }, {
              id: 'Earnings',
              color: '#32CD32'
            }, {
              id: 'Cost of Sales',
              color: '#E5B061'
            }, {
              id: 'Expenses',
              color: '#FF8C00'
            }, {
              id: 'General Admin',
              color: '#F4A300'
            }, {
              id: 'Research & Dev',
              color: '#4682B4'
            }, {
              id: "Others",
              color: '#8A2BE2'
            }]
          }]
        });
      }
    };

    return () => {
      document.body.removeChild(scriptHighcharts);
      document.body.removeChild(scriptSankey);
    };
  }, []);

  return (
    <>
    
     
      <div ref={containerRef} style={{margin: "7rem  0rem  5rem 0rem"}}></div>
    </>
  );
};

export default SankeyDiagram;
